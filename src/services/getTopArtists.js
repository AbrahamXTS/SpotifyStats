import axios from 'axios';

export const getTopArtists = async (token) => {
        
    const { data } = await axios.get("https://api.spotify.com/v1/me/top/artists/", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            
        }
    });

    const arrayArtists = data.items.map((artist) => {
        return {
            name: artist.name,
            genres: artist.genres,
            image: artist.images[0].url,
            link: artist.external_urls.spotify,
        }
    });

    return arrayArtists;
}