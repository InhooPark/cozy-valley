import Character from "@/src/Character";
import Headmeta from "@/src/Headmeta";
import React, { useContext } from "react";
import Style from "@/styles/sign.module.scss";
import { CharacteContext } from "@/contexts/Characterstatus";
import SignNav from "@/src/SignNav";

const Signup = () => {
  const { charshoes, charbottom, charbody, charhair, charhaircolor, chartop } = useContext(CharacteContext);

  function createCharacter(e) {
    e.preventDefault();
    console.log(e.target.id.value, e.target.password.value);
    console.log(charbody, charhair, charhaircolor, chartop, charbottom, charshoes);
  }

  return (
    <>
      <SignNav></SignNav>
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
