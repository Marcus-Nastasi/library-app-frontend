import express, { Router } from 'express';

import HomeController from '../controllers/Home';
import LoginController from '../controllers/Login';

const router = Router();

router.get('/', HomeController.renderHome);

router.get('/login', LoginController.render);

export default router;


