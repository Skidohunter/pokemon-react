import React from 'react';

const Pokemonarticle = ({pokemon}) => {
    return (
        <div>
             <article className='pokemonArticle'>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.image} alt={"le pokemon "+ pokemon.name}/>
            </article>
        </div>
    );
};

export default Pokemonarticle;