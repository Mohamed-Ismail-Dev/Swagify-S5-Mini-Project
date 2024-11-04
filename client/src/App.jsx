import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import ModelSwitcher from './canvas/ModelSwitcher';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
      <ModelSwitcher />
    </main>
  );
}

export default App;
