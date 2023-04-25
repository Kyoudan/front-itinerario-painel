import { api } from "../../../../api/api";
import { ModalComponent } from "../../../../components/Modal";
import { Button } from "@mui/material";
import * as B from "../../../../components/Button";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Message } from "../../../../components/Message";
import Cookies from "js-cookie";

interface IProps {
  uuid?: string;
  open: boolean;
  finished: boolean;
  onClose: () => {};
  setQFinished: Dispatch<SetStateAction<boolean>>
}

export const ModalPublish = ({ uuid, onClose, open, finished, setQFinished }: IProps) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const handleDeleteField = async () => {
    try {
      setLoading(true);
      await api.post(
        `/publish/${uuid}`,
        {
          finished: !finished,
        },
        {
          headers: {
            Authorization: `${Cookies.get("token")}`,
          },
        }
      );
      setLoading(false);
      setQFinished(!finished);
      onClose();
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  }, []);

  return (
    <ModalComponent open={open} onClose={onClose}>
      <>
        <Message
          message={!finished ? "Deseja publicar?" : "Deseja privar?"}
          fontFamily="Montserrat"
          fontSize="1em"
        />
        {!loading ? (
          <Button
            variant="outlined"
            style={{ width: "100%" }}
            disabled={disabled}
            onClick={handleDeleteField}
          >
            {!finished ? "Publicar" : "Privar"}
          </Button>
        ) : (
          <B.Button
            isLoading={true}
            colorLoading="#000"
            justifyContent="Center"
            width="100%"
            border="0"
            backgroundColor="#fff"
          />
        )}
      </>
    </ModalComponent>
  );
};
