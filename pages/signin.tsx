import Headmeta from "@/src/Headmeta";
import React from "react";
import Style from "@/styles/sign.module.scss";
import { useRouter } from "next/router";
import SignNav from "@/src/SignNav";
import { signIn } from "next-auth/react";

const Signin = () => {
  const router = useRouter();

  async function checkSign(e) {
    e.preventDefault();

    // const result = await signIn("credentials", {
    //   // redirect false - 오류 발생시 화면 새로고침 하지 않고 그대로 정지
    //   redirect: false,
    //   email: e.target.id.value,
    //   password: e.target.password.value,
    // });
  }
  return (
    <>
      <SignNav></SignNav>
      <Headmeta title="Sign-in"></Headmeta>
      <main className={Style.signin_main}>
        <form onSubmit={checkSign}>
          <p className={Style.signin_id_wrap}>
            <label htmlFor="id">ID :</label>
            <input type="text" name="id" placeholder="ID 입력" autoComplete="off" maxLength={12} />
          </p>
          <p className={Style.signin_password_wrap}>
            <label htmlFor="password">P.W :</label>
            <input type="password" name="password" placeholder="PW 입력" maxLength={18} />
          </p>
          <p className={Style.signin_submit}>
            <input type="submit" value={"로그인"} />
          </p>
        </form>
      </main>
    </>
  );
};

export default Signin;
