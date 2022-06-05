

const QueenSelector = ({queens, handleQueenChange}) => {
    
    const handleChange = (event) => {
        handleQueenChange(event.target.value)
    }

    const queenOptions = queens.map((queen) => {
        return (
            <option value={queen.id}>
                {queen.name}
            </option>
        )
    })
    
    return ( 
        <div id="selector">
        <label htmlFor="changeQueen">Find Your Queen</label>
        <select id="changeQueen" onChange={handleChange}>
            {queenOptions}
        </select>
        </div>
     );
}
 
export default QueenSelector;