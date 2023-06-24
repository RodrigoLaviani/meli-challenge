import express from 'express';
import itemRoutes from './src/ports/item.routes';

const app = express();

//routes
app.use("/api/items", itemRoutes);

export default app;