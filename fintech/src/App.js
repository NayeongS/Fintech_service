
import './App.css';
import Welcome from './component/WelcomeComponent';
import ListComponent from './component/ListComponent';
import InputComponent from './component/InputComponent';



function App() {
  return (
    <div className="App">
<Welcome username="김나영" age={23}></Welcome>

   </div>
  );


}

export default App;
