import express, { Router } from 'express';

import HomeController from '../controllers/Home';
import LoginController from '../controllers/Login';
import BookController from '../controllers/Book';
import Rent from '../controllers/Rent';
import Member from '../controllers/Member';

const router = Router();

router.get('/', HomeController.renderHome);

router.get('/login', LoginController.render);

// book page
router.get('/book/:id', BookController.render);

// rent
router.get('/rent', Rent.render);

// member
router.get('/members', Member.render);

export default router;


