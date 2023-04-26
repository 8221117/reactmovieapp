import React from "react";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const Deletebutton =({index})=>{




return (


  <IconButton aria-label="delete" size="small">
  <DeleteIcon fontSize="inherit"  onClick={()=>console.log("deleting movie",index)} />
</IconButton>



  )

}

export default Deletebutton