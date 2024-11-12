"use client"
import Main from "@/src/pages/Main";
import Header from "@/src/components/Header";
import { useEffect, useState } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("darkMode");
      if (savedTheme !== null) {
        setDarkMode(JSON.parse(savedTheme));
      }
    }
  }, []);
  return (
    <>
      <div>
        <div className="max-w-screen-xl mx-auto ">
          <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Main darkMode={darkMode}/>
        </div>
      </div>
    </>
  );
}
export default Home
