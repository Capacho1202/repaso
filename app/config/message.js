import color from "colors";

const message = (mensaje , tipo)=>{
    switch (tipo) {
        case "danger":
            console.log(mensaje.bgRed);
            break;
        case "warnining":
            console.log(mensaje.bgYellow);
            break
        case "success":
            console.log(mensaje.bg.Green);            
        default:
            console.log(mensaje.bgWhite);
            break;
    }
}
export default message;