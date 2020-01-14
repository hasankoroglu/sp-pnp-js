import React from "react";
import "./App.css";
import syntaxHighlight from "./syntaxHighlight";
import { loadPageContext } from "sp-rest-proxy/dist/utils/env";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/folders";
import "@pnp/sp/files";

export default function App() {
  loadPageContext()
    .then(async _spPageContextInfo => {
      let items = await sp.web
        .getFolderByServerRelativeUrl(`${_spPageContextInfo.webServerRelativeUrl}/SitePages`)
        .files();
      let result = JSON.stringify(items, null, 1);
      document.getElementById("result").innerHTML = syntaxHighlight(result);
    })
    .catch(console.warn);

  return (
    <div>
      <pre id="result"></pre>
    </div>
  );
}