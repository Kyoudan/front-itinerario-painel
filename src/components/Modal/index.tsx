import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";

interface IProps {
  children?: JSX.Element;
  open?: boolean;
  onClose?: () => void;
}

export const ModalComponent = ({ children, open, onClose }: IProps) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  };

  return (
    <Modal open={open ? open : false} onClose={onClose}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};
