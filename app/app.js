import express from "express";
import messages from "./config/message.js";
const app = express();

app.listen(3000, () => {
    //console.log("HOLA MUNDO");
    messages("Hola mundo" , "danger");
})