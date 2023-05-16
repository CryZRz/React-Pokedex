import { useState } from "react"
import { useEffect } from "react"

export const SectionBottom = ({
    pokemonInfo, setSpriteTarget, setShowMoreInfo , changePokemon
    }) => {

    const [arrSprites, setArrSprites] = useState([])
    const [spriteSelect, setSpriteSelect] = useState(0)
    const [changeViewPokemon, setChangeViewPokemon] = useState(pokemonInfo.id)

    useEffect(()=>{
            let sprites = []
            console.log(pokemonInfo)
            for(const sprite in pokemonInfo.sprites){
            if(typeof(pokemonInfo.sprites[sprite]) === "string"){
                sprites.push(pokemonInfo.sprites[sprite])
            }
        }
        setArrSprites(sprites)
    },[pokemonInfo.sprites])



    function changeSpriteRight() {
        if(spriteSelect >= arrSprites.length-1){
            setSpriteSelect(0)
        }else{
            setSpriteSelect(oldSprite => oldSprite+1)
        }
        setSpriteTarget(arrSprites[spriteSelect])
    }


    function changeSpriteLeft(){
        if(spriteSelect <= 0){
            setSpriteSelect(arrSprites.length-1)
        }else{
            setSpriteSelect(oldSprite => oldSprite-1)
        }

        setSpriteTarget(arrSprites[spriteSelect])
    }


    function moreInfo(){
        setShowMoreInfo(true)
    }

    function changeUpPokemonView(){
        setChangeViewPokemon(oldViewPokemon => oldViewPokemon+1)
        changePokemon(changeViewPokemon) 
    }

    function changeDownPokemonView(){
        setChangeViewPokemon(oldViewPokemon => oldViewPokemon-1)
        changePokemon(changeViewPokemon)
    }

    return(
        <div className="section-bottom">
            <div className="sections-bottom">
                <div className="button-section-bottom">
                    <button onClick={moreInfo}></button>
                </div>
                <div className="section-two-buttom">
                    <div className="buttons-diplay-two-bottom">
                        <button></button>
                        <button></button>
                    </div>
                    <div className="display-two"></div>
                </div>
                <div className="section-controls">
                    <div>
                        <div className="button-up" onClick={changeUpPokemonView}></div>
                        <div className="button-down" onClick={changeDownPokemonView}></div>
                    </div>
                    <div>
                        <div className="button-left" onClick={changeSpriteLeft}></div>
                        <div className="button-right" onClick={changeSpriteRight}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}