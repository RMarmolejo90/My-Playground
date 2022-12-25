import './App.css';
import Monster from './monster';
import logo from './logo512.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Rich Marmolejo
        </h1>
        <ul className='flex-center'>
          <li>
            menu
          </li>
          <li>
            Contact
          </li>
        </ul>
      </header>
      <p>
        This is the monster
      </p>
      <Monster/>
      <img src={logo} alt="logo" />      
    </div> 


  );

}



export default App;
