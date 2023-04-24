import { api } from "../../../../api/api";
import { ModalComponent } from "../../../../components/Modal";
import { Button } from "@mui/material";
import * as B from "../../../../components/Button";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Message } from "../../../../components/Message";

interface IProps {
  id?: number;
  open: boolean;
  onClose: () => {};
  setReload: Dispatch<SetStateAction<number>>;
}

export const ModalDeleteField = ({ id, onClose, open, setReload }: IProps) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const handleDeleteField = async () => {
    try {
      setLoading(true);
      await api.delete(`/postcontent/${id}`);
      setLoading(false);
      setReload((prevState) => {
        return prevState + 1;
      });
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
          message="Deseja mesmo apagar essa seçaõ?"
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
            Deletar
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
