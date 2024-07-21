import express, { Router } from 'express';

import HomeController from '../controllers/home';

const router = Router();

router.get('/', HomeController.renderHome);

export default router;


