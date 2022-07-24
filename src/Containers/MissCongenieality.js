const MissCongenieality = ({queens}) => {
    
    const missCongeniealitys = queens.filter((queen) => queen.missCongeniality === true)
    console.log(missCongeniealitys);

    const listOfMissCongeniealitys = missCongeniealitys.map((missCongeniealityy) => {
        return ( 
            <li id="missCListLi">
                <img id="missCImage" src={missCongeniealityy.image_url} alt="" />
                <p>{missCongeniealityy.name}</p>
            </li>
        )
    })

    
    return ( 
        <section id="missCSection">
        <h3>Miss Congeniealities </h3>
        <ul id="missCList">
         {listOfMissCongeniealitys}
        </ul>
        </section>
     );
}
 
export default MissCongenieality;