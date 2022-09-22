import React, { useState } from "react";
import { useEffect } from "react";
import { call } from "../services/ApiService";

const Test = () => {
  const [data, setData] = useState();
  useEffect(() => {
    call("/test", "GET", null).then((res) => {
      const msg = res.data.msg;
      setData(msg);
    });
  }, []);
  return <div>{data}</div>;
};

export default Test;
