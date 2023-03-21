import Character from "@/src/Character";
import Headmeta from "@/src/Headmeta";
import React from "react";
import Style from "@/styles/sign.module.scss";

const Signup = () => {
  function createCharacter(e) {
    e.preventDefault();
  }

  return (
    <>
      <Headmeta title="Sign-up"></Headmeta>
      <main className={Style.signup_main}>
        <form onSubmit={createCharacter}>
          <Character></Character>
        </form>
      </main>
    </>
  );
};

export default Signup;
