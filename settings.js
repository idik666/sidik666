const fs = require('fs')
const chalk = require('chalk')

// APIKEY OPEN AI
global.jeropenai  = "sk-proj-Frq5uoNefC1FEU9wDZ6nT3BlbkFJA7fzX10e6yhI2HzBmQXx" // ISI APIKEY LU

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'hHcn9wnOyylwRHX', // ISI APIKEY LU
}

global.namabot = "RICH BOT" // UBAH JADI NAMA LU
global.namaowner = "RICHARD" // NAMA OWNER
global.footer_text = "© RICH404" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/qris.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['62851768474046'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("*") // ISI HARGA SEWA BOT LU
global.grubbot = (`*I`) // GANTI LINK GRUB BOT LU \\
// -- \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS
global.autoblok212 = false // BEBAS
global.autoread = false // BEBAS
global.autorespon = false // BEBAS
global.onlyprem = false // BEBAS
global.onlygrub = true // BEBAS
global.onlypc = false // BEBAS
// - \\
// PEMISAH \\
global.packname = '© ' //sticker wm ubah
global.author = 'RICH404' //sticker wm ganti nama kalian

// BUG MENU \\
global.jumlah = "5"
global.audionya = fs.readFileSync("./sound.mp3")

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})