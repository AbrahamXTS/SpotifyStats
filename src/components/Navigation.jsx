import React from "react";
import { Sesion } from './Sesion';
import Logo from "../images/logo.png";

export const Navigation = ({}) => {
	return (
		<nav className="bg-primary flex items-center justify-between px-3 sm:px-5 py-2">
			<img className="h-10 w-26 self-center" src={Logo} />
			<div className="fold:hidden">
				<Sesion />	
			</div>
		</nav>
	);
};
