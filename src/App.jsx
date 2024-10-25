import { useState } from "react"
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [coin, setCoin] = useState(0);

  const handleAddCoin = () => {
    toast.success("Conin Succsesfully Added!");
    setCoin(coin => coin + 50000);
  }

  return (
    <>
      <div className="container mx-auto">
        <Header coin={coin}/>
        <Hero handleAddCoin={handleAddCoin}/>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
