import React, {useState} from 'react';
import './styles.css'


function FormInput(str){
  // usestate is a react hook, use to create state variable and function setter, but its part of react already, in the library.
  const [username, setUsername] = useState('')
  console.log('name', username)
  const [password, setPassword] = useState('')
  const test = useState('')
  console.log('bananas',test[0])
  const myButton = () => {
    alert('Hello, World!');
  };
  return (

    <div>
      <form>
        <label>
          Name:
          <input type="text" name='username' value={username} onChange = {(evt) => setUsername(evt.target.value)}/>
        </label>
        <label>
          <input type="text" name='password' value={password} onChange={(evt) => setPassword(evt.target.value)}></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button type='button' onClick={myButton}>Hello World!</button>
    </div>
    
  )
};


export default FormInput;
/* would be cool here to have a form that takes in a string, and returns onlt capital letters, in order. */
