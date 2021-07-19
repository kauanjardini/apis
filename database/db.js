var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = '';
try {
if(url == '') throw console.log(color('Cek konfigurasi database, var url belum diisi','red'));
} catch (e) {
	return;
	}
var db = monk(url);

db.then(() => {
  console.log(color('Connectado ao servidor','green'))
})
.catch ((e) => {
	console.log(color('Error : '+ e +'\n\nGagal connectando a  database, \ncek configurasi database apakah Connection URL sudah benar','red'))
	})


module.exports = db
