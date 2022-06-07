import React from "react";

export const Sesion = ({ token, handleLogout }) => {

	const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
	const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
	const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT;
	const SCOPES = ["user-top-read", "user-read-playback-state", "user-read-currently-playing"].join(" ");

	return (
		<div className="flex justify-center">
			{!token ? (
				<a
					className="bg-spotify text-white px-5 py-3 rounded-3xl"
					href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token&show_dialog=true`}
				>
					INICIAR SESIÓN
				</a>
			) : (
				<button
					className="bg-transparent border-2 border-white text-white px-5 py-3 rounded-3xl"
					onClick={handleLogout}
				>
					CERRAR SESIÓN
				</button>
			)}
		</div>
	);
};
