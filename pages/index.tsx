import Headmeta from "@/src/Headmeta";
import { useRouter } from "next/router";
import Style from "@/styles/index.module.scss";

export default function Home() {
  const router = useRouter();

  const tosignin = () => {
    router.push("/signin");
  };
  const tosignup = () => {
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
