import React from "react";
import Headmeta from "@/src/Headmeta";
import Style from "@/styles/town.module.scss";

const Mytown = () => {
  return (
    <>
      <Headmeta title="My-Town"></Headmeta>
      <main className={Style.town_main}></main>
    </>
  );
};

export default Mytown;
