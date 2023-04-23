import { Button } from "../Button";
import { Card } from "../Card";
import { Input } from "../Input";
import { BsSearch } from "react-icons/bs";
import { IProps } from "./types";

export const SearchBar = ({ onClick, text, widthCard, loading }: IProps) => {
  return (
    <Card
      flexDirection="row"
      padding="10px 30px 10px 10px"
      borderRadius="10px"
      width={widthCard}
    >
      <Button
        Icon={() => <BsSearch />}
        width="50px"
        borderRadius="500px"
        justifyContent="center"
        border="none"
        backgroundColor="#ff3939"
        color="#fff"
        margin="0px 10px 0px 0px"
        onClick={onClick}
        isLoading={loading}
      />
      <Input
        margin="0"
        width="400px"
        borderRadius="10px"
        border="1px solid #1c1c1c"
        label="Procurar"
        height="50px"
        sizeHeight="50"
        onText={text}
        mediaCustom="width: 250px"
      />
    </Card>
  );
};
