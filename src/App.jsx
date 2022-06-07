import { useState, useEffect } from "react";
import { getUser, getTopArtists } from "./services";
import { ArtistCard, Navigation, SelectService, Sesion, Title, UserCard } from "./components";

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
			token = hash.substring(1).split("&").find((element) => element.startsWith("access_token")).split("=")[1];

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
            <div className="md:flex md:justify-center mb-10">
                <div className='mx-3 md:w-4/6'>
                    {render && (
                        <>
                            <UserCard user={user} />
                            <SelectService />
                            <ArtistCard artists={artists} />
                        </>
                    )}
                    <div className="mt-10 hidden fold:block">
                        <Sesion token={token} handleLogout={handleLogout} />
                    </div>
                </div>
            </div>
		</>
	);
}

export default App;
