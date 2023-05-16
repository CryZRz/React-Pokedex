import { useState } from "react"

import { DisplayThree } from "./DisplayThree"
import { ButtonsCover } from "./ButtonsCover"
import { SectionThreeCover } from "./SectionThreeCover"
import { SectionBottomCover } from "./SectionBotomCover"


export const PokedexCover = ({coverPokedex, pokedexChage}) => {

    const [namePokemon, setNamePokemon] = useState("")

    function StylesOpenPokedex(){
        if(coverPokedex){
            return {
                container:{
                    position: "inherit"
                },
                stylesLeft:{
                    width: "40%",
                    height: "100%",
                    background: "#ED1729",
                    borderRadius: "10px",
                    borderBottomRightRadius: "0px",
                    borderTopRightRadius: "45px",
                    border: "2px solid #000",
                    borderRight: "0px"
                },
                stylesRight:{
                    width: "60%",
                    height: "80%",
                    background: "#ED1729",
                    marginTop: "26%",
                    borderRadius: "10px",
                    borderBottomLeftRadius: "0px",
                    borderTopLeftRadius: "0px",
                    border: "2px solid #000",
                    borderLeft: "0px"
                }
            }
        }else{
            return{
                container:{
                    position: "absolute"
                },
                stylesRight:{
                    width: "40%",
                    height: "100%",
                    background: "#ED1729",
                    borderRadius: "10px",
                    borderBottomLeftRadius: "0px",
                    borderTopLeftRadius: "45px",
                    border: "2px solid #000",
                    borderLeft: "0px"
                },
                stylesLeft: {
                    width: "60%",
                    height: "80%",
                    background: "#ED1729",
                    marginTop: "26%",
                    borderRadius: "10px",
                    borderBottomRightRadius: "0px",
                    borderTopRightRadius: "0px",
                    border: "2px solid #000",
                    borderRight: "0px"
                }
            }
        }
    }

    

    return(
        <div 
            className='pokedex-cover-container' 
            style={StylesOpenPokedex().container}
        >
          <div className='pokedex-cover'>
            <div 
                className='pokedex-cover-section-left' 
                style={StylesOpenPokedex().stylesLeft}
            >                
            </div>
            <div 
                className='pokedex-cover-section-right' 
                style={StylesOpenPokedex().stylesRight}
            >             
            </div>
            <div className="sections-cover-pokedex-container">
                <div className="sections-cover-pokedex">
                    {
                        coverPokedex && (<div>
                            <DisplayThree  
                                setNamePokemon={setNamePokemon}
                                namePokemon={namePokemon}
                            />
                            <ButtonsCover/>
                            <SectionThreeCover/>
                            <SectionBottomCover  
                                namePokemon={namePokemon}
                                setNamePokemon={setNamePokemon}
                                pokedexChage={pokedexChage}
                            />
                        </div>)
                    }
                </div>
            </div>
          </div>
        </div>
    )
} 