import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../childrens/Header';
import Footer from '../childrens/Footer';

const Type = () => {
    const[pokemons, setPokemons] = useState([]);
    let [typeValue, setTypeValue] = useState();
    let baseUrl = "https://pokebuildapi.fr/api/v1/pokemon/type/"+typeValue;
    console.log(baseUrl);

    useEffect(()=>{
        axios.get(baseUrl).then((apiPokemons)=>setPokemons(apiPokemons.data)).catch((e)=> console.error(e));;
    }, [])
    


    
    return (
        <div>
            <div>
            <Header/>
            <main>
                <h1>Les types</h1>
                <label for="type-select">Choose a type:</label>
                        <select defaultValue={setTypeValue} onChange={(e) => setTypeValue(e.target.value) } name="types" id="types-select">
                            <option value="">--Please choose an option--</option>
                            <option value="sol">Sol</option>
                            <option value="eau">Eau</option>
                            <option value="feu">Feu</option>
                        </select>
                <section id='typeContainer'>
                    {pokemons.map((pokemon)=>
                    <div>
                        <article className='pokemonArticle'>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.image} alt={"le pokemon "+ pokemon.name}/>
                        </article>
                    </div>      
                    )}
                   
                   
                </section>
            </main>
            <Footer/>
        </div>

        </div>
    );
};

export default Type;