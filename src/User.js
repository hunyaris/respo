import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import "./Login/Login.css";
import { FaBeer, FaSearch } from "react-icons/fa";

function Data() {
  const [Ahora, setAhora] = useState([]);
  const [nameUser, setnameUser] = useState();
  /* useEffect(() => {
    axios
      .get("https://api.twitch.tv/helix/search/categories", {
        params: {
          query: "for",
        },
        headers: {
          "Authorization": "Bearer xkeg2dgn91f3yb1anz65tcfytyjuje",
          "Client-Id": "gp762nuuoqcoxypju8c569th9wz7q5",
        },
      })
      .then((res) => {
        const mar = res;
        setAhora(mar.data);

        // console.log(mar);
      });
  }, []);
  */

  const [game, setGame] = useState([]);
  useEffect(() => {
    axios
      .get(" https://api.twitch.tv/helix/videos", {
        headers: {
          Authorization: "Bearer xkeg2dgn91f3yb1anz65tcfytyjuje",
          "Client-Id": "gp762nuuoqcoxypju8c569th9wz7q5",
        },
      })
      .then((res) => {
        const mar = res;
        setAhora(mar.data);

        // console.log(mar);
      });
  }, []);

  console.log(Ahora);

  function onClickFindUser(nameUser) {
    axios
      .get("https://api.twitch.tv/helix/streams", {
        params: {
          user_login: nameUser,
        },
        headers: {
          Authorization: "Bearer xkeg2dgn91f3yb1anz65tcfytyjuje",
          "Client-Id": "gp762nuuoqcoxypju8c569th9wz7q5",
        },
      })
      .then((ga) => {
        const gam = ga;
        setGame(gam.data);

    
      });
  }
  console.log(game);
  const result = Object.values(game);

  console.log(result);

  function handleChangesearch(event) {
    let em = event.target.value;
    setnameUser(em);

    console.log(em);
  }

 

  return (
    <>
      <div className="Search">
        <ol>
          <h1>Search Games </h1>
          <li>
            <input
              className="inputGames"
              placeholder="Example paulinholokobr"
              onChange={handleChangesearch}
            />
            <button
              className="button-dark"
              onClick={() => onClickFindUser(nameUser)}
            >
              Buscar
              <FaSearch />
            </button>
          </li>
          <li></li>
        </ol>
      </div>

      <div align="center" onClick={() => onClickSearchGame()}>
        <h1>Get game that user streamed </h1>

        <table class="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Login</th>
              <th>Game Name</th>
            </tr>
          </thead>
          <tbody>
            {result[0]?.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.user_login}</td>
                <td>{item.game_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Data;
