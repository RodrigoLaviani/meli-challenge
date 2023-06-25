import express from 'express';
import cors from 'cors';
import itemRoutes from './src/ports/item.routes';

const app = express();

app.use(cors());

//routes
app.use("/api/items", itemRoutes);

export default app;