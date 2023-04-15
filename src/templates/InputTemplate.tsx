import React from "react";
import { Link } from "react-router-dom";

const InputTemplate = () => {
  return (
    <div>
      <Link to="/output">
        <button>トレーニング開始！</button>
      </Link>
    </div>
  );
};

export default InputTemplate;
