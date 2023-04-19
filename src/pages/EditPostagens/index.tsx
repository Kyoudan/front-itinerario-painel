import { useState, useEffect, ChangeEvent, useContext } from "react";
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

interface IItemsContent {
  id: number;
  text: string;
}

export const EditPostagens = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<IPosts>();
  const [textTitle, setTextTitle] = useState("");
  const [textDescription, setTextDescription] = useState("");
  const [textColor, setTextColor] = useState("");
  const [text, setText] = useState<IItemsContent[]>([]);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(true);
  const { user, VerifyToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleView = () => {
	view == false ? setView(true) : setView(false)
  }

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    item: IPostContent
  ) => {
    handleTextArea(item.id, e.target.value);
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
      }
    } catch {}
  };

  const handleTextArea = (id: number, content: string) => {
    setText((prevState) => {
      const newArray = [...prevState];
      newArray[id] = { id: id, text: content };
      return newArray;
    });
  };

  const handleGetAllTextArea = () => {
    if (post) {
      post.data.PostContent.map((item) => {
        handleTextHeight(item.id);
        setText((prevState) => {
          const newArray = [...prevState];
          newArray[item.id] = { id: item.id, text: item.content };
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

  useEffect(() => {
    VerifyToken();
    handleGetPosts();
  }, []);

  useEffect(() => {
    handleGetAllTextArea();
  }, [post]);
  return user ? (
    <Container>
      <S.styledDiv>
        <Header
          navigate={useNavigate()}
          isCheck={check}
          isLoading={loading}
          onClick={handleUpdatePostContent}
		  onClickButtonView={handleView}
        />
        {post ? (
          <S.styledDivContent>
            {!view ? (
              <S.styledDivOverflow>
                <Input
                  width="90%"
                  label="Titulo"
                  height="50px"
                  sizeHeight="50"
                  margin="0"
                  onText={(e) => setTextTitle(e.target.value)}
                  value={textTitle}
                  mediaCustom="width: 95%"
                />
                <Input
                  width="90%"
                  label="Descrição"
                  height="50px"
                  sizeHeight="50"
                  onText={(e) => setTextDescription(e.target.value)}
                  value={textDescription}
                  margin="0"
                  mediaCustom="width: 95%"
                />

                <Input
                  width="90%"
                  label="Cor - Hexadecimal"
                  height="50px"
                  sizeHeight="50"
                  onText={(e) => setTextColor(e.target.value)}
                  value={textColor}
                  margin="0"
                  mediaCustom="width: 95%"
                />

                {post.data.PostContent.map((item) =>
                  text[item.id] ? (
                    <S.styledDivRenderContent
                      label={item.PostContentType.name}
                      key={item.id}
                    >
                      <S.styledTextArea
                        id={`textarea${item.id}`}
                        key={item.id}
                        type={item.PostContentType.name}
                        onChange={(e) => handleChange(e, item)}
                        value={text[item.id].text}
                      />
                    </S.styledDivRenderContent>
                  ) : (
                    <p>Carregando</p>
                  )
                )}
              </S.styledDivOverflow>
            ) : (
              <S.styledDivOverflow>
				<h1>{textTitle}</h1>
				<p>{textDescription}</p>
				{text.map((item) => (
					item ? <p>{item.text}</p> : <></>
				))}
			  </S.styledDivOverflow>
            )}
          </S.styledDivContent>
        ) : (
          <h1>Oi</h1>
        )}
      </S.styledDiv>
    </Container>
  ) : (
    navigate("/login")
  );
};
