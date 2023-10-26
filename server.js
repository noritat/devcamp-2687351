//Dependencia commonjs
const express = require('express')
const dotenv=require('dotenv')
const colors=require('colors')
//dependencia de rutas
const bootcampRoutes= require('./routes/bootcampRoutes')
const coursesRoutes= require('./routes/coursesRoutes')
const reviewsRoutes= require('./routes/reviewsRoutes')
//DEPENDENcIA PARA CONEXION
const connectDB=require('./config/db')

///establecer archivob .env del proyecto
dotenv.config({
    path:'./config/.env'
    
    })

connectDB()

//crear el objeto app
const app= express()

//express para recibir datos json
app.use(express.json())

//vincular las rutas de bootcamps
app.use('/api/v1/devcamp/bootcamps' , bootcampRoutes)
app.use('/api/v1/devcamp/courses' , coursesRoutes)
app.use('/api/v1/devcamp/reviews' , reviewsRoutes)


//primera prueba de url del servidor
app.get('/prueba' , 
        function(request, response){
            response.send("Holaaaaaaa")
})


//establecer servidor
const PUERTO = process.env.EXPRESS_PORT;
app.listen( PUERTO, 
        console.log('Servidor escuchando en el puerto:'+$PUERTO.bgBlue.green)) 
    