
function InfoPokemonGreat({infoTop, infoBottom, style}) { 
    return( 
        <div className={style}>
            <div><h3>{infoTop}</h3></div>
            <div><h3>{infoBottom}</h3></div>
        </div>
    )
}

export const CardMoreInfoPokemon = ({pokemonInfo, setShowMoreInfo, showMoreInfo}) => {

    function changeViewMoreInfo() {
        setShowMoreInfo(!showMoreInfo)
    }

    return(
        <div onClick={changeViewMoreInfo} className="card-more-info-container">
            <div className="card-more-info">
                <div className="card-more-info-sections">
                    <div className="more-info-section-left">
                        <div className="sprite-great-container">
                            <div className="title-sprite-great">
                                <div className="number-pokemon-sprite-great">
                                    <img src={pokemonInfo.sprites.front_default} alt=""></img>
                                    <p>N°{pokemonInfo.order}</p>
                                </div>
                                <div className="name-pokemon-sprite-great">
                                    <span>{(pokemonInfo.name).toUpperCase()}</span>
                                </div>
                            </div>
                            <div className="sprite-great-image-container">
                                <div className="sprite-great-image">
                                    <img src={pokemonInfo.sprites.other.home.front_default} alt=""></img>
                                </div>
                            </div>
                            <div className="general-info-pokemon-great">
                                <div className="section-info-height-great">
                                    <div><span>Height:</span></div>
                                    <div><span>{pokemonInfo.height}</span></div>
                                </div>
                                <div className="section-info-weight-great">
                                    <div><span>weight:</span></div>
                                    <div><span>{pokemonInfo.weight}</span></div>
                                </div>
                                <div className="section-info-bexperience-great">
                                    <div><span>B.Exp:</span></div>
                                    <div><span>{pokemonInfo.base_experience}</span></div>
                                </div>
                                <div className="section-info-id-great">
                                    <div><span>Id:</span></div>
                                    <div><span>{pokemonInfo.id}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-info-section-right">
                        <div className="table-info-pokemon-great">
                                <InfoPokemonGreat
                                    infoTop={`TYPES: (${pokemonInfo.types.length})`}
                                    infoBottom={pokemonInfo.types.map(t => {
                                        return (`${t.type.name}, `).toUpperCase()
                                    })}
                                    style={"info-sections-pokemon-great-continue"}
                                />
                                <InfoPokemonGreat 
                                    infoTop={`ABILITIES: (${pokemonInfo.abilities.length})`} 
                                    infoBottom={pokemonInfo.abilities.map(a => {
                                        return (`${a.ability.name}, `).toUpperCase()
                                    })}
                                    style={"info-sections-pokemon-great-cascade"}
                                />
                                <InfoPokemonGreat 
                                    infoTop={`BASE STATS: (${pokemonInfo.stats.length})`} 
                                    infoBottom={pokemonInfo.stats.map(s => {
                                        return `${(s.stat.name).toUpperCase()}: ${s.base_stat}, `
                                    })}
                                    style={"info-sections-pokemon-great-cascade"}
                                />
                                <InfoPokemonGreat 
                                    infoTop={`GAMES: (${pokemonInfo.game_indices.length})`} 
                                    infoBottom={pokemonInfo.game_indices.map(v => {
                                        return (`${v.version.name}, `).toUpperCase()
                                    })}
                                    style={"info-sections-pokemon-great-cascade-large"}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 