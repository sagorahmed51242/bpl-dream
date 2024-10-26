import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const SelectedPlayers = ({selectedPlayers,handleDeletePlayer,handleAvailablePlayer}) => {
  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold pb-5'>Selected Players ({selectedPlayers.length}/6)</h1>
      </div>
      {selectedPlayers.map((player,index) => (
        <div className='flex justify-between items-center border p-2 rounded-lg mb-2' key={index}>
          <div className='flex items-center gap-2'>
            <div>
              <img className='w-[100px] h-[80px] object-cover border rounded-lg' src={player.image} alt="" />
            </div>
            <div>
              <h1 className='text-xl font-bold'>{player.name}</h1>
              <h2>{player.role}</h2>
              <h2 className='text-gray-500'>${player.bidding_price}</h2>
            </div>
          </div>
          <div>
            <button onClick={()=>handleDeletePlayer(player.player_id)}><FontAwesomeIcon className='text-2xl pr-2 text-red-500' icon={faTrash} /></button>
          </div>
        </div>
      ))}
      {selectedPlayers.length > 0 && <button onClick={handleAvailablePlayer} className="text-lg border py-2 px-5 rounded-xl bg-[#E7FE29]">Add More Player</button>}
    </div>
  )
}

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array,
  handleDeletePlayer: PropTypes.func,
  handleAvailablePlayer: PropTypes.func,
}

export default SelectedPlayers