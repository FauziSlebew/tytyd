let fs = require('fs')

//Info maszeh
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Ganti di Handler.js
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?

global.namabot = 'πππͺπ―ππ½π€π©π―-ππ' //nama BOT Lu
global.packname = 'πππͺπ―ππ½π€π©π―-ππ'
global.author = 'ππ’πΆπ»πͺππ’π―π»' //nama Owner
global.ownernya = '6287837703726'
global.linkyt = 'https://youtube.com/channel/UCmEQy5B3GhmfNVSrHEzv-uA' //link yt lu
global.linkig = 'https://instagram.com/fauzibeban__' //link ig lu
global.linkgh = '-' //link github lu
global.titlebot = `β«Ήβ«Ί WhatsApp Bot | By FauziGanz`
global.wm2 = 'hoh' //ganti aja kalau mau
global.wm = 'πππͺπ―ππ½π€π©π―'
global.colong1 = 'Ciss πΈ'
global.colong2 = 'πππͺπ―ππ½π€π©π―γ·οΈ'
global.kontak2 = [
['6287837703726', 'πΊ', 'ππ¬π£ππ§', 'Sα΄α΄ α΄ Aα΄α΄ Yα΄ Oα΄‘Ι΄α΄Κ Kα΄ Bα΄Ιͺα΄ Kα΄α΄', true],
]

//Biodata OWNER Bre
global.RL = 'HAMBAH ALLAH' //jenis kelamin lu
global.gender = 'Boys' //jenis kelamin lu
global.agama = 'islam' //agama lu
global.age = '18' //usia lu sekarang
global.kelas = 'Udah LuLus' //kelas lu
global.hobi = 'Gaming/editing/ngoding' //hobi lu bre
global.tempat = 'INDONESIA , α΄α΄ΚΙͺα΄α΄Ι΄α΄α΄Ι΄ sα΄Κα΄α΄α΄Ι΄' //tempat tinggal lu

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  males: 'https://malesin.xyz',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz'
}
global.lolkey = 'a243d5d9b0d811b81d63e6cf'
global.xkey = 'YourApikey'
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': '6aceac403a3d479b',
  'https://melcanz.com': 'apikeylu',
  'https://api.lolhuman.xyz': 'apikeylu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apikeylu',
  'https://pencarikode.xyz': 'apikeylu',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'apikeylu',
  'https://api.adiofficial.xyz': 'apikey lu'
}

//img nya
global.thumb = 'https://telegra.ph/file/6411cc04828f3cc335324.jpg'
global.hwaifu = ['https://telegra.ph/file/a3bd959e8cf3131be2213.jpg']

//Proses berlangsung
global.wait = '_*ππππππ ππ ππππππ...*_'
global.eror = '_*ππππ ππππππ πππππ...*_'

//========Url Template Buttons=========//
global.dtu = 'Group bot'
global.urlnya = "https://chat.whatsapp.com/Dj8kMyI48u6KGbaAQtKi70"

//============= callButtons =============//
global.dtc = 'ππππ πππππ'
global.phn = '3'

//============= Games ================//
global.benar = '_*Benar*_β'
global.salah = '_*Salah*_β'
global.dikit = "dikit lagi"

global.multiplier = 100 // The higher, The harder levelup

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//=========== Requirements ==========//

global.htki = 'ββββββγ' //hiasan title kiri
global.htka = 'γββββββ' //hiasan title kanan
global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'π§¬',
      limit: 'π',
      healt: 'β€οΈ',
      exp: 'βοΈ',
      money: 'π΅',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'π',
      mythic: 'π³οΈ',
      legendary: 'ποΈ',
      pet: 'π',
      sampah: 'π',
      armor: 'π₯Ό',
      fishingrod: 'π£',
      pickaxe: 'βοΈ',
      sword: 'βοΈ',
      kayu: 'πͺ΅',
      batu: 'πͺ¨',
      iron: 'βοΈ',
      string: 'πΈοΈ',
      kuda: 'π',
      kucing: 'π' ,
      anjing: 'π',
      makananpet: 'π',
      gold: 'π',
      emerald: 'π'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
