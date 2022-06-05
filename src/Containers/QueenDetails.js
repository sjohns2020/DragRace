const QueenDetails = ({selectedQueen}) => {
    return ( 
        <article>
        <img src={selectedQueen.image_url} />
        <h2>{selectedQueen.name}</h2>
        <p id="quote">{selectedQueen.quote}</p>
        </article>
     );
}
 
export default QueenDetails;