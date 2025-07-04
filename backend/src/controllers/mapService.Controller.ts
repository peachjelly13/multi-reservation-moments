import { getAddressFromCoordinates } from '../services/mapService.ts'
import { Request, Response } from 'express';

export async function getAddress(req: Request, res: Response): Promise<void> {
    const { lat, lng } = req.query;
    if (!lat || !lng) {
        res.status(400).json({ error: 'Latitude and Longintude are required' });
        return;
    }
    try {
        const result = await getAddressFromCoordinates(lat as string, lng as string);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to fetch address', details: error.message })

    }

}