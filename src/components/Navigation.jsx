import React from "react";
import { Sesion } from './Sesion';
import Logo from "../images/logo.png";

export const Navigation = ({token, handleLogout}) => {
	return (
		<nav className="bg-primary px-5 py-2">
            <div className="h-14 w-26 flex items-center justify-between">
                <img className="h-10 w-26 self-center" src={Logo} />
				<div className="fold:hidden">
					<Sesion token={token} handleLogout={handleLogout} />	
				</div>
            </div>
		</nav>
	);
};
