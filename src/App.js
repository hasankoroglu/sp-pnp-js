import React from 'react';
import './App.css';
//import syntaxHighlight from "./syntaxHighlight"
import { loadPageContext } from 'sp-rest-proxy/dist/utils/env';
//import { sp } from "@pnp/sp/presets/all";

export default function App() {
  loadPageContext();

  return (
    <div>
      <pre id="result"></pre>
    </div>
  );
}