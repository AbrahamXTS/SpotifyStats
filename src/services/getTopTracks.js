import axios from "axios";

export const getTopTracks = async (token) => {
	const { data } = await axios.get("https://api.spotify.com/v1/me/top/tracks/", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		params: {},
	});

	const arrayTracks = data.items.map((track) => {
		return {
			album: track.album.name,
			artists: track.artists.map((e) => e.name),
			image: track.album.images[0].url,
			link: track.external_urls.spotify,
			name: track.name,
			preview: track.preview_url,
			uri: track.uri,
		};
	});

	return arrayTracks;
};
