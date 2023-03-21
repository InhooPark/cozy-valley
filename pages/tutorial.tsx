import React from "react";
import Style from "@/styles/town.module.scss";
import Headmeta from "@/src/Headmeta";

const Tutorial = () => {
  return (
    <>
      <Headmeta title="Tutorial"></Headmeta>
      <main className={Style.tutorial_mail}></main>
    </>
  );
};

export default Tutorial;
