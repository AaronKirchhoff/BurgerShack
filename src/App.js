import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FormInput from './components/FormInput';

// this is a function component with jsx. directly inject JS into html.
function App() {
  return (
    <div className="App">
      <Header/>
      <FormInput />

    </div>
  );
}

export default App;
