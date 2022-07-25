const QueenDetails = ({selectedQueen, episodes}) => {

    const episodesPerQueen = episodes.map((episode) => {
        return (
            <li key={episode.id}>{episode.title}</li>
        )
    })

    return ( 
        <article>
        <img src={selectedQueen.image_url} />
        <h1>{selectedQueen.name}</h1>
        <h3>Famous for saying:</h3>
        <p id="quote">{selectedQueen.quote}</p>
        <h3>Appeared in episodes:</h3>
        <ul>
        {episodesPerQueen}
        </ul>
        </article>
     );
}
 
export default QueenDetails;


