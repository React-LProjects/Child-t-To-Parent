import logo from './logo.svg';
import './App.css';
import Chind from "./Chind"
function App() {
  function myProfile(uikey){
    alert(uikey)
  }
  return (
    <div className="App">
      <h1>Parent component</h1>
     <Chind n={myProfile}/>
    </div>
  );
}

export default App;
