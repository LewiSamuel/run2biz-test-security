/**
* import modules
*/
import path from 'path';
import express from 'express';
import formidableMiddleware from 'express-formidable';
import cors from 'cors';

/**
* Routes
*/
import routes from './routes';

/**
* Importa e inicializa o servidor express
*/
const app = express();

/**
* Habilita a todas rotas receber requisições de todas as origens 
*/
app.use(cors());

/**
* Implementa toda comunicação recebida em JSON
* Captura informações passadas via FormData
*/
app.use(express.json());
app.use(formidableMiddleware());
/**
* importa e implementa o arquivo de rotas no servidor
* - */ 
app.use(routes);

/**
* set porta padrão de execução do servidor
* Caso nao esteja definida no .env, usa a 5000 por padrão
*/
app.set('port', (process.env.PORT || 5000));

/**
* Start server
*/
app.listen(app.get('port'), function() {
    console.log("🌐- - - - - - - - - - - - - - - - - - - - - - - - - -🌐")
    console.log("| ");
    console.log('|  Run2Biz - API ❤️');
    console.log('|  💻 API running at http://localhost:' + app.get('port'));
    console.log("| ");
    console.log("🌐- - - - - - - - - - - - - - - - - - - - - - - - - -🌐")
});