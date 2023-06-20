import { NavigateFunction } from "react-router";
import { Button } from "../../../../components/Button";
import * as S from "./style";
import {
  BsViewStacked,
  BsFillEyeFill,
  BsFileEarmarkArrowUpFill,
  BsFileEarmarkArrowDownFill,
} from "react-icons/bs";
import {
  AiOutlineFileAdd,
  AiFillCheckCircle,
  AiFillSave,
} from "react-icons/ai";
import {
  MouseEventHandler,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { CheckAnimate } from "../../../../components/CheckAnimation";
import { ModalNewField } from "../ModalNewField";
import { ModalPublish } from "../ModalPublish";
import {
  MdOutlinePublish,
  MdContentPasteGo,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";
import { api } from "../../../../api/api";
import { MessageBalloon } from "../../../../hooks/Message";
import Cookies from "js-cookie";

interface IProps {
  isCheck?: boolean;
  isLoading?: boolean;
  uuid: string;
  finished?: boolean;
  setReload: Dispatch<SetStateAction<number>>;
  onClickButtonView?: MouseEventHandler;
  navigate?: NavigateFunction;
  onClick?: MouseEventHandler;
  viewPosts: Dispatch<SetStateAction<boolean>>;
  isFavorite: boolean;
}

export const Header = ({
  navigate,
  onClick,
  isCheck,
  isLoading,
  onClickButtonView,
  uuid,
  setReload,
  finished,
  viewPosts,
  isFavorite,
}: IProps) => {
  const [check, setCheck] = useState(false);
  const [saveIconColor, setSaveIconColor] = useState<string>("#fff");
  const [openModalNewField, setOpenModalNewField] = useState<boolean>(false);
  const [openModalPublish, setOpenModalPublish] = useState<boolean>(false);
  const [qFinished, setQFinished] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const { element, handleClick } = MessageBalloon();

  const navigateToView = () => {
    if (navigate) {
      navigate("/postagens");
    }
  };

  const handleTimeCheck = () => {
    setTimeout(() => {
      setCheck(false);
    }, 4000);
  };

  const handleOpenModalNewField = () => {
    openModalNewField
      ? setOpenModalNewField(false)
      : setOpenModalNewField(true);
  };

  const handleAddFeaturedPost = async () => {
    try {
      const result = await api.post(
        `/featuredposts/`,
        {
          postId: uuid,
        },
        {
          headers: {
            authorization: `${Cookies.get("token")}`,
          },
        }
      );
      console.log(result);
      handleClick({
        message: "Favoritado com sucesso!!",
        variation: "success",
      });
      setFavorite(true);
    } catch (err) {
      console.log(err);
      handleClick({
        message: "Erro ao favoritar postagem",
        variation: "error",
      });
    }
  };

  const handleRemoveFeaturedPost = async () => {
    try {
      const result = await api.delete(`/featuredposts/${uuid}`, {
        headers: {
          authorization: `${Cookies.get("token")}`,
        },
      });
      console.log(result);
      handleClick({
        message: "Desfavoritado com sucesso!!",
        variation: "success",
      });
      setFavorite(false);
    } catch (err) {
      console.log(err);
      handleClick({
        message: "Erro ao desfavoritar postagem",
        variation: "error",
      });
    }
  };

  useEffect(() => {
    if (isCheck == false || isCheck) {
      setCheck(isCheck);
    }
    handleTimeCheck();
  }, [isCheck]);

  useEffect(() => {
    if (finished == true || finished == false) {
      setQFinished(finished);
    }
  }, [finished]);

  useEffect(() => {
    setFavorite(isFavorite);
  }, [isFavorite])

  return (
    <S.styledDiv>
      {element}
      <div className="classdiv">
        {!check ? (
          <Button
            Icon={() => <AiFillSave color={saveIconColor} />}
            width="50px"
            justifyContent="center"
            backgroundColor="transparent"
            border="1px solid #ffffff"
            borderHover="1px solid #56ff97"
            backgroundHover="#56ff97"
            boxShadowHover="0px 0px 10px 1px #56ff97"
            onMouseDown={onClick}
            isLoading={isLoading}
          />
        ) : (
          <S.styledCheckAnimation>
            <CheckAnimate width="22px" height="22px" />
          </S.styledCheckAnimation>
        )}

        <Button
          Icon={() =>
            !qFinished ? (
              <BsFileEarmarkArrowUpFill color={saveIconColor} />
            ) : (
              <BsFileEarmarkArrowDownFill color={saveIconColor} />
            )
          }
          width="50px"
          justifyContent="center"
          backgroundColor="transparent"
          border="1px solid #ffffff"
          borderHover={!qFinished ? "1px solid #56ff97" : "1px solid #ff3e48"}
          backgroundHover={!qFinished ? "#56ff97" : "#ff3e48"}
          boxShadowHover={
            !qFinished ? "0px 0px 10px 1px#56ff97" : "0px 0px 10px 1px #ff3e48"
          }
          onClick={() => setOpenModalPublish(true)}
        />
      </div>

      <div className="right classdiv">
        <Button
          Icon={() => (favorite ? <MdFavorite /> : <MdFavoriteBorder />)}
          width="50px"
          justifyContent="center"
          backgroundColor="transparent"
          border="1px solid #494949"
          backgroundHover="#494949"
          boxShadowHover="0px 0px 10px 3px #494949"
          onClick={favorite ? handleRemoveFeaturedPost : handleAddFeaturedPost}
        />
        <Button
          Icon={() => <MdContentPasteGo />}
          width="50px"
          justifyContent="center"
          backgroundColor="transparent"
          border="1px solid #494949"
          backgroundHover="#494949"
          boxShadowHover="0px 0px 10px 3px #494949"
          onClick={() => viewPosts((prevState) => !prevState)}
        />
        <Button
          Icon={() => <BsFillEyeFill />}
          width="50px"
          justifyContent="center"
          backgroundColor="transparent"
          border="1px solid #494949"
          backgroundHover="#494949"
          boxShadowHover="0px 0px 10px 3px #494949"
          onClick={onClickButtonView}
        />
        <Button
          Icon={() => <AiOutlineFileAdd />}
          width="50px"
          justifyContent="center"
          backgroundColor="transparent"
          border="1px solid #494949"
          backgroundHover="#494949"
          boxShadowHover="0px 0px 10px 3px #494949"
          onClick={handleOpenModalNewField}
        />
      </div>

      {openModalNewField && (
        <ModalNewField
          uuid={uuid}
          open={openModalNewField}
          onClose={async () => setOpenModalNewField(false)}
          setReload={setReload}
        />
      )}

      {qFinished == true || qFinished == false ? (
        <ModalPublish
          uuid={uuid}
          open={openModalPublish}
          onClose={async () => setOpenModalPublish(false)}
          finished={qFinished}
          setQFinished={setQFinished}
        />
      ) : (
        <></>
      )}
    </S.styledDiv>
  );
};
