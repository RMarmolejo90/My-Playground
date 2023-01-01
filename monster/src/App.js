import './App.css';
import Monster from './monster';
import logo from './logo512.png';
import Contacts from './contacts';
import Joke from './joke';


function App() {
  return (
    <div className="App">
      <Joke setup= "setup for the joke"
        punchline= "haha i made a funny"
      />
      <Joke setup= "this is it"
        punchline="you're laughing"
      />
      <Joke setup= "this is so unny"
        punchline="Im not even funny"
        isShittyJoke= {true}
      />
      <Joke setup="this one will getcha"
        punchline="look at that"
      />
      
    </div> 
  );
}



export default App;
