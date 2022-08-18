import React from 'react';
import Cardmovie from "./Cardmovie";

function List({films,Caracter,rate}){

    return(
        <div className='container'
         style={{display:"flex",justifyContent:"space-around",width:"1000",flexWrap:"wrap"}}>
        {films
        .filter((elt)=>
        (elt.title.toUpperCase().includes(Caracter.toUpperCase())&& 
        elt.rate>=rate)
        )
        .map((elt)=>(
            <Cardmovie key={elt.id} movie={elt}/>
         ) )}  
        </div>
    );
}
export default List;