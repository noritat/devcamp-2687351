const express= require('express')
const router = express.Router()


////// CURSES //////////
//evidencia: uris de curses

//traer todos los curses
router.get('/',
    (request,response)=>{
       response
            .status(200)
            .json({
                "sucess" : true,
                "msg": "mostrar todos los curses"
            })
    })

//traer todos los curses por id
    router.get('/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `seleccionando curses con id ${request.params.id}`
        })
})

//crear todos los curses
router.post('/',
    (request,response)=>{
       response
            .status(201)
            .json({
                "sucess" : true,
                "msg": "Crear curses"
            })
    })

//actualizar curses por id
router.put('/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `actualizando curses con id ${request.params.id}`
        })
})

//eliminar curses por id
router.delete('/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `eliminando curses con id ${request.params.id}`
        })
})

module.exports = router


