import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FormInput from './components/FormInput';
import { Reverse } from './components/JSPractice';
import GroceryStore from './components/GroceryStore';
import Boxes from './components/Boxes';

// this is a function component with jsx. directly inject JS into html.
function App() {
// put logic here that we want to run with the return, this console log shows up in inspect mode
console.log(Reverse('happyfriday!'));

  return (
    <div className="App">
      <Header/>
      {/* <FormInput /> */}
      <p>{Reverse('almosttheweekend')}</p>
      <GroceryStore />
      <Boxes />
    </div>
  );
}

export default App;
