import { useState, useEffect } from "react";
import { getUser, getTopArtists } from "./services";
import {
	ArtistCard,
	ContentContainer,
	Navigation,
	NoContent,
	SelectService,
	Sesion,
	Title,
	UserCard,
} from "./components";

function App() {
	const [token, setToken] = useState("");
	const [user, setUser] = useState({});
	const [artists, setArtists] = useState([]);
	const [render, setRender] = useState(false);

	// Manejando la existencia del token.
	useEffect(() => {
		const hash = window.location.hash;
		let token = window.localStorage.getItem("token");

		if (!token && hash) {
			token = hash
				.substring(1)
				.split("&")
				.find((element) => element.startsWith("access_token"))
				.split("=")[1];

			window.location.hash = "";
			window.localStorage.setItem("token", token);
		}

		setToken(token);

		if (token) {
			getUser(token).then((user) => setUser(user));
			getTopArtists(token).then((artists) => setArtists(artists));
			setRender(true);
		}
	}, []);

	const handleLogout = () => {
		setToken("");
		localStorage.removeItem("token");
		setRender(false);
	};

	return (
		<>
			<Navigation token={token} handleLogout={handleLogout} />
			<Title />
			<ContentContainer token={token} handleLogout={handleLogout} >
				{render ? (
					<>
						<UserCard user={user} />
						<SelectService />
						<ArtistCard artists={artists} />
					</>
				) : (
					<NoContent />
				)}
			</ContentContainer>
		</>
	);
}

export default App;
