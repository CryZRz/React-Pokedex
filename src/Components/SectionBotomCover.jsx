export const SectionBottomCover = ({namePokemon, setNamePokemon, pokedexChage}) => {

    function searchPokemon(){
        if(namePokemon === ""){
            alert("you haven't written anything")
        }else{
            pokedexChage(namePokemon)
        }
    }

    function removeSearch() {
        setNamePokemon("")
    }

    return(
        <div className="section-bottom-cover-container">
            <div className="section-bottom-cover">
                <button onClick={removeSearch}>REMOVE</button>
                <button onClick={searchPokemon}>SEARCH</button>
            </div>
        </div>
    )
}