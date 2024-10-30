const libros = []
import Libro from '../model/libro.js'

const buscarPorId = (id) => libros.find(l => l.id == parseInt(req.params.id))

export const obtenerTodos = (req, res) => {
    res.json(libros)
}

export const obtenerLibroPorId = (req, res) => {
    const libro = buscarPorId(req.params.id)
    if(!libro) return res.status(404).json({message: 'Libro no encontrado'})
    res.json(libro)
}

export const crearLibro = (req, res) => {
    const {id, titulo, autor, anio} = req.body
    const libroN = new Libro(id, titulo, autor, anio)
    libros.push(libroN)
    res.status(201).json(libroN)
}

export const actualizarPorId = (req, res) => {
    const libro =  buscarPorId(req.params.id)
    if(!libro) return res.status(404).json({message: 'Libro no encontrado'})
    
    const {titulo, autor, anio} = req.body
    libro.titulo = titulo || libro.titulo
    libro.autor = autor || libro.autor
    libro.anio = anio || libro.anio

    res.json(libro)
}

export const eliminarLibroPorId = (req, res) => {
    const i = libros.findIndex(l => l.id == parseInt(req.params.id))
    if(i == -1) return res.status(404).json({message: 'Libro no encontrado'})
    
    libros.splice(i, 1)
    res.status(204).send()    
}

