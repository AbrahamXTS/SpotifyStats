import { useContext } from "react";
import { TokenContext } from "../providers";

export const NoContent = () => {

	const token = useContext(TokenContext);

	return (
		<div className="mt-10 text-center text-white">
			{!token && <p>¡Inicia sesión para comenzar!</p>}
			<a href="https://github.com/abrahamxts" className="block mb-7">Made with ❤️ by Abraham Espinosa</a>
		</div>
	);
};
