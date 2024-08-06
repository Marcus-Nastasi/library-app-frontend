import express, { Router } from 'express';

import HomeController from '../controllers/Home';
import LoginController from '../controllers/Login';
import BookController from '../controllers/Book';

const router = Router();

router.get('/', HomeController.renderHome);

router.get('/login', LoginController.render);

// book page
router.get('/book/:id', BookController.render);

export default router;


