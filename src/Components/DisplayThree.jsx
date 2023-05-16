export const DisplayThree = ({setNamePokemon, namePokemon}) => {

    function lisenChange(e){
        setNamePokemon(e.target.value.toLowerCase())
    }

    return(
        <div className="display-three-container">
            <div className="display-three">
                <input 
                    className="search-pokemon" 
                    type='text'
                    value={namePokemon} 
                    placeholder='Search a Pokemon'
                    onChange={lisenChange}
                >                    
                </input>
            </div>
        </div>
    )
}