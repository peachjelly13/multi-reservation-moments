import axios from 'axios';
import { env } from '../config/env.ts'

const OPEN_CAGE_API_KEY = env.OPEN_CAGE_API_KEY;

export async function getAddressFromCoordinates(lat: string, lng: string) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lng}&key=${OPEN_CAGE_API_KEY}`;

    const response = await axios.get(url);
    const data = response.data;

    if (!data.results || data.results.length === 0) {
        throw new Error('No address found for the given coordinates.');
    }

    const result = data.results[0];

    return {
        formatted_address: result.formatted,
        country: result.components.country,
        city: result.components.city || result.components.town || result.components.village,
        lat: result.geometry.lat,
        lng: result.geometry.lng,
    };
}
//the frontend can select whatever they want to show from the response to the user
