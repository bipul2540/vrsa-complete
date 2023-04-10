import axios from "axios";
import React, { useEffect, useState } from "react";
import { predicateSingleColumn } from "./Tenser";

const RemoveUser = () => {
  const [data, setData] = useState([]);

  const handleGetPyFIle = async () => {
    const data = await predicateSingleColumn();
    console.log(data);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <p onClick={handleGetPyFIle}>Click to get Data</p>
      {data}
    </div>
  );
};

export default RemoveUser;
