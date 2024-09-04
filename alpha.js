require('./settings')

const {
default: WADefault,
useMultiFileAuthState,
DisconnectReason,
generateForwardMessageContent,
prepareWAMessageMedia,
generateWAMessageFromContent,
generateMessageID,
downloadContentFromMessage,
proto,
makeInMemoryStore,
jidDecode,
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore,
jidNormalizedUser,
delay
} = require("@whiskeysockets/baileys")

const pino = require('pino')
const usePairingCode = true
const useMobile = false
const NodeCache = require("node-cache")
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const axios = require('axios')
const fetch = require('node-fetch')
const FileType = require('file-type')
const { start } = require('./lib/spinner')
const colors = require('colors')
const PhoneNumber = require('awesome-phonenumber')
const moment = require('moment-timezone')
const path = require('path')
const chalk = require("chalk");
const figlet = require("figlet");
const readline = require("readline");
const { getSizeMedia } = require('./lib/myfunc')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, getBuffer, fetchJson } = require('./lib/simple')
const cron = require('node-cron');
// Fungsi yang akan dijalankan setiap jam 12 malam
function resetProcess() {
    process.send("reset");
}

// Menjadwalkan tugas untuk berjalan setiap hari pada jam 12 malam
cron.schedule('0 0 * * *', () => {
    console.log('Running reset process at 12:00 AM');
    resetProcess();
});
const { isSetClose,
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
} = require("./lib/store")

const {
writeExif
} = require('./lib/exif')

const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text);
};

const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

global.db = JSON.parse(fs.readFileSync("./database/database.json"))
if (global.db) global.db.data = {
users: {},
chats: {},
database: {},
game: {},
others: {},
sticker: {},
absen: {},
sewa: [],
cmd: {},
settings: {},
anonymous: {},
menfess: {},
...(global.db.data || {})
}

let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
let _left = JSON.parse(fs.readFileSync('./database/left.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
let set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));
let set_close = JSON.parse(fs.readFileSync('./database/set_close.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let opengc = JSON.parse(fs.readFileSync('./database/opengc.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'));
let antiwame2 = JSON.parse(fs.readFileSync('./database/antiwame2.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
...query,
...(apikeyqueryname ? {
[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
} : {})
})) : '')

async function Botstarted() {
const {
state,
saveCreds
} = await useMultiFileAuthState(`./${sessionName}`)
const { version, isLatest } = await fetchLatestBaileysVersion();
console.log(`using WA v${version.join(".")}, isLatest: ${isLatest}`);
console.log(
color(
figlet.textSync("RENZ PAYMENT", {
font: "Standard",
horizontalLayout: "default",
vertivalLayout: "default",
whitespaceBreak: false,
}),
console.log(color('Wait for bot connected...', 'yellow'))
)
);

const alpha = WADefault({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ['Chrome (Linux)', '', '']
});
if(usePairingCode && !alpha.authState.creds.registered) {
const phoneNumber = await question(color('\n\n\nSilahkan Masukan Nomor Yang Terdaftar Di Whatsapp Dan Awal Dengan 628xxxxx:\n', 'red'));
const code = await alpha.requestPairingCode(phoneNumber.trim())
console.log(color(`Kode Pairing Nya :`,"red"), color(`${code}`, "white"))
}

store.bind(alpha.ev)

alpha.ev.on('messages.upsert', async chatUpdate => {
//console.log(JSON.stringify(chatUpdate, undefined, 2))
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!alpha.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(alpha, mek, store)
require("./store")(alpha, m, chatUpdate, store, opengc, antilink, antiwame, antilink2, antiwame2, set_welcome_db, set_left_db, set_proses, set_done, set_open, set_close, sewa, _welcome, _left, db_respon_list)
} catch (err) {
console.log(err)
}
})

alpha.ev.on('groups.update', async anu => {
try {
for(let x of anu) {
try {
ppgc = await alpha.profilePictureUrl(x.id, 'image')
} catch {
ppgc = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
}
let wm_fatih = { url : ppgc }
if (x.announce == true) {
alpha.sendMessage(x.id, {image: {url: ppgc}, caption: `*「 Group Update Detected 」*\n\nGroup telah ditutup, Sekarang hanya admin yang dapat mengirim pesan !`})
} else if (x.announce == false) {
alpha.sendMessage(x.id, {image: {url: ppgc}, caption:`*「 Group Update Detected 」*\n\nGroup telah dibuka, Sekarang peserta dapat mengirim pesan !`})
} else if (x.restrict == true) {
alpha.sendMessage(x.id, {image: {url: ppgc}, caption:`*「 Group Update Detected 」*\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`})
} else if (x.restrict == false) {
alpha.sendMessage(x.id, {image: {url: ppgc}, caption:`*「 Group Update Detected 」*\n\nInfogroup telah dibuka, Sekarang peserta dapat mengedit info group !`})
} else {
alpha.sendMessage(x.id, {image: {url: ppgc}, caption:`*「 Group Update Detected 」*\n\nNama Group telah diganti menjadi *${x.subject}*`})
 }
}
} catch (err){
console.log(err)
}
})

store.bind(alpha.ev)
alpha.ev.on('call', async (celled) => {
if (global.anticall) {
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == false) {
if (kopel.status == "offer") {
let nomer = await alpha.sendTextWithMentions(kopel.from, `*${alpha.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
alpha.sendContact(kopel.from, owner, nomer)
await sleep(5000)
alpha.updateBlockStatus(kopel.from, "block")
}
}
}
}
})

alpha.ev.on('group-participants.update', async (anu) => {
const isWelcome = _welcome.includes(anu.id)
const isLeft = _left.includes(anu.id)
try {
let metadata = await alpha.groupMetadata(anu.id)
let participants = anu.participants
const groupName = metadata.subject
const groupDesc = metadata.desc
for (let num of participants) {
const fkontaku = { key: {participant: `0@s.whatsapp.net`, ...(anu.id ? { remoteJid: `6285156028374@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': ``, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;,;;;\nFN:,\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pp_bot, thumbnail: pp_bot,sendEphemeral: true}}}
try {
ppuser = await alpha.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
}

try {
ppgroup = await alpha.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
}

const groupDesc = metadata.desc
if (anu.action == 'add' && (isWelcome || global.welcome)) {
console.log(anu)
if (isSetWelcome(anu.id, set_welcome_db)) {  
var get_teks_welcome = await getTextSetWelcome(anu.id, set_welcome_db)
var replace_pesan = (get_teks_welcome.replace(/@user/gi, `@${num.split('@')[0]}`))
var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
alpha.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `${full_pesan}` })
} else {
const buttonMessage = { image: { url: ppuser }, caption: `Welcome Kak @${num.split('@')[0]} Di Grub ${metadata.subject}\n\nDeskripsi : ${metadata.desc}`, footer: `${namabot} © 2023`, mentions: [], headerType: 3
}
alpha.sendMessage(anu.id, {image: ppuser, caption: full_pesan, mentions: [num]}, {quoted: m})
}

} else if (anu.action == 'remove' && (isLeft || global.left)) {
console.log(anu)
if (isSetLeft(anu.id, set_left_db)) {
var get_teks_left = await getTextSetLeft(anu.id, set_left_db)
var replace_pesan = (get_teks_left.replace(/@user/gi, `@${num.split('@')[0]}`))
var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
alpha.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `${full_pesan}` })
 } else {
const buttonMessage = { image: { url: ppuser },
caption: `Bye Kak @${num.split('@')[0]} 👋
 
*"Karna Setiap Ucapan Selamat Datang Akan Selalu Diakhiri Dengan Ucapan Selamat Tinggal"*

Terima Kasih Kak @${num.split("@")[0]} Sampai Bertemu Kembali Di Group ${metadata.subject}`, 
footer: `${namabot} © 2023`,
mentions: [],
headerType: 3
}
alpha.sendMessage(anu.id, buttonMessage)
}

} else if (anu.action == 'promote') {
  alpha.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} sekaran menjadi admin grup ${metadata.subject}` })
  
} else if (anu.action == 'demote') {
  alpha.sendMessage(anu.id, { text: `@${num.split('@')[0]} bukan admin grup ${metadata.subject} lagi` })
 }
}
} catch (err) {
console.log(err)
}
})

// Setting
alpha.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

alpha.ev.on('contacts.update', update => {
for (let contact of update) {
let id = alpha.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

alpha.getName = (jid, withoutContact  = false) => {
id = alpha.decodeJid(jid)
withoutContact = alpha.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = alpha.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === alpha.decodeJid(alpha.user.id) ?
alpha.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

alpha.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await alpha.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await alpha.getName(i + '@s.whatsapp.net')}\nFN:${await alpha.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
alpha.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

alpha.public = true

alpha.serializeM = (m) => smsg(alpha, m, store)

alpha.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); alpha.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); Botstarted(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); Botstarted(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, reconnecting..."); Botstarted(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); alpha.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); Botstarted(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); Botstarted(); }
else if (reason === DisconnectReason.Multidevicemismatch) { console.log("Multi device mismatch, please scan again"); alpha.logout(); }
else alpha.end(`Unknown DisconnectReason: ${reason}|${connection}`)
} else if (connection === "open") {
console.log(color("Bot Sukses Connect To Server", "red"));
console.log(color("Developer Number: +6285156028374", "red"));
console.log(color("Untuk Melihat Tampilan Bot Silahkan Ketik .menu", "yellow"));
console.log(color("By RENZ, Jangan Lupa Subscribe !", "yellow"));
}
if (update.connection == "open" || update.receivedPendingNotifications == "true") {
await store.chats.all()
console.log(`Connected to = ` + JSON.stringify(alpha.user, null, 2))
//alpha.sendMessage("77777777777" + "@s.whatsapp.net", {text:"", "contextInfo":{"expiration": 86400}})
}
 console.log('Connected...', update)
})

alpha.ev.on('creds.update', saveCreds)

  alpha.sendText = (jid, text, quoted = '', options) => alpha.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

alpha.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

return buffer
}

alpha.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

alpha.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await alpha.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

alpha.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await alpha.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'
}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await alpha.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)
}

alpha.getFile = async (PATH, returnAsFilename) => {
let res, filename
const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
const type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './media/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return { res, filename, ...type, data, deleteFile() {
return filename && fs.promises.unlink(filename)
}
}
}
 
alpha.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}

await alpha.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

alpha.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await alpha.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

alpha.sendMediaAsSticker = async (jid, path, quoted, options = {}) => {
let {
ext,
mime,
data
} = await alpha.getFile(path)
let media = {}
let buffer
media.data = data
media.mimetype = mime
if (options && (options.packname || options.author)) {
buffer = await writeExif(media, options)
} else {
buffer = /image/.test(mime) ? await imageToWebp(data) : /video/.test(mime) ? await videoToWebp(data) : ""
}
await alpha.sendMessage(jid, {
sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

alpha.sendFakeLink = (jid, text, salam, pushname, quoted) => alpha.sendMessage(jid, {
text: text,
contextInfo: {
"externalAdReply": {
"title": `Selamat ${salam} ${pushname}`,
"body": `© ${namaowner}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": pp_bot,
"sourceUrl": fakelink
}
}
}, { quoted : quoted })

alpha.sendStimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await alpha.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

alpha.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await alpha.getFile(path, true)
let {
res,
data: file,
filename: pathFile
} = type
if (res && res.status !== 200 || file.length <= 65536) {
try {
throw {
json: JSON.parse(file.toString())
}
}
catch (e) {
if (e.json) throw e.json
}
}
let opt = {
filename
}
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '',
mimetype = type.mime,
convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime))(
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

delete options.asSticker
delete options.asLocation
delete options.asVideo
delete options.asDocument
delete options.asImage

let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype }
let m
try {
m = await alpha.sendMessage(jid, message, { ...opt, ...options })
}
catch (e) {
//console.error(e)
m = null
}
finally {
if (!m) m = await alpha.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
file = null
return m
}
}

alpha.sendTextWithMentions = async (jid, text, quoted, options = {}) => alpha.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

return alpha
}

Botstarted()