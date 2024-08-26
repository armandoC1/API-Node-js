import { Router } from "express";

import {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteById

} from '../controllers/estudiante.controller';

const router = Router();

router.post('/students/save', createStudent);
router.get('/students', getAllStudents);
router.get('/students/details/:id', getStudentById);
router.put('/students/update/:id', updateStudent);
router.delete('/students/delete/:id', deleteById);


export default router;
