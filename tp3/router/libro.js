import express from 'express'
const router = express.Router()
import  { obtenerTodos, obtenerLibroPorId, crearLibro, actualizarPorId, eliminarLibroPorId } from '../controlador/libro.js'

router.get('/', obtenerTodos)
router.get('/:id', obtenerLibroPorId)
router.post('/', crearLibro)
router.put('/:id', actualizarPorId)
router.delete('/:id', eliminarLibroPorId)

export default router