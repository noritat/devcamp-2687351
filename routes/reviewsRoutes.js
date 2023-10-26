const express= require('express')
const router = express.Router()

////// REVIEWS //////////
//evidencia: uris de reviews

//traer todos los reviews
router.get('/api/v1/devcamp/reviews',
    (request,response)=>{
       response
            .status(200)
            .json({
                "sucess" : true,
                "msg": "mostrar todos los reviews"
            })
    })

    //traer todos los reviews por id
    router.get('/api/v1/devcamp/reviews/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `seleccionando reviews con id ${request.params.id}`
        })
})

//crear todos los reviews
router.post('/api/v1/devcamp/reviews',
    (request,response)=>{
       response
            .status(201)
            .json({
                "sucess" : true,
                "msg": "Crear reviews"
            })
    })


//actualizar reviews por id
router.put('/api/v1/devcamp/reviews/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `actualizando reviews con id ${request.params.id}`
        })
})

//eliminar curses por id
router.delete('/api/v1/devcamp/reviews/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `eliminando reviews con id ${request.params.id}`
        })
})

module.exports = router