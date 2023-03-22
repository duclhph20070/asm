import mongoose from "mongoose";
import express  from "express";
import producRouter from "./routers/product";

const app = express();

app.use(express.json());
app.use("/api", producRouter);

mongoose.connect("mongodb://127.0.0.1:27017/asm");

export const viteNodeApp = app;


