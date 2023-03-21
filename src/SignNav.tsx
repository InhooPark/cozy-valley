import { PageContext } from "@/contexts/PageStatus";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Style from "@/styles/sign.module.scss";

const SignNav = () => {
  const { signNav, setSignNav } = useContext(PageContext);
  const router = useRouter();

  function signToggle() {
    switch (signNav) {
      case "in":
        setSignNav("up");
        router.push("/signup");
        break;
      case "up":
        setSignNav("in");
        router.push("/signin");
        break;
      default:
        return;
    }
  }

  return (
    <>
      <header className={Style.sign_nav}>
        <nav>
          <button onClick={signToggle}>{signNav === "in" ? "회원가입" : "로그인"}</button>
        </nav>
      </header>
    </>
  );
};

export default SignNav;
