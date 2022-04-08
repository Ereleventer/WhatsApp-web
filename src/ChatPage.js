import React, { useEffect, useState } from "react";
import "./Chat.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Sidebar from "components/Sidebar";
import Chat from "pages/Chat";
import { AuthProvider } from "./context/AuthContext";

const userPrefersDark =
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches;

function ChatPage() {
	const [appLoaded, setAppLoaded] = useState(false);
	const [startLoadProgress, setStartLoadProgress] = useState(false);

	useEffect(() => {
		if (userPrefersDark) document.body.classList.add("dark-theme");
		stopLoad();
	}, []);

	const stopLoad = () => {
		setStartLoadProgress(true);
		setTimeout(() => setAppLoaded(true), 3000);
	};

	if (!appLoaded) return <Loader done={startLoadProgress} />;


	return (
		<div className="app">
			<p className="app__mobile-message"> Only available on desktop 😊. </p>
				<div className="app-content">
					<Sidebar />
					<Routes>
						<Route path="/chat/:id" component={Chat} />
						<Route path="/chat/:id"component={Home} />
					</Routes>
				</div>
		</div>
	);
}
  
  export default ChatPage;
  
