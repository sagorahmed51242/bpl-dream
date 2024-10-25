import PropTypes from 'prop-types'


const Header = ({coin}) => {
  return (
    <div>

      {/* nav bar */}
      <div className="flex justify-between items-center">


        {/* logo */}
        <div>
          <img src="../../../src/assets/images/logo.png" alt="this is the logo" />
        </div>

        {/* Menu of the nav bar */}
        <div className="flex items-center">
          <ul className="flex text-[#131313B3] gap-12 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>

          {/* Coin button */}
          <li><button className="border flex p-2 rounded-lg font-bold">{coin} Coin <img className="w-5" src="../../../src/assets/images/dollar.png" alt="icon of dollar" /></button></li>
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