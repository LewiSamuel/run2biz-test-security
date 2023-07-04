/**
* IMPORT MODULES
*/
import { Router } from 'express';
import Password from './routes/Password';
import Address from './routes/Address';

const routes = Router();

// Rota principal
routes.get("/", (req, res) => res.send("💻 Run2Biz - API ❤️"));

// Cor routes
routes.use("/v1/question/1", Password);
routes.use("/v1/question/2", Address);


export default routes;