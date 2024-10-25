import PropTypes from 'prop-types'
import AvailablePlayers from '../AvilablePlayer/AvailablePlayers'
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers'
import { useState } from 'react'
import { toast } from 'react-toastify';

const Main = ({isAvailablePlayerActive,handleAvailablePlayer,handleSelectedPlayer,coin, setCoin}) => {
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleChooseSelectedPlayers = (choosenPlayer) => {
        const isExist = selectedPlayers.find(player => player.player_id === choosenPlayer.player_id);
        if(isExist) {
            toast.error("This Player is Already Choosen!",{
                position: "top-center",
                autoClose:3000,
            });
        }else if(coin < choosenPlayer.bidding_price){
            toast.error("You don't have enough coin!",{
                position: "top-center",
                autoClose:3000,
            });
        }else{
            toast.success("You'v successfully selected!",{
                position: "top-center",
                autoClose:3000,
            });
            setSelectedPlayers([...selectedPlayers, choosenPlayer]);
            setCoin(coin => coin - choosenPlayer.bidding_price);
        }
    }

    const handleDeletePlayer = (id) => {
        const player = selectedPlayers.find(player => player.player_id === id);

        const newPlayer = selectedPlayers.filter(player => player.player_id !== id);
        setSelectedPlayers(newPlayer);
        setCoin(coin => coin + player.bidding_price);
    }


  return (
    <div>
        <div className="flex justify-between items-center py-10">
            <div>
                {isAvailablePlayerActive?<h1 className="text-2xl font-bold">Available Players</h1>:<h1 className="text-2xl font-bold">Selected Player({selectedPlayers.length}/6)</h1>}
            </div>
            <div>
                <button onClick={handleAvailablePlayer} className={`${isAvailablePlayerActive?'text-lg border py-2 px-5 rounded-l-xl bg-[#E7FE29]':'text-lg border py-2 px-5 rounded-l-xl'}`}>Available</button>
                <button onClick={handleSelectedPlayer} className={`${isAvailablePlayerActive?'text-lg border py-2 px-5 rounded-r-xl':'text-lg border py-2 px-5 rounded-r-xl bg-[#E7FE29]'}`}>Selected {selectedPlayers.length}</button>
            </div>
        </div>

        {isAvailablePlayerActive? <AvailablePlayers handleChooseSelectedPlayers={handleChooseSelectedPlayers}/> : <SelectedPlayers selectedPlayers={selectedPlayers} handleDeletePlayer={handleDeletePlayer} handleAvailablePlayer={handleAvailablePlayer}/>}
    </div>
  )
}

Main.propTypes = {
    isAvailablePlayerActive: PropTypes.bool,
    handleAvailablePlayer: PropTypes.func,
    handleSelectedPlayer: PropTypes.func,
    coin: PropTypes.number,
    setCoin: PropTypes.func,
}

export default Main