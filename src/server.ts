import express from "express";
import process from "process";
import configViewEngine from "./config/viewEngine";
import router from "./router/web";

const app = express();
const port: number = parseInt(process.env.PORT);
const hostname: string = process.env.HOST_NAME;

//Config ViewEngine
configViewEngine(app);


//Declaration Router
app.use('/', router);

app.listen(port, hostname, (): void => {
    console.log(`Example app listening on port localhost:${port}`);
});