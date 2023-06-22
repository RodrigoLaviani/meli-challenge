import express from 'express';
import itemRoutes from './src/ports/item.routes';

const app = express();

//routes
app.use("/api/items", itemRoutes);

app.listen(3000, () => {
  console.log('El servidor está funcionando en el puerto 3000.');
});

export default app;