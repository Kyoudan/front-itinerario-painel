import { SyntheticEvent, useEffect, useState } from "react";
import * as S from "./style";
import { Alert, Snackbar } from "@mui/material";
import { Message } from "./types";

export const MessageBalloon = () => {
  const [open, setOpen] = useState<boolean>();
  const [message, setMessage] = useState<string>();
  const [variation, setVariation] = useState<Message["variation"]>();

  const handleClick = (style: Message) => {
    setOpen(true);
    setMessage(style.message);
    setVariation(style.variation);
  };

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return {
    handleClick,
    handleClose,
    element: (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={variation}
          sx={{ width: "100%", border: "1px solid #000" }}
        >
          {message}
        </Alert>
      </Snackbar>
    ),
  };
};
