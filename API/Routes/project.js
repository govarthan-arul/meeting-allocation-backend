import express from 'express';
import { createProject, deleteProject, getProject, getProjects, updateProject } from '../Controllers/project.js';

const router = express.Router();


router.get('/', getProjects)

router.post('/', createProject)

router.get('/:id', getProject)

router.delete('/:id', deleteProject)

router.patch('/:id', updateProject)



export default router;