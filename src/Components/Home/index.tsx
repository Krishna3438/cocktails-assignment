import React, { useState } from 'react';
import './styles.css'

function Home() {
    const [cocktails, setCocktails] = useState(['Mojito', 'Margarita', 'Gimlet', 'Gunner']);
    const navigateToCocktail = (cocktail: string) => {
        localStorage.setItem('cocktail', cocktail)
        window.location.href = '/cocktail'
    }

    return (
        <div className='cards-div'>
            {
                cocktails.map((cocktail) => (
                    <div onClick={() => navigateToCocktail(cocktail)} className='cocktail-card' key={cocktail}>{cocktail}</div>
                ))
            }
        </div>
    )
}

export default Home