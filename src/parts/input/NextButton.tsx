import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import { Typography } from "@mui/material";

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
      <Typography align="center">
        <Button
          variant="contained"
          style={{ marginTop: "10%", marginBottom: "20%", textAlign: "center" }}
          onChange={handleSendeMenu}
        >
          {name}
        </Button>
      </Typography>
    </Link>
  );
};

export default NextButton;
