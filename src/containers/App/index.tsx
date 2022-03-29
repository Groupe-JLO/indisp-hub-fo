import React from "react";

import { Routes, Route } from "react-router-dom";

import Article from "../Article";

function App() {
    return (
        <div className="App">
            <Routes>
              <Route path="/" element={""}/>
                <Route path="/:slug" element={<Article />}/>
            </Routes>
        </div>
    );
}

export default App;