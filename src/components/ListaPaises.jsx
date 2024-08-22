import React from 'react';
import CardPaises from './CardPaises';

function ListaPaises({ paises, ativaFavorito }) {
  return (
    <div>
      {paises.map((paises) => (
        <CardPaises
          key={paises.numericCode}
          paises={paises}
          ativaFavorito={ativaFavorito}
          isFavorite={false}
         
        />
      ))}
    </div>
  );
}

export default ListaPaises;

/*const CountryList = ({ countries, onToggleFavorite }) => {
  return (
    <div>
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          onToggleFavorite={onToggleFavorite}
          isFavorite={false}
        />
      ))}
    </div>
  );
};*/

//export default CountryList;
