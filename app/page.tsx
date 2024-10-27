import Image from "next/image";
import Main from "@/src/pages/Main";
import Header from "@/src/components/Header";

export default function Home() {
  return (
    <>
      <div>
        <div className="max-w-screen-2xl mx-auto ">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}
