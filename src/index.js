import express from 'express';
import path from 'path';
import { createServer } from 'http';
import realTimeServer from './realtimeServer.js';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import routes from './routes/index.js';

const app = express();
const httServer = createServer(app);

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

realTimeServer(httServer);

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());

//Routes
app.use(routes);

//Public
app.use(express.static(path.join(__dirname, 'public')));

//Levanto el servidor
httServer.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});