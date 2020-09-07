import React from "react";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div style={{ marginTop: "4rem" }} className="container">
				<Products />
			</div>
		</div>
	);
}

export default App;
