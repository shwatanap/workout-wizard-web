import React from "react";
import { Link } from "react-router-dom";

interface Props {
  path: string;
  name: string;
  handleCreateMenu: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const NextButton: React.FC<Props> = ({ path, name, handleCreateMenu }) => {
  return (
    <Link to={`${path}`}>
      <button type="submit" onClick={handleCreateMenu}>
        {name}
      </button>
    </Link>
  );
};

export default NextButton;
