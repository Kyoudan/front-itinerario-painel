import { ModalComponent } from "../../../../components/Modal";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import * as B from "../../../../components/Button";
import { api } from "../../../../api/api";

interface IProps {
  open: boolean;
  uuid: string;
  setReload: Dispatch<SetStateAction<number>>;
  onClose: () => {};
}

export const ModalNewField = ({ open, onClose, uuid, setReload }: IProps) => {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [content, setContent] = useState<string>("");
  const [type, setType] = useState<string>("text");
  const [size, setSize] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(content, type, size);
    if (content && type && type == "text" && size && size > 0 && size <= 3) {
      setDisableButton(false);
    } else if (content && type && type == "image" && !size) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [content, type, size]);

  const handleAddNewField = async () => {
    try {
      setLoading(true);
      let qSize = null;

      if (type == "text") {
        qSize = size;
      }

      await api.post("/postcontent", {
        content,
        type,
        size: qSize,
        postId: uuid,
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
    <>
      <ModalComponent open={open} onClose={onClose}>
        <>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Tipo"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={"text"}>Texto</MenuItem>
              <MenuItem value={"image"}>Imagem</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Conteudo"
            variant="outlined"
            style={{ width: "100%" }}
            sx={{ color: "primary.main" }}
            multiline
            onChange={(e) => setContent(e.target.value)}
          />
          {type == "text" && (
            <TextField
              id="outlined-basic"
              label="Tamanho da fonte"
              type="number"
              variant="outlined"
              style={{ width: "100%" }}
              sx={{ color: "primary.main" }}
              onChange={(e) => setSize(parseFloat(e.target.value))}
              inputProps={{
                min: 1,
                max: 3,
              }}
            />
          )}
          {!loading ? (
            <Button
              variant="outlined"
              style={{ width: "100%" }}
              disabled={disableButton}
              onClick={handleAddNewField}
            >
              Adicionar
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
    </>
  );
};
