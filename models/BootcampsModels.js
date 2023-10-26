const mongoose = require('moongose')

//definir el modelo para bootcamps
const BootcampSchema = moongose.Schema({
    name:{ 
        type: String,
        unique: [true , "nombre de bootcamp debe ser unico"],
        required: [true , "nombre de bootcamp requerido "],
        maxlength: [50 , "longitud de nombre menor a 50"]
    },
    phone :{
        type: Number,
        maxlength:[10 , "longitud de telefono menor a 10"]
    }, 
    address:{
        type: String,
        required:[ true , "direccion requerida"],
    },
    topics: {
        type: [String],
        enum: [
            "AI" ,
            "Frontend/UX",
            "Backend",
            "DevOps"
        ]


    },
    AverageRating: Number,
    createdAt: Date,

})

module.exports = mongoose.model('Bootcamps' ,  BootcampSchema)