import { useContext } from 'react';
import { TokenContext } from '../providers';

export const Sesion = () => {

	const token = useContext(TokenContext);

	const { VITE_CLIENT_ID, VITE_REDIRECT_URI, VITE_AUTH_ENDPOINT } = import.meta.env;
	const SCOPES = ["user-top-read", "user-read-playback-state", "user-read-currently-playing", "streaming", "user-read-email", "user-read-private", "user-read-playback-state", "user-modify-playback-state", "user-library-read", "user-library-modify"].join(" ");
	const URL = `${VITE_AUTH_ENDPOINT}?client_id=${VITE_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URI}&scope=${SCOPES}&response_type=token&show_dialog=true`;

	return (
		<div className="flex justify-center">
			{!token && (
				<a href={URL} className="bg-spotify text-white px-5 py-3 rounded-3xl">INICIAR SESIÓN</a>
			)}
		</div>
	);
};
