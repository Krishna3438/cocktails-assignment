import React, { useEffect, useState } from 'react';
import './styles.css';

function Cocktail() {
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${localStorage.getItem('cocktail')}`)
            .then((res) => res.json())
            .then((details) => {
                setLoading(false)
                setDetails(details.drinks)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const navigateToIngredients = (detail: any) => {
        localStorage.setItem('cocktailDetails',JSON.stringify(detail))
        window.location.href = '/ingredients'
    }

    return (
        <div className='cocktail-details-div'>
            {
                loading ?
                    <div className='no-details'>Loading...</div>
                    :
                    details && details.length != 0 ?
                        <div>
                            <div className='title'>Click on the Cocktail to see its ingredients</div>
                            {
                                details.map((detail: any) => (
                                    <div onClick={() => navigateToIngredients(detail)} key={detail.idDrink} className='details-card'>
                                        <img className='img-card' src={detail.strDrinkThumb} />
                                        <div className='cocktail-details'>{detail.strAlcoholic}</div>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div className='no-details'>No Drinks available for the selected drink</div>
            }
        </div>
    )
}

export default Cocktail