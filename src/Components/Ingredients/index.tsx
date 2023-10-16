import React, { useEffect, useState } from 'react';
import './styles.css';

function Ingredients() {
    const [details,setDetails] = useState(JSON.parse(localStorage.getItem('cocktailDetails')))
    const [ingredients,setIngredients] = useState([])
    useEffect(() => {
        const uniqueIngredients = new Set(ingredients);
        Object.keys(details).map((data) => {
            if(data.toLowerCase().includes('ingredient') && details[data] != null && !uniqueIngredients.has(details[data])) {
                uniqueIngredients.add(details[data]);
            }
        })
        setIngredients(Array.from(uniqueIngredients))  
    },[])

    return(
        <div className='ingredients-details-div'>
            <img className='img-card' src={details.strDrinkThumb}/>
            <div> 
                <div className='title'>Ingredients used</div>
                <div className='ingredient'>{ingredients.join(" ,")}</div>
            </div>
        </div>
    )
}

export default Ingredients