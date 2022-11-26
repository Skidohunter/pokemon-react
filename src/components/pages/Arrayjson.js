import React, { useEffect, useState } from 'react';
import Footer from '../childrens/Footer';
import Header from '../childrens/Header';

const Arrayjson = () => {
    let [cars, setCars] = useState (
        [
            {marque : "peugeot",desc:"lorem pdmfsqdmfsdmklgldsgmlgmqgkmgm"},
            {marque : "renault",desc:"lorem pdmfsqdmfsdmklgldsgmlgmqgkmgm"},
            {marque : "citroen",desc:"lorem pdmfsqdmfsdmklgldsgmlgmqgkmgm"},
            {marque : "lada",desc:"lorem pdmfsqdmfsdmklgldsgmlgmqgkmgm"},
            {marque : "bugatti",desc:"lorem pdmfsqdmfsdmklgldsgmlgmqgkmgm"},
        ]);

    return (
        <div>
            <Header/>
            <main>
                <h1>ArrayJason</h1>
                <section>
                   {cars.map((car)=>{
                    return(
                    <article>
                        <h2>{car.marque}</h2>
                        <p>{car.desc}</p>
                    </article>
                    )
                   })}
                </section>
                
            </main>
            <Footer/>
        </div>

    );
};


export default Arrayjson;