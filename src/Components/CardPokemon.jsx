export default function CardPokemon({pokemonInfo, spriteTr}){
    return(
    <div className='info-pokemon-container'>
        <div className='info-pokemon-section-top'>
            <div className='title-section-pokemon'>
                <p>INFO. POKEMON</p>
            </div>
        </div>
            <div className='info-pokemon-section-mid'>
                <div className='info-general-pokemon'>
                    <div className='card-pokemon'>
                        <div className='pokemon-number'>
                            <p>N° {pokemonInfo.order}</p>
                        </div>
                        <div className='pokemon-sprite'>
                            <img 
                                src={spriteTr}
                                alt=''
                            >                                
                            </img>
                        </div>
                        <div className='name-pokemon'>
                            <span>{pokemonInfo.name.toUpperCase()}</span>
                            <span>/CARDEVOIR</span>
                        </div>
                    </div>
                </div>
                <div className='info-stats-pokemon'>
                    <h5>PERFIL</h5>
                    <div className='perfil-pokemon'>
                        <div className='title-perfil'>
                            <p>TYPE: {pokemonInfo.types.map(t =>{
                                return `${t.type.name},`.toUpperCase() 
                            })}</p>
                        </div>
                        <div className='type-pokemon'>
                            <p>WEIGHT: {pokemonInfo.weight}</p>
                            <p>HEIGHT: {pokemonInfo.height}</p>
                        </div>
                    </div>
                    <h5>HABILIDAD</h5>
                    <div className='hability-pokemon'>
                        <div className='title-hability'>
                            <p>SKILLS: {pokemonInfo.abilities.length}</p>
                        </div>
                        <div className='description-hability'>
                            {pokemonInfo.abilities.map(a =>{
                                return <p key={a.ability.name}>{a.ability.name.toUpperCase()+","}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}