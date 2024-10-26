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
            toast.error("This Player is Already Exits in your team!",{
                position: "top-center",
                autoClose:3000,
            });
        }else if(coin < choosenPlayer.bidding_price){
            toast.error("You don't have enough coin to buy this player.Please clain free coins!",{
                position: "top-center",
                autoClose:3000,
            });
        }else if(selectedPlayers.length === 6){
            toast.error("Opps! 6 Players Already added",{
                position:"top-center",
                autoClose:3000,
            })

        }else{
            toast.success(`Awesome! You'v successfully selected  "${choosenPlayer.name}" in your team!`,{
                position: "top-center",
                autoClose:3000,
            });
            setSelectedPlayers([...selectedPlayers, choosenPlayer]);
            setCoin(coin => coin - choosenPlayer.bidding_price);
        }
    }

    const handleDeletePlayer = (id) => {
        toast.error("Player Deleted successfully!",{
            autoClose:3000,
        });

        const player = selectedPlayers.find(player => player.player_id === id);

        const newPlayer = selectedPlayers.filter(player => player.player_id !== id);
        setSelectedPlayers(newPlayer);
        setCoin(coin => coin + player.bidding_price);
    }


  return (
    <div>
        <div className="py-10 text-right">
            <button onClick={handleAvailablePlayer} className={`${isAvailablePlayerActive?'text-lg border py-2 px-5 rounded-l-xl bg-[#E7FE29]':'text-lg border bg-white py-2 px-5 rounded-l-xl'}`}>Available</button>
            <button onClick={handleSelectedPlayer} className={`${isAvailablePlayerActive?'text-lg border py-2 px-5 bg-white rounded-r-xl':'text-lg border py-2 px-5 rounded-r-xl bg-[#E7FE29]'}`}>Selected {selectedPlayers.length}</button>
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