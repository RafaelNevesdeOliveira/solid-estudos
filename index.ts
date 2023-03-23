import express, { Request, Response } from 'express';
import userRoutes from './src/routes/userRoutes';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

// Adicione a rota de health check
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ status: 'Ta tudo OK' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});