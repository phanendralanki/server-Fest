import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import technicalEventRoutes from "./routes/technicalEvents.routes.js";
import onlineGameRoutes from "./routes/onlineGames.routes.js";
import offlineGameRoutes from "./routes/offlineGames.routes.js";
import crazyEventRoutes from "./routes/crazyEvents.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

//routes
app.use("/api/technicalEvents",technicalEventRoutes);
app.use("/api/onlineGames",onlineGameRoutes);
app.use("/api/offlineGames",offlineGameRoutes);
app.use("/api/crazyEvent",crazyEventRoutes);

//db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});


