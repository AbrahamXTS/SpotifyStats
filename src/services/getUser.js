import axios from 'axios';

export const getUser = async (token) => {
        
    const { data } = await axios.get("https://api.spotify.com/v1/me/", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {

        }
    });

    const { display_name, images } = data;
    
    return {
        name: display_name,
        image: images[0].url
    }
}