import cors from 'cors';
import express, { Express, json } from 'express';
import helmet from 'helmet';

export const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(json());
