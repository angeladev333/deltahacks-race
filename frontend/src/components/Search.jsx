import React, { useState, useRef } from "react";

function Search() {
  const searchBar = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(false);
  const [searchImage, setSearchImage] = useState(false);

  const getResult = async () => {
    let term = searchBar.current.value.trim();
    setSearchTerm(term);
    term = term.replaceAll(" ", "_"); // we need to do some data cleaning here

    fetch("/summary/" + term, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data.result);
      });

    fetch("/image/" + term, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchImage(data.result);
      });
  };

  return (
    <>
      <h1>Welp! CSS DNE on this page</h1>
      <input type="text" ref={searchBar} />
      <button type="button" onClick={getResult}>
        LEARN
      </button>
      <div>
        {searchTerm && <h1>{searchTerm}</h1>}
        <p>{searchResult}</p>
        {searchImage && <img src={searchImage} alt={searchTerm} />}
      </div>
    </>
  );
}

export default Search;