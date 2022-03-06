import { useState, useEffect } from "react";
import Popup from "./component/Popup";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
    setTimedPopup(true);
  },3000);
  },[]);
  
  return (
    <div className="App">
      <main>
        <h1>React Popups</h1>
        <br/><br/>
        <button onClick={()=>setButtonPopup(true)}>Open popup</button>
        </main>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>my popup</h3>
          <p>this is button triggered popup</p>
        </Popup>

        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <h3>my timed popup</h3>
          <p>this is time triggered popup</p>
        </Popup>
    </div>
  );
}

export default App;
