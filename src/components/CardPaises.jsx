import React from 'react';
//import imag from '../assets/react.svg'

function CardPaises({ paises, ativaFavorito, isFavorito }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={paises.flag} alt={`Bandeira do(a) ${paises.name}`} width="100" />
      <h3>{paises.name}</h3>
      <p>Population: {paises.population.toLocaleString()}</p>
      <button onClick={() => ativaFavorito(paises)}>
        {isFavorito ? 'Desfavoritar' : 'Favoritar'}
      </button>
    </div>
  );
}

export default CardPaises;
