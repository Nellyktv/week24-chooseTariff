import './App.scss';
import './App.css';
import Tariffs from './components/Tariffs/Tariffs';
import tariffs from './tariffs.json';
import './components/Tariffs/Tariffs.scss';



function App() {
  return ( 
    <div className = "App" > {
      tariffs.map((tariffs) =>
        <Tariffs name = {tariffs.name}
        price = {tariffs.price}
        speed = {tariffs.speed}
        theme_tariff = {tariffs.theme_tariff}
        theme_nameTariff = {tariffs.theme_nameTariff}
        isSelected = {tariffs.isSelected}
        index = {tariffs.index}

        />
      )
    } 
    </div>
  );

}

export default App;