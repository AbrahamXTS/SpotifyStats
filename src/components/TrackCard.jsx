import { useState, useEffect, useContext } from "react";
import SpotifyWebPlayer from "react-spotify-web-playback";

import { TokenContext } from "../providers";
import { getTopTracks } from "../services";

export const TrackCard = () => {
	const token = useContext(TokenContext);

	const [uris, setUris] = useState([]);
	const [tracks, setTracks] = useState([]);

	useEffect(() => {
		if (token) {
			getTopTracks(token).then((tracks) => setTracks(tracks));
		}
	}, [token]);

	useEffect(() => {
		if (tracks.length > 0) {
			setUris(tracks.map(({ uri }) => uri));
		}
	}, [tracks]);

	return (
		<>
			{tracks.map(({ name, image, artists, album, link }) => (
				<div key={name} className="bg-primary flex gap-2 mb-2 rounded-lg">
					<a href={link} target="_blank" rel="noopener noreferrer">
						<div className="w-24">
							<img
								src={image}
								alt={name}
								className="h-24 rounded-tl-lg rounded-bl-lg"
							/>
						</div>
					</a>
					<div className="py-3 text-white">
						<p className="font-semibold">{name}</p>
						<p className="font-light text-md">{artists.join(", ")}</p>
						<p className="font-light text-sm">{album}</p>
					</div>
				</div>
			))}

			<div className="w-full fixed bottom-0 left-0">
				<SpotifyWebPlayer
					token={token}
					uris={uris}
					showSaveIcon={true}
					styles={{
						bgColor: "#000000b3",
						trackArtistColor: "#ffffff",
						trackNameColor: "#ffffff",
						color: "#ffffff",
					}}
				/>
			</div>
		</>
	);
};
