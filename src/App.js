import React from "react";
import { hot } from "react-hot-loader";
import Nav from "./components/Nav/Nav";

function App() {
    return (
        <div className="App">
            <Nav />
        </div>
    );

}
export default hot(module)(App);