import express from 'express';
import path from 'path';
import isLoggedIn from '../middlewares/isLoggedIn.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const router = express.Router();

const views = path.join(__dirname, '../views');

router.get('/', isLoggedIn, (req, res) => {
    res.sendFile(views + '/index.html');
});

router.get("/register", (req, res) => {
    res.sendFile(views + '/register.html');
});

export default router;