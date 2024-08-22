import React, {useState} from 'react';

import {fetchPaises} from './services/api';





import ListaPaises from './components/ListaPaises';
import Favoritos from './components/Favoritos';
import './paises.css'


const paises = () => {

  const [paises, setPaises] = useState([]);  
  const [favoritos, setFavoritos] = useState([]);

 const carregaPaises = async () => {
    try {
      const dadosPaises = await fetchPaises();
      setPaises(dadosPaises);
    } catch (error) {
      console.error("Erro de acesso api: ", error);
    }
  };

  const alternarFavorito = (paises) => {
    if (favoritos.find(fav => fav.numericCode === paises.numericCode)) {
      // Remove from favorites and add back to countries
      setFavoritos(prevFavoritos => prevFavoritos.filter(fav => fav.numericCode !== paises.numericCode));
      setPaises(prevPaises => [...prevPaises, paises].sort((a, b) => a.name.localeCompare(b.name)));
    } else {
      // Remove from countries and add to favorites
      setPaises(prevPaises => prevPaises.filter(c => c.numericCode !== paises.numericCode));
      setFavoritos(prevFavoritos => [...prevFavoritos, paises].sort((a, b) => a.name.localeCompare(b.name)));
    }
  };

  const TotalPopulacao = (list) => {
    return list.reduce((total, paises) => total + paises.population, 0);
  };

  return (
    <div className="app-container">
      <h1>LISTA DE PAISES</h1>
      <button onClick={carregaPaises}>Carregar Países</button>
      <div className="lists-container">
        <div className="list">
          <h2>Todos Paises</h2>
          <p>Total Paises: {paises.length}</p>
          <p>Total population: {TotalPopulacao(paises)}</p>
          <ListaPaises paises={paises} ativaFavorito={alternarFavorito} />
        </div>
        <div className="list">
          <h2>Favorites</h2>
          <p>Total Paises: {favoritos.length}</p>
          <p>Total population: {TotalPopulacao(favoritos)}</p>
          
          <Favoritos favoritos={favoritos} ativaFavorito={alternarFavorito} />
        </div>
      </div>
    </div>
  );
};

export default paises;
