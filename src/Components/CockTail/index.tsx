import React, { useEffect, useState } from 'react';
import './styles.css';

function Cocktail() {
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState([])
    const [value, setValue] = useState('');
    useEffect(() => {
        setLoading(true);
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${localStorage.getItem('cocktail')}`)
            .then((res) => res.json())
            .then((details) => {
                setLoading(false)
                setDetails(details.drinks)
                setSelectedFilter(details.drinks)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const navigateToIngredients = (detail: any) => {
        localStorage.setItem('cocktailDetails', JSON.stringify(detail))
        window.location.href = '/ingredients'
    }

    const handleChange = (event) => {
        if (event.target.value && event.target.value.length) {
            setValue(event.target.value)
            const newFilter = details.filter((detail: any) => detail.strAlcoholic === event.target.value)
            setSelectedFilter(newFilter)
        }
        else {
            setValue(event.target.value)
            setSelectedFilter(details)
        }
    }


    return (
        <div className='cocktail-details-div'>
            {
                loading ?
                    <div className='no-details'>Loading...</div>
                    :
                    <>
                        <div className='label'>
                            <label>Select Alcoholic Level</label>
                            <select className='select-dropdown' value={value} onChange={handleChange}>
                                <option value='select'>Select</option>
                                <option value='Alcoholic'>Alcoholic</option>
                                <option value='Non Alcoholic'>Non Alocoholic</option>
                            </select>
                        </div>
                        {
                            selectedFilter && selectedFilter.length != 0 ?
                                <div>
                                    <div>Click on the Cocktail to see its ingredients</div>
                                    {
                                        selectedFilter.map((detail: any) => (
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
                    </>
            }
        </div>
    )
}

export default Cocktail