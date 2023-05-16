import videoBackground from '../assets/videopbackground.mp4'
import CardPokemon from './CardPokemon'
import LoaderSection from './LoaderSection'

export const SectionMid = ({pokemonInfo, spriteTarget, loadDatesDefault}) => {
    return(
        <div className="section-mid">
                <div className="buttons-principal">
                    <button className="display-button-one"></button>
                    <button className="display-button-two"></button>
                </div>
                <div className="diplay-pokedex">
                    <div className="diplay">
                        {
                            loadDatesDefault ? 
                            <CardPokemon pokemonInfo={pokemonInfo} spriteTr={spriteTarget}/> 
                            : 
                            <LoaderSection/>
                        }
                    </div>
                </div>
                <div className="buttons-bottom">
                    <button className="display-button-three"></button>
                    <div className="display-buttons-four-container">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
        </div>
    )
}