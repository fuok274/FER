import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to the Orchid Exhibition</h1>
            </header>
            <div className='content1'>
                <p>Discover the beauty and diversity of our orchid collection.</p>
            </div>
            <div className='home-content'>
                <div className="content2">

                    <Link to="/" className="link-button">Explore our collection</Link>
                </div>
                <div className='home-img'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1fu3fQtQb1ADWUAW86CHHLAQ3KfYbH-QCg&s' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Home;