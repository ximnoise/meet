import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import * as atatus from 'atatus-spa';

ReactDOM.render(<App />, document.getElementById("root"));

atatus.config('aed2091d51704321bb224f67207390e8').install();

serviceWorkerRegistration.register();
