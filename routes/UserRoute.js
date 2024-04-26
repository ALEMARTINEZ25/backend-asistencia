import express from 'express';
import * as UserController from '../controllers/Users.js';
import { verifyUser, adminOnly } from '../middleware/Authuser.js';

const router = express.Router();

// Rutas para el modelo de Usuario
router.get('/users',verifyUser, adminOnly, UserController.getUsers);
router.get('/users/:id',verifyUser,adminOnly,  UserController.getUserById);
router.post('/users',verifyUser, adminOnly, UserController.createUser);
router.patch('/users/:id',verifyUser, adminOnly, UserController.updateUser);
router.delete('/users/:id',verifyUser, adminOnly, UserController.deleteUser);

export default router;