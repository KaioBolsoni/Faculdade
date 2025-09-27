import express from "express";
import userRoutes from "./routes/userroutes";
import postRoutes from "./routes/postroutes";

const app = express();


app.use(express.json());


app.use(userRoutes);
app.use(postRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

