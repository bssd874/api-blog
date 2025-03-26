import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import postRoutes from "./routes/post.route";
import { errorHandler } from "./utils/errorHandler";
import { logger } from "./utils/logger";
import errorHandlerMid  from "./middleware/errorHandler";
// import { PORT } from "./constants";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/posts", postRoutes);

// Error Handling Middleware
app.use(errorHandlerMid);

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger(`Server running on http://localhost:${PORT}`);
});

export default app;
