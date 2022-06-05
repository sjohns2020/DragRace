import React, { useEffect, useState } from 'react';
import QueenSelector from '../Containers/QueenSelector';
import QueenDetails from '../Containers/QueenDetails';
import WinningQueens from '../Containers/WinningQueens';

const QueenContainer = () => {
    

    const [queens, setQueens] = useState([]);
    const [selectedQueen, setSelectedQueen] = useState({});
  
    const getQueens = () => {
      console.log("getting Queen data");
      fetch("http://www.nokeynoshade.party/api/queens/all")
      .then( (response) => response.json())
      .then ((data) => setQueens(data))
    }
    
    useEffect(() => {
    getQueens();
    }, [])


    const handleQueenChange = (id) => {
        const foundQueen = queens.find((queen) => queen.id === parseInt(id))
        setSelectedQueen(foundQueen)
      }
      

    return ( 
        <div id="container">
        <header>
            <img src="https://ntvb.tmsimg.com/assets/p197358_b_h8_at.jpg?w=1280&h=720" alt="" />
        </header>
    
        <QueenSelector queens={queens} handleQueenChange={handleQueenChange}/>
        <QueenDetails selectedQueen={selectedQueen} />
        <WinningQueens queens={queens} />
        </div>
     );
}
 
export default QueenContainer;