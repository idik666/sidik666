// NOTE BAGI YANG BELI SC INI \\

// JIKA MEMAKAI PANEL DI ENC DLU \\
// BUKAN PANEL AJA KALO MAU TARO SCRIPT NYA DI GITHUB JUGA USAHAKAN ENC \\
// KALO KAGAK DI ENC SC LU KELIATAN SAMA OWNER PANEL \\
// TUTORIAL ENC https://youtu.be/f5b2MJj9TPM

require('./settings')
require('./menunya')
require('./alpha')
require('./RANDOM/SCRAPER/scraper')

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, MessageType } = require('@whiskeysockets/baileys')
const fs = require('fs');
const pantek = require("parse-ms")
const os = require('os')
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment-timezone');
const ms = toMs = require('ms');
const vm = require('node:vm')
const { Configuration, OpenAIApi } = require("openai");
const FormData = require("form-data");
const translate = require("@vitalets/google-translate-api");
const toMS = require('ms');
const _sewa = require('./lib/sewa')
const { fromBuffer } = require('file-type')
const scp1 = require('./RANDOM/SCRAPER/scraper') 
const { fetchBuffer } = require("./lib/myfunc2")
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const fsx = require('fs-extra')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const crypto = require("crypto");
const maker = require('mumaker')
const hxz = require("hxz-api");
const photooxy = require('./RANDOM/SCRAPER/photooxy')
const speed = require('performance-now')
const request = require('request');
const xfar = require('xfarr-api')

const {
formatp,
formatDate,
getTime,
clockString,
format,
logic,
generateProfilePicture,
parseMention
} = require('./lib/myfunc')

const {
 FajarNews, 
 BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme, 
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api");

const {
igdl
} = require('./lib/scraper')

// JADIBOT \\
const { jadibot, alphas } = require('./RANDOM/JADIBOT/jadibot')

// AFK \\
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
const afk = require("./lib/afk");

// CONST STALKER \\
const { stalkff } = require("./RANDOM/STALKER/stalk-ff");
const { stalkml } = require("./RANDOM/STALKER/stalk-ml");
const npmstalk = require('./RANDOM/STALKER/npmstalk')
const githubstalk = require('./RANDOM/STALKER/githubstalk')

// Cerita \\
const { cerpen } = require('./RANDOM/CERPEN/cerpen')

// REMINI 
const { remini } = require('./lib/remini')

// BUTTONS BUGS
const { button } = require('./lib/button')

// DATABASE GAME \\
const _family100 = {}
const tebakgambar = {}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkota = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
const sewa = db.data.sewa
//-\\

//-\\
const similarity = require('similarity')
const threshold = 0.72

const jawabanBenar = (tebak) => {
return` ${tebak} \n\nJawaban Benar \nSelamat Kamu Ga Dapet Apa-Apa🗿`
}
const waktuHabis = (jawaban) => {
return `Waktu Habis\nJawaban:  ${jawaban}`
}

const qtod = m.quoted? "true":"false"

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

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
axios.get('https://dumpor.com/v/'+Username, {
headers: {
"cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
}
}).then(res => {
var $ = cheerio.load(res.data)
const result = {
profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
}
resolve(result)
})
  })
}

async function facebook(url) {
await axios.get('https://downvideo.net/').then(gdata => {
var a = cheerio.load(gdata.data)
const token = a('body > div > center > div.col-md-10 > form > div > input[type=hidden]:nth-child(2)').attr('value')
const options = {
method: "POST",
url: `https://downvideo.net/download.php`,
headers: {
"content-type": 'application/x-www-form-urlencoded',
"cookie": gdata["headers"]["set-cookie"],
"user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
},
formData: {
url: url,
token: token,
},
};
request(options, async function(error, response, body) {
if (error) throw new Error(error)
let $ = cheerio.load(body)
const result = {
status: 200,
author: author,
title: $('body').find('div:nth-child(1) > h4').text(),
sd: $('#sd > a').attr('href'),
hd: $('body').find('div:nth-child(7) > a').attr('href')
}
resolve(result)
})
})
}

async function metronews() {
return new Promise((resolve) => {
axios.get('https://www.metrotvnews.com/news').then(({ data }) => {
var $ = cheerio.load(data)
const judul = [];
const desc = [];
const link = [];
const thumb = [];
const tag = [];
const result = [];
$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > div > h3 > a').each(function(a, b) {
judul.push($(b).attr('title'))
})
$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > div > p').each(function(a, b) {
deta = $(b).text();
desc.push(deta)
})
$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > div > h3 > a').each(function(a, b) {
link.push('https://www.metrotvnews.com' + $(b).attr('href'))
})
$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > img').each(function(a, b) {
thumb.push($(b).attr('src').replace('w=300', 'w=720'))
})
for (let i = 0; i < judul.length; i++) {
result.push({
judul: judul[i],
link: link[i],
thumb: thumb[i],
deskripsi: desc[i]
})
}
resolve(result)
})
})
}

async function twiter() {
let body = new URLSearchParams({
"sf_url": encodeURI(arguments[0]),
"sf_submit": "",
"new": 2,
"lang": "id",
"app": "",
"country": "id",
"os": "Windows",
"browser": "Chrome",
"channel": " main",
"sf-nomad": 1
});
let {
data
} = await axios({
"url": "https://worker.sf-tools.com/savefrom.php",
"method": "POST",
"data": body,
"headers": {
"content-type": "application/x-www-form-urlencoded",
"origin": "https://id.savefrom.net",
"referer": "https://id.savefrom.net/",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36"
}
});
let exec = '[]["filter"]["constructor"](b).call(a);';
data = data.replace(exec, `\ntry {\ni++;\nif (i === 2) scriptResult = ${exec.split(".call")[0]}.toString();\nelse (\n${exec.replace(/;/, "")}\n);\n} catch {}`);
let context = {
"scriptResult": "",
"i": 0
};
vm.createContext(context);
new vm.Script(data).runInContext(context);
return JSON.parse(context.scriptResult.split("window.parent.sf.videoResult.show(")?.[1].split(");")?.[0])
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
Accept: "*/*",
"Accept-Language": "en-US,en;q=0.9",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"]?.join("; "),
...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"].join("; ")
}
})
return build_server + data.image
}

async function facebook2() {
return new Promise(async(resolve, reject) => {
await axios.get('https://downvideo.net/').then(gdata => {
const a = cheerio.load(gdata.data)
const token = a('body > div > center > div.col-md-10 > form > div > input[type=hidden]:nth-child(2)').attr('value')
const options = {
method: "POST",
url: `https://downvideo.net/download.php`,
headers: {
"content-type": 'application/x-www-form-urlencoded',
"cookie": gdata["headers"]["set-cookie"],
"user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
},
formData: {
URL: url,
token: token,
},
};
request(options, async function(error, response, body) {
if (error) throw new Error(error)
const $ = cheerio.load(body)
const result = {
status: 200,
title: $('body').find('div:nth-child(1) > h4').text(),
sd: $('#sd > a').attr('href'),
hd: $('body').find('div:nth-child(7) > a').attr('href')
}
resolve(result)
})
})
})
}

// Auto Reset Limit
setInterval(function() { 
var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
if(hasilnes === '12:00:00 AM') {
limit = []
fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
glimit = []
fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
console.log("Limit Sudah Di Reset!")
}
}, 1000);

// Bandwidth
async function checkBandwidth() {
let ind = 0;
let out = 0;
for (let i of await require("node-os-utils").netstat.stats()) {
ind += parseInt(i.inputBytes);
out += parseInt(i.outputBytes);
}
return {
download: format(ind),
upload: format(out),
};
}

const nebal = (angka) => {
return Math.floor(angka)
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '',
O: '',
1: '1',
2: '2',
3: '3',
4: '4',
5: '5',
6: '6',
7: '7',
8: '8',
9: '9',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['', ''][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
: @${room.game.playerX.split('@')[0]}
: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) alpha.sendText(room.x, str, m, { mentions: parseMention(str) } )
alpha.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

if (fs.existsSync(`./database/casino/${m.chat}.json`)) {
var casinoo = setCasino(`${m.chat}`)
if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'n') {
alpha.sendMessage(m.chat, { text: ` Game Casino Rejected \n\n� @${casinoo.Y.split("@")[0]} Membatalkan Game`, mentions: [casinoo.Y] }, {quoted: m })
deleteCasino(m.chat)
}
if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'y') {
var angka1 = randomNomor(10, 20)
var angka2 = randomNomor(10, 20)
if (angka1 > angka2) {
starGame =  ` Casino Game 

� @${casinoo.Z} --> ${angka1} 
� @${casinoo.Y.split('@')[0]} --> ${angka2} 

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
alpha.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y]}, {quoted: m })
addBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
kurangBalance(`${casinoo.Y}`, nebal(casinoo.nominal), balance)
deleteCasino(m.chat)
} else if (angka1 < angka2) {
starGame =  ` Casino Game 

� @${casinoo.Z} --> ${angka1} 
� @${casinoo.Y.split('@')[0]} --> ${angka2} 

Pemenangnya adalah [ @${casinoo.Y.split('@')[0]} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
alpha.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y] }, {quoted: m })
addBalance(`${casinoo.Y}`, nebal(casinoo.nominal), balance)
kurangBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
deleteCasino(m.chat)
} else if (angka1 = angka2) {
starGame =  ` Casino Game 

� @${casinoo.Z} --> ${angka1} 
� @${casinoo.Y.split('@')[0]} --> ${angka2} 

Games Draw, Tidak Ada Pemenang`
alpha.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y]}, { quoted: m })
deleteCasino(m.chat)
}
}
}

async function grubonly () {
alpha.sendContact(m.chat, global.owner, m)
return("Sedang")
}

let set_bot = JSON.parse(fs.readFileSync('./database/set_bot.json'));
const { smsg, fetchJson, getBuffer } = require('./lib/simple')
const { 
  updateResponList,
  delResponList,
  isAlreadyResponListGroup,
  sendResponList,
  isAlreadyResponList,
  getDataResponList,
  addResponList,
  isSetClose,
addSetClose,
removeSetClose,
changeSetClose,
getTextSetClose,
isSetDone,
addSetDone,
removeSetDone,
changeSetDone,
getTextSetDone,
isSetLeft,
addSetLeft,
removeSetLeft,
changeSetLeft,
getTextSetLeft,
isSetOpen,
addSetOpen,
removeSetOpen,
changeSetOpen,
getTextSetOpen,
isSetProses,
addSetProses,
removeSetProses,
changeSetProses,
getTextSetProses,
isSetWelcome,
addSetWelcome,
removeSetWelcome,
changeSetWelcome,
getTextSetWelcome,
addSewaGroup,
getSewaExpired,
getSewaPosition,
expiredCheck,
checkSewaGroup,
addPay,
getTextSetBot,
isSetBot,
addSetBot,
removeSetBot,
changeSetBot,
updatePay
} = require("./lib/store")

async function getGroupAdmins(participants){
let admins = []
for (let i of participants) {
i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
} 
return admins || []
}

// DATABASE \\ - /-\
const _prem = require("./lib/premium");
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
const mute = JSON.parse(fs.readFileSync('./database/mute.json'));
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const isBanned = JSON.parse(fs.readFileSync('./database/banned.json'))
const grub = JSON.parse(fs.readFileSync('./database/grubonly.json'));
//=\\

// RPG \\
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,addIkan,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addInventori, sellBesi, addDm, sellDm, getDm, sellEmas, addFish, sellFish, getFish, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald,  kurangUmpan, kurangPotion,getBesi, getEmas, getEmerald,getUmpan,getPotion} = require('./database/user/rpg.js')
const isPetualang = checkPetualangUser(m.sender)
const _petualang = JSON.parse(fs.readFileSync('./database/user/inventory.json'))
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah }  = require('./database/user/darah.js')
const { cekInventoryAdaAtauGak } = require('./database/user/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson,  addMonay, kurangMonay, getMonay } = require('./database/user/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit } = require('./database/user/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi,kurangGajah, getIkan, getAyam, getKelinci, getDomba,getSapi,getGajah} = require('./database/user/buruan.js')

let DarahAwal =  100;
const ikan = ['','','']
const enter = '\n'
// FUNCTION 

function hitungmundur(bulan, tanggal) {
let from = new Date(`${bulan} ${tanggal}, 2024 00:00:00`).getTime();
let now = Date.now();
let distance = from - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
}

function msToDate(mse) {
temp = mse
days = Math.floor(mse / (24 * 60 * 60 * 1000));
daysms = mse % (24 * 60 * 60 * 1000);
hours = Math.floor((daysms) / (60 * 60 * 1000));
hoursms = mse % (60 * 60 * 1000);
minutes = Math.floor((hoursms) / (60 * 1000));
minutesms = mse % (60 * 1000);
sec = Math.floor((minutesms) / (1000));
return days + " Days " + hours + " Hours " + minutes + " Minutes";
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}

const jsonformat = (string) => {
return JSON.stringify(string, null, 2)
}

async function UploadDulu(medianya, options = {}) {
const { ext } = await fromBuffer(medianya) || options.ext
var form = new FormData()
form.append('file', medianya, 'tmp.'+ext)
let jsonnya = await fetch('https://tenaja.zeeoneofc.repl.co/upload', {
method: 'POST',
body: form
})
.then((response) => response.json())
return jsonnya
}

const sendapk = (teks) => {
alpha.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
m.reply('Rusak Bodoh !! Yang Bener Contoh : Yoapk DIN WA')
}
for (let ikalii of apknye) {
if (budy.ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii}.apk`)
sendapk(buffer)
}
}
//=================================================//
const sendzip = (teks) => {
alpha.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
m.reply('Rusak Bodoh !! Yang Bener Contoh : Yozip DIN WA')
}
for (let ikali of zipnye) {
if (budy.ikali) {
let buffer = fs.readFileSync(`./database/zip/${ikali}.zip`)
sendzip(buffer)
}
}
//=================================================//
let reactionMessage = require("@whiskeysockets/baileys").proto.Message.ReactionMessage.create({ key: m.key, text: "" })

const senddocu = (teks) => {
alpha.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
m.reply('Rusak Bodoh !! Yang Bener Contoh : Yopdf  DIN WA')
}
for (let ikal of docunye) {
if (budy.ikal) {
let buffer = fs.readFileSync(`./database/Docu/${ikal}.pdf`)
senddocu(buffer)
}
}
const sendvn = (teks) => {
alpha.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

const tanggal = (numer) => {
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
var tgl = new Date(numer);
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy; 
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]

return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

module.exports = alpha = async (alpha, m, chatUpdate, store, opengc, antilink, antiwame, antilink2, antiwame2, set_welcome_db, set_left_db, set_proses, set_done, set_open, set_close, sewa, _welcome, _left, db_respon_list, ) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const isCmd = /^[���׶������_=|~!?#/$%^&.+-,\\\�^]/.test(body)
const prefix = isCmd ? budy[0] : ''
const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await alpha.decodeJid(alpha.user.id)
const isCreator = ["6285156028374@s.whatsapp.net",botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const from = m.key.remoteJid
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const AntiNSFW = m.isGroup ? ntnsfw.includes(from) : false
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isPremium = _prem.checkPremiumUser(m.sender, premium)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isSewa = checkSewaGroup(m.chat, sewa)
const isAntiLink = antilink.includes(m.chat) ? true : false
const isAntiWame = antiwame.includes(m.chat) ? true : false  
const isAntiLink2 = antilink2.includes(m.chat) ? true : false
const isAntiWame2 = antiwame2.includes(m.chat) ? true : false  
const isWelcome = _welcome.includes(m.chat)
const isLeft = _left.includes(m.chat)
const isMute = mute.includes(m.chat) ? true : false
const isOnlyGrub = grub.includes(m.chat) ? true : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const isAfkOn = afk.checkAfkUser(m.sender, _afk)

async function reply(teks) {
  const po = {
          contextInfo: {
      },
      text: teks
  };
  return alpha.sendMessage(m.chat, po,
  );
};

const fkontak = { key: {fromMe: false,participant: `6285156028374@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `RENZ PAYMENT\n`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;alphaBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/33e79ab21ec0446cc3e4f.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
async function setReply(teks) {
 const ngel = {
 contextInfo: {
 mentionedJid: [m.sender],
 forwardingScore: 9999999, 
  isForwarded: true, 
  externalAdReply: {
  showAdAttribution: true,
  title: '© Renz Payment',
  body: `Renz Payment Store`,
  previewType: "PHOTO",
  thumbnailUrl: "https://telegra.ph/file/ec8922a71e83f6f94631f.jpg",
  sourceUrl: ''
   }
  },
 text: teks
  };
return alpha.sendMessage(m.chat, ngel, { quoted: fkontak});
};

_sewa.expiredCheck(alpha, sewa)
async function getGcName(groupID) {
try {
let data_name = await alpha.groupMetadata(groupID)
return data_name.subject
} catch (err) {
return '-'
}
}

if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Chat Pribadi', m.chat))
}

if(m.isGroup){
expiredCheck(alpha, sewa)
}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

//TIME
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')

//autotyper all
if (global.autoTyping) { if (m.chat) { alpha.sendPresenceUpdate('composing', m.chat) }
}

// Mute Chat
if (m.isGroup && isMute && !isAdmins && !isCreator) {

return

}

// JAPRI ONLY
if(!isCreator && global.onlypc && m.isGroup) {

  return reply("Halo Kak, Jika Mau Gunakan Bot Ini Silahkan Chat Ke Pribadi Bot")
}

if (m.isGroup) {
const Fisha = await getMancingIkan(m.sender)
const FishId = await getMancingId(m.sender)
if (Fisha === undefined && FishId === undefined) await addMancingId(m.sender)
}

if (m.isGroup) {
const Hapea = await getBertualangPlanet(m.sender)
const HapeId = await getPlaneId(m.sender)
if (Hapea === undefined && HapeId === undefined) await addPlaneId(m.sender)
}

if (m.isGroup) {
const Coala = await getMiningcoal(m.sender)
const CoalId = await getMiningId(m.sender)
if (Coala === undefined && CoalId === undefined) await addMiningId(m.sender)
}

if (m.isGroup) {
const Stonea = await getMiningstone(m.sender)
const StoneId = await getBatuId(m.sender)
if (Stonea === undefined && StoneId === undefined) await addBatuId(m.sender)
}

if (m.isGroup) {
const Orea = await getMiningore(m.sender)
const OreId = await getOreId(m.sender)
if (Orea === undefined && OreId === undefined) await addOreId(m.sender)
}

if (m.isGroup) {
const Ingota = await getMiningingot(m.sender)
const IngotId = await getIngotId(m.sender)
if (Ingota === undefined && IngotId === undefined) await addIngotId(m.sender)
}

if (m.isGroup) {
const Kayua = await getNebangKayu(m.sender)
const KayuId = await getNebangId(m.sender)
if (Kayua === undefined && KayuId === undefined) await addNebangId(m.sender)
}

if (m.isGroup ) {
const checkATM = await checkATMuser(m.sender)
try {
if (checkATM === undefined) await addATM(m.sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(m.sender, uangsaku)
} catch (err) {
console.error(err)
}
}
const levelRole = await getLevelingLevel(m.sender)
var role = 'Bronze 1'
if (levelRole <= 2) {
role = 'Bronze 1'
} else if (levelRole <= 10) {
role = 'Bronze 2'
} else if (levelRole <= 20) {
role = 'Bronze 3'
} else if (levelRole <= 30) {
role = 'Bronze 4'
} else if (levelRole <= 40) {
role = 'Bronze 5'
} else if (levelRole <= 70) {
role = 'Silver 1'
} else if (levelRole <= 85) {
role = 'Silver 2'
} else if (levelRole <= 95) {
role = 'Silver 3'
} else if (levelRole <= 105) {
role = 'Silver 4'
} else if (levelRole <= 125) {
role = 'Silver 5'
} else if (levelRole <= 150) {
role = 'Gold 1'
} else if (levelRole <= 170) {
role = 'Gold 2'
} else if (levelRole <= 190) {
role = 'Gold 3'
} else if (levelRole <= 210) {
role = 'Gold 4'
} else if (levelRole <= 230) {
role = 'Gold 5'
} else if (levelRole <= 260) {
role = 'Platinum 1'
} else if (levelRole <= 290) {
role = 'Platinum 2'
} else if (levelRole <= 320) {
role = 'Platinum 3'
} else if (levelRole <= 350) {
role = 'Platinum 4'
} else if (levelRole <= 380) {
role = 'Platinum 5'
} else if (levelRole <= 410) {
role = 'Diamond 1'
} else if (levelRole <= 450) {
role = 'Diamond 2'
} else if (levelRole <= 500) {
role = 'Diamond 3'
} else if (levelRole <= 550) {
role = 'Diamond 4'
} else if (levelRole <= 600) {
role = 'Diamond 5'
} else if (levelRole <= 700) {
role = 'Master'
} else if (levelRole <= 800) {
role = 'Master '
} else if (levelRole <= 900) {
role = 'Master '
} else if (levelRole <= 1000) {
role = 'Master '
} else if (levelRole <= 1100) {
role = 'Master '
} else if (levelRole <= 1225) {
role = 'Master '
} else if (levelRole <= 1340) {
role = 'Master '
} else if (levelRole <= 1400) {
role = 'GrandMaster'
} else if (levelRole <= 1555) {
role = 'GrandMaster '
} else if (levelRole <= 1660) {
role = 'GrandMaster '
} else if (levelRole <= 1710) {
role = 'GrandMaster '
} else if (levelRole <= 1825) {
role = 'GrandMaster '
} else if (levelRole <= 1950) {
role = 'GrandMaster '
} else if (levelRole <= 2000) {
role = 'GrandMaster '
} else if (levelRole <= 2220) {
role = 'Legends'
} else if (levelRole <= 2500) {
role = 'Legends 2'
} else if (levelRole <= 2700) {
role = 'Legends 3'
} else if (levelRole <= 2900) {
role = 'Legends 4'
} else if (levelRole <= 3100) {
role = 'Legends 5'
} else if (levelRole <= 3300) {
role = 'Legends 6'
} else if (levelRole <= 3600) {
role = 'Legends 7'
} else if (levelRole <= 3900) {
role = 'Legends 8'
} else if (levelRole <= 4200) {
role = 'Legends 9'
} else if (levelRole <= 4450) {
role = 'Legends 10'
} else if (levelRole <= 4700) {
role = 'Legends '
} else if (levelRole <= 4900) {
role = 'Legends �'
} else if (levelRole <= 5100) {
role = 'Legends �'
} else if (levelRole <= 5600) {
role = 'Legends �'
} else if (levelRole <= 6100) {
role = 'Legends '
} else if (levelRole <= 7000) {
role = 'GrandLegends'
} else if (levelRole <= 10000) {
role = 'GrandLegends 1'
} else if (levelRole <= 20000) {
role = 'GrandLegends 2'
} else if (levelRole <= 30000) {
role = 'GrandLegends 3'
} else if (levelRole <= 40000) {
role = 'GrandLegends 4'
} else if (levelRole <= 50000) {
role = 'GrandLegends �'
} else if (levelRole <= 60000) {
role = 'GrandLegends �'
} else if (levelRole <= 70000) {
role = 'GrandLegends �'
} else if (levelRole <= 80000) {
role = 'GrandLegends '
} else if (levelRole <= 90000) {
role = 'Pro '
} else if (levelRole <= 100000) {
role = 'Pro � GrandLegends '
}

//=================================================//

if (isAntiLink) {
if (budy.match(`chat.whatsapp.com`)) {
reply(`*「 ANTI LINK 」*\n\nLink grup detected, maaf kamu akan di kick !`)
if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
let gclink = (`https://chat.whatsapp.com/`+await alpha.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(`Upsss... gak jadi, untung link gc sendiri`)
if (isAdmins) return reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
if (isCreator) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
if (m.key.fromMe) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
delete: { remoteJid: 
m.chat, 
fromMe: false, 
id: m.key.id, 
participant: m.key.participant
}
})
alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (isAntiLink2) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
let gclink = (`https://chat.whatsapp.com/`+await alpha.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return //reply(`Upsss... gak jadi, untung link gc sendiri`)
if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
if (isCreator) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
delete: {
  remoteJid: m.chat,

  fromMe: false,
  id: m.key.id,
  participant: m.key.participant
}
})
}
}

//=================================================//

if (isAntiWame) {
if (budy.match(`wa.me/`)) {
reply(`*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !`)
if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
if (isAdmins) return reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
if (isCreator) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
if (m.key.fromMe) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
delete: {
  remoteJid: m.chat,
  fromMe: false,
  id: m.key.id,
  participant: m.key.participant
}
})
alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (isAntiWame2) {
if (budy.match(`wa.me/`)) {
if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
if (isCreator) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
delete: {
  remoteJid: m.chat,
  fromMe: false,
  id: m.key.id,
  participant: m.key.participant
}
})
}
}

if (isAntiWame) {
if (budy.includes((`Wa.me/`) || (`Wa.me/`))) {
reply(`*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !`)
if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
if (isAdmins) return reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
if (isCreator) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
if (m.key.fromMe) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//=================================================//

if (isAlreadyResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
alpha.sendMessage(m.chat, { text: sendResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
alpha.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

_prem.expiredCheck(alpha, premium)

//=================================================//

//antilink all by jer
if (AntiLinkAll)
if (budy.includes("https://")){
if (!isBotAdmins) (bvl)
bvl = `\`\`\`ã€Œ Link Detected ã€\`\`\`\n\nAdmin has sent a link, admin is free to send any linkðŸ˜‡`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
await alpha.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
alpha.sendMessage(from, {text:`\`\`\`ã€Œ Link Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//=================================================//

if (('family100' + m.chat in _family100) && !isCmd) {
kuis = true
let room = _family100['family100' + m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
alpha.sendTextWithMentions(m.chat, caption, m)
.then(mes => {
return _family100['family100' + m.chat].pesan = mesg
}).catch(_ => _)
if (isWin || isSurender) delete _family100['family100' + m.chat]
}
if (tebakgambar[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
reply(jawabanBenar("Tebakgambar", tebakgambar[m.chat][2]) + "\n\nKirim perintah .tebakgambar untuk bermain lagi")
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
}
else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else reply(m.chat, "❌ Jawaban salah", footer_text, '.tega', 'Hint', '.ytega', 'Nyerah', m)
}
}
if (tebakkata[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
reply(jawabanBenar("Tebak Kata", tebakkata[m.chat][2]) + "\n\nKirim perintah .tebakkata untuk bermain lagi")
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
}
else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else reply("❌ Jawaban salah\n\n.teka -- _Bantuan_\n.yteka -- _Nyerah_")
}
}
if (tebakbendera[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
jawaban = json.name.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
reply(jawabanBenar("Tebak Bendera", tebakbendera[m.chat][2]) + "\n\nKirim perintah .tebakbendera untuk bermain lagi")
clearTimeout(tebakbendera[m.chat][3])
delete tebakbendera[m.chat]
}
else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else reply("❌ Jawaban salah\n\n.tebe -- _Bantuan_\n.ytebe -- _Nyerah_")
}
}
if (caklontong[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == caklontong[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
reply(jawabanBenar("Cak Lontong", caklontong[m.chat][2]) + "\n\nKirim perintah .caklontong untuk bermain lagi")
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
}
else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else reply("❌ Jawaban salah\n\n.telo -- _Bantuan_\n.ytelo -- _Nyerah_")
}
}
if (susunkata[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == susunkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
reply(jawabanBenar("Susun Kata", susunkata[m.chat][2]) + "\n\nKirim perintah .susunkata untuk bermain lagi")
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
}
else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else reply("❌ Jawaban salah\n\n.tesuka -- _Bantuan_\n.ytesuka -- _Nyerah_")
}
}
if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
reply(jawabanBenar("Tebak Kalimat", tebakkalimat[m.chat][2]) + "\n\nKirim perintah .tebakkalimat untuk bermain lagi")
clearTimeout(tebakkalimat[m.chat][3])
delete tebakkalimat[m.chat]
}
else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else reply("❌ Jawaban salah\n\n.tekatu -- _Bantuan_\n.ytekatu -- _Nyerah_")
}
}
if (siapaaku[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == siapaaku[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
reply(jawabanBenar("Tebak Siapa", siapaaku[m.chat][2]) + "\n\nKirim perintah .tebaksiapa untuk bermain lagi")
clearTimeout(siapaaku[m.chat][3])
delete siapaaku[m.chat]
}
else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else reply("❌ Jawaban salah\n\n.tesi -- _Bantuan_\n.ytesi -- _Nyerah_")
}
}

//=================================================//

const kontak = {
key: {
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: `6285156028374@s.whatsapp.net`
} : {})
},
message: {
'contactMessage': {
'displayName': `${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': pp_bot,
thumbnail: pp_bot,
sendEphemeral: true
}
}
}

//=================================================//

const reSize = async(buffer, ukur1, ukur2) => {
 return new Promise(async(resolve, reject) => {
 let jimp = require('jimp')
 var baper = await jimp.read(buffer);
 var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
 resolve(ab)
 })
 }
 
 //=================================================//
 
 // Auto Read & Presence Online
if (!m.key.fromMe && global.autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await alpha.readMessages([readkey]);
}

alpha.sendPresenceUpdate('available', m.chat)

//=================================================//

// Auto Block +212
if (m.sender.startsWith('212') && global.autoblok212 === true) {
return alpha.updateBlockStatus(m.sender, 'block')
}

//=================================================//

if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
reply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}\n*Sejak :* ${j.hours} jam, ${e.minutes} menit, ${r.seconds} detik yg lalu\n`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
alpha.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
}
}
if (!m.isGroup && !m.key.fromMe && global.autorespon) {
simi = await fetchJson(`https://api.simsimi.net/v2/?lc=id&cf=false&text=${command}`)
m.reply('_' + simi.success +'_') 
}

// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

switch(command) {
 
case 'owner':
case 'sewa':
case 'creator': {
alpha.sendContact(m.chat, global.owner, m)
}
break

case 'menu':
case 'help': {  
        let sections = [{
          title: 'LIST PANEL',
          highlight_label: 'Recomended',
          rows: [{
            title: 'SEMUA MENU',
            description: `<!> Semua Menu Bot`,
            id: `.semuamenu`
          }, {
            title: 'MENU INFORMASI',
            description: `<!> Menu Informasi Bot`,
            id: `.infomenu`
          }, {
            title: 'MENU OWNER',
            description: `<!> Menu Owner Bot`,
            id: `.ownermenu`
          }, {
            title: 'MENU DATABASE',
            description: `<!> Menu Database Bot`,
            id: `.databasemenu`
          }, {
            title: 'MENU STORE',
            description: `<!> Menu Store Bot`,
            id: `.storemenu`
          }, {
            title: 'MENU GROUP',
            description: `<!> Menu Group Bot`,
            id: `.groupmenu`
          }, {
            title: 'MENU FUN',
            description: `<!> Menu Fun Bot`,
            id: `.funmenu`
          }, {
            title: 'MENU GAME',
            description: `<!> Menu Game Bot`,
            id: `.gamesmenu`
          }, {
            title: 'MENU DOWNLOAD',
            description: `<!> Menu Download Bot`,
            id: `.downloadmenu`
          }, {
            title: 'MENU ASUPAN',
            description: `<!> Menu Asupan Bot`,
            id: `.asupanmenu`
          }, {
            title: 'MENU PENCARIAN',
            description: `<!> Menu Pencarian Bot`,
            id: `.searchmenu`
          }, {
            title: 'MENU RANDOM STICKER',
            description: "<!> Menu Random Sticker Bot",
            id: '.randomsticker'
          }, {
            title: 'MENU ANONYMOUS',
            description: "<!> Menu Anonymous Bot",
            id: '.anonymousmenu'
          }, {
            title: 'MENU AI',
            description: "<!> Menu AI Bot",
            id: '.aimenu'
          }, {
            title: 'MENU STALKER',
            description: "<!> Menu Stalker Bot",
            id: '.stalkermenu'
          }, {
            title: 'MENU TEXTPRO',
            description: "<!> Menu Textpro Bot",
            id: '.textpromenu'
          }, {
            title: 'MENU EPHOTO',
            description: "<!> Menu Ephoto Bot",
            id: '.ephotomenu'
          }, {
            title: 'MENU PHOTOXY',
            description: "<!> Menu Photoxy Bot",
            id: '.photoxymenu'
          }, {
            title: 'MENU LOGO',
            description: "<!> Menu Logo Bot",
            id: '.logomenu'
          }, {
            title: 'MENU NSFW',
            description: "<!> Menu NSFW Bot",
            id: '.nsfwmenu'
          }, {
            title: 'MENU SOUND',
            description: "<!> Menu Sound Bot",
            id: '.soundmenu'
          }, {
            title: 'MENU PRIMBON',
            description: "<!> Menu Primbon Bot",
            id: '.primbonmenu'
          }, {
            title: 'MENU CERPEN',
            description: "<!> Menu Cerpen Bot",
            id: '.cerpenmenu'
          }, {
            title: 'MENU LAINNYA',
            description: `<!> Menu Lainnya Bot`,
            id: `.othermenu`
          }]
        }]
        let listMessage = {
          title: 'SELECT MENU',
          sections
        };
        let msgs = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: ""
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: ""
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  title: `Halo Kak, Silahkan Pilih Salah satu Menu Dari List Ini ya`,
                  subtitle: '',
                  hasMediaAttachment: false,
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "single_select",
                    "buttonParamsJson": JSON.stringify(listMessage)
                  }, {
                      "name": "quick_reply",
                      "buttonParamsJson": `{\"display_text\":\"Sewa Bot\",\"id\":\".sewa\"}`
                    }, {
                      "name": "quick_reply",
                      "buttonParamsJson": `{\"display_text\":\"Sewa Premium\",\"id\":\".buyprem\"}`
                    }, {
                      "name": "quick_reply",
                      "buttonParamsJson": `{\"display_text\":\"Creator\",\"id\":\".owner\"}`
                    }, {
                       "name": "cta_url",
                       "buttonParamsJson": "{\"display_text\":\"Url Owner\",\"url\":\"https://wa.me/6285156028374\",\"merchant_url\":\"https://wa.me/6285156028374\"}"
                   }],
                })
              })
            }
          }
        }, {})
        alpha.relayMessage(m.chat, msgs.message, {
          messageId: m.key.id
        })
      }
      break
case 'list': case 'store':{
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup((m.isGroup ? m.chat: botNumber), db_respon_list)) return reply(`Belum ada list message yang terdaftar di group/chat ini`)
let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
for (let i of db_respon_list) {
if (i.id === (m.isGroup ? m.chat : botNumber)) {
teks += `- ${i.key}\n`
}
}
teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key}, maka kirim pesan ${db_respon_list[0].key} kepada bot`
alpha.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m})
}
break

case 'dellist':{
// if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!(m.isGroup? isAdmins : isCreator)) return reply('Fitur Khusus admin & owner!')
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList((m.isGroup? m.chat: botNumber), q.toLowerCase(), db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList((m.isGroup? m.chat: botNumber), q.toLowerCase(), db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
}
break

case 'addlist':{
//if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!(m.isGroup? isAdmins : isCreator)) return reply('Fitur Khusus admin & owner!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${command} *key@|esponse*\n\n_Contoh_\n\n${command} tes|apa`)
if (isAlreadyResponList((m.isGroup ? m.chat :botNumber), args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di chat ini.`)
if(m.isGroup){
if (/image/.test(mime)) {
let media = await alpha.downloadAndSaveMediaMessage(quoted)
let mem = await TelegraPh(media)
addResponList(m.chat, args1, args2, true, mem, db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
}
} else {
if (/image/.test(mime)) {
let media = await alpha.downloadAndSaveMediaMessage(quoted)
let mem = await TelegraPh(media)
addResponList(botNumber, args1, args2, true, mem, db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(botNumber, args1, args2, false, '-', db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
}
}
}
break

case 'updatelist': case 'update':{
// if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!(m.isGroup? isAdmins : isCreator)) return reply('Fitur Khusus admin & owner!')
var args1 = q.split("@")[0].toLowerCase()
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
if (!isAlreadyResponListGroup((m.isGroup? m.chat: botNumber), db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di chat ini`)
if (/image/.test(mime)) {
let media = await alpha.downloadAndSaveMediaMessage(quoted)
let mem = await TelegraPh(media)
updateResponList((m.isGroup? m.chat: botNumber), args1, args2, true, mem, db_respon_list)
reply(`Sukses update respon list dengan key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList((m.isGroup? m.chat: botNumber), args1, args2, false, '-', db_respon_list)
reply(`Sukses update respon list dengan key *${args1}*`)
}
}
break

case 'jeda': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
if (!text) return reply(`kirim ${command} waktu\nContoh: ${command} 30m\n\nlist waktu:\ns = detik\nm = menit\nh = jam\nd = hari`)
opengc[m.chat] = { id: m.chat, time: Date.now() + toMS(text) }
fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
alpha.groupSettingUpdate(m.chat, "announcement")
.then((res) => reply(`Sukses, group akan dibuka ${text} lagi`))
.catch((err) => reply('Error'))
}
break

case 'tambah':{
if (!text.includes('+')) return reply(`Gunakan dengan cara ${command} *angka* + *angka*\n\n_Contoh_\n\n${command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one + nilai_two}`)}
break

case 'kurang':{
if (!text.includes('-')) return reply(`Gunakan dengan cara ${command} *angka* - *angka*\n\n_Contoh_\n\n${command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one - nilai_two}`)}
break

case 'kali':{
if (!text.includes('*')) return reply(`Gunakan dengan cara ${command} *angka* * *angka*\n\n_Contoh_\n\n${command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one * nilai_two}`)}
break

case 'bagi':{
if (!text.includes('/')) return reply(`Gunakan dengan cara ${command} *angka* / *angka*\n\n_Contoh_\n\n${command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one / nilai_two}`)}
break

case 'setproses': case 'setp':{
if (!(m.isGroup? isAdmins : isCreator)) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses((m.isGroup? m.chat: botNumber), set_proses)) return reply(`Set proses already active`)
addSetProses(text, (m.isGroup? m.chat: botNumber), set_proses)
alpha.sendMessage(m.chat, {text : "Done Set Proses"}, {quoted: fkontak})
}
break

case 'changeproses': case 'changep':{
if (!(m.isGroup? isAdmins : isCreator)) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses((m.isGroup? m.chat: botNumber), set_proses)) {
changeSetProses(text, (m.isGroup? m.chat: botNumber), set_proses)
alpha.sendMessage(m.chat, {text : "Sukses Ubah Set Proses"}, {quoted: fkontak})
} else {
addSetProses(text, (m.isGroup? m.chat: botNumber), set_proses)
alpha.sendMessage(m.chat, {text : "Sukses Ubah Set Proses"}, {quoted: fkontak})
}
}
break

case 'delsetproses': case 'delsetp':{
if (!(m.isGroup? isAdmins : isCreator)) return reply('Fitur Khusus admin!')
if (!isSetProses((m.isGroup? m.chat: botNumber), set_proses)) return reply(`Belum ada set proses di gc ini`)
removeSetProses((m.isGroup? m.chat: botNumber), set_proses)
alpha.sendMessage(m.chat, {text : "Sukses Delete Set Proses"}, {quoted: fkontak})
}
break

case 'setdone':{
if (!(m.isGroup? isAdmins : isCreator)) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone((m.isGroup? m.chat: botNumber), set_done)) return reply(`Udh set done sebelumnya`)
addSetDone(text, (m.isGroup? m.chat: botNumber), set_done)
reply(`Sukses set done!`)
}
break

case 'changedone': case 'changed':{
if (!(m.isGroup? isAdmins : isCreator)) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone((m.isGroup? m.chat: botNumber), set_done)) {
changeSetDone(text, (m.isGroup? m.chat: botNumber), set_done)
reply(`Sukses ubah set done!`)
} else {
addSetDone(text, (m.isGroup? m.chat: botNumber), set_done)
reply(`Sukses ubah set done!`)
}
}
break

case 'delsetdone': case 'delsetd':{
if (!(m.isGroup? isAdmins : isCreator)) return reply('Fitur Khusus admin!')
if (!isSetDone((m.isGroup? m.chat: botNumber), set_done)) return reply(`Belum ada set done di gc ini`)
removeSetDone((m.isGroup? m.chat: botNumber), set_done)
reply(`Sukses delete set done`)
}
break

case"p": case"proses":{
if (!(m.isGroup? isAdmins : isCreator)) return reply('Fitur Khusus admin!')
if (!m.quoted) return reply('Reply pesanan yang akan proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
const getTextP = getTextSetProses((m.isGroup? m.chat: botNumber), set_proses);
if (getTextP !== undefined) {
var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
alpha.sendTextWithMentions(m.chat, anunya, m)
} else {
alpha.sendTextWithMentions(m.chat, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)
}
}
break

case "d": case 'done':{
if (!(m.isGroup? isAdmins : isCreator)) return reply('Fitur Khusus admin!')
if (!m.quoted) return reply('Reply pesanan yang telah di proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`
const getTextD = getTextSetDone((m.isGroup? m.chat: botNumber), set_done);
if (getTextD !== undefined) {
var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
alpha.sendTextWithMentions(m.chat, anunya, m)
} else {
alpha.sendTextWithMentions(m.chat, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)
}
}
 break

case 'setopen':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) return m.reply(`Set open sudah ada sebelumnya`)
addSetOpen(text, m.chat, set_open)
reply(` Done set open!`)
}
break

case 'changeopen': case 'changesetopen':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) {
changeSetOpen(text, m.chat, set_open)
reply(`Sukses ubah set open teks!`)
} else {
addSetOpen(text, m.chat, set_open)
reply(`Sukses ubah set open teks!`)
}
break

case 'delsetopen':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!isSetOpen(m.chat, set_open)) return m.reply(`Belum ada set open di sini..`)
removeSetOpen(m.chat, set_open)
reply(`Sukses delete set open`)
break

case 'setclose':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) return m.reply(`Set close sudah ada sebelumnya`)
addSetClose(text, m.chat, set_close)
reply(` Done set close!`)
}
break

case 'changeclose': case 'changesetclose':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) {
changeSetClose(text, m.chat, set_close)
reply(`Sukses ubah set close teks!`)
} else {
addSetClose(text, m.chat, set_close)
reply(`Sukses ubah set close teks!`)
}
break

case 'delsetclose':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!isSetClose(m.chat, set_close)) return m.reply(`Belum ada set close di sini..`)
removeSetClose(m.chat, set_close)
reply(`Sukses delete set close`)
break

case 'welcome':{
if ((global.welcome || isWelcome)){ }
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isWelcome) return reply(`Udah on`)
_welcome.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
alpha.sendMessage(m.chat, {text : "Sukses Mengaktifkan Welcome"}, {quoted: fkontak})
} else if (args[0] === "off") {
if (!isWelcome) return reply(`Udah off`)
let anu = _welcome.indexOf(m.chat)
_welcome.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
alpha.sendMessage(m.chat, {text : "Sukses Nonaktifkan Welcome"}, {quoted: fkontak})
} else {
alpha.sendMessage(m.chat, {text : "Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on"}, {quoted: fkontak})
}
}
break

case 'left': case 'goodbye':{
if ((global.left || isLeft)){ }
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isLeft) return reply(`Udah on`)
_left.push(m.chat)
fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
reply('Sukses mengaktifkan goodbye di grup ini')
} else if (args[0] === "off") {
if (!isLeft) return reply(`Udah off`)
let anu = _left.indexOf(m.chat)
_left.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
reply('Sukses menonaktifkan goodbye di grup ini')
} else {
alpha.sendMessage(m.chat, {text : "Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on"}, {quoted: fkontak})
}
}
break

case 'setwelcome':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return reply('Fitur Khusus owner!')
if (!text) return reply(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) return reply(`Set welcome already active`)
addSetWelcome(text, m.chat, set_welcome_db)
  reply(`Successfully set welcome!`)
}
break

case 'changewelcome':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return reply('Fitur Khusus owner!')
if (!text) return reply(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) {
changeSetWelcome(q, m.chat, set_welcome_db)
reply(`Sukses change set welcome teks!`)
} else {
  addSetWelcome(q, m.chat, set_welcome_db)
reply(`Sukses change set welcome teks!`)
}}
break

case 'delsetwelcome':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return reply('Fitur Khusus owner!')
if (!isSetWelcome(m.chat, set_welcome_db)) return reply(`Belum ada set welcome di sini..`)
removeSetWelcome(m.chat, set_welcome_db)
  reply(`Sukses delete set welcome`)
}
break

case 'setleft':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return reply('Fitur Khusus owner!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) return reply(`Set left already active`)
  addSetLeft(q, m.chat, set_left_db)
reply(`Successfully set left!`)
}
break

case 'changeleft':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return reply('Fitur Khusus owner!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) {
changeSetLeft(q, m.chat, set_left_db)
reply(`Sukses change set left teks!`)
} else {
addSetLeft(q, m.chat, set_left_db)
reply(`Sukses change set left teks!`)
}
}
break

case 'delsetleft':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return reply('Fitur Khusus owner!')
if (!isSetLeft(m.chat, set_left_db)) return reply(`Belum ada set left di sini..`)
removeSetLeft(m.chat, set_left_db)
reply(`Sukses delete set left`)
}
break

case 'antiwame':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
 if (args[0] === "on") {
if (isAntiWame) return reply(`Udah aktif`)
antiwame.push(m.chat)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
reply('Successfully Activate Antiwame In This Group')
} else if (args[0] === "off") {
if (!isAntiWame) return reply(`Udah nonaktif`)
let anu = antiwame.indexOf(m.chat)
antiwame.splice(anu, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
reply('Successfully Disabling Antiwame In This Group')
} else {
alpha.sendMessage(m.chat, {text : "Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on"}, {quoted: fkontak})
}
}
break

case 'antilink':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply("Bot harus menjadi admin")
if (args[0] === "on") {
if (isAntiLink) return reply(`Udah aktif`)
antilink.push(m.chat)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Activate Antilink In This Group')
} else if (args[0] === "off") {
if (!isAntiLink) return reply(`Udah nonaktif`)
let anu = antilink.indexOf(m.chat)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Disabling Antilink In This Group')
} else {
alpha.sendMessage(m.chat, {text : "Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on"}, {quoted: fkontak})
}
  
}
break

case 'h': case 'hidetag':{
if (!m.isGroup) return reply("Khusus grup")
if (!(isAdmins || isCreator)) return reply("Fitur khusus admin")
let tek = m.quoted ? quoted.text : (text ? text : "")
alpha.sendMessage(m.chat, {
text: tek ,
mentions: participants.map(a => a.id)
}, {
quoted: kontak
})
}
break

case 'sewa':{
reply(sewabot)
}
break

case 'donasi': case 'donate':{
alpha.sendMessage(m.chat, {image: qris, caption: `*------- DONATE  -------*

Hai kak 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 
Thanks!

Contact person Owner:
wa.me/${owner}`}, {quoted:m})
}
break

case 'q':{
reply ("On Kok Kak Bot Nya")
}
break

case 'kick':{
if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
if (!isBotAdmins) return reply("Bot Bukan Admin")
if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await alpha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat())).catch((err) => reply(jsonformat)())
alpha.sendMessage(m.chat, {text : "Mampus Gua Kick Lu !!!"}, {quoted: fkontak})
}
break

case 'add': {
if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
if (!isBotAdmins) return reply("Bot Bukan Admin")
if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await alpha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat())).catch((err) => reply(jsonformat)())
alpha.sendMessage(m.chat, {text : "Sukses Add Member"}, {quoted: fkontak})
}
break

case 'promote': {
if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
if (!isBotAdmins) return reply("Bot Bukan Admin")
if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply("Sukses Menjadikan Admin Di Group ${metadata.subject}")
}
break

case 'demote': {
if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
if (!isBotAdmins) return reply("Bot Bukan Admin")
if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply("Sukses Und Admin Di Group ${metadata.subject}")
}
break

case 'semuamenu':{
  reply(`╭─❒ 「 *SEMUA MENU* 」
  │
  │○ !infomenu
  │○ !ownermenu
  │○ !databasemenu
  │○ !storemenu
  │○ !groupmenu
  │○ !funmenu
  │○ !gamesmenu
  │○ !downloadmenu
  │○ !asupanmenu
  │○ !othermenu
  │○ !searchmenu
  │○ !randomsticker
  │○ !anonymousmenu
  │○ !aimenu
  │○ !stalkermenu
  │○ !textpromenu
  │○ !ephotomenu
  │○ !photoxymenu
  │○ !logomenu
  │○ !nsfwmenu
  │○ !soundmenu
  │○ !primbonmenu
  │○ !cerpenmenu
  │
  ╰❒`)
  }
  break

case 'nsfwmenu':{
  reply(`╭─❒ 「 *NSFW MENU* 」
  │
  │○ !cry
  │○ !kill
  │○ !hug
  │○ !pat
  │○ !lick
  │○ !kiss
  │○ !bite
  │○ !yeet
  │○ !neko
  │○ !bully
  │○ !bonk
  │○ !wink
  │○ !poke
  │○ !nom
  │○ !slap
  │○ !smile
  │○ !awoo
  │○ !wave
  │○ !blush
  │○ !smug
  │○ !glomp
  │○ !happy
  │○ !dance
  │○ !cringe
  │○ !cuddle
  │○ !highfive
  │○ !shinobu
  │○ !megumin
  │○ !handhold
  │○ !loli-waifu
  │○ !hentaivid
  │○ !trap
  │○ !hentai-neko
  │○ !gasm
  │○ !hentai-waifu
  │○ !milf
  │○ !ahegao
  │○ !bdsm
  │○ !ass
  │○ !blowjob
  │○ !cuckold
  │○ !eba
  │○ !cum
  │○ !ero
  │○ !foot
  │○ !femdom
  │○ !glasses
  │○ !gangbang
  │○ !hentai
  │○ !jahy
  │○ !manga
  │○ !masturbation
  │○ !neko-hentai
  │○ !nsfwloli
  │○ !neko-hentai2
  │○ !orgy
  │○ !panties
  │○ !pussy
  │○ !thights
  │○ !tentacles
  │○ !yuri
  │○ !zettai
  │○ !gifblowjob
  │○ !gifhentai
  │
  ╰❒`)
  }
  break

case 'logomenu':{
  reply(`╭─❒ 「 *LOGO MENU* 」
  │
  │○ !horror
  │○ !game8bit
  │○ !layered
  │○ !glitch2
  │○ !cool-graffiti
  │○ !cool-wall-graffiti
  │○ !realistic
  │○ !space3d
  │○ !glitch-tiktok
  │○ !stone
  │○ !marvel
  │○ !marvel2
  │○ !metal-rose-gold
  │○ !pornhub
  │○ !avengers
  │○ !metal-rainbow
  │○ !metal-gold
  │○ !metal-galaxy
  │○ !lion
  │○ !wolf-black-white
  │○ !wolf-galaxy
  │○ !ninja
  │○ !3dsteel
  │○ !horror2
  │○ !lava
  │○ !bagel
  │
  ╰❒`)
  }
  break

case 'cerpenmenu':{
  reply(`╭─❒ 「 *CERPEN MENU* 」 
  │
  │○ !cerpen-anak
  │○ !cerpen-bahasadaerah
  │○ !cerpen-bahasainggris
  │○ !cerpen-bahasajawa
  │○ !cerpen-bahasasunda
  │○ !cerpen-budaya
  │○ !cerpen-cinta
  │○ !cerpen-cintaislami
  │○ !cerpen-cintapertama
  │○ !cerpen-cintaromantis
  │○ !cerpen-cintasedih
  │○ !cerpen-cintasegitiga
  │○ !cerpen-cintasejati
  │○ !cerpen-galau
  │○ !cerpen-gokil
  │○ !cerpen-inspiratif
  │○ !cerpen-jepang
  │○ !cerpen-kehidupan
  │○ !cerpen-keluarga
  │○ !cerpen-kisahnyata
  │○ !cerpen-korea
  │○ !cerpen-kristen
  │○ !cerpen-liburan
  │○ !cerpen-malaysia
  │○ !cerpen-mengharukan
  │○ !cerpen-misteri
  │○ !cerpen-motivasi
  │○ !cerpen-nasihat
  │○ !cerpen-nasionalisme
  │○ !cerpen-olahraga
  │○ !cerpen-patahhati
  │○ !cerpen-penantian
  │○ !cerpen-pendidikan
  │○ !cerpen-pengalaman
  │○ !cerpen-pengorbanan
  │○ !cerpen-penyesalan
  │○ !cerpen-perjuangan
  │○ !cerpen-perpisahan
  │○ !cerpen-persahabatan
  │○ !cerpen-petualangan
  │○ !cerpen-ramadhan
  │○ !cerpen-remaja
  │○ !cerpen-rindu
  │○ !cerpen-rohani
  │○ !cerpen-romantis
  │○ !cerpen-sastra
  │○ !cerpen-sedih
  │○ !cerpen-sejarah
  │
  ╰❒`)
  }
  break

case 'ephotomenu':{
  reply(`╭─❒ 「 *EPHOTO MENU* 」
  │
  │○ !glitchtext
  │○ !writetext
  │○ !advancedglow
  │○ !typographytext
  │○ !pixelglitch
  │○ !flagtext
  │○ !neonglitch
  │○ !flagtext
  │○ !flag3dtext
  │○ !deletingtext
  │○ !glowingtext
  │○ !blackpinkstyle
  │○ !underwatertext
  │○ !logomaker
  │○ !papercutstyle
  │○ !cartoonstyle
  │○ !watercolortext
  │○ !effectclouds
  │○ !blackpinklogo
  │○ !gradienttext
  │○ !summerbeach
  │○ !luxurygold
  │○ !multicoloredneon
  │○ !sandsummer
  │○ !galaxywallpaper
  │○ !1917style
  │○ !makingneon
  │○ !royaltext
  │○ !freecreate
  │○ !galaxystyle
  │○ !lighteffects
  │
  ╰❒`)
  }
  break

case 'textpromenu':{
  reply(`╭─❒ 「 *TEXTPRO MENU* 」
  │
  │○ !candy
  │○ !christmas
  │○ !3dchristmas
  │○ !sparklechristmas
  │○ !deepsea
  │○ !scifi
  │○ !rainbow
  │○ !waterpipe
  │○ !spooky
  │○ !pencil
  │○ !circuit
  │○ !discovery
  │○ !metalic
  │○ !fiction
  │○ !demon
  │○ !transformer
  │○ !berry
  │○ !thunder
  │○ !magma
  │○ !3dstone
  │○ !neonlight
  │○ !glitch
  │○ !harrypotter
  │○ !brokenglass
  │○ !papercut
  │○ !watercolor
  │○ !multicolor
  │○ !neondevil
  │○ !underwater
  │○ !graffitibike
  │○ !snow
  │○ !cloud
  │○ !honey
  │○ !ice
  │○ !fruitjuice
  │○ !biscuit
  │○ !wood
  │○ !chocolate
  │○ !strawberry
  │○ !matrix
  │○ !blood
  │○ !dropwater
  │○ !toxic
  │○ !lava
  │○ !rock
  │○ !bloodglas
  │○ !hallowen
  │○ !joker
  │○ !darkgold
  │○ !wicker
  │○ !firework
  │○ !skeleton
  │○ !blackpink
  │○ !sand
  │○ !glue
  │○ !1917
  │○ !leaves
  │
  ╰❒`)
  }
  break

case 'primbonmenu':{
  reply(`╭─❒ 「 *PRIMBON MENU* 」
│
│❐ !nomorhoki
│❐ !artimimpi
│❐ !ramalanjodoh
│❐ !ramalanjodohbali
│❐ !suamiistri
│❐ !ramalancinta
│❐ !artinama
│❐ !cocoknama
│❐ !pasangan
│❐ !jadiannikah
│❐ !sifatusaha
│❐ !rejeki
│❐ !pekerjaan
│❐ !ramalnasib
│❐ !penyakit
│❐ !artitarot
│❐ !fengshui
│❐ !haribaik
│❐ !harisangar
│❐ !harisial
│❐ !harinaga
│❐ !arahrejeki
│❐ !peruntungan
│❐ !weton
│❐ !sifat
│❐ !keberuntungan
│❐ !memancing
│❐ !masasubur
│❐ !shio
│
╰❒`)
  }
  break

case 'funmenu':{
  reply(`╭─❒ 「 *FUN MENU* 」 
│
│○ !memek
│○ !bego
│○ !goblok
│○ !janda
│○ !perawan
│○ !babi
│○ !tolol
│○ !pinter
│○ !pintar
│○ !asu
│○ !bodoh
│○ !gay
│○ !lesby
│○ !bajingan
│○ !jancok
│○ !anjing
│○ !ngentod
│○ !ngentot
│○ !monyet
│○ !mastah
│○ !newbie
│○ !bangsat
│○ !bangke
│○ !sange
│○ !sangean
│○ !dakjal
│○ !horny
│○ !wibu
│○ !puki
│○ !pantex
│○ !pantek
│○ !setan
│○ !iblis
│○ !cacat
│○ !yatim
│○ !piatu
│○ !checkme
│
╰❒`)
  }
  break

case 'gamesmenu':{
  reply(`╭─❒ 「 *GAMES MENU* 」 
  │
  │○ !tebakkata  
  │○ !tebakgambar  
  │○ !tebakbendera  
  │○ !caklontong  
  │○ !susunkata  
  │○ !tebakkalimat  
  │○ !jodohku
  │○ !jadian
  │○ !halah
  │○ !hilih
  │○ !huluh
  │○ !heleh
  │○ !holoh
  │
  ╰❒`)
  }
  break

case 'stalkermenu':{
  reply(`╭─❒ 「 *STALKER MENU* 」 
  │
  │○ !ffstalk
  │○ !mlstalk
  │○ !githubstalk
  │○ !npmstalk
  │○ !igstalk
  │
  ╰❒`)
  }
  break


case 'aimenu':{
  reply(`╭─❒ 「 *Ai Menu* 」 
  │
  │○ !ai
  │○ !chatgpt  
  │○ !aiimg
  │
  ╰❒`)
  }
  break

case 'anonymousmenu':{
  reply(`╭─❒ 「 *Anonymous MENU* 」 
  │
  │○ !menfess
  │
  ╰❒`)
  }
  break

case 'randomsticker':{
  reply(`╭─❒ 「 *RANDOM STICKER* 」 
  │
  │○ !patrick  
  │○ !popoci  
  │○ !sponsbob  
  │○ !kawan-sponsbob  
  │○ !awoawo  
  │○ !chat  
  │○ !benedict  
  │○ !dbfly  
  │○ !dino-kuning  
  │○ !doge  
  │○ !gojosatoru  
  │○ !hope-boy  
  │○ !jisoo  
  │○ !kr-robot  
  │○ !kucing   
  │○ !lonte  
  │○ !manusia_lidi  
  │○ !menjamet  
  │○ !meow  
  │○ !nicholas  
  │○ !tyni 
  │○ !sticker  
  │○ !toimage  
  │○ !pinterest  
  │○ !ttp  
  │○ !smeme  
  │○ !attp  
  │○ !emojimix  
  │○ !wm  
  │○ !qc
  │○ !snobg 
  │
  ╰❒`)
  }
  break

case 'othermenu':{
  reply(`╭─❒ 「 *OTHER MENU* 」 
  │
  │○ !afk
  │○ !bot
  │○ !sapa
  │○ !remini
  │○ !getpic
  │○ !gtts
  │○ !fajar-news
  │○ !cnn-news
  │○ !tvseeach
  │○ !cnbc-news
  │○ !detik-news
  │○ !daily-news
  │○ !i-news
  │○ !kontan-news
  │○ !jalantikus-meme
  │○ !quotes
  │
  ╰❒`)
  }
  break

case 'asupanmenu':{
  reply(`╭─❒ 「 *ASUPAN MENU* 」
  │
  │○ !tiktokkayes  
  │○ !tiktokgirl  
  │○ !tiktokghea  
  │○ !tiktokbocil  
  │○ !tiktokukhty  
  │○ !tiktoksantuy  
  │○ !tiktokpanrika  
  │○ !tiktoknotnot  
  │○ !tiktokgabagtha  
  │○ !chika
  │○ !delvira
  │○ !ayu
  │○ !bunga
  │○ !aura
  │○ !nisa
  │○ !ziva
  │○ !yana
  │○ !viona
  │○ !syania
  │○ !riri
  │○ !syifa
  │○ !mama_gina
  │○ !alcakenya
  │○ !mangayutri
  │○ !rikagusriani
  │○ !asupan
  │○ !bocil
  │○ !geayubi
  │○ !santuy
  │○ !ukhty
  │○ !syifa
  │
  ╰❒`)
  }
  break

case 'downloadmenu':{
  reply(`╭─❒ 「 *DOWNLOAD MENU* 」
  │ 
  │○ !tiktok  
  │○ !tiktokvn  
  │○ !tiktokaudio  
  │○ !tiktok2
  │○ !tiktokaudio2
  │○ !spotify  
  │○ !ytmp3  
  │○ !ytmp4  
  │○ !play  
  │○ !playmp3  
  │○ !playmp4  
  │○ !tomp4
  │○ !toaudio
  │○ !tomp3
  │○ !tovn
  │○ !togif
  │○ !igdl  
  │○ !igvideo  
  │○ !instavid
  │○ !igreels
  │○ !fbdl
  │○ !facebook
  │○ !gitclone
  │○ !twiter
  │
  ╰❒`)
  }
  break

case 'searchmenu':{
  reply(`╭─❒ 「 *SEARCH MENU* 」 
  │
  │○ !ytsearch  
  │○ !google  
  │○ !cariresep
  │○ !bacaresep
  │○ !happymod
  │○ !ssweb
  │○ !grupwa
  │○ !translate
  │○ !listbahasa
  │○ !liriklagu
  │
  ╰❒`)
  }
  break

case 'groupmenu':{
  reply(`╭─❒ 「 *GROUP MENU* 」 
  │
  │○ !antiwame  [on/off]
  │○ !antiwame2  [on/off]
  │○ !antilink  [on/off]
  │○ !antilink2  [on/off]
  │○ !welcome  [on/off]
  │○ !goodbye  [on/off]
  │○ !group [close/open]
  │○ !hidetag  
  │○ !kick  
  │○ !linkgc  
  │○ !resetlinkgc  
  │○ !delete  
  │○ !listonline  
  │○ !setnamegc  
  │○ !setdesc  
  │○ !listsewa  
  │○ !add  
  │○ !promote  
  │○ !demote  
  │○ !antilinkall [on/off]
  │○ !sendlinkgc  
  │○ !tagall  
  │○ !totag
  │○ !mute [on/off]
  │○ !nsfw [on/off]
  │○ !setppgroup
  │
  ╰❒`)
  }
  break

case 'storemenu':{
  reply(`╭─❒ 「  *STORE MENU*  」
  │
  │○ !list  
  │○ !addlist  
  │○ !updatelist  
  │○ !dellist  
  │○ !jeda  
  │○ !tambah  
  │○ !kurang  
  │○ !kali  
  │○ !bagi  
  │○ !setproses  
  │○ !changeproses  
  │○ !delsetproses  
  │○ !setdone  
  │○ !changedone  
  │○ !delsetdone  
  │○ !proses  
  │○ !done  
  │○ !setwelcome  
  │○ !changewelcome  
  │○ !delsetwelcome  
  │○ !setleft  
  │○ !changeleft  
  │○ !delsetleft  
  │○ !opentime
  │○ !closetime
  │
  ╰❒`)
  }
  break

case 'databasemenu':{
  reply(`╭─❒ 「 *DATABASE MENU* 」
  │
  │○ !addvn
  │○ !listvn
  │○ !delvn
  │○ !addzip
  │○ !delzip
  │○ !listzip
  │○ !yozip
  │○ !sendzip
  │○ !addapk
  │○ !delapk
  │○ !listapk
  │○ !sendapk
  │○ !addpdf
  │○ !listpdf
  │○ !sendpdf
  │○ !yopdf
  │○ !sendpdf
  │
  ╰❒`)
  }
  break

case 'ownermenu':{
  reply(`╭─❒ 「 *OWNER MENU* 」
  │
  │○ !addprem  
  │○ !delprem  
  │○ !listprem  
  │○ !block  
  │○ !unblock  
  │○ !public  
  │○ !self  
  │○ !out  
  │○ !kosong  
  │○ !join  
  │○ !addsewa  
  │○ !delsewa  
  │○ !setnamabot  
  │○ !setbiobot  
  │○ !broadcastvid  
  │○ !bctext  
  │○ !bcimage  
  │○ !pushkon
  │○ !pushkonid
  │○ !anticall [on/off]
  │○ !setexif
  │○ !idgrub
  │○ !idgc
  │○ !jadibot
  │○ !listjadibot
  │○ !restartbot
  │○ !creategc
  │○ !banned
  │○ !listbanned
  │○ !unbanned
  │○ !autoread
  │○ !autoblok212 [on/off]
  │○ !getcase
  │○ !setppbot
  │○ !pppanjang
  │○ !addowner
  │○ !delowner
  │○ !setbot
  │○ !delsetbot
  │
  ╰❒`)
  }
  break

case 'infomenu':{
  reply(`╭─❒ 「 *INFO MENU* 」
  │
  │○ !sc  
  │○ !ping  
  │○ !donate  
  │○ !tqto  
  │○ !sewa  
  │○ !q  
  │○ !jasrun   
  │○ !buyprem  
  │○ !runtime  
  │○ !groupbot  
  │○ !developer  
  │○ !owner  
  │
  ╰❒ `)
  }
  break

case 'photoxymenu':{
  reply(`╭─❒ 「 *PHOTOXY MENU* 」
  │
  │○ !shadow
  │○ !write
  │○ !romantic
  │○ !burnpaper
  │○ !smoke
  │○ !narutobanner
  │○ !love
  │○ !undergrass
  │○ !doublelove
  │○ !coffecup
  │○ !underwaterocean
  │○ !smokyneon
  │○ !starstext
  │○ !rainboweffect
  │○ !balloontext
  │○ !metalliceffect
  │○ !embroiderytext
  │○ !flamingtext
  │○ !stonetext
  │○ !writeart
  │○ !summertext
  │○ !wolfmetaltext
  │○ !nature3dtext
  │○ !rosestext
  │○ !naturetypography
  │○ !quotesunder
  │○ !shinetext
  │
  ╰❒`)
  }
  break

case 'soundmenu':{
reply(`╭─❒ 「 *SOUND MENU* 」 
│
│❐ !sound1
│❐ !sound2
│❐ !sound3
│❐ !sound4
│❐ !sound5
│❐ !sound6
│❐ !sound7
│❐ !sound8
│❐ !sound9
│❐ !sound10
│❐ !sound11
│❐ !sound12
│❐ !sound13
│❐ !sound14
│❐ !sound15
│❐ !sound16
│❐ !sound17
│❐ !sound18
│❐ !sound19
│❐ !sound20
│❐ !sound21
│❐ !sound22
│❐ !sound23
│❐ !sound24
│❐ !sound25
│❐ !sound26
│❐ !sound27
│❐ !sound28
│❐ !sound29
│❐ !sound30
│❐ !sound31
│❐ !sound32
│❐ !sound33
│❐ !sound34
│❐ !sound35
│❐ !sound36
│❐ !sound37
│❐ !sound38
│❐ !sound39
│❐ !sound40
│❐ !sound41
│❐ !sound42
│❐ !sound43
│❐ !sound44
│❐ !sound45
│❐ !sound46
│❐ !sound47
│❐ !sound48
│❐ !sound49
│❐ !sound50
│❐ !sound51
│❐ !sound52
│❐ !sound53
│❐ !sound54
│❐ !sound55
│❐ !sound56
│❐ !sound57
│❐ !sound58
│❐ !sound59
│❐ !sound60
│❐ !sound61
│❐ !sound62
│❐ !sound63
│❐ !sound64
│❐ !sound65
│❐ !sound66
│❐ !sound67
│❐ !sound68
│❐ !sound69
│❐ !sound70
│❐ !sound71
│❐ !sound72
│❐ !sound73
│❐ !sound74
│❐ !sound75
│❐ !sound76
│❐ !sound77
│❐ !sound78
│❐ !sound79
│❐ !sound80
│❐ !sound81
│❐ !sound82
│❐ !sound83
│❐ !sound84
│❐ !sound85
│❐ !sound86
│❐ !sound87
│❐ !sound88
│❐ !sound89
│❐ !sound90
│❐ !sound91
│❐ !sound92
│❐ !sound93
│❐ !sound94
│❐ !sound95
│❐ !sound96
│❐ !sound97
│❐ !sound98
│❐ !sound99
│❐ !sound100
│
╰❒`)
}
break

case 'tqto':
case 'thanksto':{
reply(`╭─❒ 「 THANKS TO 」 
│○ Allah Swt.
│○ Renz Payment
│○ All Creator Bot
╰❒`)
}
break

case 'jasrun':{
reply(`Mau jasrun ? silahkan hubungi Owner`)
}
break

case 'join':{
if (!isCreator) return reply(`Fitur Ini Hanya Dapat Di Gunakan Oleh Owner`)
if (!text) return reply(`Masukan Link Group !`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(`Link Eror !`)
m.reply("Sedang Di Proses")
let result = args[0].split('https://chat.whatsapp.com/')[1]
await alpha.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case "tiktoknowm": case "tiktok":{
if (!isPremium && !isCreator && global.onlyprem) return reply(`Fitur Khusus Member Premium !`)
if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
if (!isUrl(args[0])  && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
m.reply("Sedang Di Proses")
let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {url: args[0]}, 'apikey'))
if (!res.ok) throw await res.text()
var result = await res.json()
var result = result.result 
alpha.sendMessage(from, {video:{url: result.nowm}, mimetype:"video/mp4", caption: `DONE`}, {quoted:m})
}
break

case "tiktokaudio":{
if (!isPremium && !isCreator && global.onlyprem) return reply(`Fitur Khusus Member Premium !`)
if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
if (!isUrl(args[0])  && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
m.reply("Sedang Di Proses")
let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {url: args[0]}, 'apikey'))
if (!res.ok) throw await res.text()
var result = await res.json()
var result = result.result 
alpha.sendMessage(from, {audio:{url: result.audio}, mimetype:"audio/mpeg", caption: `DONE`}, {quoted:m})
}
break

case 'tiktokaudio2':{
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
m.reply("Sedang Di Proses")
require('./lib/tiktok').Tiktok(q).then( data => {
alpha.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break

case "tiktokvn":{
if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
if (!isUrl(args[0])  && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
m.reply("Sedang Di Proses")
let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {url: args[0]}, 'apikey'))
if (!res.ok) throw await res.text()
var result = await res.json()
var result = result.result 
alpha.sendMessage(from, {audio:{url: result.audio}, mimetype:"audio/mpeg", ptt:true, caption: `DONE`}, {quoted:m})
}
break

case "patrick":
case "popoci":
case "sponsbob":
case "kawan-sponsbob":
case "awoawo":
case "chat":
case "benedict":
case "dbfly":
case "dino-kuning":
case "doge":
case "gojosatoru":
case "hope-boy":
case "jisoo":
case "kr-robot":
case "kucing":
case "lonte":
case "manusia-lidi":
case "menjamet":
case "meow":
case "nicholas":
case "tyni": {
if (!isPremium && !isCreator && global.onlyprem) return reply(`Fitur Khusus Member Premium !`)
m.reply("Sedang Di Proses")
let res = await fetch(global.api('alfa', '/api/telegram-sticker/' + command, {}, 'apikey'))
if (!res.ok) throw await res.text()
let img = await res.buffer()
let savestik = await alpha.sendImageAsSticker(m.chat, img, m, {
packname: packname,
author: author
})
await fs.unlinkSync(savestik)
}
break

case 'ttp':
case 'attp':{
if (!isPremium && !isCreator && global.onlyprem) return reply(`Fitur Khusus Member Premium !`)
if (!text) return reply(`Kirim perintah:\n${prefix+command} teks\n\nContoh penggunaan\n${prefix+command} saya robok anda goblok`)
let res = await fetch(global.api('alfa', '/api/canvas/' + command, {text: text}, 'apikey'))
if (!res.ok) throw await res.text()
let img = await res.buffer()
let encmedia = await alpha.sendMediaAsSticker(m.chat, img, m, {
packname: global.packname,
author: author
})
await fs.unlinkSync(encmedia)
}
break

case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink':{
if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
if (!isBotAdmins) throw reply(`Bot Bukan Admin`)
m.reply("Sedang Di Proses")
let response = await alpha.groupInviteCode(m.chat)
alpha.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'revoke':
case 'resetlink':
case 'resetlinkgrup':
case 'resetlinkgroup':
case 'resetlinkgc':{
if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
if (!isBotAdmins) throw reply(`Bot Bukan Admin`)
if (!isAdmins && !isCreator) return reply(`Fitur Ini Khusus Admin !`)
m.reply("Sedang Di Proses")
alpha.groupRevokeInvite(m.chat)
reply(`Done Reset Link Gc Nya Kak`)
}
break

case 'kosong':{
if (!isCreator) return (`Fitur Ini Khusus Owner`)
reply(`
























































`)
}
break

case 'out':{
if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
await alpha.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'listonline': case 'onlinelist':{
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
alpha.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, {
mentions: online
})
}
break

case 'public':{
if (!isCreator) return (`Fitur Ini Khusus Owner`)
alpha.public = true
reply('*Sukses Ganti Bot Ke Mode Public*')
}
break

case 'self':{
if (!isCreator) return (`Fitur Ini Khusus Owner`)
alpha.public = false 
reply('*Sukses Ganti Bot Ke mode Self, Jika Mau Ganti Bot  Ke Mode Public Silahkan Ke Nomor Bot Ketik .public*')
}
break

case 'tiktokkayes':{
m.reply("Sedang Di Proses")
var but = [{ buttonId: `grubbot`, buttonText: { displayText: `GROUP BOT` }, type: 1 }]
var kayes = JSON.parse(fs.readFileSync('./RANDOM/kayes.json'))
var hasil = pickRandom(kayes)
alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
}
break

case 'tiktokgirl':{
m.reply("Sedang Di Proses")
var asupan = JSON.parse(fs.readFileSync('./RANDOM/tiktokgirl.json'))
var hasil = pickRandom(asupan)
alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
}
break

case 'tiktokghea':{
m.reply("Sedang Di Proses")
var gheayubi = JSON.parse(fs.readFileSync('./RANDOM/gheayubi.json'))
var hasil = pickRandom(gheayubi)
alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
}
break

case 'tiktokbocil':{
m.reply("Sedang Di Proses")
var bocil = JSON.parse(fs.readFileSync('./RANDOM/bocil.json'))
var hasil = pickRandom(bocil)
alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
}
break

case 'tiktokukhty':{
m.reply("Sedang Di Proses")
var ukhty = JSON.parse(fs.readFileSync('./RANDOM/ukhty.json'))
var hasil = pickRandom(ukhty)
alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
}
break

case 'tiktoksantuy':{
m.reply("Sedang Di Proses")
var santuy = JSON.parse(fs.readFileSync('./RANDOM/santuy.json'))
var hasil = pickRandom(santuy)
alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
}
break

case 'tiktokpanrika':{
m.reply("Sedang Di Proses")
var rikagusriani = JSON.parse(fs.readFileSync('./RANDOM/panrika.json'))
var hasil = pickRandom(rikagusriani)
alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
}
break

case 'tiktoknotnot':{
m.reply("Sedang Di Proses")
var notnot = JSON.parse(fs.readFileSync('./RANDOM/notnot.json'))
var hasil = pickRandom(notnot)
alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
}
break

case 'tiktokgabagtha':{
m.reply("Sedang Di Proses")
var gabagtha = JSON.parse(fs.readFileSync('./RANDOM/tiktokgabagtha.json'))
var hasil = pickRandom(gabagtha)
alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
}
break

case 'block':{
if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await alpha.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'unblock':{
if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await alpha.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'setnamegc':
case 'setnamagc':{
if (!m.isGroup) return(`Fitur Ini Khusus Group`)
if (!isBotAdmins) return(`Bot Bukan Admin`)
if (!isAdmins) return(`Fitur Ini Khusus Admin !`)
if (!text) throw 'Text Nya ?'
await alpha.groupUpdateSubject(m.chat, text).then((res) => reply("Sukses Ngab")).catch((err) => reply(jsonformat(err)))
}
break

case 'setdesc': case 'setdesk':{
if (!m.isGroup) return(`Fitur Ini Khusus Group`)
if (!isBotAdmins) return(`Bot Bukan Admin`)
if (!isAdmins) return(`Fitur Ini Khusus Admin !`)
if (!text) throw 'Text Nya ?'
await alpha.groupUpdateDescription(m.chat, text).then((res) => reply("Sukses Ngab")).catch((err) => reply(jsonformat(err)))
}
break

case 'gitclone':{
if (!args[0]) return reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/DINS-BOTZ/DINxxx`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Eror Bang Link Nya`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
alpha.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply("Sukses"))
}
break

case 'developer': case 'dev': {
reply(`RENZ-BOT DEVELOPER\n\n\n2022-2023 RENZ-BOT MD.\n\nWhatshapp\nJER: wa.me/6285156028374\n\nINSTAGRAM:\nRENZ BOT`)
}
break

case 'delprem': case 'unprem': case 'delpremium': {
if (!isCreator) return (`Emank Lu Owner Gua Kah ?`)
if (!text) return reply(`*Kek gini bang*\n\n• ${prefix + command} number\n*Contoh:* ${prefix + command} 62887435047326\n\natau\n\n• ${prefix + command} @tag\n*Contoh:* ${prefix + command} @62887435047326`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
if (users) {
premium.splice(_prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
alpha.sendMessage(m.chat, {text : "Sukses Delete Premium"}, {quoted: fkontak})
} else {
var cekpr = await alpha.onWhatsApp(args[0] + "@s.whatsapp.net")
if (cekpr.length == 0) return reply(`Nomor ${args[0]} tidak terdaftar di WhatsApp`)
premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
alpha.sendMessage(m.chat, {text : "Sukses Delete Premium"}, {quoted: fkontak})
}
}
break
 case 'addsewa':{
	 if(!m.isGroup) {
	 if(!q) return setReply("Maukian angka 1m/1d/1h")
	const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
	let LinkGc = q.split(" ")[0];
	let Second = q.split(" ")[1];
	  let code = LinkGc.match(rex1);
	if (code == null) return  setReply("No invite url detected.");
	
	let kode = code[0].replace("chat.whatsapp.com/", "");
	await alpha.groupAcceptInvite(kode)
	let { id, subject,creator,creation,desc,descId } = await alpha.groupGetInviteInfo(kode).catch(async () => {
	return setReply("Invalid invite url.");
	});
	setReply(`Sukses`)
	
	await _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
	} else if(m.isGroup){
	if(!q) return setReply("Maukian angka 1m/1d/1h")
	if (isBotGroupAdmins) {
	let linkgc = await alpha.groupInviteCode(from)
	var yeh = `https://chat.whatsapp.com/${linkgc}`
	} else if(!isBotGroupAdmins){
	var yeh = `Botz Is Not Admin`
	} 
	_sewa.addSewaGroup(from, groupName, yeh, q, sewa)
	setReply("Berhasil Add Sewa ke group")
	}
	}
	break
 case 'listsewa': 
	let ordernye = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
	for (let i of sewa){
	let cekvipp = pantek(i.expired - Date.now())
	ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${i.linkgc}\n\n`             
	 } 
	ordernye += `© Renz Payment`
	setReply(ordernye)
	break
 case 'ceksewa': 
	case 'sewacek':
	if (!m.isGroup) return setReply(mess.only.group)
	if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
	let cekid = pantek(_sewa.getSewaExpired(from, sewa) - Date.now())
	let sewenye = `「 *SEWA EXPIRE* 」
	*Group*: ${groupName}
	*ID*: ${from}
	*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
	setReply(sewenye)
break
case 'addprem':{
if (!isCreator) return (`Emank Lu Owner Gua Kah ?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!(pcknm && atnm)) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${command} @62887435047326|30d`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
if (users) {
_prem.addPremiumUser((pcknm.replace('@', '') + '@s.whatsapp.net').replace(' @', '@'), atnm, premium)
alpha.sendMessage(m.chat, {text : "Sukses Add Premium"}, {quoted: fkontak})
} else {
var cekap = await alpha.onWhatsApp(pcknm + "@s.whatsapp.net")
if (cekap.length == 0) return reply(`Nomor ${pcknm} tidak terdaftar di WhatsApp`)
_prem.addPremiumUser((pcknm.replace('@', '') + '@s.whatsapp.net').replace(' @', '@'), atnm, premium)
alpha.sendMessage(m.chat, {text : "Sukses Add Premium"}, {quoted: fkontak})

}
}
break

case 'listpremium': case 'listprem':{
let txt = ""
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*🆔 ID:* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*⏰ Expired:* PERMANENT\n\n`
} else {
let cekvip = i.expired - Date.now()
txt += `*⏰ Expired:* ${msToDate(cekvip)}`
}
}
alpha.sendMessage(m.chat, { text: `「 *PREMIUM USER LIST* 」\n\n*👑 Total Premium : ${premium.length} user*\n\n${txt}` }, { mentions: men, quoted: m })
}
break

case 'buyprem':{
alpha.sendContact(m.chat, global.owner,), reply(`Buy Premium Chat Owner`)
}
break

case 'ai': case 'chatgpt':
if (!isPremium && !isCreator && global.onlyprem) return reply(`Fitur Khusus Member Premium !`)
try {
if (global.jeropenai === "ISI_APIKEY_DIGITAL OCEAN_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file settings.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa Itu Bot WhatsApp`);
m.reply("Sedang Di Proses")
const configuration = new Configuration({
apiKey: global.jeropenai,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: text,
temperature: 0, // Higher values means the model will take more risks.
max_tokens: 2048, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
top_p: 1, // alternative to sampling with temperature, called nucleus sampling
frequency_penalty: 0.3, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
presence_penalty: 0 // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
 });
 reply(`${response.data.choices[0].text}`);
 } catch (error) {
 if (error.response) {
 console.log(error.response.status);
 console.log(error.response.data);
 console.log(`${error.response.status}\n\n${error.response.data}`);
 } else {
 console.log(error);
 reply("Maaf, sepertinya ada yang error :"+ error.message);
 }
}
break

case 'antiwame2':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
if (args[0] === "on") {
if (isAntiWame2) return reply(`Udah aktif`)
antiwame2.push(m.chat)
fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
reply('Successfully Activate antiwame2 In This Group')
} else if (args[0] === "off") {
if (!isAntiWame2) return reply(`Udah nonaktif`)
let anu = antiwame2.indexOf(m.chat)
antiwame2.splice(anu, 1)
fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
reply('Successfully Disabling antiwame2 In This Group')
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break

case 'antilink2':{
if (!m.isGroup) return reply(`Fitur Ini Khusus Group`)
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply("Bot harus menjadi admin")
if (args[0] === "on") {
if (isAntiLink2) return reply(`Udah aktif`)
antilink2.push(m.chat)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
reply('Successfully Activate antilink2 In This Group')
} else if (args[0] === "off") {
if (!isAntiLink2) return reply(`Udah nonaktif`)
let anu = antilink2.indexOf(m.chat)
antilink2.splice(anu, 1)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
reply('Successfully Disabling antilink2 In This Group')
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break

case 'groupbot': case 'grubbot': case 'grupbot':{
reply(grubbot)
}
break

case 'spotify':{ //credit: Ray Senpaiâ¤ï¸ https://github.com/EternityBots/Nezuko
if (!text) return reply(`Mana Link Nya ?`)
const Spotify = require('./lib/spotify')
const spotify = new Spotify(text)
const info = await spotify.getInfo()
if ((info).error) throw `The link you provided is not spotify link`
const { name, artists, album_name, release_date, cover_url } = info
const details = `*Title:* ${name || ''}\n*Artists:* ${(artists || []).join(
','
)}\n*Album:* ${album_name}\n*Release Date:* ${release_date || ''}`
const response = await alpha.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
const bufferpotify = await spotify.download()
await alpha.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
}
break

case 'yts': case 'ytsearch': {
if (!text) throw `Contoh : ${prefix + command} story wa anime`
m.reply("Sedang Di Proses")
let yts = require("youtube-yts")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUploaded : ${i.ago}\nUrl : ${i.url}\n\n`
}
alpha.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break

case 'google': {
if (!text) throw `Contoh : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `*Title* : ${g.title}\n`
teks += `*Description* : ${g.snippet}\n`
teks += `*Link* : ${g.link}\n\nIni Hasil Nya Kak\n\n`
}
reply(teks)
})
}
break

case 'tes':
case 'runtime': {
reply(`Runtime : ${runtime(process.uptime())}`)
}
break

case 'antilinkall': {
if (!m.isGroup) return reply(`Fitur Ini Khusus Group`)
if (!isBotAdmins) return reply(`Bot Bukan Admin`)
if (!isAdmins && !isCreator) return reply(`Fitur Ini Khusus Admin !`)
if (args[0] === "on") {
if (AntiLinkAll) return reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
reply('Success in turning on all antilink in this group')
var groupe = await alpha.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
alpha.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
reply('Success in turning off all antilink in this group')
} else {
alpha.sendMessage(m.chat, {text : "Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on"}, {quoted: fkontak})
}
}
break

case 'ping': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, {
length
}) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break

case 'ytmp4': case 'ytvideo': {//credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
const jerofc = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !jerofc.isYTUrl(text)) throw `Link??\n\nContoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
const vid=await jerofc.mp4(text)
const ytc=`
Tittle:* ${vid.title}
Date:* ${vid.date}
Duration:* ${vid.duration}
Quality:* ${vid.quality}`
alpha.sendMessage(m.chat,{ video: {url:vid.videoUrl}, caption: ytc },{quoted:m})
}
break

case 'pinterest':{
if (!text) return reply('Contoh Penggunaan : .pinterest JerOfc')
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random(), anu.length)]
alpha.sendMessage(m.chat, { image: { url: result }, caption: `Media Url : `+result }, { quoted: m })
}
break

case 'bctext': case 'broadcasttext': case 'broadcast':
if (!isCreator) return reply("Fitur khusus owner!")
if (!text) throw `Mana Text Nya ?`
var data = await store.chats.all()
for (let i of data) {
alpha.sendMessage(i.id, {text: `${namaowner}'s Broadcast\n\nMessage : ${q}` })
await sleep(1000)
}
break

case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply image'
if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
m.reply("Sedang Di Proses")
let media = await alpha.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let bufferimg13x = fs.readFileSync(ran)
alpha.sendMessage(m.chat, { image: bufferimg13x }, { quoted: m })
fs.unlinkSync(ran)
})
}
break

case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker':{
if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
if (/image/.test(mime)) {
m.reply("Sedang Di Proses")
let media = await quoted.download()
let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('*Maximum 10 seconds!*')
let media = await quoted.download()
let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
alpha.sendMessage(m.chat, {text : "Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik"}, {quoted: fkontak})
}
}
break

case 'setnamabot': case 'setnamebot': {
if (!isCreator) return reply("Fitur Ini Khusus Owner !")
if (!text) throw `Contoh : ${prefix + command} WhatsApp ✅`
let name = await alpha.updateProfileName(text)
reply(`Successfully renamed bot to ${name}`)
}
break

case 'setstatus': case 'setbiobot': case 'setbotbio': {
if (!isCreator) return reply("Fitur Ini Khusus Owner !")
if (!text) throw `this is a WhatsApp Bot named JerOfc`
let name = await alpha.updateProfileStatus(text)
alpha.sendMessage(m.chat, {text : "Successfully changed bot bio status to ${name}"}, {quoted: fkontak})
}
break

case 'play': case 'ytplay':{
if (!text) return `Contoh : ${prefix + command} Bot WhatsApp`
let yts = require("youtube-yts")
let search = await yts(text)
let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttonMessage = {
image: { url: anulay.thumbnail },
caption: `
Title : ${anulay.title}
Ext : Search
ID : ${anulay.videoId}
Duration : ${anulay.timestamp}
Viewers : ${anulay.views}
Upload At : ${anulay.ago}
Author : ${anulay.author.name}
Channel : ${anulay.author.url}
Description : ${anulay.description}
Url : ${anulay.url}

jika mau download audio gunakan cara 
.ytmp3 ${anulay.url}

jika mau download video gunakan cara 
.ytmp4 ${anulay.url}`,
footer: namabot,
headerType: 4
}
alpha.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break

case 'ytmp3': case 'ytaudio': case 'playmp3': {//credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
const jeraudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !jeraudp3.isYTUrl(text)) throw `Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`
const audio=await jeraudp3.mp3(text)
await alpha.sendMessage(m.chat,{
audio: fs.readFileSync(audio.path),
mimetype: 'audio/mp4', ptt: true,
contextInfo:{
externalAdReply:{
title:audio.meta.title,
body: namabot,
thumbnail: await fetchBuffer(audio.meta.image),
mediaType:2,
mediaUrl:text,
}
},
},{quoted:m})
await fs.unlinkSync(audio.path)
}
break

case 'ytmp3xx': case 'ytaudioxx': case 'playmp3xx': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
alpha.sendImage(m.chat, media.thumb, `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${isUrl(text)}\nExt : MP3\nResolution : ${args[1] || '128kbps'}`, m)
alpha.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break

case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (/image/.test(mime)) {
m.reply("Sedang Di Proses")
mee = await alpha.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
alpha.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
}
}
break

case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Contoh : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Contoh : ${prefix + command} 😅+🤔`
let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anumojimix.results) {
let encmedia = await alpha.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'emojimix2': {
if (!text) throw `Contoh : ${prefix + command} 😅`
let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anumix2.results) {
let encmedia= await alpha.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'ffstalk':{
if (!q) return reply(`Kirim perintah ${prefix+command} id\nContoh: ${prefix+command} 12345678`)
var pack = q
stalkff(pack).then(i=>{
if (i.status !== 200) return reply('Terjadi Kesalahan!!\nid ff tidak ditemukan')
reply(`*STALKER FF*

*ID*: ${i.id}
*Nickname:* ${i.nickname}`)
})
}
break

case 'mlstalk':{
if (!q) return reply(`Kirim perintah ${prefix+command} id|zone\nContoh: ${prefix+command} 1234578|1234`)
var id = q.split('|')[0]
var zon = q.split('|')[1]
if (!id) return reply('ID wajib di isi')
if (!zon) return reply('ZoneID wajib di isi')
stalkml(id, zon).then(i=>{
if (i.status !== 200) return reply('Terjadi Kesalahan!!\nid/zone tidak ditemukan')
reply(`*STALKER ML*

ID: ${id}
Zone: ${zon}
Nickname: ${i.nickname}`)
})
}
break

case 'sendlinkgc': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283136394680`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await alpha.groupInviteCode(from)
alpha.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
alpha.sendMessage(m.chat, {text : "Sukses Sendlinkgc Ke Nomor Itu"}, {quoted: fkontak})
}
break

case 'assalamualaikum':{
reply(`Waalaikumsalam`)
}
break

case 'broadcastvid': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':{
if (!isCreator) return reply("Fitur khusus owner!")
if (!text) throw `Mana Text Nya ?`
let getGroups = await alpha.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let jercast = groups.map(v => v.id)
reply(` Broadcasting in ${jercast.length} Group Chat, in ${jercast.length * 1.5} seconds`)
for (let i of jercast) {
let txt = `${namaowner}'s Broadcast\n\nMessage : ${text}`
if(/image/.test(mime)) {
let media = await quoted.download()
await alpha.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await alpha.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
}
alpha.sendMessage(m.chat, {text : "Sukses Broadcast"}, {quoted: fkontak})
}
break

case 'tagall': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
let teks = `╚» Tag All «╝ 

🌿 *Message : ${q ? q : 'empty'}*\n\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}\n`
}
alpha.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case 'mediafire': {
if (!text) throw `Mana Link Nya ?`
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
const { mediafireDl } = require('./lib/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
alpha.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break

case 'china':
case 'indonesia':
case 'malaysia':
case 'thailand':
case 'korea':
case 'japan':
case 'vietnam':
case 'jenni':
case 'jiiso':
case 'lisa':
case 'rose': {
m.reply("Sedang Di Proses")
let res = await fetch(global.api('alfa', '/api/cecan/' + command, {}, 'apikey'))
if (!res.ok) throw await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'cecan.jpg', `CANTIK KAN BANG ISTRI KITA ?`, m)
}
break

case "tebakgambar":{
if (tebakgambar[m.chat]) return alpha.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tebakgambar[m.chat][0] })
var res = await fetch(api('alfa', '/api/game/' + command, {}, 'apikey'))
if(!res.ok) throw res.text()
var result = await res.json()
console.log("Jawaban: " + result.jawaban)
tebakgambar[m.chat] = [
await alpha.sendMessage(m.chat, {image:{url: result.img}, caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`},{quoted: m}
), result, 4999,
setTimeout(() => {
if (tebakgambar[m.chat]) {
alpha.sendButtonText(m.chat, [{
buttonId: '.tebakgambar',
buttonText: {
displayText: "Tebak Gambar"
},
type: 1
}], waktuHabis(result.jawaban), footer_text, m)
delete tebakgambar[m.chat]
}
}, 120000)
]
}
break

case 'tega': {
if (!(m.chat in tebakgambar)) return
let json = tebakgambar[m.chat][1]
alpha.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '� ' + reply, '.ytega', 'Dahlah Nyerah Aja', m)
}
break

case 'ytega': {
if (!(m.chat in tebakgambar)) return
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.tebakgambar', 'Soal baru', m)
}
break

case "tebakkata":{
if (tebakkata[m.chat]) return alpha.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tebakkata[m.chat][0] })
var anu = await fetch(api('alfa', '/api/game/tebakkata', {}, 'apikey'))
if(!anu.ok) throw anu.text()
var result = await anu.json()
var result = result.result
console.log("Jawaban: " + result.jawaban)
tebakkata[m.chat] = [
await alpha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
setTimeout(() => {
if (tebakkata[m.chat]) {
reply(waktuHabis(result.jawaban) + "\n\nkirim perintah .tebakkata untuk bermain lagi!")
delete tebakkata[m.chat]
}
}, 120000)
]
}
break

case 'teka': {
if (!(m.chat in tebakkata)) return
let json = tebakkata[m.chat][1]
reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
break

case 'yteka': {
if (!(m.chat in tebakkata)) return
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
return reply("Payah lu, gitu aja nyerah")
}
break

case "tebakbendera": {
if (tebakbendera[m.chat]) return alpha.sendMessage(m.chat, { text: "Soal ini belum selesai"}, { quoted: tebakbendera[m.chat][0] })
var anu = await fetch(api('alfa', '/api/game/tebakbendera', {}, 'apikey'))
if (!anu.ok) throw anu.text()
var result = await anu.json()
var result = result.result
console.log("Jawaban: " + result.name)
tebakbendera[m.chat] = [
await alpha.sendMessage(m.chat, { image: { url: result.img }, caption: `Gamabar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik` }, { quoted: m }), result, 4999,
setTimeout(() => {
if (tebakbendera[m.chat]) {
reply(waktuHabis(result.name) + "\n\nkirim perintah .tebakbendera untuk bermain lagi!")
delete tebakbendera[m.chat]
}
}, 120000)
]
}
break

case 'tebe': {
if (!(m.chat in tebakbendera)) return
let json = tebakbendera[m.chat][1]
reply(m.chat, '```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footer_text, '.ytebe', 'Dahlah Nyerah Aja', m)
}
break

case 'ytebe': {
if (!(m.chat in tebakbendera)) return
clearTimeout(tebakbendera[m.chat][3])
delete tebakbendera[m.chat]
return reply(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.tebakbendera', 'Soal baru', m)
}
break

case 'caklontong': { 
if (caklontong[m.chat]) return alpha.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: caklontong[m.chat][0] })
var anu = await fetch(api('alfa', '/api/game/caklontong', {}, 'apikey'))
if(!anu.ok) throw anu.text()
var result = await anu.json()
var result = result.result
console.log("Jawaban: " + result.jawaban)
caklontong[m.chat] = [
await alpha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
setTimeout(() => {
if (caklontong[m.chat]) {
reply(waktuHabis(result.jawaban + '\n' + result.deskripsi) + "\n\nkirim perintah .caklontong untuk bermain lagi!")
delete caklontong[m.chat]
}
}, 120000)
]
}
break

case 'telo': {
if (!(m.chat in caklontong)) return
let json = caklontong[m.chat][1]
reply(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footer_text, '.ytelo', 'Dahlah Nyerah Aja', m)
}
break

case 'ytelo': {
if (!(m.chat in caklontong)) return
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.caklontong', 'Soal baru', m)
}
break

case 'susunkata': {
if (susunkata[m.chat]) return alpha.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
var anu = await fetch(api('alfa', '/api/game/susunkata', {}, 'apikey'))
if(!anu.ok) throw anu.text()
var result = await anu.json()
var result = result.result
console.log("Jawaban: " + result.jawaban)
susunkata[m.chat] = [
await alpha.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
setTimeout(() => {
if (susunkata[m.chat]) {
reply(waktuHabis(result.jawaban) + "\n\nkirim perintah .susunkata untuk bermain lagi!")
delete susunkata[m.chat]
}
}, 120000)
]
}
break

case 'tesuka': {
if (!(m.chat in susunkata)) return
let json = susunkata[m.chat][1]
reply(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footer_text, '.ytesuka', 'Dahlah Nyerah Aja', m)
}
break

case 'ytesuka': {
if (!(m.chat in susunkata)) return
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
return reply(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.susunkata', 'Soal baru', m)
}
break

case 'tebakkalimat': {
if (tebakkalimat[m.chat]) return alpha.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
var anu = await fetch(api('alfa', '/api/game/tebakkalimat', {}, 'apikey'))
if(!anu.ok) throw anu.text()
var result = await anu.json()
var result = result.result
console.log("Jawaban: " + result.jawaban)
tebakkalimat[m.chat] = [
await alpha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
setTimeout(() => {
if (tebakkalimat[m.chat]) {
reply(waktuHabis(result.jawaban) + "\n\nkirim perintah .tebakkalimat untuk bermain lagi!")
delete tebakkalimat[m.chat]
}
}, 120000)
]
}
break

case 'tekatu': {
if (!(m.chat in tebakkalimat)) return
let json = tebakkalimat[m.chat][1]
reply(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footer_text, '.ytekatu', 'Dahlah Nyerah Aja', m)
}
break

case 'ytekatu': {
if (!(m.chat in tebakkalimat)) return
clearTimeout(tebakkalimat[m.chat][3])
delete tebakkalimat[m.chat]
return reply(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.tebakkalimat', 'Soal baru', m)
}
break

case 'tebaksiapa': {
if (siapaaku[m.chat]) return alpha.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
var anu = await fetch(api('alfa', '/api/game/siapakahaku', {}, 'apikey'))
if (!anu.ok) throw anu.text()
var result = await anu.json()
var result = result.result
console.log("Jawaban: " + result.jawaban)
siapaaku[m.chat] = [
await alpha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
setTimeout(() => {
if (siapaaku[m.chat]) {
reply(waktuHabis(result.jawaban) + "\n\nkirim perintah .tebaksiapa untuk bermain lagi!")
delete siapaaku[m.chat]
}
}, 120000)
]
}
break

case 'swm': case 'stickerwm': case 'wm': case 'take': {  
if (!args.join(" ")) return reply(`Contoh :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
alpha.downloadAndSaveMediaMessage(quoted, "gifee")
alpha.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
alpha.sendMessage(m.chat, {text : "Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds"}, {quoted: fkontak})
}
}
break

case "wuyifan":
case "suga":
case "parkchanyeol":
case "ohsehun":
case "luhan":
case "kimtaehyung":
case "kimseok":
case "kimnanjoon":
case "kimminseok":
case "kimjunmyeon":
case "kimjong":
case "kimjondae":
case "jungkook":
case "jimin":
case "jhope":
case "huangzitao":
case "dohkyungsoo":
case "baekhyung": {
if (!isPremium && !isCreator && global.onlyprem) return reply(`Fitur Khusus Member Premium !`)
m.reply("Sedang Di Proses")
let res = await fetch(global.api('alfa', '/api/cogan/' + command, {}, 'apikey'))
if (!res.ok) throw await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'cogan.jpg', `GANTENG GA KA ?`, m)
}
break

case 'group': case 'grup': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
if (args[0] === 'close'){
await alpha.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Successfully Closed The Group*`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await alpha.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Successfully Opened The Group*`)).catch((err) => m.reply(jsonformat(err)))
} else {
reply(`Kirim perintah ${prefix + command} open/close\n\nContoh: ${prefix + command} open`)
}
}
break

case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':

Jer_dev = await getBuffer(`https://github.com/DGalpha/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await alpha.sendMessage(m.chat, { audio: Jer_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
break

case 'horror':
case 'game8bit':
case 'layered':
case 'glitch2':
case 'cool-graffiti':
case 'cool-wall-graffiti':
case 'realistic':
case 'space3d':
case 'glitch-tiktok':
case 'stone':
case 'marvel':
case 'marvel2':
case "metal-rose-gold":
case 'pornhub':
case 'avengers':
case 'metal-rainbow':
case 'metal-gold':
case 'metal-galaxy':
case 'lion':
case 'wolf-black-white':
case 'wolf-galaxy':
case 'ninja':
case '3dsteel':
case 'horror2':
case 'lava':
case 'bagel': {
if (!isPremium && !isCreator && global.onlyprem) return reply(`Fitur Khusus Member Premium !`)
if (!text) return reply(`Kirim perintah:\n${prefix+command} teks1|teks2\n\nContoh penggunaan:\n${prefix+command} renz|store`)
if (!text.includes('|')) return reply(`Kirim perintah:\n${prefix+command} teks1|teks2\n\nContoh penggunaan:\n${prefix+command} renz|store`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1];
m.reply("Sedang Di Proses")
let res = await fetch(global.api("alfa", '/api/textpro/' + command, {
text: m1,
text2: m2
}, 'apikey'))
if (!res.ok) throw await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'textpro.jpg', 'DONE', m)
}
break

case 'pushkon': case 'push': case 'pushkontak':{
if (!isCreator && !m.key.fromMe) return reply("Fitur khusus owner!")
if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!text) return reply(`Kirim perintah:\n${prefix+command}\n\nContoh : Sve Jer Nama Mu Siapa Biar Ku Back?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let pler of mem) {
alpha.sendMessage(pler, { text: q})
await sleep(20000)
}
alpha.sendMessage(m.chat, {text : "Sukses Push Kontak Nya Kak, Semoga Banyak Yang Sve Back"}, {quoted: fkontak})
}
break

case 'anticall': {
if (!m.key.fromMe && !isCreator) return reply("Fitur khusus owner!")
if (args[0] === "on") {
if (global.anticall === true) return reply(`Sudah Di Aktifkan Sebelumnya`)
global.anticall = true
reply(`Berhasil Mengaktifkan Anticall`)
} else if (args[0] === "off") {
if (global.anticall === false) return reply(`Sudah Di Nonaktifkan Sebelumnya`)
global.anticall = false
reply(`Sukses Nonaktifkan Anticall`)
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break

case 'nomerhoki': case 'nomorhoki': {
if (!Number(text)) throw `Contoh : ${prefix + command} 6283136394680`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Nomor HP :* ${anu.message.nomer_hp}\n *Angka Shuzi :* ${anu.message.angka_shuzi}\n *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break

case 'artimimpi': case 'tafsirmimpi': {
if (!text) throw `Contoh : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Mimpi :* ${anu.message.mimpi}\n *Arti :* ${anu.message.arti}\n *Solusi :* ${anu.message.solusi}`, m)
}
break

case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'suamiistri': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Nama Suami :* ${anu.message.suami.nama}\n *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n *Nama Istri :* ${anu.message.istri.nama}\n *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'ramalancinta': case 'ramalcinta': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'artinama': {
if (!text) throw `Contoh : ${prefix + command} Dika Ardianta`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'kecocokannama': case 'cocoknama': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Life Path :* ${anu.message.life_path}\n *Destiny :* ${anu.message.destiny}\n *Destiny Desire :* ${anu.message.destiny_desire}\n *Personality :* ${anu.message.personality}\n *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break

case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) throw `Contoh : ${prefix + command} Dika|Novia`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
alpha.sendImage(m.chat,  anu.message.gambar, ` *Nama Anda :* ${anu.message.nama_anda}\n *Nama Pasangan :* ${anu.message.nama_pasangan}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break

case 'jadianpernikahan': case 'jadiannikah': {
if (!text) throw `Contoh : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Tanggal Pernikahan :* ${anu.message.tanggal}\n *karakteristik :* ${anu.message.karakteristik}`, m)
}
break

case 'sifatusaha': {
if (!ext)throw `Contoh : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Usaha :* ${anu.message.usaha}`, m)
}
break

case 'rejeki': case 'rezeki': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Rezeki :* ${anu.message.rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'pekerjaan': case 'kerja': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Pekerjaan :* ${anu.message.pekerjaan}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) throw `Contoh : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Angka Akar :* ${anu.message.angka_akar}\n *Sifat :* ${anu.message.sifat}\n *Elemen :* ${anu.message.elemen}\n *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break

case 'potensipenyakit': case 'penyakit': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Sektor :* ${anu.message.sektor}\n *Elemen :* ${anu.message.elemen}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'artitarot': case 'tarot': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendImage(m.chat, anu.message.image, ` *Lahir :* ${anu.message.tgl_lahir}\n *Simbol Tarot :* ${anu.message.simbol_tarot}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'fengshui': {
if (!text) throw `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tahun_lahir}\n *Gender :* ${anu.message.jenis_kelamin}\n *Angka Kua :* ${anu.message.angka_kua}\n *Kelompok :* ${anu.message.kelompok}\n *Karakter :* ${anu.message.karakter}\n *Sektor Baik :* ${anu.message.sektor_baik}\n *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break

case 'haribaik': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Kala Tinantang :* ${anu.message.kala_tinantang}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'harisangar': case 'taliwangke': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'harinaas': case 'harisial': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Hari Naas :* ${anu.message.hari_naas}\n *Info :* ${anu.message.catatan}\n *Catatan :* ${anu.message.info}`, m)
}
break

case 'nagahari': case 'harinaga': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'arahrejeki': case 'arahrezeki': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Rezeki :* ${anu.message.arah_rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'peruntungan': {
if (!text) throw `Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'weton': case 'wetonjawa': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Tanggal :* ${anu.message.tanggal}\n *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n *Watak Hari :* ${anu.message.watak_hari}\n *Naga Hari :* ${anu.message.naga_hari}\n *Jam Baik :* ${anu.message.jam_baik}\n *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break

case 'sifat': case 'karakter': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break

case 'keberuntungan': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}`, m)
}
break

case 'memancing': {
if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Tanggal :* ${anu.message.tgl_memancing}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'masasubur': {
if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'shio': {
if (!text) throw `Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
alpha.sendText(m.chat, ` *Hasil :* ${anu.message}`, m)
}
break

//Asupan
case 'chika':
case 'rikagusriani':
case 'bocil':
case 'geayubi':
case 'santuy':
case 'ukhty':
case 'asupan':
case 'delvira':
case 'ayu':
case 'bunga':
case 'aura':
case 'nisa':
case 'ziva':
case 'yana':
case 'viona':
case 'syania':
case 'riri':
case 'syifa':
case 'mama-gina':
case 'alcakenya':
case 'mangayutri': {
if (!isPremium && !isCreator && global.onlyprem) return reply(`Fitur Khusus Member Premium !`)

m.reply("Sedang Di Proses")
let res = await fetch(global.api('alfa', '/api/asupan/' + command, {}, 'apikey'))
if (!res.ok) throw await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'asupan.mp4', 'DONE', m)
}
break

case 'jodohku': {
if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Jodoh mu adalah

@${me.split('@')[0]}  @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: '.jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await alpha.sendMessage(m.chat, buttons, jawab, alpha.user.name, m, {mentions: ments})
}
break

case 'jadian': {
if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian Jangan lupa pajak jadiannya

@${orang.split('@')[0]}  @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: '.jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await alpha.sendMessage(m.chat, buttons, jawab, alpha.user.name, m, {mentions: menst})
}
break

case 'setexif': {
if (!isCreator && !m.key.fromMe) return reply("Fitur khusus owner!")
if (!text) throw `Contoh : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\nPackname : ${global.packname}\nAuthor : ${global.author}`)
}
break

case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break

case 'tiktok2':{ 
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Tiktok Bukan Kayak Gtu Cuy !!`)
m.reply("Sedang Di Proses")
require('./lib/tiktok').Tiktok(q).then( data => {
var button = [{ buttonId: `.tiktokaudio2 ${q}`, buttonText: { displayText: `AUDIO` }, type: 1 }, { buttonId: `.grubbot`, buttonText: { displayText: `GRUB BOT` }, type: 1 }]
alpha.sendMessage(m.chat, { caption: `DONE!`, video: { url: data.watermark }, buttons: button, footer: namabot, mentions: [m.sender] })
alpha.sendMessage(m.chat, {text : "Created By RizzPiw"}, {quoted: fkontak})
})
}
break

// Fun Menu
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'piatu':{
if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
alpha.sendMessage(from, { text: `anak ${command} di sini adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: m })
}
break

case "pushkontakid":
case "pushkontakidgc":
if (!isCreator && !m.key.fromMe) return reply("Fitur khusus owner!")
if (!text) return reply(`Penggunaan Salah, Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgc|teksnya`)
const metadata2 = await alpha.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
alpha.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(20000)
}
break

case "idgrub":{
if (!isCreator && !m.key.fromMe) return reply("Fitur khusus owner!")
let getGroups = await alpha.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = ` *LIST GROUP ANDA*\nTotal Group : ${anu.length} GROUP\n\n`
for (let x of anu) {
let metadata2 = await alpha.groupMetadata(x)
teks += `  ${metadata2.subject}
*ID :* ${metadata2.id}
*STATUS :* GROUP
*ANGGOTA :* ${metadata2.participants.length}\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik\nCommand ${prefix}pushkontak id|teks`)
}
break

case 'totag': {
if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!isBotAdmins) return reply("Bot Bukan Admin")
if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
alpha.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break

case 'addvn':{
if (!isCreator && !m.key.fromMe) return reply("Fitur khusus owner!")
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(q)) return reply("Nama tersebut sudah di gunakan")
let delb = await alpha.downloadAndSaveMediaMessage(quoted)
vnnye.push(q)
await fsx.copy(delb, `./database/Audio/${q}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break

case 'delvn':{
if (!isCreator && !m.key.fromMe) return reply("Fitur khusus owner!")
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(q)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(q)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${q}.mp3`)
reply(`Sukses delete vn ${q}`)
}
break

case 'listvn':{
let teksooo = '*LIST VN*\n'
for (let x of vnnye) {
teksooo += `${x}\n`
}
teksooo += `\n\n*Total ada : ${vnnye.length}*`
}
break

case 'detectpromote':
case 'promotedetect':
if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!isBotAdmins) return reply("Bot Bukan Admin")
if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
if (args[0] === "on") {
if (isPromote) return reply(`Berhasil Mengaktifkan Promote Detect`)
_promote.push(m.chat)
fs.writeFileSync('./database/promote.json', JSON.stringify(_promote, null, 2))
reply(lang.OkOn('Promote Detect'))
} else if (args[0] === "off") {
if (!isPromote) return reply(`Sudah Di Nonaktifkan Sebelumnya`)
let anu = _promote.indexOf(m.chat)
_promote.splice(anu, 1)
fs.writeFileSync('./database/promote.json', JSON.stringify(_promote, null, 2))
reply(`Sukses Nonaktifkan Promote Detect`('Promote Detect'))
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
break

// CERPEN 
case 'cerpen-anak':{
m.reply("Sedang Di Proses")
let cerpe = await cerpen(`anak`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break

case 'cerpen-bahasadaerah':{
m.reply("Sedang Di Proses")
let cerpet = await cerpen(`bahasa daerah`)
reply(`⭔ _*Title :*_ ${cerpet.title}\n⭔ _*Author :*_ ${cerpet.author}\n⭔ _*Category :*_ ${cerpet.kategori}\n⭔ _*Pass Moderation :*_ ${cerpet.lolos}\n⭔ _*Story :*_\n${cerpet.cerita}`)
}
break

case 'cerpen-bahasainggris':{
m.reply("Sedang Di Proses")
let cerpez = await cerpen(`bahasa Inggris`)
reply(`⭔ _*Title :*_ ${cerpez.title}\n⭔ _*Author :*_ ${cerpez.author}\n⭔ _*Category :*_ ${cerpez.kategori}\n⭔ _*Pass Moderation :*_ ${cerpez.lolos}\n⭔ _*Story :*_\n${cerpez.cerita}`)
}
break

case 'cerpen-bahasajawa':{
m.reply("Sedang Di Proses")
let cerpep = await cerpen(`bahasa jawa`)
reply(`⭔ _*Title :*_ ${cerpep.title}\n⭔ _*Author :*_ ${cerpep.author}\n⭔ _*Category :*_ ${cerpep.kategori}\n⭔ _*Pass Moderation :*_ ${cerpep.lolos}\n⭔ _*Story :*_\n${cerpep.cerita}`)
}
break

case 'cerpen-bahasasunda':{
m.reply("Sedang Di Proses")
let cerped = await cerpen(`bahasa sunda`)
reply(`⭔ _*Title :*_ ${cerped.title}\n⭔ _*Author :*_ ${cerped.author}\n⭔ _*Category :*_ ${cerped.kategori}\n⭔ _*Pass Moderation :*_ ${cerped.lolos}\n⭔ _*Story :*_\n${cerped.cerita}`)
}
break

case 'cerpen-budaya':{
m.reply("Sedang Di Proses")
let cerper = await cerpen(`budaya`)
reply(`⭔ _*Title :*_ ${cerper.title}\n⭔ _*Author :*_ ${cerper.author}\n⭔ _*Category :*_ ${cerper.kategori}\n⭔ _*Pass Moderation :*_ ${cerper.lolos}\n⭔ _*Story :*_\n${cerper.cerita}`)
}
break

case 'cerpen-cinta':{
m.reply("Sedang Di Proses")
let cerpem = await cerpen(`cinta`)
reply(`⭔ _*Title :*_ ${cerpem.title}\n⭔ _*Author :*_ ${cerpem.author}\n⭔ _*Category :*_ ${cerpem.kategori}\n⭔ _*Pass Moderation :*_ ${cerpem.lolos}\n⭔ _*Story :*_\n${cerpem.cerita}`)
}
break

case 'cerpen-cintaislami':{
m.reply("Sedang Di Proses")
let cerpel = await cerpen(`cinta islami`)
reply(`⭔ _*Title :*_ ${cerpel.title}\n⭔ _*Author :*_ ${cerpel.author}\n⭔ _*Category :*_ ${cerpel.kategori}\n⭔ _*Pass Moderation :*_ ${cerpel.lolos}\n⭔ _*Story :*_\n${cerpel.cerita}`)
}
break

case 'cerpen-cintapertama':{
m.reply("Sedang Di Proses")
let cerpes = await cerpen(`cinta pertama`)
reply(`⭔ _*Title :*_ ${cerpes.title}\n⭔ _*Author :*_ ${cerpes.author}\n⭔ _*Category :*_ ${cerpes.kategori}\n⭔ _*Pass Moderation :*_ ${cerpes.lolos}\n⭔ _*Story :*_\n${cerpes.cerita}`)
}
break

case 'cerpen-cintaromantis':{
m.reply("Sedang Di Proses")
let cerpde = await cerpen(`cinta romantis`)
reply(`⭔ _*Title :*_ ${cerpde.title}\n⭔ _*Author :*_ ${cerpde.author}\n⭔ _*Category :*_ ${cerpde.kategori}\n⭔ _*Pass Moderation :*_ ${cerpde.lolos}\n⭔ _*Story :*_\n${cerpde.cerita}`)
}
break

case 'cerpen-cintasedih':{
m.reply("Sedang Di Proses")
let fejdj = await cerpen(`cinta sedih`)
reply(`⭔ _*Title :*_ ${fejdj.title}\n⭔ _*Author :*_ ${fejdj.author}\n⭔ _*Category :*_ ${fejdj.kategori}\n⭔ _*Pass Moderation :*_ ${fejdj.lolos}\n⭔ _*Story :*_\n${fejdj.cerita}`)
}
break

case 'cerpen-cintasegitiga':{
m.reply("Sedang Di Proses")
let frofk = await cerpen(`Cinta segitiga`)
reply(`⭔ _*Title :*_ ${frofk.title}\n⭔ _*Author :*_ ${frofk.author}\n⭔ _*Category :*_ ${frofk.kategori}\n⭔ _*Pass Moderation :*_ ${frofk.lolos}\n⭔ _*Story :*_\n${frofk.cerita}`)
}
break

case 'cerpen-cintasejati':{
m.reply("Sedang Di Proses")
let frljkek = await cerpen(`cinta sejati`)
reply(`⭔ _*Title :*_ ${frljkek.title}\n⭔ _*Author :*_ ${frljkek.author}\n⭔ _*Category :*_ ${frljkek.kategori}\n⭔ _*Pass Moderation :*_ ${frljkek.lolos}\n⭔ _*Story :*_\n${frljkek.cerita}`)
}
break

case 'cerpen-galau':{
m.reply("Sedang Di Proses")
let cdjfj = await cerpen(`galau`)
reply(`⭔ _*Title :*_ ${cdjfj.title}\n⭔ _*Author :*_ ${cdjfj.author}\n⭔ _*Category :*_ ${cdjfj.kategori}\n⭔ _*Pass Moderation :*_ ${cdjfj.lolos}\n⭔ _*Story :*_\n${cdjfj.cerita}`)
}
break

case 'cerpen-gokil':{
m.reply("Sedang Di Proses")
let vrkfjf = await cerpen(`gokil`)
reply(`⭔ _*Title :*_ ${vrkfjf.title}\n⭔ _*Author :*_ ${vrkfjf.author}\n⭔ _*Category :*_ ${vrkfjf.kategori}\n⭔ _*Pass Moderation :*_ ${vrkfjf.lolos}\n⭔ _*Story :*_\n${vrkfjf.cerita}`)
}
break

case 'cerpen-inspiratif':{
m.reply("Sedang Di Proses")
let ngkgk = await cerpen(`inspiratif`)
reply(`⭔ _*Title :*_ ${ngkgk.title}\n⭔ _*Author :*_ ${ngkgk.author}\n⭔ _*Category :*_ ${ngkgk.kategori}\n⭔ _*Pass Moderation :*_ ${ngkgk.lolos}\n⭔ _*Story :*_\n${ngkgk.cerita}`)
}
break

case 'cerpen-jepang':{
m.reply("Sedang Di Proses")
let vrlgk = await cerpen(`jepang`)
reply(`⭔ _*Title :*_ ${vrlgk.title}\n⭔ _*Author :*_ ${vrlgk.author}\n⭔ _*Category :*_ ${vrlgk.kategori}\n⭔ _*Pass Moderation :*_ ${vrlgk.lolos}\n⭔ _*Story :*_\n${vrlgk.cerita}`)
}
break

case 'cerpen-kehidupan':{
m.reply("Sedang Di Proses")
let ntlgkt = await cerpen(`kehidupan`)
reply(`⭔ _*Title :*_ ${ntlgkt.title}\n⭔ _*Author :*_ ${ntlgkt.author}\n⭔ _*Category :*_ ${ntlgkt.kategori}\n⭔ _*Pass Moderation :*_ ${ntlgkt.lolos}\n⭔ _*Story :*_\n${ntlgkt.cerita}`)
}
break

case 'cerpen-keluarga':{
m.reply("Sedang Di Proses")
let bmflg = await cerpen(`keluarga`)
reply(`⭔ _*Title :*_ ${bmflg.title}\n⭔ _*Author :*_ ${bmflg.author}\n⭔ _*Category :*_ ${bmflg.kategori}\n⭔ _*Pass Moderation :*_ ${bmflg.lolos}\n⭔ _*Story :*_\n${bmflg.cerita}`)
}
break

case 'cerpen-kisahnyata':{
m.reply("Sedang Di Proses")
let yptoo = await cerpen(`kisah nyata`)
reply(`⭔ _*Title :*_ ${yptoo.title}\n⭔ _*Author :*_ ${yptoo.author}\n⭔ _*Category :*_ ${yptoo.kategori}\n⭔ _*Pass Moderation :*_ ${yptoo.lolos}\n⭔ _*Story :*_\n${yptoo.cerita}`)
}
break

case 'cerpen-korea':{
m.reply("Sedang Di Proses")
let jptpgr = await cerpen(`korea`)
reply(`⭔ _*Title :*_ ${jptpgr.title}\n⭔ _*Author :*_ ${jptpgr.author}\n⭔ _*Category :*_ ${jptpgr.kategori}\n⭔ _*Pass Moderation :*_ ${jptpgr.lolos}\n⭔ _*Story :*_\n${jptpgr.cerita}`)
}
break

case 'cerpen-kristen':{
m.reply("Sedang Di Proses")
let yesusanjing = await cerpen(`kristen`)
reply(`⭔ _*Title :*_ ${yesusanjing.title}\n⭔ _*Author :*_ ${yesusanjing.author}\n⭔ _*Category :*_ ${yesusanjing.kategori}\n⭔ _*Pass Moderation :*_ ${yesusanjing.lolos}\n⭔ _*Story :*_\n${yesusanjing.cerita}`)
}
break

case 'cerpen-liburan':{
m.reply("Sedang Di Proses")
let frkfkrk = await cerpen(`liburan`)
reply(`⭔ _*Title :*_ ${frkfkrk.title}\n⭔ _*Author :*_ ${frkfkrk.author}\n⭔ _*Category :*_ ${frkfkrk.kategori}\n⭔ _*Pass Moderation :*_ ${frkfkrk.lolos}\n⭔ _*Story :*_\n${frkfkrk.cerita}`)
}
break

case 'cerpen-malaysia':{
m.reply("Sedang Di Proses")
let mzbdjd = await cerpen(`malaysia`)
reply(`⭔ _*Title :*_ ${mzbdjd.title}\n⭔ _*Author :*_ ${mzbdjd.author}\n⭔ _*Category :*_ ${mzbdjd.kategori}\n⭔ _*Pass Moderation :*_ ${mzbdjd.lolos}\n⭔ _*Story :*_\n${mzbdjd.cerita}`)
}
break

case 'cerpen-mengalphan':{
m.reply("Sedang Di Proses")
let bgfngk = await cerpen(`mengalphan`)
reply(`⭔ _*Title :*_ ${bgfngk.title}\n⭔ _*Author :*_ ${bgfngk.author}\n⭔ _*Category :*_ ${bgfngk.kategori}\n⭔ _*Pass Moderation :*_ ${bgfngk.lolos}\n⭔ _*Story :*_\n${bgfngk.cerita}`)
}
break

case 'cerpen-misteri':{
m.reply("Sedang Di Proses")
let lapdoek = await cerpen(`misteri`)
reply(`⭔ _*Title :*_ ${lapdoek.title}\n⭔ _*Author :*_ ${lapdoek.author}\n⭔ _*Category :*_ ${lapdoek.kategori}\n⭔ _*Pass Moderation :*_ ${lapdoek.lolos}\n⭔ _*Story :*_\n${lapdoek.cerita}`)
}
break

case 'cerpen-motivasi':{
m.reply("Sedang Di Proses")
let bltkyj = await cerpen(`motivasi`)
reply(`⭔ _*Title :*_ ${bltkyj.title}\n⭔ _*Author :*_ ${bltkyj.author}\n⭔ _*Category :*_ ${bltkyj.kategori}\n⭔ _*Pass Moderation :*_ ${bltkyj.lolos}\n⭔ _*Story :*_\n${bltkyj.cerita}`)
}
break

case 'cerpen-nasihat':{
m.reply("Sedang Di Proses")
let qpeidek = await cerpen(`nasihat`)
reply(`⭔ _*Title :*_ ${qpeidek.title}\n⭔ _*Author :*_ ${qpeidek.author}\n⭔ _*Category :*_ ${qpeidek.kategori}\n⭔ _*Pass Moderation :*_ ${qpeidek.lolos}\n⭔ _*Story :*_\n${qpeidek.cerita}`)
}
break

case 'cerpen-nasionalisme':{
m.reply("Sedang Di Proses")
let cdmrgo = await cerpen(`nasionalisme`)
reply(`⭔ _*Title :*_ ${cdmrgo.title}\n⭔ _*Author :*_ ${cdmrgo.author}\n⭔ _*Category :*_ ${cdmrgo.kategori}\n⭔ _*Pass Moderation :*_ ${cdmrgo.lolos}\n⭔ _*Story :*_\n${cdmrgo.cerita}`)
}
break

case 'cerpen-olahraga':{
m.reply("Sedang Di Proses")
let qpdiek = await cerpen(`olahraga`)
reply(`⭔ _*Title :*_ ${qpdiek.title}\n⭔ _*Author :*_ ${qpdiek.author}\n⭔ _*Category :*_ ${qpdiek.kategori}\n⭔ _*Pass Moderation :*_ ${qpdiek.lolos}\n⭔ _*Story :*_\n${qpdiek.cerita}`)
}
break

case 'cerpen-patahhati':{
m.reply("Sedang Di Proses")
let vrlfor = await cerpen(`patah hati`)
reply(`⭔ _*Title :*_ ${vrlfor.title}\n⭔ _*Author :*_ ${vrlfor.author}\n⭔ _*Category :*_ ${vrlfor.kategori}\n⭔ _*Pass Moderation :*_ ${vrlfor.lolos}\n⭔ _*Story :*_\n${vrlfor.cerita}`)
}
break

case 'cerpen-penantian':{
m.reply("Sedang Di Proses")
let aldpek = await cerpen(`penantian`)
reply(`⭔ _*Title :*_ ${aldpek.title}\n⭔ _*Author :*_ ${aldpek.author}\n⭔ _*Category :*_ ${aldpek.kategori}\n⭔ _*Pass Moderation :*_ ${aldpek.lolos}\n⭔ _*Story :*_\n${aldpek.cerita}`)
}
break

case 'cerpen-pendidikan':{
m.reply("Sedang Di Proses")
let xnrjrk = await cerpen(`pendidikan`)
reply(`⭔ _*Title :*_ ${xnrjrk.title}\n⭔ _*Author :*_ ${xnrjrk.author}\n⭔ _*Category :*_ ${xnrjrk.kategori}\n⭔ _*Pass Moderation :*_ ${xnrjrk.lolos}\n⭔ _*Story :*_\n${xnrjrk.cerita}`)
}
break

case 'cerpen-pengalaman':{
m.reply("Sedang Di Proses")
let hrkgor = await cerpen(`pengalaman pribadi`)
reply(`⭔ _*Title :*_ ${hrkgor.title}\n⭔ _*Author :*_ ${hrkgor.author}\n⭔ _*Category :*_ ${hrkgor.kategori}\n⭔ _*Pass Moderation :*_ ${hrkgor.lolos}\n⭔ _*Story :*_\n${hrkgor.cerita}`)
}
break

case 'cerpen-pengorbanan':{
m.reply("Sedang Di Proses")
let itklog = await cerpen(`pengorbanan`)
reply(`⭔ _*Title :*_ ${itklog.title}\n⭔ _*Author :*_ ${itklog.author}\n⭔ _*Category :*_ ${itklog.kategori}\n⭔ _*Pass Moderation :*_ ${itklog.lolos}\n⭔ _*Story :*_\n${itklog.cerita}`)
}
break

case 'cerpen-penyesalan':{
m.reply("Sedang Di Proses")
let pgrjgo = await cerpen(`penyesalan`)
reply(`⭔ _*Title :*_ ${pgrjgo.title}\n⭔ _*Author :*_ ${pgrjgo.author}\n⭔ _*Category :*_ ${pgrjgo.kategori}\n⭔ _*Pass Moderation :*_ ${pgrjgo.lolos}\n⭔ _*Story :*_\n${pgrjgo.cerita}`)
}
break

case 'cerpen-perjuangan':{
m.reply("Sedang Di Proses")
let vtlgotk = await cerpen(`perjuangan`)
reply(`⭔ _*Title :*_ ${vtlgotk.title}\n⭔ _*Author :*_ ${vtlgotk.author}\n⭔ _*Category :*_ ${vtlgotk.kategori}\n⭔ _*Pass Moderation :*_ ${vtlgotk.lolos}\n⭔ _*Story :*_\n${vtlgotk.cerita}`)
}
break

case 'cerpen-perpisahan':{
m.reply("Sedang Di Proses")
let wpfuej = await cerpen(`perpisahan`)
reply(`⭔ _*Title :*_ ${wpfuej.title}\n⭔ _*Author :*_ ${wpfuej.author}\n⭔ _*Category :*_ ${wpfuej.kategori}\n⭔ _*Pass Moderation :*_ ${wpfuej.lolos}\n⭔ _*Story :*_\n${wpfuej.cerita}`)
}
break

case 'cerpen-persahabatan':{
m.reply("Sedang Di Proses")
let jptoyk = await cerpen(`persahabatan`)
reply(`⭔ _*Title :*_ ${jptoyk.title}\n⭔ _*Author :*_ ${jptoyk.author}\n⭔ _*Category :*_ ${jptoyk.kategori}\n⭔ _*Pass Moderation :*_ ${jptoyk.lolos}\n⭔ _*Story :*_\n${jptoyk.cerita}`)
}
break

case 'cerpen-petualangan':{
m.reply("Sedang Di Proses")
let qwers = await cerpen(`petualangan`)
reply(`⭔ _*Title :*_ ${qwers.title}\n⭔ _*Author :*_ ${qwers.author}\n⭔ _*Category :*_ ${qwers.kategori}\n⭔ _*Pass Moderation :*_ ${qwers.lolos}\n⭔ _*Story :*_\n${qwers.cerita}`)
}
break

case 'cerpen-ramadhan':{
m.reply("Sedang Di Proses")
let vrmfkk = await cerpen(`ramadhan`)
reply(`⭔ _*Title :*_ ${vrmfkk.title}\n⭔ _*Author :*_ ${vrmfkk.author}\n⭔ _*Category :*_ ${vrmfkk.kategori}\n⭔ _*Pass Moderation :*_ ${vrmfkk.lolos}\n⭔ _*Story :*_\n${vrmfkk.cerita}`)
}
break

case 'cerpen-remaja':{
m.reply("Sedang Di Proses")
let vhptotk = await cerpen(`remaja`)
reply(`⭔ _*Title :*_ ${vhptotk.title}\n⭔ _*Author :*_ ${vhptotk.author}\n⭔ _*Category :*_ ${vhptotk.kategori}\n⭔ _*Pass Moderation :*_ ${vhptotk.lolos}\n⭔ _*Story :*_\n${vhptotk.cerita}`)
}
break

case 'cerpen-rindu':{
m.reply("Sedang Di Proses")
let hptotlltk = await cerpen(`rindu`)
reply(`⭔ _*Title :*_ ${hptotlltk.title}\n⭔ _*Author :*_ ${hptotlltk.author}\n⭔ _*Category :*_ ${hptotlltk.kategori}\n⭔ _*Pass Moderation :*_ ${hptotlltk.lolos}\n⭔ _*Story :*_\n${hptotlltk.cerita}`)
}
break

case 'cerpen-rohani':{
m.reply("Sedang Di Proses")
let zaldjdws = await cerpen(`rohani`)
reply(`⭔ _*Title :*_ ${zaldjdws.title}\n⭔ _*Author :*_ ${zaldjdws.author}\n⭔ _*Category :*_ ${zaldjdws.kategori}\n⭔ _*Pass Moderation :*_ ${zaldjdws.lolos}\n⭔ _*Story :*_\n${zaldjdws.cerita}`)
}
break

case 'cerpen-romantis':{
m.reply("Sedang Di Proses")
let lxprhrh = await cerpen(`romantis`)
reply(`⭔ _*Title :*_ ${lxprhrh.title}\n⭔ _*Author :*_ ${lxprhrh.author}\n⭔ _*Category :*_ ${lxprhrh.kategori}\n⭔ _*Pass Moderation :*_ ${lxprhrh.lolos}\n⭔ _*Story :*_\n${lxprhrh.cerita}`)
}
break

case 'cerpen-sastra':{
m.reply("Sedang Di Proses")
let qpifker = await cerpen(`sastra`)
reply(`⭔ _*Title :*_ ${qpifker.title}\n⭔ _*Author :*_ ${qpifker.author}\n⭔ _*Category :*_ ${qpifker.kategori}\n⭔ _*Pass Moderation :*_ ${qpifker.lolos}\n⭔ _*Story :*_\n${qpifker.cerita}`)
}
break

case 'cerpen-sedih':{
m.reply("Sedang Di Proses")
let bmflgkjt = await cerpen(`sedih`)
reply(`⭔ _*Title :*_ ${bmflgkjt.title}\n⭔ _*Author :*_ ${bmflgkjt.author}\n⭔ _*Category :*_ ${bmflgkjt.kategori}\n⭔ _*Pass Moderation :*_ ${bmflgkjt.lolos}\n⭔ _*Story :*_\n${bmflgkjt.cerita}`)
}
break

case 'cerpen-sejarah':{
m.reply("Sedang Di Proses")
let xwpwifj = await cerpen(`sejarah`)
reply(`⭔ _*Title :*_ ${xwpwifj.title}\n⭔ _*Author :*_ ${xwpwifj.author}\n⭔ _*Category :*_ ${xwpwifj.kategori}\n⭔ _*Pass Moderation :*_ ${xwpwifj.lolos}\n⭔ _*Story :*_\n${xwpwifj.cerita}`)
}
break

case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
alpha.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break

case 'loli-waifu':
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
alpha.sendImage(m.chat, data.url, mess.success, m)
})
break

case 'hentaivid': case 'hentaivideo': {
if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
const { hentai } = require('./lib/scraper.js')
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
alpha.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: ` Title : ${result912.title}\n Category : ${result912.category}\n Mimetype : ${result912.type}\n Views : ${result912.views_count}\n Shares : ${result912.share_count}\n Source : ${result912.link}\n Media Url : ${result912.video_1}` }, { quoted: m })
}
break

case 'trap' :

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
 waifudd = await axios.get(`https://waifu.pics/api/NSFW/${command}`)
  let button2Messages = {
image: {url:waifudd.data.url},
caption:  `DONE`,
  buttons: trapbot,
  headerType: 1
  } 
await alpha.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
return('Error!')
})
break

case 'hentai-neko' :
case 'hneko' :

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
waifudd = await axios.get(`https://waifu.pics/api/NSFW/neko`)
  let button3Messages = {
image: {url:waifudd.data.url},
caption:  `Here you go!`,
  buttons: hnekobot,
  headerType: 1
  }
await alpha.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
return('Error!')
})
break

case 'hentai-waifu' :
case 'nwaifu' :

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
waifudd = await axios.get(`https://waifu.pics/api/NSFW/waifu`)
  let button4Messages = {
image: {url:waifudd.data.url},
caption:  `Here you go!`,
  buttons: nwaifubot,
  headerType: 1
  }
await alpha.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
return('Error!')
})
break

case 'gasm':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
let buttonsssMessages = {
image: {url:waifudd.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
} 
await alpha.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
return('Error!')
})
break  
case 'milf':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/milf.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break 
case 'ahegao':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/ahegao.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'ass':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/ass.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'bdsm':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/bdsm.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'blowjob':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/blowjob.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'cuckold':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/cuckold.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'cum':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/cum.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'eba':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/eba.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'ero':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/ero.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'femdom':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/femdom.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'foot':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/foot.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'gangbang':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/gangbang.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'glasses':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/glasses.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'hentai':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/hentai.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'jahy':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/jahy.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'masturbation':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/masturbation.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'neko-hentai':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/neko.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'neko-hentai2':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/neko2.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'nsfwloli':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/NSFWloli.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'orgy':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/orgy.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'panties':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/panties.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'pussy':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/pussy.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'tentacles':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/tentacles.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'thights':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/thights.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'yuri':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/yuri.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'zettai':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/zettai.json'))
var jeryresult = pickRandom(ahegaoNSFW)
alpha.sendMessage(m.chat, { caption: 'DONE', image: { url: jeryresult.url }, footer: namabot }, { quoted: m })
break

case 'gifblowjob':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
  let assss = await axios.get ("https://api.waifu.pics/NSFW/blowjob")
var bobuff = await fetchBuffer(assss.data.url)
var bogif = await buffergif(bobuff)
await alpha.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
})
break

case 'gifhentai':

if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!AntiNSFW) return m.reply('Fitur NSFW Belum Di Aktifkan')
m.reply("Sedang Di Proses")
var ahegaoNSFW = JSON.parse(fs.readFileSync('./RANDOM/NSFW/gifs.json'))
var jeryresultx = pickRandom(ahegaoNSFW)
await alpha.sendMessage(m.chat,{video:jeryresultx, gifPlayback:true },{quoted:m}).catch(err => {
})
break

case 'nsfw': {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
if (args[0] === "on") {
if (AntiNSFW) return m.reply('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/NSFW.json', JSON.stringify(ntnsfw))
m.reply('Success in turning on NSFW in this group')
var groupe = await alpha.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
} else if (args[0] === "off") {
if (!AntiNSFW) return m.reply('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Success in turning off NSFW in this group')
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break

case 'mute': {
if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
if (args[0] === "on") {
if (isMute) return reply(`Sudah Di Mute Sebelumnya`)
mute.push(m.chat)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
reply(`Berhasil Mengaktifkan Mute Di Grub Ini, Bot Tidak Akan Respon`)
} else if (args[0] === "off") {
if (!isMute) return reply(`Sudah Di Unmute Sebelumnya`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
reply(`Berhasil Unmute Bot Di Grub Ini`)
} else {
 reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
 }
 break

case 'onlygrub': {
if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
if (args[0] === "on") {
if (isOnlyGrub) return reply(`Sudah Di Mute Sebelumnya`)
grub.push(m.chat)
fs.writeFileSync('./database/onlygrub.json', JSON.stringify(grub, null, 2))
reply(`Berhasil Mengaktifkan Mute Di Grub Ini, Bot Tidak Akan Respon`)
} else if (args[0] === "off") {
if (!isOnlyGrub) return reply(`Sudah Di Unmute Sebelumnya`)
let anu = grub.indexOf(m.chat)
grub.splice(anu, 1)
fs.writeFileSync('./database/onlygrub.json', JSON.stringify(grub, null, 2))
reply(`Berhasil Unmute Bot Di Grub Ini`)
} else {
 reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
 }
 break

case "aiimg":
if (!isPremium && !isCreator && global.onlyprem) return reply(`Fitur Khusus Member Premium !`)

try {
if (global.keyopenai === '') return m.reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file settings.js\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
if (!q) return m.reply(`Chat dengan AI.\n\nContoh:\n${comand} Apa itu coding`)
const configuration = new Configuration({
apiKey: global.jeropenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
//console.log(response.data.data[0].url)
alpha.sendImage(from, response.data.data[0].url, text, m);
} catch (err) {
console.log(err);
m.reply("Maaf, sepertinya ada yang error :"+ err);
}
break

case 'addzip':{
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (args.length < 1) return reply('Nama zip apa')
let teks = `${q}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await alpha.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break

case 'delzip':{
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${q}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break

case 'listzip': {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
let teksooooo = ' *LIST ZIP* \n\n'
for (let x of zipnye) {
teksooooo += ` ${x}\n`
}
teksooooo += `\n\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip    + sambil reply pesan target* \n\n Contoh 2 : yozip   `
m.reply(teksooooo)
}
break

case 'yozip':{
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${q}`
{
alpha.sendMessage(from, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
}
}
break

case 'sendzip': {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (!q) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${q}`
{
alpha.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
m.reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break

case 'addapk':{
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (args.length < 1) return reply('Nama apk apa')
let teks = `${q}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await alpha.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break

case 'delapk':{
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${q}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break

case 'listapk': {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
let teksoooooo = ' *LIST APK* \n\n'
for (let x of apknye) {
teksoooooo += ` ${x}\n`
}
teksoooooo += `\n\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk    + sambil reply pesan target* \n\n Contoh 2 : yoapk   `
m.reply(teksoooooo)
}
break

case 'yoapk':{
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${q}`
{
alpha.sendMessage(from, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
}
}
break

case 'sendapk': {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (!q) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${q}`
{
alpha.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
m.reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
case 'addpdf':{
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (args.length < 1) return reply('Nama pdf apa')
let teks = `${q}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await alpha.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./database/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break

case 'delpdf':{
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (args.length < 1) return reply('Masukan query')
let teks = `${q}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break

case 'listpdf': {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
let teksoooo = ' *LIST PDF* \n\n'
for (let x of docunye) {
teksoooo += ` ${x}\n`
}
teksoooo += `\n\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf    + sambil reply pesan target* \n\n Contoh 2 : yopdf   `
m.reply(teksoooo)
}
break

case 'yopdf':{
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
let teks = `${q}`
{
alpha.sendMessage(from, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
}
}
break

case 'sendpdf': {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (!q) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${q}`
{
alpha.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
m.reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break

case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass':
case 'papercut': 
case 'watercolor':
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
 case 'snow': 
 case 'cloud': 
 case 'honey': 
 case 'ice': 
 case 'fruitjuice': 
 case 'biscuit': 
 case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
 case 'firework': 
 case 'skeleton': 
 case 'blackpink': 
 case 'sand': 
 case 'glue': 
 case '1917': 
 case 'leaves': {
 
if (!q) return m.reply(`Contoh : ${prefix + command} ${namabot}`) 
m.reply("Sedang Di Proses")
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
alpha.sendMessage(from, { image: { url: anu }, caption: `DONE` }, { quoted: fkontak })
}
break

case 'ban': case 'banned':{
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
  if (!text) throw `Example : ${prefix + command} 62xxxxxxxxxxx`
  let bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
  let ban_ = []
  if (fs.existsSync('./database/banned.json')) {
ban_ = JSON.parse(fs.readFileSync('./database/banned.json'))
  }
  if (ban_.includes(bnnd)) {
m.reply('*_Sukses Banned Nomor Tersebut_*')
  } else {
ban.push(bnnd)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
m.reply(bnnd)
  }
}
break;
case 'unban': case 'unbanned':{
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
  if (!text) throw `Example : ${prefix + command} 62xxxxxxxxxxx`
  let bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
  let ban_ = JSON.parse(fs.readFileSync('./banned.json'))
  let unp = ban_.indexOf(bnnd)
  if (unp !== -1) {
ban.splice(unp, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
m.reply(bnnd)
  } else {
m.reply('*_Nomor Tidak Ditemukan_*')
  }
}
break

case "listuser": {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
  teks = '*_List User :)_*\n\n'
  for (let pengguna of signup) {
teks += `- ${pengguna}\n`
  }
  teks += `\n*_Total User : ${signup.length}_*`
  alpha.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": signup } })
}
break

case 'listban' : case 'listbanned' : {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
  teks = '*List Banned*\n\n'
  for (let medog of ban) {
teks += `- ${medog}\n`
  }
  teks += `\n*Total Banned : ${ban.length}*`
  alpha.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": ban } })
}
break

case 'restartbot': case 'restart':
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
await m.reply(`_Restarting ${packname}_`)
try{
await alpha.sendMessage(from, {text: "*_Succes Restart Bot_*"})
await sleep(3000)
process.send("reset")
} catch (err) {
process.send("reset")
await sleep(540000)
m.reply('*_Sukses Restart Bot_*')
}
break

case 'listjadibot': 

if (!isCreator) return reply("Fitur Ini Khusus Owner")
try {
let user = [... new Set([...global.alphas.filter(Jer => alpha.user).map(Jer => alpha.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
y = await alpha.decodeJid(i.id)
te += " � User : @" + y.split("@")[0] + "\n"
te += " � Name : " + i.name + "\n\n"
}
alpha.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`Belum Ada User Yang Jadibot`)
}
break

case 'jadibot': {

if (!isPremium && !isCreator) return reply("Fitur Ini Khusus Member Premium")
jadibot(alpha, fkontak, from)
}
break

case "confess": case 'menfes': case 'menfess':{
var mon = args.join(' ')
var m1 = mon.split("|")[0]
let mq1 = m1 + '@s.whatsapp.net'
  this.menfes = this.menfes ? this.menfes : {}
  roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
  if (roof) return reply("Kamu masih berada dalam sesi menfess")
if (m.isGroup) return m.reply('Fitur Khusus Di private chat!')
if (!text) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6283136394680|Menfes nih\n`)
if (!text.includes('|')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6283136394680|Menfes nih\n`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6283136394680|Menfes nih\n`)
if(isNaN(nomorNya)) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6283136394680|Menfes nih\n`)
var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\n${prefix}balasmenfess -- _terima menfess/confess\n${prefix}tolakmenfess -- _tolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang, bot hanya menyampaikan saja_`
let tod = await getBuffer('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU') 
/*const buttons = [{
buttonId: `.balasmenfess ${m.sender}`,
buttonText: {
  displayText: ' Balas'
},
type: 1
},{
buttonId: `.tolakmenfess ${m.sender}`,
buttonText: {
  displayText: 'Tolak '
},
type: 1
}]*/
let id = m.sender
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
await alpha.sendMessage(nomorNya + '@s.whatsapp.net',  {image: tod, caption:yoi }, {})
  reply(`Pesan Telah Terkirim\nKe @${mq1.split('@')[0]}`)
}
break  
case 'balasmenfess': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return reply("Belum ada sesi menfess")
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = 'CHATTING'
this.menfes[find.id] = {...find}
await alpha.sendMessage(other, {text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`, mentions: [m.sender]})
alpha.sendMessage(m.chat, {text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`})
}
break

case 'tolakmenfess': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return reply("Belum ada sesi menfess")
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
alpha.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
  // await alpha.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
reply("Menfess berhasil di tolak ")
delete this.menfes[roof.id]
}
break

case "stopconfess": case 'stopmenfess': {
//find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return reply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
alpha.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
await reply("Ok")
delete this.menfes[find.id]
}
break

case 'translate': case 'tr': {
if (!text) return m.reply(`Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
� Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
� Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`)
let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
translate(teks, { to: args[0] }).then((res) => {
alpha.sendText(m.chat, `${res.text}`, m)
})
}
break

case "igvideo": 
case 'instagram':
case 'insta':
case 'instavid':
case "igreels":{
  if (!args[0]) throw `Pengunaan:\n${usedPrefix + command} <url>\n\nContoh:\n${usedPrefix + command} https://www.instagram.com/p/CQU21b0JKwq/`
  if (!args[0].match(/https:\/\/www.instagram.com\/.*(p|reel|tv)/gi)) throw `url salah, perintah ini untuk mengunduh post/reel/tv`
  igdl(args[0]).then(async res => {
let igdlo = JSON.stringify(res)
let json = JSON.parse(igdlo)
m.reply("Sedang Di Proses")
for (let { downloadUrl, type } of json) {
alpha.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '*nih*', m)
}
  })
}
break

case "igstory":{
if (/https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)/i.test(m.text)) throw `Masukkan username Instagram, bukan link instagramnya!`
if (!args[0]) throw `Masukkan username Instagram yang ingin diambil story nya!`
else m.reply('Proses')
hxz.igstory(args[0]).then(async (r) => {
 for (let i = 0; i < r.medias.length; i++) {
alpha.sendFile(m.chat, r.medias[i].url, '', '', m)
}
 })
}
break

case 'igstalk':{
if (!isCreator && !isPremium) ("Fitur Ini Khusus Member Premium")
if (!q) return reply(`Contoh ${prefix+command} jerx_2`)
m.reply("Sedang Di Proses")
aj = await igstalk(`${q}`)
alpha.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Stalking Instagram \\*

Fullname : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: fkontak } )
}
break

case 'grupwa': case 'searchgrup':
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *nama group*\n\n_Contoh_\n\n${prefix+command} store`)
m.reply("Sedang Di Proses")
hxz.linkwa(q).then(async(data) => {
if (data.length == 0) return m.reply(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data) {
teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
}
reply(teks)
}).catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
reply(`Hasil pencarian dari ${q} tidak ditemukan`)

})
break

case 'npmstalk':{
if (!q) return reply(`Contoh ${prefix+command} zeeone`)
m.reply("Sedang Di Proses")
eha = await npmstalk.npmstalk(q)
reply(`*/ Stalking Npm \\*

Nama : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break

case 'githubstalk':{
if (!q) return reply(`Contoh ${prefix+command} zeeone official`)
m.reply("Sedang Di Proses")
aj = await githubstalk.githubstalk(`${q}`)
alpha.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Stalking Github \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break

case 'ss': case 'ssweb':{
if (!q) return reply(`Contoh ${prefix+command} link`)
m.reply("Sedang Di Proses")
let krt = await scp1.ssweb(q)
alpha.sendMessage(m.chat,{image:krt.result,caption: 'DONE'},{quoted:m})
}
break

case 'happymod':{
if (!q) return reply(`Contoh ${prefix+command} Nama Apk Game`)
m.reply("Sedang Di Proses")
let kat = await scp1.happymod(q)
reply(util.format(kat))
}
break

case 'apkmod':{
if (!q) return reply(`Contoh ${prefix+command} Nama Apk Nya`)
m.reply("Sedang Di Proses")
let jer = await scp1.apkmody(q)
reply(util.format(kat))
}
break

case 'cariresep':{
if (!q) return reply(`Contoh ${prefix+command} ayam geprek`)
m.reply("Sedang Di Proses")
let ker = await scp1.cariresep(q)
reply(util.format(ker))
}
break

case 'bacaresep':{
if (!q) return reply(`Contoh ${prefix+command} https://resepkoki.id/resep/resep-ayam-geprek-keju/`)
m.reply("Sedang Di Proses")
let kay = await scp1.bacaresep(q)
let dty = `Resep Di Bawah
Judul : ${kay.judul_nya}
Waktu : ${kay.waktu_nya}
Hasil : ${kay.hasil_nya}
Tingkat Kesulitan : ${kay.tingkat_kesulitan}
Bahan :
${kay.bahan_nya}`
alpha.sendMessage(m.chat,{
image:{
url:kay.thumb_nya},
caption:dty,
jpegThumbnail: ppnyauser},
{quoted:m})
}
break

case 'tts': case 'gtts':
if (!q) return reply(` contoh : ${prefix+command} yamate kudasai`)
m.reply("Sedang Di Proses")
const gtts = require('./lib/gtts')(`id`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
alpha.sendMessage(m.chat,{audio:buff, mimetype: "audio/mp4", ptt:false},{quoted:fkontak})
fs.unlinkSync(rano)
})
})
break

case 'creategc': {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (!args.join(" ")) return reply(`Penggunaan ${prefix+command} namagroup`)
try {
let cret = await alpha.groupCreate(args.join(" "), [])
let response = await alpha.groupInviteCode(cret.id)
teks = `  Group Create Fitur 

 Name : ${cret.subject}
 Owner : @${cret.owner.split("@")[0]}
 Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${response}
`
alpha.sendMessage(m.chat, { text:teks, mentions: await alpha.parseMention(teks)}, {quoted:m})
} catch {
reply("Error!")
}
}
break

case 'qc':{ // 
if (!quoted){
try {
var ppuser = await alpha.profilePictureUrl(mentionUser[0], 'image')
} catch {
image: { url: ppuser }
}
const getname = await alpha.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
 {
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
 "url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
 }
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
var opt = { packname: global.packname, author: global.author }
alpha.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q){
try {
var ppuser = await alpha.profilePictureUrl(sender, 'image')
} catch {
image: { url: ppuser }
}
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
 {
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
 "url": ppuser
}
},
"text": q,
"replyMessage": {}
 }
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
var opt = { packname: global.packname, author: global.author }
alpha.sendImageAsSticker(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${command} text atau reply pesan dengan perintah ${command}`)
}
}
break

case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return reply("Fitur Ini Khusus Group Blok !")
if (!isAdmins && !isCreator) return reply("Fitur Ini Khusus Admin Blok !")
if (!isBotAdmins) return reply("Bot Bukan Admin Lol !")
if (!quoted) return reply(`Where is the picture?`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
var mediz = await alpha.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(mediz)
await alpha.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
reply(`Success`)
} else {
var memeg = await alpha.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`Success`)
}
}
break

case 'logout':
case 'kenon':
case 'verify':
case 'banwa': {

if (!isCreator) return reply("Fitur Khusus Owner !")
if (!text) return reply(`Where's the number?`)
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
var $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", text)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hello Dear WhatsApp

Good morning/afternoon/night

My WhatsApp Number ${text} Stolen And Now Used to spread pornography and illegal sales, please take immediate action regarding my account.
If you can, just disable it
for important chat matters I don't have it

Thank you`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({
  url,
  method: "POST",
  data: form,
  headers: {
cookie
  }
})

reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
break

case 'getcase ':
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("store.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getCase(q)}`)
break

case 'volume': {
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await alpha.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
alpha.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
alpha.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
reply("Send video/audio")
}
}
break

case 'addowner':
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} ${owner}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await alpha.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An Owner!!!`)
break

case 'delowner':
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 6283136394680`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break

case 'setppbot': case 'setbotpp': {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await alpha.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await alpha.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Success`)
} else {
var memeg = await alpha.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Success`)
}
}
break

case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!q) return reply(`Contoh : ${prefix+command} alpha`) 
m.reply("Sedang Di Proses")
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
alpha.sendMessage(m.chat, { image: { url: haldwhd }, caption: `Sukses Ngab` }, { quoted: m })
}
break

case 'facebookvid':
case 'fb':
case 'fbvid':
case 'fbvideo':
case 'fbdl': 
case 'facebook': {
if (!text) throw 'Masukkan Link\n\nContoh: .fb https://facebook.com/xxxxxx'
let res = await xfar.Facebook(text)
m.reply("Sedang Di Proses")
alpha.sendFile(m.chat,res.medias[1].url, 'fb.mp4', `Tittle: ${res.tittle}
Link Video: ${res.url}`, m)
}
break

case 'facebookvid2':
case 'fb2':
case 'fbvid2':
case 'fbvideo2':
case 'fbdl2': 
case 'facebook2': {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
m.reply("Sedang Di Proses")
const { facebookdl, facebookdlv2 } = require('@bochilteam/scraper')
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) alpha.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, ` *Url:* ${url}`, m)
}
break

case 'twi':
case 'twiter':{
if (!q) return reply(`Link Nya Mana Bang?\n\nContoh\n\n.twiter ( link nya )`)
m.reply("Sedang Di Proses")
let res = await twiter(text)
let ghd = await alpha.sendMessage(from,{video:{url: res.url[0].url},caption: "DONE"},{quoted:fkontak})
}
break

case 'bug':
case 'bugah':
case 'bugreact':{
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
alpha.relayMessage(m.chat, { reactionMessage }, { messageId: '' })
}
break

case 'snobg': {
if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await alpha.downloadAndSaveMediaMessage(quoted)
let encmedia = await alpha.sendImageAsSticker(m.chat, await rmbg(media), m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Send/Reply Images With Captions ${prefix+command}`)
}
}
break

case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!q) return reply(`Example : ${prefix+command} JerOfc`) 
m.reply("Sedang Di Proses")
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let jerofc = await photooxy.photoOxy(link, q)
alpha.sendMessage(m.chat, { image: { url: jerofc }, caption: `DONE` }, { quoted: m })
}
break

case 'closetime':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMealpha) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
  if (args[1] == 'detik','d') {
    var timer = args[0] * `1000`
    } else if (args[1] == 'menit','m') {
    var timer = args[0] * `60000`
    } else if (args[1] == 'jam','h') {
    var timer = args[0] * `3600000`
    } else if (args[1] == 'hari','d') {
    var timer = args[0] * `86400000`
    } else {
    return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
    }
reply(`Close time ${q} dimulai dari sekarang`)
fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
setTimeout(() => {
var nomor = m.participant
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
alpha.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case 'opentime':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMealpha) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[1] == 'detik','d') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit','m') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam','h') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari','d') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open time ${q} dimulai dari sekarang`)
fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
setTimeout(() => {
var nomor = m.participant
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
alpha.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
break

case 'autoblok': case 'autoblok212': {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (args[0] === "on") {
if (global.autoblok212 === true) return m.reply("Udh on")
global.autoblok212 = true
reply("Autoblok berhasil diaktifkan")
} else if (args[0] === "off") {
if (global.autoblok212 === false) return m.reply("Udh off")
global.autoblok212 = false
reply("Autoblok berhasil dinonaktifkan")
} else {
 m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break

case 'culik': {
if (args.length < 1) return m.reply('_*Hadehhh...., Link Grub Nya Mana*_')
let pantek = []
for (let i of groupMembers) {
pantek.push(i.jid)
}
alpha.groupParticipantsUpdate(args[0], pantek)
}
break

case 'autoread': {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (args[0] === "on") {
if (global.autoread === true) return m.reply("Udh on")
global.autoread = true
reply("Autoread berhasil diaktifkan")
} else if (args[0] === "off") {
if (global.autoread === false) return m.reply("Udh off")
global.autoread = false
reply("Autoread berhasil dinonaktifkan")
} else {
 m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break

case 'autorespond': {
if (!isCreator) return m.reply('Fitur Ini Khusus Owner !')
if (args[0] === "on") {
if (global.autorespon === true) return m.reply("Udh on")
global.autorespon = true
reply("Autorespond berhasil diaktifkan")
} else if (args[0] === "off") {
if (global.autorespon === false) return m.reply("Udh off")
global.autorespon = false
reply("Autorespond berhasil dinonaktifkan")
} else {
 m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break

case 'tomp4': case 'tovideo': {
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
m.reply("Sedang Di Proses")
let { webp2mp4File } = require('./lib/uploader')
let media = await alpha.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await alpha.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break

case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
if (!quoted) return reply(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
m.reply("Sedang Di Proses")
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
alpha.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break

case 'tomp3': {
if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
if (!quoted) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
m.reply("Sedang Di Proses")
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
alpha.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${alpha.user.name}.mp3`}, { quoted : m })
}
break

case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
m.reply("Sedang Di Proses")
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
alpha.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break

case 'togif': {
if (!quoted) return reply('Reply video')
if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
m.reply("Sedang Di Proses")
let { webp2mp4File } = require('./lib/uploader')
let media = await alpha.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await alpha.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break

case 'afk':
if (!m.isGroup) return reply("Fitur Ini Khusus Group Blok !")
if (isAfkOn) return m.reply('Afk sudah diaktifkan sebelumnya')
let reason = text ? text : 'Nothing.'
afk.addAfkUser(m.sender, Date.now(), reason, _afk)
alpha.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, m)
break

case 'listbahasa':
var clear = ["auto", "isSupported", "getCode"]
var teks = `List Bahasa Yang Tersedia\n\n`
for (let i in translate.languages) {
if (!clear.includes(i)) {
teks += `*${i}* untuk ${translate.languages[i]}\n`
}
}
reply(teks)
break
// Game Menu
case 'ttc': case 'ttt': case 'tictactoe': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply( 'Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '',
O: '',
1: '1',
2: '2',
3: '3',
4: '4',
5: '5',
6: '6',
7: '7',
8: '8',
9: '9',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await alpha.sendText(room.x, str, m, { mentions: parseMention(str) } )
await alpha.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${prefix+command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'delttc': case 'delttt': {
let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return m.reply ( `Kamu sedang tidak berada di room tictactoe !`)
delete this.game[roomnya.id]
m.reply(`Berhasil delete session room tictactoe !`)
}
break

case 'casino':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!text) return m.reply(`Kirim perintah *${prefix+command}* @tag nominal`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (fs.existsSync(`./database/${m.chat}.json`)) return m.reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
if (!args[1]) return m.reply('Masukan Nominal Nya')
if (args[1].includes('-')) return m.reply(`Jangan menggunakan -`)
if (isNaN(parseInt(args[1]))) return m.reply('Nominal Harus Berupa Angka!')
var anu = getBalance(m.sender, balance)
var ani = getBalance(m.mentionedJid[0], balance)
if (anu < args[1] || anu == 'undefined') return m.reply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
if (ani < args[1] || ani == 'undefined') return m.reply(`Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}balance @tag untuk mengecek Balance lawanmu`)
var casinoo = setCasino(`${m.chat}`)
casinoo.Z = m.sender.replace("@s.whatsapp.net", "")
casinoo.Y = users
casinoo.nominal = parseInt(args[1])
fs.writeFileSync(`./database/casino/${m.chat}.json`, JSON.stringify(casinoo, null, 2))
var starGame = ` Memulai Game Casino \n\n� @${m.sender.replace("@s.whatsapp.net", "")} Menantang ${text}, dengan Nominal: *$ ${parseInt(args[1])}*\n� Ketik Y/N untuk menerima atau menolak Permainan!`
alpha.sendMessage(m.chat, { text: starGame, mentions: [m.sender, users] }, { quoted: m })
  }
 break

case 'delcasino':
if (fs.existsSync('./database/casino/'+m.chat+'.json')) {
var csn = JSON.parse(fs.readFileSync('./database/casino/'+m.chat+'.json'))
if (csn.Z.includes(m.sender)) {
deleteCasino(m.chat)
reply('Berhasil Menghapus Sesi Casino')
} else if (csn.Y.includes(m.sender)) {
deleteCasino(m.chat)
reply('Berhasil Menghapus Sesi Casino')
} else if (isAdmins) {
deleteCasino(m.chat)
reply('Berhasil Menghapus Sesi Casino')
} else if (isCreator) {
deleteCasino(m.chat)
reply('Berhasil Menghapus Sesi Casino')
} else {
reply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
}
} else {
reply('Tidak ada sesi yang berlangsung')
}
break

// Search Menu
case 'lirik': case 'liriklagu':{
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *judul*\n\n_Contoh_\n\n${prefix+command} Bila Nanti`)
m.reply("Sedang Di Proses")
let anu = await fetchJson('http://song-lyrics-api-o0m8tth8t-azharimm.vercel.app/search?q=' + text)
if(!anu.data) return m.reply('server eror')
let anuu = await fetchJson (anu.data[0].songLyrics)
let { artist, songTitle, songLyrics} = anuu.data
m.reply('*Artis:* ' + artist + '\n*Title*: ' + songTitle + '\n*Lirik*: ' + songLyrics)
.catch((e) => {
console.log(e)
reply(`Judul lagu tidak ditemukan`)

})
}
break

case 'pppanjang': case 'setppbot2':{
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!quoted) return reply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`)
let media = await alpha.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await alpha.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
m.reply("Done!!!")
}
break

case 'sapa':{
reply(`Halo Kak ${pushname} Selamat ${salam}\n\nCreator : ${namaowner}
Bot Name : ${namabot}
TIME : ${time}
DATE : ${xdate}\n\nSaya Adalah Bot WhatsApp Yang Bisa Membantu Anda, Apa Yang Dapat Saya Bantu?`)
}
break

case 'idgc2':
case 'id2':{
if (!isCreator) return reply('Fitur Ini Khusus Owner !')
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
reply(from)
}
break

case "updatesetbot": case 'setbot': case 'changebot':{
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin & owner!')
if (!q) return reply(`Gunakan dengan cara .${command} *teks_bot*\n\n_Contoh_\n\n${command} Halo saya adalah @bot\n\n@bot = nama bot\n@owner = nama owner\n@jam = jam\n@tanggal = tanggal`)
if (isSetBot((m.isGroup? m.chat: botNumber), set_bot)) {
changeSetBot(q, (m.isGroup? m.chat: botNumber), set_bot)
reply(`Sukses update set bot teks!`)
} else {
addSetBot(q, (m.isGroup? m.chat: botNumber), set_bot)
reply(`Sukses set teks bot!`)
}
}
break

case 'delsetbot':{
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin & owner!')
if (!isSetBot((m.isGroup? m.chat: botNumber), set_bot)) return reply(`Belum ada set bot di chat ini`)
removeSetBot((m.isGroup? m.chat: botNumber), set_bot)
reply(`Sukses delete set bot`)
}
break

case 'bot':{
var bot = `*APA WOI DAH ON AKU JANGAN KAU PANGGIL PANGGIL TERUS!!*`
const getTextB = getTextSetBot((m.isGroup? m.chat: botNumber), set_bot);
if (getTextB !== undefined) {
var pull_pesan = (getTextB.replace('@bot', namabot).replace('@owner', namaowner).replace('@jam', time).replace('@tanggal', tanggal(new Date())))
alpha.sendMessage(m.chat, { text: `${pull_pesan}` }, { quoted: fkontak })
} else {
alpha.sendMessage(m.chat, { text: bot }, { quoted: fkontak })
}
}
break

case 'getpic': {
if (!isCreator) return
if (qtod === "true") {
try {
pporg = await alpha.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
alpha.sendMessage(from, { image : { url : pporg }, caption:`Done` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await alpha.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
alpha.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, {quoted:m})
}
}
break

case 'ceksewa':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isSewa) return m.reply(`Bot tidak di sewa group ini!`)
let ceksewa = ms(_sewa.getSewaExpired(m.chat, sewa) - Date.now())
let sewanya = `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s)`
reply(sewanya)
break

case 'hd': case 'remini': {
if (!isPremium && !isCreator) return reply("Fitur Ini Khusus Owner & Premium")
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
m.reply("Sedang Di Proses")
let media = await quoted.download()
let proses = await remini(media, "enhance");
alpha.sendMessage(m.chat, { image: proses, caption: 'DONE, SORRY G SESUAI HARAPAN'}, { quoted: fkontak})
}
break

case 'juzamma': {
m.reply("Sedang Di Proses")
if (args[0] === 'pdf') {
m.reply("Sedang Di Proses")
alpha.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
m.reply("Sedang Di Proses")
alpha.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
m.reply("Sedang Di Proses")
alpha.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
m.reply("Sedang Di Proses")
alpha.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
reply(`What Format Do You Want? ? Example : ${prefix + command} pdf

Available Formats: pdf, docx, pptx, xlsx`)
}
}
break

case 'anime': 
if(!q) return reply(`Which anime do you want to search?\nExample ${prefix + command} naruto`)
m.reply("Sedang Di Proses")
const { Anime } =require("@shineiichijo/marika")
const client = new Anime();
 let anime = await client.searchAnime(q)
var result = anime.data[0];
console.log(result)
let details = ` *Title: ${result.title}*\n`;
details += ` *Format: ${result.type}*\n`;
details += ` *Status: ${result.status.toUpperCase().replace(/\_/g, " ")}*\n`;
details += ` *Total episodes: ${result.episodes}*\n`;
details += ` *Duration: ${result.duration}*\n`;
details += ` *Genres:*\n`;
for (let i = 0; i < result.genres.length; i++) {
details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
}
details += ` *Based on: ${result.source.toUpperCase()}*\n`;
details += ` *Studios:*\n`;
for (let i = 0; i < result.studios.length; i++) {
details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
}
details += ` *Producers:*\n`;
for (let i = 0; i < result.producers.length; i++) {
details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
}
details += ` *Premiered on: ${result.aired.from}*\n`;
details += ` *Ended on: ${result.aired.to}*\n`;
details += ` *Popularity: ${result.popularity}*\n`;
details += ` *Favorites: ${result.favorites}*\n`;
details += ` *Rating: ${result.rating}*\n`;
details += ` *Rank: ${result.rank}*\n\n`;
if (result.trailer.url !== null)
details += ` *Trailer: ${result.trailer.url}*\n\n`;
details += ` *URL: ${result.url}*\n\n`;
if (result.background !== null)
details += ` *Background:* ${result.background}*\n\n`;
details += ` *Description:* ${result.synopsis.replace(
/\[Written by MAL Rewrite]/g,
""
)}`
alpha.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})
break

case 'manga':
m.reply("Sedang Di Proses")
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Which manga do you want to search?\nExample ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
let mang = ` *Title: ${srh.data[0].title}*\n`;
mang += ` *Status: ${srh.data[0].status}*\n`;
mang += ` *Total Volumes: ${srh.data[0].volumes}*\n`;
mang += ` *Total Chapters: ${srh.data[0].chapters}*\n`;
mang += ` *Genres:*\n`;
for (let i = 0; i < srh.data[0].genres.length; i++) {
mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
}
mang += ` *Published on: ${srh.data[0].published.from}*\n`;
mang += ` *Score: ${srh.data[0].scored}*\n`;
mang += ` *Popularity: ${srh.data[0].popularity}*\n`;
mang += ` *Favorites: ${srh.data[0].favorites}*\n`;
mang += ` *Authors:*\n`;
for (let i = 0; i < srh.data[0].authors.length; i++) {
mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
}
mang += `\n *URL: ${srh.data[0].url}*\n\n`;
if (srh.data[0].background !== null)
mang += ` *Background:* ${srh.data[0].background}`;
mang += ` *Description:* ${srh.data[0].synopsis.replace(
/\[Written by MAL Rewrite]/g,
""
)}`;
alpha.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})
break

case 'fajar-news': {
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
}
break

case "quotes": {
var res = await Quotes()
teks = ""
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ""
reply(teks)
}
break

case "darkjoke": {
var res = await Darkjokes()
teks = "\nDarkjokes*"
alpha.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
}
break

case 'cnn-news': {
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
}
break

case 'tvsearch': {
if (!q) return reply('Where is the title?') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
  no += 1
teks += `\n� ${no.toString()} �\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
}
break

case 'cnbc-news': {
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
alpha.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
break

case 'tribun-news': {
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
alpha.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
break

case 'indozone-news': {
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
alpha.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
break

case 'kompas-news': {
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
alpha.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
break

case 'detik-news': {
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
alpha.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
break

case 'daily-news': {
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
alpha.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
break

case 'i-news': {
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
}
break

case 'okezone-news': {
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
alpha.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
break

case 'sindo-news': {
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
}
break

case 'tempo-news': {
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
alpha.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
break

case 'antara-news': {
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
alpha.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
break

case "kontan-news": {
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
alpha.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
break
  
case "merdeka-news": {
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n� ${no.toString()} �\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
alpha.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
break

case "jalantikus-meme": {
var res = await JalanTikusMeme()
teks = ""
teks += "\nLaughing out loud?\n"
teks += `\nSource: ${res}\n`
teks += ""
alpha.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
}
break

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(util.format(err))
}
}
}

} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})