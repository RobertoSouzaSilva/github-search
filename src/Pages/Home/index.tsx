import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.css';

const Home = () => (
    <div className="main-home">
        <h1 className="title-home">
            Desafio do Capítulo 3, <br/> Bootcamp DevSuperior
        </h1>
        <div className="text-home">
            <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
            <p>Favor observar as instruções passadas no capítulo sobre a elaboração <br/> deste projeto.</p>
            <p>Este design foi adaptado a partir de Ant Design System for Figma, de <br/> Mateusz Wierzbicki: <span>antforfigma@gmail.com</span></p>
        </div>
        <Link to="/search"><div className="bnt-home"><Button texto="Começar"/></div></Link>
    </div>
);

export default Home;