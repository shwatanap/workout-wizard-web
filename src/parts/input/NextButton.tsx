import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";

interface Props {
  path: string;
  name: string;
  handleCreateMenu: (e: any) => void;
  handleSendeMenu: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const NextButton: React.FC<Props> = ({ path, name, handleCreateMenu, handleSendeMenu }) => {
  return (
    // TODO ボタンが無い部分を推しても反応する
    <Link to={`${path}`} onClick={handleCreateMenu}>
      <Button
        variant="contained"
        style={{ marginTop: "10%", textAlign: "center" }}
        onChange={handleSendeMenu}
      >
        {name}
      </Button>
    </Link>
  );
};

export default NextButton;
