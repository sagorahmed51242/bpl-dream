import { useState } from "react"
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer/Footer";
function App() {
  const [coin, setCoin] = useState(0);

  const handleAddCoin = () => {
    toast.success("Conin Succsesfully Added!",{
      position:"top-center",
      autoClose:3000,
    });
    setCoin(coin => coin + 5000000);
  }

  return (
    <>
      <div className="container mx-auto">
        <Header coin={coin}/>
        <Hero handleAddCoin={handleAddCoin}/>
        <ToastContainer />
      </div>
      <Footer/>
    </>
  )
}

export default App
