const WinningQueens = ({queens}) => {
    
    const winners = queens.filter((queen) => queen.winner === true)

    const listOfWinners = winners.map((winner) => {
        return ( 
            <li id="winnerListLi">
                <img id="winningImage" src={winner.image_url} alt="" />
                <p>{winner.name}</p>
            </li>
        )
    })
    console.log(winners);
    
    return ( 
        <section id="winnerSection">
        <h3>Winners</h3>
        <ul id="winnersList">
         {listOfWinners}
        </ul>
        </section>
     );
}
 
export default WinningQueens;