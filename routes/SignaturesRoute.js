import express from 'express';
import * as SignaturesController from '../controllers/Signature.js';
import { verifyUser } from '../middleware/Authuser.js';

const router = express.Router();

// Rutas para el modelo de Usuario
router.get('/signatures',verifyUser,  SignaturesController.getAllSignature);
router.get('/signatures/:id',verifyUser, SignaturesController.getSignatureById);
router.post('/signatures', verifyUser, SignaturesController.createSignature);
router.patch('/signatures/:id',verifyUser, SignaturesController.updateSignature);
router.delete('/signatures/:id',verifyUser, SignaturesController.deleteSignature);

export default router;