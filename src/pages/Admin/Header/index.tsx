import { NavigateFunction } from "react-router";
import { Button } from "../../../components/Button";
import * as S from "./style";
import { Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";

interface IProps {
  navigate: NavigateFunction;
}

export const Header = ({ navigate }: IProps) => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);

  const handleClose = () => {
    setAnchor(null);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  return (
    <S.styledDiv>
      <Button
        message="Configurações"
        width="200px"
        justifyContent="center"
        backgroundColor="transparent"
        border="none"
        backgroundHover="#494949"
        boxShadowHover="0px 0px 10px 3px #494949"
        onClick={handleClick}
      />
      <Menu id="basic-menu" anchorEl={anchor} open={open} onClose={handleClose}>
        <MenuItem onClick={() => navigate("/admin")}>
          Visualizar administradores
        </MenuItem>

        <MenuItem onClick={() => navigate("/admin/create")}>
          Criar administrador
        </MenuItem>
      </Menu>
    </S.styledDiv>
  );
};
