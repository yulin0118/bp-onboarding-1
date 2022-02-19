import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';


// class App extends Component {
//   render() {
//     return (
//       <div className = "App">
//         <h1>Hello React</h1>
//       </div>
//     )
//   }
// }
const App = () => {

  const APP_ID = 'b26f7b04';
  const APP_KEY = '148c9ad2b23938f025de88ab55a6b918';
  const exampleReq = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    console.log('effect has been run');
  })
  
  return(
    <div className="App">
      <form className = "search-form">
        <input className = "search-bar" type = 'text'/>
        <button className = "search-button" type = 'submit'>search</button>
      </form>
      <h1 onClick = {()=> setCounter(counter + 1)}>{counter}</h1>
    </div>
  )
}

export default App;
