import { useState } from "react";
import { useEffect } from "react";

import "./App.css";
import "./Animations.css";

import { SectionTop } from "./Components/SectionTop";
import { SectionMid } from "./Components/SectionMid";
import { SectionBottom } from "./Components/SectionBottom";
import { PokedexCover } from "./Components/PokedexCover";
import { MoreInfoPokemon } from "./Components/MoreInfoPoekmon";
import { CardMoreInfoPokemon } from "./Components/CardMoreInfo";

function App() {
  const [pokedexCover, setPokedexCover] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [loadDatesDefault, setLoadDatesDefault] = useState(false);
  const [loadDataPokemon, setLoadDataPokemon] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [spriteTarget, setSpriteTarget] = useState();

  useEffect(() => {
    async function datesDefault() {
      try {
        const request = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const response = await request.json();
        setSpriteTarget(response.sprites.front_default);
        setPokemonInfo(response);
        setLoadDatesDefault(true);
        setLoadDataPokemon(true)
      } catch (e) {
        alert("could not establish connection with the server");
      }
    }
    datesDefault();
  }, []);

  async function changePokemon(index) {
    console.log(index)
    try {
      setLoadDataPokemon(false)
      const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
      const response = await request.json();
      setPokemonInfo(response);
      setSpriteTarget(response.sprites.front_default);
      setLoadDataPokemon(true)
    } catch (e) {
      alert("No more pokemon");
    }
  }

  return (
    <div className="App">
      {showMoreInfo && (
        <div>
          <MoreInfoPokemon />
          <CardMoreInfoPokemon
            pokemonInfo={pokemonInfo}
            setShowMoreInfo={setShowMoreInfo}
            showMoreInfo={showMoreInfo}
          />
        </div>
      )}
      {loadDatesDefault && (
        <div className="bodybackground">
          <div className="pokedex-container">
            <div className="pokedex">
              <div className="pokedex-sections">
                <SectionTop
                  openPokedex={setPokedexCover}
                  coverPokedex={pokedexCover}
                />
                <div className="podex-main-container">
                  <SectionMid
                    pokemonInfo={pokemonInfo}
                    spriteTarget={spriteTarget}
                    loadDatesDefault={loadDataPokemon}
                  />
                  <SectionBottom
                    pokemonInfo={pokemonInfo}
                    changePokemon={changePokemon}
                    setShowMoreInfo={setShowMoreInfo}
                    setSpriteTarget={setSpriteTarget}
                  />
                </div>
              </div>
              <PokedexCover
                coverPokedex={pokedexCover}
                pokedexChage={changePokemon}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
