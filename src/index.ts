import express from "express";
import connectDB from "./db/connect";
import usersRoutes from "./api/routes/usersRoutes";
import postsRoutes from "./api/routes/postsRoutes";
import exploreRoutes from "./api/routes/exploreRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => res.send("Welcome to the Express Server"));
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/explore", exploreRoutes);
app.use((req, res) => res.status(404).send("404 Not Found"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
