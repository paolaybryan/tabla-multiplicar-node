const opts = {
  base:{
    demand:true,//especifica que sea requerido
    alias:'b',
  },
  limite:{
    alias:'l',
    default : 10
  }};
const argv = require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar',opts)
.command('crear','Genera un archivo con la tabla de multiplicar',opts).help().argv;
module.exports = {
    argv
}
// .command(['listar','crear'],'Imprime en consola la tabla de multiplicar',{
//                     base:{
//                         demand:true,//especifica que sea requerido
//                         alias:'b',
//                       },
//                       limite:{
//                         alias:'l',
//                         default : 10
//                       }
//                     }).help().argv;
