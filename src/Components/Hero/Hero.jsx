import PropTypes from 'prop-types'
import mainHeroIcon from './../../assets/images/bg-shadow.png'
import bannerIcon from './../../assets/images/banner-main.png'

const Hero = ({handleAddCoin}) => {
  return (
    <div  className="relative h-[600px] bg-cover bg-[#040d1c] rounded-3xl mt-10"
    style={{ backgroundImage: `url(${mainHeroIcon})` }}>

      {/* Content on top of the overlay */}
      <div className="relative z-10  p-6 text-white flex flex-col justify-center items-center gap-5">
        <img  className="pt-8" src={bannerIcon} alt="" />
        <h1 className="text-4xl font-bold text-center">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className="text-2xl text-center">Beyond Boundaries Beyond Limits</p>
        <button onClick={handleAddCoin}  className="bg-[#E7FE29] text-black outline outline-1 outline-[#E7FE29] outline-offset-8 font-bold p-3 rounded-xl">Claim Free Credit</button>
      </div>
    </div>
  )
}

Hero.propTypes = {
  handleAddCoin: PropTypes.func.isRequired,
}
export default Hero