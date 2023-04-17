import React, { useState, useEffect } from "react";

import axios from "axios";
import { error } from "console";

const OutputTemplate = () => {
  useEffect(() => {
    axios
      .post("", {})
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  });

  return <div>OutputTemplate</div>;
};

export default OutputTemplate;
