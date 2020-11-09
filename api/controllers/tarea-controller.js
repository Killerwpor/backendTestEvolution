 
 const Tarea = require("../modelos/tarea-model");
 const mongoose = require("mongoose");


 
 exports.nuevaTarea = async (req, res, next) => {   
     data = JSON.parse(req.body.data);    

     var fecha=data.date.year+'/'+data.date.month+'/'+data.date.day
     const tarea = new Tarea({
       nombre: data.name,
       prioridad: data.prioridad,
       fecha: fecha,
       password: data.contrasena,
       usuario: data.usuario   
  });

 tarea.save().then(result => {
  res.status("200").send(result);
});

      
  
    
      };

       
 exports.editarTarea = async (req, res, next) => {   
  data = JSON.parse(req.body.data);    

  Tarea.findOne({ usuario: data.usuario }).then((result) => {
    var fecha=data.date.year+'/'+data.date.month+'/'+data.date.day
    result.nombre=data.name;
    result.prioridad=data.prioridad;
    result.fecha=fecha; 
      
    //Save new balance of user
    result.save(function(err) {


    });


        
       });

       res.status("200").json("Done");
   };

      exports.traerTareas = async (req, res, next) => {   
        data = JSON.parse(req.body.data);

        let result = await Tarea.find({ usuario: data.id });

        res.send(result);       
       
       
         };

         exports.eliminarTarea = async (req, res, next) => {   
          data = JSON.parse(req.body.data);
  
          let result = await Tarea.deleteOne({ nombre: data.name });
  
          res.send(result);       
         
         
           };


  