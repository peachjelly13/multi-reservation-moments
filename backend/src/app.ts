import express from 'express';
import mapServiceRouter from './routes/mapService.Routes.ts'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/api/v1', mapServiceRouter)


export default app;