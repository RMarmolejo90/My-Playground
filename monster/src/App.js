import './App.css';
import Monster from './monster';
import logo from './logo512.png';
import Contacts from './contacts';


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
      <div className='monster-section'>
        <Monster/>
        <Contacts 
          name = 'Rich'
          phone = '(123)223-2323'
        />
        <img className='monster-img' src={logo} alt="logo" />      
      </div>
    </div> 


  );

}



export default App;
