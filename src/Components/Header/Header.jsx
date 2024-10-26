import PropTypes from 'prop-types'
import logo from './../../assets/images/logo.png';
import dollar from './../../assets/images/dollar.png';


const Header = ({coin}) => {
  return (
    <div className='sticky top-0 z-50 bg-[#ffffffca] py-3 backdrop-blur-sm'>

      <div className="flex justify-between items-center">

        <div>
          <img src={logo} alt="this is the logo" />
        </div>

        <div className="flex items-center">
          <ul className="flex text-[#131313B3] gap-12 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>

          {/* Coin button */}
          <li><button className="border flex p-2 rounded-lg font-bold">{coin} Coin <img className="w-5" src={dollar} alt="icon of dollar" /></button></li>
        </ul>
        </div>
      </div>
    </div>
  )
}



Header.propTypes = {
  coin: PropTypes.number.isRequired,
}

export default Header