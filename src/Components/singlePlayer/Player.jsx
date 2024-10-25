import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFlag } from '@fortawesome/free-solid-svg-icons';

const Player = ({player,handleChooseSelectedPlayers}) => {

    const {name, country, bowling_type, batting_type,role,image,bidding_price} = player;
  return (
    <div>
        <div className="card bg-base-100 shadow-xl">
  <figure>
    <img className='w-full h-[350px] object-cover'
      src={image}
      alt={player.player_id} />
  </figure>
  <div className="card-body">
    <div className="flex  gap-3"><FontAwesomeIcon className='text-xl' icon={faUser} /> <h1 className='text-xl font-bold'>{name}</h1></div>
    <div className='flex items-center justify-between text-[#828282]'>
        <div className='flex gap-2 items-center'><FontAwesomeIcon  icon={faFlag} /><h1>{country}</h1></div>
        <div className='bg-gray-100 px-3 py-1 rounded-lg'>{role}</div>
    </div>
    <div className='flex flex-col gap-2'>
        <div><h2 className='font-bold'>Rating</h2></div>
        <div className='flex justify-between items-center font-bold'>
            <div>{batting_type}</div>
            <div className='text-gray-600'>{bowling_type}</div>
        </div>
        <div className='flex justify-between items-center'>
            <div className='font-bold'>Price: ${bidding_price}</div>
            <div><button onClick={()=>handleChooseSelectedPlayers(player)} className='border px-3 py-1 rounded-lg hover:bg-[#E7FE29]'>Choose Player</button></div>
        </div>
    </div>
  </div>
</div>
    </div>
  )
}

Player.propTypes = {
    player: PropTypes.object,
    handleChooseSelectedPlayers: PropTypes.func,
}

export default Player