import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as atatus from 'atatus-spa';

ReactDOM.render(<App />, document.getElementById("root"));

atatus.config('4fb78490f5a849feb5fa824789f66b30').install();
atatus.notify(new Error('Test Atatus Setup'));
