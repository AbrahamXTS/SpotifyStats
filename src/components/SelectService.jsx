import { useState, useContext } from 'react';
import { TokenContext } from '../providers';
import { ArtistCard, TrackCard } from "../components";

export const SelectService = () => {

	const token = useContext(TokenContext);
	const [optionSelected, setOptionSelected] = useState("");

	const handleOptionSelected = () => {
		switch(optionSelected) {
			case "artists":
				return <ArtistCard />
			case "tracks":
				return <TrackCard />
		}
	}

	return (
		<div className={token ? "" : "hidden"}>
			<select value={optionSelected} onChange={(e) => setOptionSelected(e.target.value)} className="bg-primary cursor-pointer p-4 mt-7 mb-5 rounded-lg w-full text-white text-center">
				<option value="" className="text-black" disabled>Selecciona la estadística que deseas conocer 🔥</option>
				<option value="artists" className="text-black">Tu top artist de los últimos meses</option>
				<option value="tracks" className="text-black">Tu top tracks de los últimos meses</option>
			</select>
			{handleOptionSelected()}
		</div>
	);
};
