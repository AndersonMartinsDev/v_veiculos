 const express = require('express');
 const path = require('path');
 const compression = require('compression');

 const app = express();
 app.use(compression());

 const PORT = process.env.PORT || 8080 ;

 app.use(express.static(__dirname+'/dist/v_eiculos'));

 app.get('/*',(req,res)=>{
   res.sendFile(__dirname+'dist/v_veiculos/index.html')
 });

 app.listen(PORT,()=>{
  console.log("Servidor iniciado na porta"+PORT);
 });


