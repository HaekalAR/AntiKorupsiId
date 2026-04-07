import Dampak from "./components/Dampak";
import Definisi from "./components/Definisi";
import Facts from "./components/Facts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Lawan from "./components/Lawan";
import Sumber from "./components/Sumber";
import Tindakan from "./components/Tindakan";
import Waspada from "./components/Waspada";

const App = () => {
  return (
    <div>
      <Home/>
      <Facts/>
      <Definisi/>
      <Dampak/>
      <Waspada/>
      <Lawan/>
      <Tindakan/>
      <Sumber/>
      <Footer/>
    </div>
  )
}

export default App;