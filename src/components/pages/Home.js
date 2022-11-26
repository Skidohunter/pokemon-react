import React from 'react';
import Footer from '../childrens/Footer';
import Header from '../childrens/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <main>
                <h1>Mon site sur les pokémons =D</h1>
                <section>
                    <h2>Qui sommes nous?</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo deserunt natus, eligendi iure voluptate id, praesentium pariatur et doloremque sed nulla, ex beatae fugit unde cumque. Reiciendis ut explicabo praesentium!</p>
                </section>
                <section>
                    <h2>News Letters</h2>
                    <form action="">
                        <input type="email" placeholder='Votre email' />
                        <input type="submit" value="Envoyer" />
                    </form>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;