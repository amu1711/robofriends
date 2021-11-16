import React from 'react';
import  {Fragment} from "react";
const Card = ({id,name,email}) => {
    return(
        <Fragment>
        <div className ='bg-light-green dib br3 pa3 grow bw2 shadow-5'>
        <img alt='photo' src={`https://robohash.org/${id}?200x200`}/>
<div>
        <h2>{name}</h2>
        <p>{email}</p>
</div>
        </div>
        </Fragment>
        
    );
}
 export default Card;