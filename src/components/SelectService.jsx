import { useContext, useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

import { TrackCard } from '../components';
import { getTopTracks } from '../services';
import { TokenContext } from '../providers';

export const SelectService = () => {

	const token = useContext(TokenContext);

	const [tracks, setTracks] = useState([]);
	const [uris, setUris] = useState([]);

	useEffect(() => {
		if (token) {
			getTopTracks(token).then((tracks) => setTracks(tracks));
		}
	}, [token]);

	useEffect(() => {
		if (tracks.length > 0) {
			setUris(tracks.map(({uri}) => uri));
		}
	}, [tracks]);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
	}, []);

	const handleKeyDown = (e) => {
		if (e.keyCode === 49) {
			try {
				document.querySelector('[aria-label="Previous"]')?.click();
			} catch (e) {
				console.log("No se pudo encontrar el botón de retroceder.");
			}
		}

		if (e.keyCode === 50) {
			document.querySelector('[aria-label="Next"]').click();
		}
	};

	return (
		<>
			{token && 
				<div>
					<p className='bg-primary cursor-pointer p-4 mt-7 mb-5 rounded-lg w-full text-white text-center'>
						Tu top tracks de los últimos meses	
					</p>
					<TrackCard tracks={tracks} />
					<div className='w-full fixed bottom-0 left-0'>
						<SpotifyPlayer 
							token={token}
							uris={uris}
							autoPlay={true}
							showSaveIcon={true}
							styles={{
								bgColor: "#000000b3",
								trackArtistColor: "#ffffff",
								trackNameColor: "#ffffff",
								color: "#ffffff",
							}}
						/>
					</div>
				</div>
			}
		</>
	);
};
