/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./searchbar.scss";
import SearchImage from "../../assets/images/icon-search.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Searchbar = () => {
  const [effectTriger, setEffectTriger] = useState(false);
  const searchBar = useRef();
  const { setUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/octocat`)
      .then((data) => data.json())
      .then((final) => setUser(final));
  }, []);

  const getDataUser = async (userName) => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (response.ok) {
        const final = await response.json();
        setUserName("");
        setUser(final);
      } else {
        handleError();
        throw new Error("User not found");
      }
    } catch (error) {
      handleError();
    }
  };

  function handleError() {
    searchBar.current.classList.add("invalid");
    setTimeout(() => {
      searchBar.current.classList.remove("invalid");
    }, 300);
  }

  return (
    <div
      ref={searchBar}
      className={`search-bar`}>
      <div className="search-icon">
        <img src={SearchImage} />
      </div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setEffectTriger(!effectTriger);
            getDataUser(userName);
          }
        }}
      />
      <button
        onClick={() => {
          setEffectTriger(!effectTriger);
          getDataUser(userName);
        }}>
        Search
      </button>
    </div>
  );
};

export default Searchbar;
