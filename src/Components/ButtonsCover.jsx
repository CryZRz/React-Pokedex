export const ButtonsCover = () => {

    function ListBottons() {
        return(
            <div className="list-bottons-cover">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        )
    }

    return(
        <div className="buttons-cover-container">
            <ListBottons/>
            <ListBottons/>
        </div>
    )
}