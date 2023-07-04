/**
* IMPORT MODULES
*/
import { Router } from 'express';
import MyAddress from '../model/Address';
const routes = Router();


routes.post("/address", (req:any, res) => {

    MyAddress.set(req.files.commands);

    let valueAddress = MyAddress.calcular();

    return res.send({ address: valueAddress, instrucoes: MyAddress.instrucoes });

});



export default routes;