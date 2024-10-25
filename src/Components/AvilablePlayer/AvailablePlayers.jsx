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
    <div className="grid grid-cols-3 justify-center gap-5">
      {availablePlayers.map((player,index) => <Player key={index} player={player} handleChooseSelectedPlayers={handleChooseSelectedPlayers}/>)}

    </div>
  )
}

AvailablePlayers.propTypes = {
  handleChooseSelectedPlayers: PropTypes.func,
}

export default AvailablePlayers