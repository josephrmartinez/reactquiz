export default function StartScreen(props) {
    return (
        <div className="start-screen">
            <span className="start-screen-logo">Quizzicle</span>
            <button className="start-button" onClick={props.startGame}>start game</button>
        </div>
    )
}