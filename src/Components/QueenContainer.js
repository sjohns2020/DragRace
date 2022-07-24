import React, { useEffect, useState } from 'react';
import QueenSelector from '../Containers/QueenSelector';
import QueenDetails from '../Containers/QueenDetails';
import WinningQueens from '../Containers/WinningQueens';
import MissCongenieality from '../Containers/MissCongenieality';

const QueenContainer = () => {
    

    const [queens, setQueens] = useState([]);
    const [selectedQueen, setSelectedQueen] = useState({});
    const [showText, setshowText] = useState(false) // used for just one compontent
    const [episode, setEpisode] = useState({})
  
    const getQueens = () => {
      fetch("http://www.nokeynoshade.party/api/queens/all")
      .then((response) => response.json())
      .then((data) => setQueens(data))
    }
    
    useEffect(() => {
    getQueens();
    }, [])

    // reference queen ID
    // then fetch the promis url with {queen.id} in it

    const getEpisode = () => {
      fetch(`http://www.nokeynoshade.party/api/queens/${queen.id}/episodes`)
      .then((response) => response.json())
      .then((data) => setEpisode(data))
    }
    useEffect(() => {
      getQueens();
      }, [])



    // useEffect(() => {
    //   if(!selectedQueen) return
    //   selectedQueen.image_url.map(personLink => fetch(personLink))
    // Promise.all(promises)
    //   .then(responses => response.json());
    //   .then(data => setQueenPictures);
    // }, [selectedQueen])



    // How to hide a component or classes
    function toggleText() {
      setshowText(!showText)
    }

    const textElement = showText ?  <WinningQueens queens={queens} /> : null
        

    const handleQueenChange = (id) => {
        const foundQueen = queens.find((queen) => queen.id === parseInt(id))
        setSelectedQueen(foundQueen)
      }
      

    return ( 
        <div id="container">
        <header>
            <a href="http://www.nokeynoshade.party/api/queens/all">
            <img src="https://ntvb.tmsimg.com/assets/p197358_b_h8_at.jpg?w=1280&h=720" alt="" />
            </a>
        </header>
    
        <QueenSelector queens={queens} handleQueenChange={handleQueenChange}/>
        <QueenDetails selectedQueen={selectedQueen} />
        <button onClick={toggleText}>All the winners</button>
        {textElement}
        <MissCongenieality queens={queens}/>
        </div>
     );
}
 
export default QueenContainer;