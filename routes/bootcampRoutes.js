const express= require('express')
const router = express.Router()
const BootcampModel  =require('../models/BootcampsModels')

/////////// BOOTCAMPS /////////
//uris de de bootcamps
//traer todos los bootcamps
router.get('/',
    (request,response)=>{
       response
            .status(200)
            .json({
                "sucess" : true,
                "msg": "mostrar todos los bootcamps"
            })
    })

//traer todos los bootcamp/5
router.get('/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `seleccionando bootcamp con id ${request.params.id}`
        })
})

//traer todos los bootcamps
router.post('/',
async  (request,response)=>{
//crear el nuevo bootcamp
//const bootcamp = BootcampModel.create( request.body )


       response
            .status(201)
            .json({
                "sucess" : true,
                "data": request.body
            })
    })


//actualizar bootcamp por id
router.put('/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `actualizando bootcamp con id ${request.params.id}`
        })
})

//eliminar bootcamp por id
router.delete('/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `eliminando bootcamp con id ${request.params.id}`
        })
})

module.exports = router

