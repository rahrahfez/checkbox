import React from 'react';
import './App.css';


function App() {
  var ids: Array<string> = new Array<string>();

  const handleId = (id: string) =>
  {
     if (!ids.includes(id)) ids.push(id)
     else ids = ids.filter(x => x !== id)
  }
  return (
    <div className="App">
      <p>
        <input type="checkbox" id="1" onChange={e => { handleId(e.currentTarget.id) }} />
        <input type="checkbox" id="2" onChange={e => { handleId(e.currentTarget.id) }} />
        <input type="checkbox" id="3" onChange={e => { handleId(e.currentTarget.id) }} />
        <input type="checkbox" id="4" onChange={e => { handleId(e.currentTarget.id) }} />
        <input type="checkbox" id="5" onChange={e => { handleId(e.currentTarget.id) }} />
      </p>
      <button onClick={() => console.log(ids)}>Click Me</button>
    </div>
  );
}

export default App;
