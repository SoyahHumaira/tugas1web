import React,{useState} from "react";

function App(){

  const[sisi, setsisi] = useState("") 
  const[hasil, sethasil] = useState("")

  console.log(`sisi : ${sisi}`)

  function luas(){
    sethasil(6 * sisi * sisi)
  }

  return(
    <div class = "App">
      <p>
        Masukan sisi
      </p>
      <input type = "text" value = {sisi} onChange = {e=> setsisi(+e.target.value)}></input>


      <p>
        <button onClick = {luas}>hasil</button>
      </p>

      <p>
        {hasil}
      </p>

    </div>
  );  
}
export default App