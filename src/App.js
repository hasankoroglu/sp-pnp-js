import React from 'react';
import './App.css';

function App() {

  const spURL = "http://localhost:8081";
  fetch(spURL + "/_api/web/GetFolderByServerRelativeUrl('/SitePages')/Files", {
    accept: "application/json;odata=verbose"
  })
    .then(r => r.json())
    .then(data => {
      let result = JSON.stringify(data,null,1);
      document.getElementById("result").innerHTML = result;
    })
    .catch(console.log);
  return (
    <div>
      <pre id="result"></pre>
    </div>
  );
}

export default App;