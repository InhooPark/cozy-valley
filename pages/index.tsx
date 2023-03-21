import Headmeta from "@/src/Headmeta";
import Style from "@/styles/index.module.scss";
import { useRouter } from "next/router";
import { useContext } from "react";
import { PageContext } from "@/contexts/PageStatus";

export default function Home() {
  const { setSignNav } = useContext(PageContext);
  const router = useRouter();

  const tosignin = () => {
    setSignNav("in");
    router.push("/signin");
  };
  const tosignup = () => {
    setSignNav("up");
    router.push("/signup");
  };

  return (
    <>
      <Headmeta title="Index"></Headmeta>
      <main className={Style.index_main}>
        <div className={Style.index_btn_wrap}>
          <button type="button" onClick={tosignin}></button>
          <button type="button" onClick={tosignup}></button>
        </div>
      </main>
    </>
  );
}
