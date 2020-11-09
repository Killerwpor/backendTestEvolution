 
 const User = require("../modelos/usuario-model");
 const mongoose = require("mongoose");


 
 exports.guardarUsuario = async (req, res, next) => {   
     data = JSON.parse(req.body.data);
    
     //let result = await User.find({ email: "animesaescultura@hotmail.com" });
     



     const user = new User({
       nombre: data.nombre,
       sexo: data.sexo,
       correo: data.email,
       password: data.contrasena   
  });
  

 user.save().then(result => {
  res.status("200").send(result);
});

      
  
    
      };

      exports.login = async (req, res, next) => {   
        data = JSON.parse(req.body.data);
       var respuesta="";
        let result = await User.findOne({ correo: data.email });
        if(result!=null){

       
        if(result.password==data.clave){
         respuesta=result;
        }
        else{
         respuesta="false";
        }
      }
      else{
        respuesta="false";
      }

        res.send(respuesta);
        
       
       
         };


  