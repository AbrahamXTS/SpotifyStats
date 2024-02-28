import React, { useState, useEffect, createContext } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
	const [tokenUser, setTokenUser] = useState("");

	useEffect(() => {
		let token = undefined;
		const hash = window.location.hash;

		if (!token && hash) {
			token = hash
				.substring(1)
				.split("&")
				.find((element) => element.startsWith("access_token"))
				.split("=")[1];

			setTokenUser(token);
			window.location.hash = "";
		}
	}, []);

	return <TokenContext.Provider value={tokenUser}>{children}</TokenContext.Provider>;
};
