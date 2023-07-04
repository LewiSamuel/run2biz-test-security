/**
* IMPORT MODULES
*/
import { Router } from 'express';
import MyPassword from '../model/Password';
const routes = Router();


routes.post("/password", (req:any, res) => {

    MyPassword.set(req.fields.password);

    let isValid = MyPassword.validate();

    return res.send({ valid: isValid, erro: MyPassword.erros });

});



export default routes;