import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import "./Login/Login.css";
import { FaBeer, FaSearch } from "react-icons/fa";

function FindUser() {
  const [Ahora, setAhora] = useState([]);
  const [nameUser, setnameUser] = useState();

  const params = new URLSearchParams();
  params.append("id", "12345");
  params.append("id", "6789");
  params.append("id", "888524257");
  useEffect(() => {
    axios
      .get("https://api.twitch.tv/helix/users", {
        params,   
        
        headers: {
          Authorization: "Bearer xkeg2dgn91f3yb1anz65tcfytyjuje",
          "Client-Id": "gp762nuuoqcoxypju8c569th9wz7q5",
        },
      })
      .then((res) => {
        const mar = res;
        setAhora(mar.data);
        // sethilocomentarios(son.data.filter((coment) => coment.id_coment_padre=== props.idcomentario ))
          

        // console.log(mar);
      });
  }, []);
  console.log(Ahora);
   
 


const result = Object.values(Ahora);
// var onlyHumansES5 = result[0]?.filter(function(character){
//     return character.id == nameUser;
// })

// const result = Object.values(Ahora);
console.log("afdadsadas");
// console.log(onlyHumansES5);

const [game, setGame] = useState([]);
 const [lista, setLista] = useState([]);
 function onClickFindUser(nameUser) {
   
    // setGame(result[0]?.filter((comun)=>comun.login==nameUser));
    let lt = lista;
    
    
    // setLista(lista.push(result[0]?.login));
       {
        result[0]?.filter((comun) => comun.login == nameUser) ? (
         lt.push(nameUser),
         setLista(lt)
        ) : (
          "hola"
        );
       }
      
     
  }
console.log("ADD"); 
console.log(lista);  
// console.log(game);  
//   const result = Object.values(game);

//   console.log(result);

  function handleChangesearch(event) {
    let em = event.target.value;


    console.log(em);
  }
     
      
    

  return (
    <>
      {/* {Object.entries(result).forEach(([key, value]) => {
        console.log(value[0]).filter(id==12345);
        // console.log(value[1].id);
        <p></p>
        //alert(JSON.stringify(Ahora, null, 4));
      })} */}
      <div className="Search">
        <ol>
          <h1>User loged in twitch </h1>
          <li>
            <input
              className="inputGames"
              value={nameUser}
              placeholder="Example paulinholokobr"
              onChange={(e) => setnameUser(e.target.value)}
            />
            <button
              className="button-dark"
              onClick={() => onClickFindUser(nameUser)}
            >
              Filter
            </button>
          </li>
          <li></li>
        </ol>
      </div>

      <div align="center">
        <div className="divTable">
          <div className="tableuser">
            <table class="styled-table ">
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
                    <td>{item.id}</td>
                    <td>{item.login}</td>
                    <td>{item.display_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="tableuserADD">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>User Login</th>
                  <th>Game Name</th>
                </tr>
              </thead>
              <tbody>
                {lista.map((item, n) => (
                  <tr key={n}>
                    <td onChange={(e) => setnameUser(e.target.value)}>
                      {lista[n]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default FindUser;
