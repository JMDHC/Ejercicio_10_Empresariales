var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
//Parametros son: nombre del modelo, schema, nombre de la coleccion
var Articulo = mongoose.model('Articulos', schema, 'articulos');

var articulo = new Articulo({
	name: 'Nuevo blog',
	author: 'Juan Antonio Guzman',
	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ad ipsa. Perspiciatis, doloremque consectetur recusandae quidem provident voluptatibus nobis! Molestiae praesentium suscipit esse assumenda laboriosam et enim quis facilis nam!',
	comments: [
		{
			body: 'Interesante',
			date: Date.now()
		},
		{
			body: 'Resaltante investigacion',
			date: Date.now()
		}
	],
	meta: {
		votes: 126,
		favs: 98
	}
});

articulo.save(error=>{
	if(error){
		console.log(error);
		process.exit(1);
	}
	console.log("Autor guardado");
	//process.exit(0);
});

//busqueda
Articulo.find({author:"Juan Antonio Guzman"}, (error, data)=>{
	if(error){
		console.log(error);
		process.exit(1);
	}
	console.log("----------------Consulta de autor-----------------");
	console.log(data);
	//process.exit(0);
});

//actualizacion
Articulo.update({author: "Juan Antonio Guzman"}, {$set:{name:"Cambio de nombre de articulo"}}, (error, data)=>{
	if(error){
		console.log(error);
		process.exit(1);
	}
	console.log("----------------Actualizacion de autor-----------------");
	console.log(data);
	//process.exit(0);
});

//borrado
Articulo.findByIdAndRemove({_id:"5c77ee1bce65670884446245"}, (error, data)=>{
	if(error){
		console.log(error);
		process.exit(1);
	}
	console.log("----------------Borrado de autor-----------------");
	console.log(data);
	process.exit(0);
});
