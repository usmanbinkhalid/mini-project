import React, { useState } from "react";
import NavBar from "./NavBar";
import Core from "./Core";

function Home() {
  const [searchParam, setSearchParam] = useState();
  function handleChange(e) {
    setSearchParam(e.target.value);
  }
  return (
    <div className="home">
      <NavBar onChange={handleChange} search={searchParam} />
      <Core param={handleChange} search={searchParam} />
    </div>
  );
}

export default Home;
