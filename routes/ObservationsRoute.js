import express from 'express';
import * as ObservationsController from '../controllers/Observations.js';
import { verifyUser } from '../middleware/Authuser.js';

const router = express.Router();

// Rutas para el modelo de Usuario
router.get('/observation', verifyUser,  ObservationsController.getAllObservation);
router.get('/observation/:id', verifyUser, ObservationsController.getObservationById);
router.post('/observation',verifyUser, ObservationsController.createObservation);
router.patch('/observation/:id', verifyUser,ObservationsController.updateObservation);
router.delete('/observation/:id',verifyUser, ObservationsController.deleteObservation);

export default router;