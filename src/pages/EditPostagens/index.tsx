import {
  useState,
  useEffect,
  ChangeEvent,
  useContext,
  useCallback,
} from "react";
import { useParams } from "react-router";
import { api } from "../../api/api";
import { IPostAxios, IPostContent, IPosts } from "./types";
import { Container } from "../../components/Container";
import { Header } from "./components/Header";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { Input } from "../../components/Input";
import Cookies from "js-cookie";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Button } from "../../components/Button";
import { AiFillDelete } from "react-icons/ai";
import { Message } from "../../components/Message";
import { ModalDeleteField } from "./components/ModalDeleteField";
import { Skeleton } from "@mui/material";
import { ViewPosts } from "./components/View";

interface IItemsContent {
  id: number;
  text?: string;
  size: number;
  type?: string;
}

export const EditPostagens = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<IPosts>();
  const [textTitle, setTextTitle] = useState("");
  const [textDescription, setTextDescription] = useState("");
  const [textColor, setTextColor] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const [text, setText] = useState<IItemsContent[]>([]);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(false);
  const [reload, setReload] = useState<number>(1);
  const [deleteSectionId, setDeleteSectionId] = useState<number>();
  const [openModelDeleteField, setOpenModelDeleteField] =
    useState<boolean>(false);
  const { user, VerifyToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDeleteSection = (id: number) => {
    setDeleteSectionId(id);
    setOpenModelDeleteField(true);
  };

  const handleView = () => {
    view == false ? setView(true) : setView(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    item: IPostContent,
    size: number,
    type: string
  ) => {
    handleTextArea(item.id, e.target.value, type, size);
    handleTextHeight(item.id);
  };

  const handleChangeSize = async (item: IPostContent, text: number) => {
    if (text <= 3 && text >= 0) {
      await handleSize(item.id, text);
    } else if (text == null) {
      await handleSize(item.id, 1);
    } else {
      await handleSize(item.id, 3);
    }
    handleTextHeight(item.id);
  };

  const handleTextHeight = (id: number) => {
    const textarea = document.getElementById(`textarea${id}`);
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleGetPosts = async () => {
    try {
      const result: IPostAxios = await api.get(`/post/${slug}`);
      console.log(result);
      if (result) {
        setPost(result.data);
        setTextColor(result.data.data.color);
        setTextDescription(result.data.data.description);
        setTextTitle(result.data.data.name);
        setAuthor(result.data.data.author);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleTextArea = (
    id: number,
    content: string,
    type: string,
    size: number
  ) => {
    setText((prevState) => {
      const newArray = [...prevState];

      let newSize = size;

      if (size >= 3 || size < 0) {
        newSize = 3;
      }
      if (newArray[id].type != "image" && size == null) {
        newSize = 1;
      }

      newArray[id] = { id: id, text: content, type, size: newSize };
      return newArray;
    });
  };

  const handleSize = (id: number, size: number) => {
    setText((prevState) => {
      const newArray = [...prevState];

      let newSize = size;

      if (size >= 3 || size < 0) {
        newSize = 3;
      }
      if (newArray[id].type != "image" && size == null) {
        newSize = 1;
      }

      newArray[id] = {
        id: id,
        text: newArray[id].text,
        type: newArray[id].type,
        size: newSize,
      };
      return newArray;
    });
  };

  const handleGetAllTextArea = () => {
    if (post) {
      post.data.PostContent.map((item) => {
        handleTextHeight(item.id);
        setType(item.type);

        let size = item.size;

        if (item.size >= 3 || item.size < 0) {
          size = 3;
        }
        if (item.type != "image" && size == null) {
          size = 1;
        }

        setText((prevState) => {
          const newArray = [...prevState];
          newArray[item.id] = {
            id: item.id,
            text: item.content,
            type: item.type,
            size: size,
          };
          return newArray;
        });
      });
    }
  };

  const handleUpdatePostContent = async () => {
    setLoading(true);
    try {
      if (post) {
        const result = await api.put(
          "/postAll",
          {
            title: textTitle,
            description: textDescription,
            author: author,
            color: textColor,
            id: post.data.id,
            content: text,
          },
          {
            headers: {
              Authorization: `${Cookies.get("token")}`,
            },
          }
        );
        console.log(result);
        setLoading(false);
        setCheck(true);
        setTimeout(() => {
          setCheck(false);
        }, 3000);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handleTextColor = useCallback((newColor: string) => {
    const timer = setTimeout(() => {
      setTextColor(newColor);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    VerifyToken();
    handleGetPosts();
  }, []);

  useEffect(() => {
    setText([]);
    handleGetPosts();
  }, [reload]);

  useEffect(() => {
    handleGetAllTextArea();
  }, [post]);

  return user && slug ? (
    <Container>
      <S.styledDiv>
        <Header
          navigate={useNavigate()}
          isCheck={check}
          isLoading={loading}
          onClick={handleUpdatePostContent}
          onClickButtonView={handleView}
          uuid={slug}
          setReload={setReload}
          finished={post?.data.finished}
        />
        {post ? (
          <S.styledDivContent>
            <ModalDeleteField
              open={openModelDeleteField}
              onClose={async () => setOpenModelDeleteField(false)}
              id={deleteSectionId}
              setReload={setReload}
            />
            {!view ? (
              <S.styledDivOverflow>
                <Input
                  width="97%"
                  label="Titulo"
                  height="50px"
                  sizeHeight="50"
                  margin="0"
                  onText={(e) => setTextTitle(e.target.value)}
                  value={textTitle}
                  mediaCustom="width: 95%"
                />
                <Input
                  width="97%"
                  label="Descrição"
                  height="50px"
                  sizeHeight="50"
                  onText={(e) => setTextDescription(e.target.value)}
                  value={textDescription}
                  margin="0"
                  mediaCustom="width: 95%"
                />
                <Input
                  width="97%"
                  label="Autor"
                  height="50px"
                  sizeHeight="50"
                  onText={(e) => setAuthor(e.target.value)}
                  value={author}
                  margin="0"
                  mediaCustom="width: 95%"
                />

                <S.styledDivInputColor>
                  <Message
                    message="Cor: "
                    fontFamily="Montserrat"
                    color="#ff0101"
                    fontSize="0.8em"
                    margin="0px 0px 0px 10px"
                  />
                  <Input
                    width="66px"
                    height="50px"
                    sizeHeight="50"
                    onText={(e) => handleTextColor(e.target.value)}
                    value={textColor}
                    margin="0"
                    border="0"
                    mediaCustom="width: 95%"
                    type="color"
                  />
                </S.styledDivInputColor>

                {post.data.PostContent.map((item) =>
                  text[item.id] ? (
                    <S.styledDivRenderContent label={item.type} key={item.id}>
                      <S.styledTextArea
                        id={`textarea${item.id}`}
                        key={item.id}
                        type={item.type}
                        fontSize={text[item.id].size}
                        onChange={(e) =>
                          handleChange(e, item, text[item.id].size, item.type)
                        }
                        value={text[item.id].text}
                      />
                      <S.styledDivButton>
                        <Button
                          width="50px"
                          height="50px"
                          Icon={() => <AiFillDelete />}
                          color="black"
                          justifyContent="center"
                          border="1px solid #494949"
                          backgroundHover="#ff7b7b"
                          onClick={() => handleDeleteSection(item.id)}
                        />

                        {item.type != "image" ? (
                          <Input
                            label="Size"
                            width="50px"
                            height="50px"
                            type="number"
                            sizeHeight="50"
                            onText={(e) =>
                              handleChangeSize(item, parseFloat(e.target.value))
                            }
                            padding="0"
                            value={text[item.id].size}
                            labelActive={true}
                            textAlign="center"
                            fontSize="1.1em"
                            max={3}
                          />
                        ) : (
                          <img
                            src={text[item.id].text}
                            width={50}
                            height={50}
                          ></img>
                        )}
                      </S.styledDivButton>
                    </S.styledDivRenderContent>
                  ) : (
                    <Skeleton
                      variant="rectangular"
                      width="97%"
                      height={200}
                      style={{ borderRadius: "10px" }}
                    />
                  )
                )}
              </S.styledDivOverflow>
            ) : (
              <S.styledDivOverflow>
                <ViewPosts
                  textTitle={textTitle}
                  textDescription={textDescription}
                  text={text}
                />
              </S.styledDivOverflow>
            )}
          </S.styledDivContent>
        ) : (
          <S.styledLoadingArea className="LoadingArea">
            <Button
              isLoading={true}
              width="200px"
              height="200px"
              border="0"
              justifyContent="center"
              sizeLoading={80}
              colorLoading="black"
              backgroundColor="transparent"
            />
          </S.styledLoadingArea>
        )}
      </S.styledDiv>
    </Container>
  ) : (
    <S.styledLoadingArea className="LoadingArea">
      <Button
        isLoading={true}
        width="200px"
        height="200px"
        border="0"
        justifyContent="center"
        sizeLoading={80}
        colorLoading="black"
        backgroundColor="transparent"
      />
    </S.styledLoadingArea>
  );
};
