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
import { Button } from "../../components/Button";
import { AiFillDelete } from "react-icons/ai";
import { Message } from "../../components/Message";

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
  const [type, setType] = useState("");
  const [text, setText] = useState<IItemsContent[]>([]);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(false);
  const { user, VerifyToken } = useContext(AuthContext);
  const navigate = useNavigate();

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
		if(text <= 5 && text >= 0){
			await handleSize(item.id, text);
		} else {
			await handleSize(item.id, 5);
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

		if (size >= 5 || size <= 0) {
			newSize = 5;
		} 

      newArray[id] = { id: id, text: content, type, size: newSize };
      return newArray;
    });
  };

  const handleSize = (id: number, size: number) => {
	    setText((prevState) => {
			const newArray = [...prevState];

			let newSize = size;

			if (size >= 5 || size <= 0) {
				newSize = 5;
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

  const handleGetAllTextArea =  () => {
    if (post) {
       post.data.PostContent.map( (item) => {
        handleTextHeight(item.id);
        setType(item.type);

		let size = item.size

		if ( item.size >= 5 || item.size <= 0) {
			size = 5;
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

				<S.styledDivInputColor>
					<Input
						width="66px"
						height="50px"
						sizeHeight="50"
						onText={(e) => setTextColor(e.target.value)}
						value={textColor}
						margin="0"
						border="0"
						mediaCustom="width: 95%"
						type="color"
						customCode="position: absolute; top: -10px; left: 10px; z-index: 200;"
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
                          handleChange(e, item, text[item.id].size , item.type)
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
							backgroundHover="#ff7b7b"/>

						{item.type != "image" ? (
						<Input 
							label="Size"
							width="50px"
							height="50px"
							type="number"
							sizeHeight="50"
							onText={(e) => handleChangeSize(item, parseFloat(e.target.value))}
							padding="0"
							value={text[item.id].size}
							labelActive={true}
							textAlign="center"
							fontSize="1.1em"
							max={5}
							/>
							) : <></>}
					 </S.styledDivButton>
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
                {text.map((item) => (item ? <p>{item.text}</p> : <></>))}
              </S.styledDivOverflow>
            )}
          </S.styledDivContent>
        ) : (
          <h1>Error.</h1>
        )}
      </S.styledDiv>
    </Container>
  ) : (
    <h1>Error.</h1>
  );
};
