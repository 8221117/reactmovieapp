import React, { Fragment, useState } from"react";

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';

function Counter(){
 

  const [like,setlike] = useState(0);
  const [dislike,setdislike] = useState(0);


return(

<div className="counter-container">

{/* <button onClick={()=>setlike(like+1)} className="bt-sz-lg">
👍{like}
</button>  */}

{/* <IconButton onClick={()=>setlike(like+1)} className="bt-sz-lg" aria-label="Like movie button" color="primary">
👍{like}
</IconButton> */}

{/* <IconButton onClick={()=>setlike(like+1)} className="bt-sz-lg" aria-label="Like movie button" color="primary">
<Badge badgeContent={like} color="primary">
👍
</Badge>
</IconButton> */}

<IconButton onClick={()=>setlike(like+1)} className="bt-sz-lg" aria-label="Like movie button" color="primary">
<Badge badgeContent={like} color="primary">
< ThumbUpOffAltRoundedIcon></ThumbUpOffAltRoundedIcon>
</Badge>
</IconButton>



{/* <button onClick={()=>setdislike(dislike+1)} className="bt-sz-lg">
👎{dislike}
</button>   */}

{/* <IconButton onClick={()=>setdislike(dislike+1)} className="bt-sz-lg" aria-label="Like movie button" color="error">
👎{dislike}
</IconButton> */}


{/* <IconButton onClick={()=>setdislike(dislike+1)} className="bt-sz-lg" aria-label="Like movie button" color="error">
<Badge badgeContent={dislike} color="error" >
👎
</Badge>
</IconButton> */}

<IconButton onClick={()=>setdislike(dislike+1)} className="bt-sz-lg" aria-label="Like movie button" color="error">
<Badge badgeContent={dislike} color="error" >
<ThumbDownAltRoundedIcon></ThumbDownAltRoundedIcon>
</Badge>
</IconButton>

</div>


)
}

export default Counter