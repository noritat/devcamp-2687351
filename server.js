//Dependencia commonjs
const express = require('express');

//crear el objeto app
const app= express();

//primera prueba de url del servidor
app.get('/prueba' , 
        function(request, response){
            response.send("Holaaaaaaa")
})

//////////// BOOTCAMPS /////////
//uris de de bootcamps
//traer todos los bootcamps
app.get('/api/v1/devcamp/bootcamps',
    (request,response)=>{
       response
            .status(200)
            .json({
                "sucess" : true,
                "msg": "mostrar todos los bootcamps"
            })
    })

    //traer todos los bootcamp/5
app.get('/api/v1/devcamp/bootcamps/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `seleccionando bootcamp con id ${request.params.id}`
        })
})

//traer todos los bootcamps
app.post('/api/v1/devcamp/bootcamps',
    (request,response)=>{
       response
            .status(201)
            .json({
                "sucess" : true,
                "msg": "Crear bootcamp"
            })
    })


//actualizar bootcamp por id
app.put('/api/v1/devcamp/bootcamps/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `actualizando bootcamp con id ${request.params.id}`
        })
})

//eliminar bootcamp por id
app.delete('/api/v1/devcamp/bootcamps/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `eliminando bootcamp con id ${request.params.id}`
        })
})


////// CURSES //////////
//evidencia: uris de curses

//traer todos los curses
app.get('/api/v1/devcamp/curses',
    (request,response)=>{
       response
            .status(200)
            .json({
                "sucess" : true,
                "msg": "mostrar todos los curses"
            })
    })

    //traer todos los curses por id
app.get('/api/v1/devcamp/curses/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `seleccionando curses con id ${request.params.id}`
        })
})

//crear todos los curses
app.post('/api/v1/devcamp/curses',
    (request,response)=>{
       response
            .status(201)
            .json({
                "sucess" : true,
                "msg": "Crear curses"
            })
    })

//actualizar curses por id
app.put('/api/v1/devcamp/curses/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `actualizando curses con id ${request.params.id}`
        })
})

//eliminar curses por id
app.delete('/api/v1/devcamp/curses/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `eliminando curses con id ${request.params.id}`
        })
})



////// REVIEWS //////////
//evidencia: uris de reviews

//traer todos los reviews
app.get('/api/v1/devcamp/reviews',
    (request,response)=>{
       response
            .status(200)
            .json({
                "sucess" : true,
                "msg": "mostrar todos los reviews"
            })
    })

    //traer todos los reviews por id
app.get('/api/v1/devcamp/reviews/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `seleccionando reviews con id ${request.params.id}`
        })
})

//crear todos los reviews
app.post('/api/v1/devcamp/reviews',
    (request,response)=>{
       response
            .status(201)
            .json({
                "sucess" : true,
                "msg": "Crear reviews"
            })
    })


//actualizar reviews por id
app.put('/api/v1/devcamp/reviews/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `actualizando reviews con id ${request.params.id}`
        })
})

//eliminar curses por id
app.delete('/api/v1/devcamp/reviews/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `eliminando reviews con id ${request.params.id}`
        })
})


////// USERS //////////
//evidencia: uris para users

//traer todos los users
app.get('/api/v1/devcamp/users',
    (request,response)=>{
       response
            .status(200)
            .json({
                "sucess" : true,
                "msg": "mostrar todos los users"
            })
    })

    //traer todos los users por id
app.get('/api/v1/devcamp/users/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `seleccionando users con id ${request.params.id}`
        })
})

//crear todos los users
app.post('/api/v1/devcamp/users',
    (request,response)=>{
       response
            .status(201)
            .json({
                "sucess" : true,
                "msg": "Crear users"
            })
    })


//actualizar users por id
app.put('/api/v1/devcamp/users/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `actualizando users con id ${request.params.id}`
        })
})

//eliminar users por id
app.delete('/api/v1/devcamp/users/:id',
(request,response)=>{
   response
        .status(200)
        .json({
            "sucess" : true,
            "msg": `eliminando users con id ${request.params.id}`
        })
})


//establecer servidor
const PUERTO = 4500;

app.listen( PUERTO , 
        console.log("Servidor escuchando en el puerto: "+ PUERTO)

          )   