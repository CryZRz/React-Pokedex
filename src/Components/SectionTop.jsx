export const SectionTop  = ({openPokedex, coverPokedex}) => {

    function handlePokedex(){
        openPokedex(!coverPokedex)
    }

    return(
        <div className="section-top">
            <div className="section-right">
                <div className="button-section-right">
                    <button className="button-top-section-right" onClick={handlePokedex}></button>
                </div>
                <div className="buttons-section-left">
                    <div className="button-one"></div>
                    <div className="button-two"></div>
                    <div className="button-three"></div>
                </div>
            </div>
            <div className="section-left"></div>
        </div>
    )
}