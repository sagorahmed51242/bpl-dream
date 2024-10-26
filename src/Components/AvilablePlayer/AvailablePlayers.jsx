import { useEffect, useState } from "react"
import Player from "../singlePlayer/player";
import PropTypes from 'prop-types'

const AvailablePlayers = ({handleChooseSelectedPlayers}) => {
  const [availablePlayers, setAvailablePlayers] = useState([]);

  useEffect(() => {
    fetch('players.json')
    .then(res => res.json())
    .then(data => setAvailablePlayers(data));
  },[])


  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold pb-5">Available Players</h1>
      </div>
      <div className="grid grid-cols-3 justify-center gap-5">
        {availablePlayers.map((player,index) => <Player key={index} player={player} handleChooseSelectedPlayers={handleChooseSelectedPlayers}/>)}
      </div>
    </div>
  )
}

AvailablePlayers.propTypes = {
  handleChooseSelectedPlayers: PropTypes.func,
}

export default AvailablePlayers