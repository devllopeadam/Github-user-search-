/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { UserContext } from "./context/UserContext";
import Header from "./components/Header/Header";
import Searchbar from "./components/SearchBar/SearchBar";
import UserInfo from "./components/UserInfo/UseInfo";

function App() {
  const [user, setUser] = useState("Adam");
  const app = useRef();

  useEffect(() => {
    window.onload = () => app.current.classList.add("animation");
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div
        className="app"
        ref={app}>
        <Header />
        <Searchbar />
        <UserInfo />
      </div>
    </UserContext.Provider>
  );
}

export default App;
