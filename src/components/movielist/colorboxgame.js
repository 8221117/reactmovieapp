import { useState } from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



 function TotalColorList({color}) {
  // const color = "red";
 // const [color, setColor] = useState("orange");
  const styles = {
    fontSize: "24px",
    background: color
  };
  
  const newcolorList =[...color];

  const[colorlist,setColorList] = useState(newcolorList);

  const[colorname,setName] = useState("");

  function addColor(e){


    e.preventDefault();
   
    const newObj=[colorname]

    var temparr=[...colorlist,newObj]
    setColorList(temparr);


    setName(" ");
    

   } 

   function addName(e){

   
    setName(e.target.value)

   }

  return (
    <div>
      <TextField id="standard-basic" label="color-Name" variant="standard" type="text" name="colorname" value={colorname} onChange={addName} />
      <Button onClick={addColor} variant="contained">Submit</Button>
      <br></br>
    
    colors= {colorlist.join()}
    {colorlist.map((clr)=>(
      <ColorBox color={clr}></ColorBox>
    ))}
    </div>
  )
}

function ColorBox({color}){

  const styles ={
    backgroundColor:color,
    height:"35px",
    width:"300px",
    marginTop:"10px"
  }
return(

<div style={styles}> </div>


)}



export default TotalColorList; 