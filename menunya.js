require('./settings.js')
require('./store.js')

const chalk = require('chalk')
const fs = require('fs')
const moment = require('moment-timezone');
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const ini_mark = `6285156028374@s.whatsapp.net`
const os = require('os')

const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

module.exports.helpMenu = (pushname) =>{
	return `Halo Kak @${m.sender.split("@")[0]}, Selamat ${salam}\nAda Yang Bisa ${namabot} Bantu ?

╭─❒ 「 *INFO BOT* 」
│
│Nama Bot 	: ${namabot}
│Creator 	: ${owner}
│Sponsored 	: ${ini_mark.split('@')[0]}
│Runtime 	: ${runtime(process.uptime())}
│Time		: ${time}

│
╰❒ 

○ Ketik *#semuamenu* = Menampilkan semua menu
○ Ketik *#sewa* = Menampilkan harga sewa
○ Ketik *#buyprem* = Menampilkan harga Premium
○ Ketik *#owner* = Menampilkan owner bot

_KATA-KATA HARI INI_ 

*JUJUR ITU SOPAN .*
*BERBAGI ITU BAIK*

`
}

global.fakelink = ("https://instagram.com/akangfirmanqrew") // bebas asal jan hapus



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})