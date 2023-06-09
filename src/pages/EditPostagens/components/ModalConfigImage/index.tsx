import { api } from "../../../../api/api";
import { ModalComponent } from "../../../../components/Modal";
import { Button, TextField } from "@mui/material";
import * as B from "../../../../components/Button";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Message } from "../../../../components/Message";

interface IProps {
  open: boolean;
  onClose: () => {};
  setReload: Dispatch<SetStateAction<number>>;
  image?: string;
  reference?: string;
  id: number;
}

export const ModalConfigImage = ({
  onClose,
  open,
  setReload,
  image,
  reference,
  id,
}: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [referenceField, setReferenceField] = useState<string | undefined>();

  useEffect(() => {
    setReferenceField(reference);
  }, [reference]);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      await api.put(`/postcontent/${id}`, {
        reference: referenceField,
      });
      setReload((prevState) => {
        return prevState + 1;
      });
      setLoading(false);
      onClose();
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <ModalComponent open={open} onClose={onClose}>
      <>
        <img
          src={image}
          alt="Imagem"
          style={{ width: "100%" }}
          width={250}
          height={250}
        />
        <TextField
          id="outlined-basic"
          label="Referencia"
          variant="outlined"
          style={{ width: "100%" }}
          sx={{ color: "primary.main" }}
          multiline
          onChange={(e) => setReferenceField(e.target.value)}
          value={referenceField}
        />
        {!loading ? (
          <Button
            variant="outlined"
            style={{ width: "100%" }}
            onClick={handleUpdate}
          >
            Atualizar
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
