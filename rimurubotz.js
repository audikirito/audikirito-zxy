// Disini Ga Usah Di Recode Udah Sempurna,Ntar Kalo Lu Recode Ga Tau Eh Ternyata Eror (ENTAR NANYA" KE GW LAGI) Jika Eror Hubungi Gw == Kontak Opsi Pengembang Sc / Pengrecode Full : wa.me/6285922404374  •  Kalo Mau Info Seputar Sc Ini PrakosoXfc Bisa Bantu,Chat Nomor Di Atas //
"use strict";
require('./lib/grupmenu')
const { downloadMediaMessage, downloadContentFromMessage, toBuffer, generateWAMessageFromContent, proto } = require('@adiwajshing/baileys');
const Crypto = require("crypto")
const colors = require('colors/safe');
const fs = require('fs');
const imageToBase64 = require('image-to-base64')
const { writeFile } = require ('fs/promises')
const moment = require("moment-timezone");
const { spawn } = require('child_process')
const ffmpeg = require('fluent-ffmpeg')
const path = require("path")
const { phone } = require("phone")
const packagejson = JSON.parse(fs.readFileSync('./package.json')); 
const { owner, namabot, namaowner, donasi, fakereply, ig, fb, tt, script, tutorbukabacaselengkapnya, epep, hooh, thumb, open, qts, bot} = require("./admin/config.json")
const tomxic = JSON.parse(fs.readFileSync('./sadboy/sadboy.json'))
const { toxic1, toxic2, toxic3} = tomxic
const toMs = require('ms')
const user = JSON.parse(fs.readFileSync('./lib/data.json')); 
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("./lib/myfunc");
const { only } = require("./lib/respoder")
const { help } = require("./admin/help")
//const { setUser} = require("./lib/user")
const { fetch } = require('./lib/anu.js');
const { api, xa } = require('./admin/rest-api')
const { StickerMedia, ImageMedia, AudioMedia, VideoMedia, cekMedia, addMedia, listMedia, deleteMedia} = require('./media/media')
const { LogLoading, LogLoadingg } = require('./lib/spinner')
const { dataOnly } = require('./lib/data')
moment.tz.setDefault('Asia/Jakarta').locale("id");

module.exports = async (rimurubotz, nay, m, store) => {
try {
const type = Object.keys(nay.message)[0];
const body = (type === 'conversation') ? nay.message.conversation : (type == 'imageMessage') ? nay.message.imageMessage.caption : (type == 'videoMessage') ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') ? nay.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? nay.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? nay.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? nay.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (nay.message.buttonsResponseMessage?.selectedButtonId || nay.message.listResponseMessage?.singleSelectReply.selectedRowId || nay.text) : ''
const budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
const prefix = /^[./~!#%^&=\,;:()z]/.test(body) ? body.match(/^[./~!#%^&=\,;:()z]/gi) : '#';
const isCommand = body.startsWith(prefix);
const command = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
const commands = isCommand ? body.slice(0).trim().split(/ +/).shift().toLowerCase() : null;
const time = moment(new Date()).format("HH:mm");
const text = nay.message.conversation;
const isGroup = nay.key.remoteJid.endsWith('@g.us');
const from = nay.key.remoteJid;
const content = JSON.stringify(nay.message);
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
const botNumber = rimurubotz.user.id.split(':')[0] + '@s.whatsapp.net';
const botName = rimurubotz.user.name;
const pushname = nay.pushName;
const sender = isGroup ? (nay.key.participant ? nay.key.participant : nay.participant) : nay.key.remoteJid;
const groupMetadata = isGroup ? await rimurubotz.groupMetadata(from) : '';
const uwong = isGroup ? await groupMetadata.participants : '';
const groupAdmins = isGroup ? await uwong.filter(v => v.admin !== null).map(a => a.id) : '';
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
const isGroupAdmins = groupAdmins.includes(sender) || false;
const groupName = isGroup ? groupMetadata.subject : "";
const groupMembers = isGroup ? groupMetadata.participants : ''
const isOwner = [`${owner}@s.whatsapp.net`] == sender ? true : ["6283896480283@s.whatsapp.net","6283896480283@s.whatsapp.net","6283896480283@s.whatsapp.net","6283896480283@s.whatsapp.net"].includes(sender) ? true : false
const q1 = q.split('&')[0];
const q2 = q.split('&')[1];
const q3 = q.split('&')[2];	
const q4 = q.split('&')[3];	
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' );
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');

const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "afk"){ return user[cek].afk }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium } 
if (users == "jawaban"){ return user[cek].jawaban } 
}
if (cek == null) return null
}
async function setUser(users, id, x) {     
Object.keys(user).forEach((i) => {
if (user[i].id === id) {
if (users == "±id"){ user[i].id = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±emote"){ user[i].emote = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±timers"){ user[i].timers = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±hit"){ user[i].hit = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "-hit"){ user[i].hit -= x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "+hit"){ user[i].hit += x
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±star"){ user[i].star = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "-star"){ user[i].star -= x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "+star"){ user[i].star += x
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±afk"){ user[i].afk = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±alasan"){ user[i].alasan = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±ban"){ user[i].ban = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±premium"){ user[i].premium = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
if (users == "±jawaban"){ user[i].jawaban = x 
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))}
}})
}  
var _0x135601=_0x2036;(function(_0x4c8fb7,_0x5e4fd1){var _0x1e1f1b=_0x2036,_0x4c3ca5=_0x4c8fb7();while(!![]){try{var _0x59cd37=-parseInt(_0x1e1f1b(0x21a))/(0x9ac+0x17a1+-0x214c)*(-parseInt(_0x1e1f1b(0x20c))/(-0x18*-0x155+-0x1*0x293+0x1*-0x1d63))+-parseInt(_0x1e1f1b(0x211))/(0xb15*0x3+0x2ca+-0x2406)+parseInt(_0x1e1f1b(0x24d))/(-0x2497+-0x46*0xd+0x2829)*(parseInt(_0x1e1f1b(0x1fc))/(-0x150b*-0x1+0x2f*-0x61+-0x337))+parseInt(_0x1e1f1b(0x203))/(-0x1652*0x1+0x369*-0x2+0x1d2a*0x1)+parseInt(_0x1e1f1b(0x297))/(-0x16bb+0x6b3+0x1*0x100f)*(-parseInt(_0x1e1f1b(0x2a2))/(0x4b6+-0x1d*0xda+-0xe*-0x16e))+parseInt(_0x1e1f1b(0x267))/(0x5*-0x105+0x26a+-0x6*-0x74)+parseInt(_0x1e1f1b(0x269))/(-0x53*-0x15+0x17d*0xd+0xd0f*-0x2)*(parseInt(_0x1e1f1b(0x271))/(0xab2+0xf20+-0x19c7));if(_0x59cd37===_0x5e4fd1)break;else _0x4c3ca5['push'](_0x4c3ca5['shift']());}catch(_0x414db3){_0x4c3ca5['push'](_0x4c3ca5['shift']());}}}(_0x251f,-0x10d3c3+-0x1c15ed+0x3b0fd8));const cr=_0x135601(0x231)+_0x135601(0x205)+_0x135601(0x273)+_0x135601(0x20e)+_0x135601(0x22b)+_0x135601(0x26c)+_0x135601(0x2ad)+_0x135601(0x252)+_0x135601(0x255)+_0x135601(0x227)+(_0x135601(0x28a)+namaowner+(_0x135601(0x1fa)+_0x135601(0x1fb))),nay1={'key':{'fromMe':![],'participant':_0x135601(0x293)+_0x135601(0x264),...from?{'remoteJid':_0x135601(0x266)+_0x135601(0x21b)}:{}},'message':{'contactMessage':{'displayName':qts,'vcard':_0x135601(0x23f)+'D\x0a'+(_0x135601(0x242)+'0\x0a')+(_0x135601(0x222)+_0x135601(0x247)+sender[_0x135601(0x22d)]('@')[-0x6*0x2cf+0x39*-0x98+0x7*0x73e]+':+'+sender[_0x135601(0x22d)]('@')[0x3*-0x5bb+0x590+0xba1*0x1]+'\x0a')+(_0x135601(0x232)+_0x135601(0x28f)+_0x135601(0x268))+_0x135601(0x24b)}}};async function reply(_0x557e3f){var _0x305ddc=_0x135601;rimurubotz[_0x305ddc(0x2a1)+'e'](from,{'text':_0x557e3f,'mentions':[sender]},{'quoted':nay1});}async function Notdaftar(){var _0x5c98d7=_0x135601;rimurubotz[_0x5c98d7(0x2a1)+'e'](from,{'text':_0x5c98d7(0x215)+_0x5c98d7(0x27a)+_0x5c98d7(0x25f)+_0x5c98d7(0x291)+_0x5c98d7(0x23a)+sender[_0x5c98d7(0x22d)]('@')[-0x311+0x232e+-0x201d]+(_0x5c98d7(0x243)+_0x5c98d7(0x235)+_0x5c98d7(0x236)+_0x5c98d7(0x2a6)+_0x5c98d7(0x245)+_0x5c98d7(0x1f5)+_0x5c98d7(0x1f8)+_0x5c98d7(0x25d)+_0x5c98d7(0x201)+_0x5c98d7(0x296)),'mentions':[sender]},{'quoted':nay1});}const Tag=()=>{var _0x2cb046=_0x135601,_0x31964a={'cDaNp':function(_0x48989e,_0x1fdfa9){return _0x48989e!==_0x1fdfa9;}},_0x1ab9ab=[];return _0x31964a[_0x2cb046(0x287)](m[_0x2cb046(0x279)][0x2aa+0xb*-0x59+0x129][_0x2cb046(0x23b)],'')&&_0x1ab9ab[_0x2cb046(0x263)](m[_0x2cb046(0x279)][-0x5*0x693+0x78*-0x42+-0x63*-0xa5][_0x2cb046(0x23b)][-0x1e9*-0x8+0xb9*0xd+-0x18ad]),_0x1ab9ab;};if(isCommand){if(cekUser('id',sender)!==null){LogLoadingg(_0x135601(0x246)+pushname+(_0x135601(0x22c)+'\x20')+(prefix+command)+(_0x135601(0x261)+':\x20')+time+'\x20]'),setUser(_0x135601(0x244),sender,-0x995+0x25e0+-0x1c4a);if(cekUser(_0x135601(0x249),sender)==!![])return reply(_0x135601(0x1f1)+_0x135601(0x298)+_0x135601(0x26d)+_0x135601(0x251)+_0x135601(0x282)+_0x135601(0x277)+_0x135601(0x29b)+_0x135601(0x216)+_0x135601(0x20f)+_0x135601(0x286));}}if(m){if(m[_0x135601(0x279)][-0xf76*-0x1+-0x97*-0x19+-0xb*0x2bf][_0x135601(0x23b)]!==''){if(m[_0x135601(0x279)][-0x51*0x6d+-0x1fd+0x247a][_0x135601(0x23b)][-0xdc7+-0x5f*0xa+0x117d]==cekUser('id',m[_0x135601(0x279)][0xa1f+-0x17*0xc1+0x738][_0x135601(0x23b)][0x705+0x2*0xdf5+-0x22ef])){var afk1=cekUser('id',m[_0x135601(0x279)][0x1*0x3a6+0x92a+-0xcd0][_0x135601(0x23b)][-0x120+0x1a69*0x1+-0x1*0x1949]);cekUser(_0x135601(0x292),afk1)==!![]&&rimurubotz[_0x135601(0x2a1)+'e'](from,{'sticker':{'url':_0x135601(0x229)+_0x135601(0x280)+_0x135601(0x21f)+_0x135601(0x27b)+_0x135601(0x27e)+_0x135601(0x2a0)+_0x135601(0x29a)}},{'quoted':{'key':{'fromMe':![],'participant':_0x135601(0x293)+_0x135601(0x264),...from?{'remoteJid':_0x135601(0x266)+_0x135601(0x21b)}:{}},'message':{'conversation':_0x135601(0x218)+_0x135601(0x2b0)+'i\x20'+cekUser(_0x135601(0x248),afk1)}}});}}if(cekUser(_0x135601(0x292),sender)==!![])return setUser(_0x135601(0x28c),sender,![]),setUser(_0x135601(0x285),sender,![]),reply(_0x135601(0x295)+_0x135601(0x26b)+_0x135601(0x230)+_0x135601(0x233)+sender[_0x135601(0x22d)]('@')[-0x9*0x2a7+-0x7*-0x577+-0xe62]);}if(budy[_0x135601(0x223)]('$')){if(!isOwner)return;let evaled=await eval(q);if(typeof evaled!==_0x135601(0x21d))evaled=require(_0x135601(0x22f))[_0x135601(0x20b)](evaled);await reply(evaled),await LogLoadingg(evaled+_0x135601(0x262));}function _0x2036(_0x3d7d4d,_0x39d3bb){var _0x17dbc6=_0x251f();return _0x2036=function(_0x1e769a,_0x12247b){_0x1e769a=_0x1e769a-(0x258e+0x1110+-0x34af);var _0x241de9=_0x17dbc6[_0x1e769a];return _0x241de9;},_0x2036(_0x3d7d4d,_0x39d3bb);}var downloadDone=![];function _0x251f(){var _0x21515f=['😡,\x20dia\x20lag','OICE;waid=','adc08ede48','profilePic','vcard','Kamu\x20sudah','YqNQQ','xtMessage','imageMessa','endaftar\x20t','stickerMes','HUJBC','erlebih\x20da','qjNyD','*\x0a╰━─━─━─━','─━─━─━─•','40Qutuoc','message','audio','.png','FN:','kan\x20comman','sticker','4171884eDayos','jPedR','HX-TO*\x20]⊱\x0a','-1280-605a','NKraI','BxbVV','nGfRH','tureUrl','inspect','705718NFiKHg','url.jpg','AJ\x20SINGH*\x0a','an\x20oleh\x20ow','replace','5404521fnUdBt','tVEhv','PSulZ','PPUrl','[\x20*NEW\x20INF','nda\x20di\x20unb','./media/','Jangan\x20tag','base64','1pivHdI','adcast','*\x20:\x20','string','tacts;\x0a','ercontent.','pIKMv','imageUrl','item1.TEL;','includes','TEL;type=C','tems/album','videoMessa','Z*\x0a','lJzfE','https://ra','readFileSy','┃•\x20\x20*RIMUR','\x20]=[\x20CMD\x20:','split','diHig','util','mat\x20datang','\x0a╭━─━•[\x20*T','item1.X-AB','\x20kembali\x20@','RuZoO','um\x20terdaft','ar\x20di\x20Data','YHuOn','HNmkH','.mp3','lo\x20@','mentioned','from','eType:\x20Con','WkbfD','BEGIN:VCAR','Zfdwv','http://ass','VERSION:3.',',\x20Kamu\x20bel','+hit','Silahkan\x20m','[USER\x20:\x20','waid=','alasan','ban','ure-973460','END:VCARD','Acvmb','50044RWvzuE','oQMZw','/2021/03/2','iana.com/i','\x20tidak\x20bis','LERS*\x0a┃•\x20\x20','74e1153a12','MysMh','*LORD\x20R1YN','zIcpT','TtRJZ','xvsxn','ELL;type=V','ofile-pict','zrygf','contextInf','hulu,\x20Guna','ync','er*\x20:\x20Null','eodgY','\x20]=[\x20TIME\x20','\x0a\x0a\x0a\x0a','push','pp.net','tools','status@bro','6317019ETRsHJ','el\x0a','10vKIWvY','.mp4','IF*\x20]\x0aSela','UBOTZ*\x0a┃•\x20',',\x20Dan\x20kamu','srgmL','fYxPm','KYtTZ','26526775xJfxjV','video','┃•\x20\x20*ADHIR','.jpg','LztoZ','forEach','kan\x20bot\x20in','url_file','messages','O*\x20]\x0a•\x20*Us','com/naylac','uploadFile','5|0|3|1|4|','han/STICKE','quotedMess','w.githubus','image','a\x20mengguna','Ovzqv','concat','±alasan','ner','cDaNp','textpro','FsIpx','┃•\x20\x20*','sage','±afk','ets.kompas','2|1|0|3|4','Label:Pons','result','\x0a~>\x20[🤖]\x20Ha','afk','0@s.whatsa','keys','[\x20*AFK-NOT','d\x20#daftar','198709JBkGfx','\x20di\x20banned','stringify','.webp','i\x20sampai\x20a','audio/mp4','./media/pp','writeFileS','extendedTe','R/main/tag','sendMessag','432xviWFy','wtiUd','Jeff','audioMessa','base\x20bot,\x20','ORG:Messag','VijxI','uSnTW','lmOoD','age','XUoNz','\x20*LOLI\x20KIL','4/blank-pr','\x0a•\x20*'];_0x251f=function(){return _0x21515f;};return _0x251f();}async function download(_0x3ce3a6,_0x1f9950,_0x2a9313){var _0x2e5b30=_0x135601,_0x105831={'HNmkH':function(_0x10d3c4,_0xafea0c){return _0x10d3c4==_0xafea0c;},'YqNQQ':_0x2e5b30(0x281),'xvsxn':function(_0x2594be,_0x3aa2f6,_0x4a9f9e){return _0x2594be(_0x3aa2f6,_0x4a9f9e);},'VijxI':_0x2e5b30(0x221),'qjNyD':function(_0x3d26ef,_0x2700b8,_0x5bd354){return _0x3d26ef(_0x2700b8,_0x5bd354);},'jPedR':function(_0x443fa9,_0x5e3a65){return _0x443fa9==_0x5e3a65;},'tVEhv':_0x2e5b30(0x214),'TtRJZ':_0x2e5b30(0x28e),'srgmL':_0x2e5b30(0x29d)+_0x2e5b30(0x20d),'LztoZ':_0x2e5b30(0x219),'MysMh':function(_0x280814,_0x57f3d1){return _0x280814(_0x57f3d1);},'FsIpx':_0x2e5b30(0x241)+_0x2e5b30(0x28d)+_0x2e5b30(0x250)+_0x2e5b30(0x225)+_0x2e5b30(0x24f)+_0x2e5b30(0x2ae)+_0x2e5b30(0x25a)+_0x2e5b30(0x24a)+_0x2e5b30(0x206)+_0x2e5b30(0x2b2)+_0x2e5b30(0x253)+_0x2e5b30(0x1ff),'XUoNz':_0x2e5b30(0x202),'lJzfE':function(_0x4cf978,_0x47e585){return _0x4cf978==_0x47e585;},'HUJBC':_0x2e5b30(0x1fe),'fYxPm':_0x2e5b30(0x272),'uSnTW':function(_0x503815,_0x265f74,_0x49f9de){return _0x503815(_0x265f74,_0x49f9de);}};if(_0x105831[_0x2e5b30(0x238)](_0x3ce3a6,_0x105831[_0x2e5b30(0x1f2)])){var _0x2074bb=await _0x105831[_0x2e5b30(0x258)](downloadContentFromMessage,nay[_0x2e5b30(0x1fd)][_0x2e5b30(0x1f4)+'ge']||nay[_0x2e5b30(0x1fd)][_0x2e5b30(0x29f)+_0x2e5b30(0x1f3)]?.[_0x2e5b30(0x25c)+'o'][_0x2e5b30(0x27f)+_0x2e5b30(0x2ab)][_0x2e5b30(0x1f4)+'ge'],_0x105831[_0x2e5b30(0x1f2)]),_0x3bee7f=Buffer[_0x2e5b30(0x23c)]([]);for await(const _0x395e69 of _0x2074bb){_0x3bee7f=Buffer[_0x2e5b30(0x284)]([_0x3bee7f,_0x395e69]);}fs[_0x2e5b30(0x29e)+_0x2e5b30(0x25e)](_0x2e5b30(0x217)+_0x1f9950+_0x2e5b30(0x274),_0x3bee7f),downloadDone=!![];}if(_0x105831[_0x2e5b30(0x238)](_0x3ce3a6,_0x105831[_0x2e5b30(0x2a8)])){var _0x2074bb=await _0x105831[_0x2e5b30(0x1f9)](downloadContentFromMessage,nay[_0x2e5b30(0x1fd)][_0x2e5b30(0x1f4)+'ge']||nay[_0x2e5b30(0x1fd)][_0x2e5b30(0x29f)+_0x2e5b30(0x1f3)]?.[_0x2e5b30(0x25c)+'o'][_0x2e5b30(0x27f)+_0x2e5b30(0x2ab)][_0x2e5b30(0x1f4)+'ge'],_0x105831[_0x2e5b30(0x1f2)]),_0x3bee7f=Buffer[_0x2e5b30(0x23c)]([]);for await(const _0x34dd7a of _0x2074bb){_0x3bee7f=Buffer[_0x2e5b30(0x284)]([_0x3bee7f,_0x34dd7a]);}fs[_0x2e5b30(0x29e)+_0x2e5b30(0x25e)](_0x2e5b30(0x217)+_0x1f9950+_0x2e5b30(0x274),_0x3bee7f);var _0x22fa87=await api[_0x2e5b30(0x265)][_0x2e5b30(0x27c)](fs[_0x2e5b30(0x22a)+'nc'](_0x2e5b30(0x217)+_0x1f9950+_0x2e5b30(0x274)));return _0x22fa87[_0x2e5b30(0x290)][_0x2e5b30(0x278)];}if(_0x105831[_0x2e5b30(0x204)](_0x3ce3a6,_0x105831[_0x2e5b30(0x212)])){var _0x27b5bb=_0x105831[_0x2e5b30(0x257)][_0x2e5b30(0x22d)]('|'),_0x20e648=-0x5*0x46b+-0x120d+-0x1c*-0x16f;while(!![]){switch(_0x27b5bb[_0x20e648++]){case'0':fs[_0x2e5b30(0x29e)+_0x2e5b30(0x25e)](_0x105831[_0x2e5b30(0x26e)],_0x2074bb,_0x105831[_0x2e5b30(0x275)]);continue;case'1':var _0x2074bb=await _0x105831[_0x2e5b30(0x254)](imageToBase64,JSON[_0x2e5b30(0x299)](_0x20f586)[_0x2e5b30(0x210)](/\"/gi,''));continue;case'2':try{var _0x20f586=await rimurubotz[_0x2e5b30(0x1ef)+_0x2e5b30(0x20a)](_0x1f9950,_0x105831[_0x2e5b30(0x1f2)]);}catch(_0x2b8335){var _0x20f586=_0x105831[_0x2e5b30(0x289)];}continue;case'3':var _0x365264=await api[_0x2e5b30(0x265)][_0x2e5b30(0x27c)](fs[_0x2e5b30(0x22a)+'nc'](_0x2e5b30(0x29d)+_0x2e5b30(0x20d)));continue;case'4':return _0x365264[_0x2e5b30(0x290)][_0x2e5b30(0x278)];}break;}}if(_0x105831[_0x2e5b30(0x238)](_0x3ce3a6,_0x105831[_0x2e5b30(0x2ac)])){var _0x2074bb=await _0x105831[_0x2e5b30(0x258)](downloadContentFromMessage,nay[_0x2e5b30(0x1fd)][_0x2e5b30(0x1f6)+_0x2e5b30(0x28b)]||nay[_0x2e5b30(0x1fd)][_0x2e5b30(0x29f)+_0x2e5b30(0x1f3)]?.[_0x2e5b30(0x25c)+'o'][_0x2e5b30(0x27f)+_0x2e5b30(0x2ab)][_0x2e5b30(0x1f6)+_0x2e5b30(0x28b)],_0x105831[_0x2e5b30(0x2ac)]),_0x3bee7f=Buffer[_0x2e5b30(0x23c)]([]);for await(const _0x245f72 of _0x2074bb){_0x3bee7f=Buffer[_0x2e5b30(0x284)]([_0x3bee7f,_0x245f72]);}fs[_0x2e5b30(0x29e)+_0x2e5b30(0x25e)](_0x2e5b30(0x217)+_0x1f9950+_0x2e5b30(0x29a),_0x3bee7f);}if(_0x105831[_0x2e5b30(0x228)](_0x3ce3a6,_0x105831[_0x2e5b30(0x1f7)])){var _0x2074bb=await _0x105831[_0x2e5b30(0x258)](downloadContentFromMessage,nay[_0x2e5b30(0x1fd)][_0x2e5b30(0x2a5)+'ge']||nay[_0x2e5b30(0x1fd)][_0x2e5b30(0x29f)+_0x2e5b30(0x1f3)]?.[_0x2e5b30(0x25c)+'o'][_0x2e5b30(0x27f)+_0x2e5b30(0x2ab)][_0x2e5b30(0x2a5)+'ge'],_0x105831[_0x2e5b30(0x1f7)]),_0x3bee7f=Buffer[_0x2e5b30(0x23c)]([]);for await(const _0x5ac8a3 of _0x2074bb){_0x3bee7f=Buffer[_0x2e5b30(0x284)]([_0x3bee7f,_0x5ac8a3]);}fs[_0x2e5b30(0x29e)+_0x2e5b30(0x25e)](_0x2e5b30(0x217)+_0x1f9950+_0x2e5b30(0x239),_0x3bee7f);}if(_0x105831[_0x2e5b30(0x204)](_0x3ce3a6,_0x105831[_0x2e5b30(0x26f)])){var _0x2074bb=await _0x105831[_0x2e5b30(0x2a9)](downloadContentFromMessage,nay[_0x2e5b30(0x1fd)][_0x2e5b30(0x226)+'ge']||nay[_0x2e5b30(0x1fd)][_0x2e5b30(0x29f)+_0x2e5b30(0x1f3)]?.[_0x2e5b30(0x25c)+'o'][_0x2e5b30(0x27f)+_0x2e5b30(0x2ab)][_0x2e5b30(0x226)+'ge'],_0x105831[_0x2e5b30(0x26f)]),_0x3bee7f=Buffer[_0x2e5b30(0x23c)]([]);for await(const _0x25fa8c of _0x2074bb){_0x3bee7f=Buffer[_0x2e5b30(0x284)]([_0x3bee7f,_0x25fa8c]);}fs[_0x2e5b30(0x29e)+_0x2e5b30(0x25e)](_0x2e5b30(0x217)+_0x1f9950+_0x2e5b30(0x26a),_0x3bee7f);}}async function sendMedia(_0x3b2470,_0x1893ec,_0x518c78){var _0x50bab3=_0x135601,_0x2003a5={'zIcpT':_0x50bab3(0x27d)+'2','Acvmb':function(_0x237dd3,_0x28354b){return _0x237dd3==_0x28354b;},'zrygf':_0x50bab3(0x281),'oQMZw':function(_0x26ebde,_0x45d5c0){return _0x26ebde==_0x45d5c0;},'wtiUd':_0x50bab3(0x202),'NKraI':function(_0x4a92a5,_0x3ec989){return _0x4a92a5==_0x3ec989;},'pIKMv':_0x50bab3(0x29c),'diHig':function(_0x4ee0ad,_0x30f599){return _0x4ee0ad==_0x30f599;},'Zfdwv':_0x50bab3(0x272),'PSulZ':_0x50bab3(0x1fe),'nGfRH':_0x50bab3(0x1f0),'KYtTZ':function(_0x242a65,_0x4ecc17){return _0x242a65+_0x4ecc17;},'Ovzqv':function(_0xaeb92e,_0x8cfca7){return _0xaeb92e+_0x8cfca7;},'BxbVV':function(_0x5d83f0,_0x4fef11){return _0x5d83f0+_0x4fef11;},'YHuOn':_0x50bab3(0x23f)+'D\x0a','RuZoO':_0x50bab3(0x242)+'0\x0a','WkbfD':_0x50bab3(0x2a7)+_0x50bab3(0x23d)+_0x50bab3(0x21e),'eodgY':_0x50bab3(0x24b),'lmOoD':_0x50bab3(0x2a4)},_0x464d92=_0x2003a5[_0x50bab3(0x256)][_0x50bab3(0x22d)]('|'),_0x3871e9=0x168e+-0x228b+0xbfd;while(!![]){switch(_0x464d92[_0x3871e9++]){case'0':_0x2003a5[_0x50bab3(0x24c)](_0x3b2470,_0x2003a5[_0x50bab3(0x25b)])&&rimurubotz[_0x50bab3(0x2a1)+'e'](from,{'image':{'url':_0x1893ec},'caption':_0x518c78,'mentions':[sender]},{'quoted':nay1});continue;case'1':_0x2003a5[_0x50bab3(0x24e)](_0x3b2470,_0x2003a5[_0x50bab3(0x2a3)])&&rimurubotz[_0x50bab3(0x2a1)+'e'](from,{'sticker':{'url':_0x1893ec},'mentions':[sender]},{'quoted':nay1});continue;case'2':_0x2003a5[_0x50bab3(0x207)](_0x3b2470,'vn')&&rimurubotz[_0x50bab3(0x2a1)+'e'](from,{'audio':{'url':_0x1893ec},'mimetype':_0x2003a5[_0x50bab3(0x220)],'ptt':!![],'mentions':[sender]},{'quoted':nay1});continue;case'3':_0x2003a5[_0x50bab3(0x22e)](_0x3b2470,_0x2003a5[_0x50bab3(0x240)])&&rimurubotz[_0x50bab3(0x2a1)+'e'](from,{'video':{'url':_0x1893ec},'caption':_0x518c78,'mentions':[sender]},{'quoted':nay1});continue;case'4':_0x2003a5[_0x50bab3(0x24c)](_0x3b2470,_0x2003a5[_0x50bab3(0x213)])&&rimurubotz[_0x50bab3(0x2a1)+'e'](from,{'audio':{'url':_0x1893ec},'mimetype':_0x2003a5[_0x50bab3(0x220)],'mentions':[sender]},{'quoted':nay1});continue;case'5':if(_0x2003a5[_0x50bab3(0x24c)](_0x3b2470,_0x2003a5[_0x50bab3(0x209)])){var _0x286074=_0x2003a5[_0x50bab3(0x270)](_0x2003a5[_0x50bab3(0x283)](_0x2003a5[_0x50bab3(0x283)](_0x2003a5[_0x50bab3(0x208)](_0x2003a5[_0x50bab3(0x283)](_0x2003a5[_0x50bab3(0x237)],_0x2003a5[_0x50bab3(0x234)]),_0x50bab3(0x200)+_0x1893ec+'\x0a'),_0x2003a5[_0x50bab3(0x23e)]),_0x50bab3(0x224)+_0x50bab3(0x259)+_0x50bab3(0x2b1)+_0x518c78+':+'+_0x518c78+'\x0a'),_0x2003a5[_0x50bab3(0x260)]);rimurubotz[_0x50bab3(0x2a1)+'e'](from,{'contacts':{'displayName':_0x2003a5[_0x50bab3(0x2aa)],'contacts':[{'vcard':_0x286074}]}});}continue;}break;}}async function textPro1(_0xe3ea35,_0x18e733){var _0x3f5161=_0x135601,_0x4f93ef=await api[_0x3f5161(0x265)][_0x3f5161(0x288)](_0xe3ea35,[_0x18e733]);return _0x4f93ef;}async function textPro2(_0x3af9b6,_0x5f3576,_0x2e7999){var _0x3a2bf4=_0x135601,_0x3d1497=await api[_0x3a2bf4(0x265)][_0x3a2bf4(0x288)](_0x3af9b6,[_0x5f3576,_0x2e7999]);return _0x3d1497;}async function getResult(_0x4a268d,_0x41f6d6,_0x44779c){var _0x4d33a9=_0x135601,_0x4c8235=_0x4a268d;return Object[_0x4d33a9(0x294)](_0x41f6d6)[_0x4d33a9(0x276)](_0x3fbf0a=>{var _0xd5da83=_0x4d33a9;_0x4c8235+=_0xd5da83(0x2af)+_0x41f6d6[_0x3fbf0a]+_0xd5da83(0x21c)+_0x44779c[_0x3fbf0a];}),_0x4c8235;}const imgToUrl=async function(_0x45c687){var _0x3a7346=_0x135601,_0x379375=await api[_0x3a7346(0x265)][_0x3a7346(0x27c)](fs[_0x3a7346(0x22a)+'nc'](_0x45c687));return _0x379375[_0x3a7346(0x290)][_0x3a7346(0x278)];};
switch (command) { 
 case 'afk':
if (cekUser("afk", sender) == true) return reply("Kamu Telah afk sebelumnya")
if (!q) return reply("𝗧𝗼𝗹𝗼𝗻𝗵 𝗞𝗮𝗰𝗸 𝗕𝗲𝗿𝗶 𝗔𝗺𝗹𝗮𝘀𝗮𝗻")
reply(`📩𝗕𝗮𝗶𝗸𝗹𝗮𝗵 𝗘𝗻𝘁𝗲 𝗦𝘂𝗱𝗮𝗵 𝗔𝗳𝗸
𝗠𝘂𝗻𝗴𝗸𝗶𝗻 𝗗𝗶𝗮 𝗣𝗲𝗻 𝗡𝗴𝗲𝗕𝗼𝗸𝗮𝗽 𝗧𝗮𝗽𝗶 𝗚𝗮 𝗔𝗷𝗮𝗸 𝗔𝘁𝗺𝗶𝗻 𝗧𝗮𝗸𝘂𝘁 𝗞𝗲 𝗖𝘆𝗱𝘂𝗸🗿🤙

ᯓ • 𝗡𝗮𝗺𝗮 𝗕𝗮𝗽𝗮𝗸 𝗡𝘆𝗮🗿 : @${sender.split("@")[0]}
ᯓ • 𝗔𝗹𝗮𝘀𝗮𝗻 𝗕𝗮𝗽𝗮𝗸𝗻𝘆𝗮 𝗖𝗮𝗿𝗶 𝗗𝗶𝗮🗿 : ${q}

🚩 𝗡𝗻 𝗗𝗮𝗿𝗶 𝗕𝗼𝘁 𝗖𝗮𝗸𝗲𝗽 𝗜𝗻𝗶 : 𝗚𝘄 𝗕𝗮𝗸𝗮𝗹 𝗲𝘄𝗲 𝗢𝗿𝗴 𝗬𝗮𝗻𝗴 𝗡𝗴𝗲𝘁𝗮𝗴 𝗔𝗻𝗱𝗮,𝗝𝗮𝗱𝗶 𝗕𝘂𝗮𝘁 𝗣𝗮𝗿𝗮 𝗠𝗲𝗺𝗯𝗲𝗿 𝗦𝗲𝗸𝗮𝗹𝗶𝗮𝗻 𝗝𝗮𝗻𝗴𝗮𝗻 𝗧𝗮𝗴 @${sender.split("@")[0]} 𝗬𝗮-! 𝗘𝗻𝘁𝗮𝗿 𝗚𝘄 𝗲𝘄𝗲 𝗟𝗼𝗵🗿❤`)
setUser("±afk", sender, true)
setUser("±alasan", sender, q)
break
case 'menu': case 'help':
reply(`𝘚𝘦𝘭𝘢𝘮𝘢𝘵 𝘋𝘢𝘵𝘢𝘯𝘨 @${sender.split("@")[0]} 𝘋𝘪 𝘊𝘳𝘪𝘻𝘻𝘺𝘉𝘖𝘛

𝗖𝗼𝗺𝗺𝗮𝗻𝗱  .𝗺𝗲𝗻𝘂 𝗧𝗶𝗱𝗮𝗸 𝗧𝗲𝗿𝘀𝗲𝗱𝗶𝗮,𝗝𝗶𝗸𝗮 𝗜𝗻𝗴𝗶𝗻 𝗖𝗲𝗸 𝗠𝗲𝗻𝘂 𝗞𝗲𝘁𝗶𝗸  .𝗹𝗶𝘀𝘁𝗺𝗲𝗻𝘂

𝘚𝘪𝘮𝘱𝘭𝘦 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘉𝘰𝘵 𝘉𝘺 _@${owner.split("@")[0]}_ ><`)
break
case 'sendbug': case 'bug':
reply(`ᯓ 𝗙𝗶𝘁𝘂𝗿 𝗜𝗻𝗶 𝗦𝗲𝗱𝗮𝗻𝗴 𝗧𝗮𝗵𝗮𝗽 𝗣𝗲𝗺𝗯𝘂𝗮𝘁𝗮𝗻,𝗝𝗮𝗱𝗶 𝗬𝗮 𝗦𝗮𝗯𝗮𝗿 𝗕𝗮𝗻𝗴𝘀𝗮𝗱🗿🤙`)
break
case 'tagme': case 'tagsaya':
reply(`@${sender.split("@")[0]}`)
break
case 'cekuser': case 'cekprofile':
sendMedia("image", ('./media/cek.jpg'), "Nih Ngab KTPB Lo🗿🖕")
reply(`𝗞𝗧𝗣𝗕
𝗞𝗮𝗿𝘁𝘂 𝗧𝗮𝗻𝗱𝗮 𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮 𝗕𝗼𝘁

ᯓ 𝗡𝗮𝗺𝗮 𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗮𝗻 : @${sender.split("@")[0]}
ᯓ 𝗛𝗶𝘁 𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮 : ${cekUser("hit", sender)}
ᯓ 𝗘𝗺𝗼𝘁 𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮 : ${cekUser("emote", sender)}
ᯓ 𝗕𝗶𝗻𝘁𝗮𝗻𝗴 𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮 : ${cekUser("star", sender)}⭐
ᯓ 𝗦𝘁𝗮𝘁𝘂𝘀 𝗕𝗮𝗻𝗻𝗲𝗱 : ${cekUser("ban", sender)}
ᯓ 𝗦𝘁𝗮𝘁𝘂𝘀 𝗩𝗩𝗜𝗣 : ${cekUser("premium", sender)}
ᯓ 𝗔𝘀𝗮𝗹 : 𝗜𝘀𝗲𝗸𝗮𝗶 ><-!

          𝗧𝗣𝗣
𝗧𝗮𝗻𝗱𝗮 𝗣𝗮𝗿𝗮𝗳 𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮
            ∮
            
𝗥𝗲𝘀𝗺𝗶 𝗣𝗮𝗱𝗮 𝗧𝗮𝗻𝗴𝗴𝗮𝗹 : 𝟯𝟰 - 𝗦𝗮𝗺𝗽𝗲𝗺𝗯𝗲𝗿 - 𝟯𝟬𝟰𝟱 𝗦𝗮𝗺𝗽𝗮𝗶 𝗦𝗲 𝗨𝗺𝘂𝗿 𝗛𝗶𝗱𝘂𝗽🗿👍`)
break
case '091122': case '200910':
reply(`🎁Selamat Kamu Dapat Hadiah 🤩🎉\n\nHay! @${sender.split("@")[0]}\n\nOwner Mau Ngasih Hadiah Nih Buat Kamu Hehe >\\\\<\nKamu Mendapatkan Voucher 50% Loh🤩\n\nVoucher Ini Bisa Digunakan Untuk : Membeli Sewa Bot,Premium,Buy Script-! `)
let buttonmenu = [{
urlButton: {
displayText: 'Belanja Sekarang! ',
url: 'https://wa.me/6283896480283'
}
}]
break
case 'truth or dare': case 'tod': case 'truthordare':
if (!isGroup) return reply("Gunakan fitur ini Group")
var nyz = []
Object.keys(groupMembers).forEach((i) => { 
nyz.push(groupMembers[i].id)
})
var nyz1 = nyz[Math.floor(Math.random() * nyz.length)]
rimurubotz.sendMessage(from, {text:`𝗬𝗮𝗻𝗴 𝗠𝗲𝗻𝗲𝗿𝗶𝗺𝗮 𝗧𝗮𝗻𝘁𝗮𝗻𝗴𝗮𝗻 / 𝗦𝗼𝗮𝗹 𝗗𝗶 𝗚𝗿𝘂𝗽 𝗜𝗻𝗶 𝗔𝗱𝗮𝗹𝗮𝗵 : @${nyz1.split("@")[0]}\n\n𝗦𝗮𝘆𝗮 𝗣𝗲𝗿𝘀𝗶𝗹𝗮𝗵𝗸𝗮𝗻 @${sender.split("@")[0]} 𝗨𝗻𝘁𝘂𝗸 𝗠𝗲𝗺𝗯𝗲𝗿𝗶 𝗧𝗮𝗻𝘁𝗮𝗻𝗴𝗮𝗻/𝗦𝗼𝗮𝗹`, mentions:[nyz1]},{quoted:nay1})
break
case 'suitjari':
sendMedia("image", ('./media/suit.jpg'), "_Hay Kak 🗿_\n*Pilihlah* Pilihan Tersebut\n\n*Jangan Di Biarkan Saja* Ya Kak ><-!\n\n\n*List* Pilihan :\nTelunjuk\nTelunjuk2\nJempol\nJempol2\nKelingking\nKelingking2\n\n*_Rules :_*\nIngat Ya Kak-!\nJempol = Gajah\nKelingking : Semut\nTelunjuk : manusia\n\n*_🚩Jangan Sampai Kalah Ya Sama Bot Hahaha :v_*")
break
case 'listmenu': case 'help':
rimurubotz.sendMessage(from, {
text: "\n" + help(prefix, reply, cekUser, namabot, sender) + cr,
buttonText: "Bergabung ke grup",
mentions: [sender],
sections: [{ rows: [
{title: "𝗕𝗲𝗿𝗴𝗮𝗯𝘂𝗻𝗴 𝗸𝗲 𝗴𝗿𝘂𝗽                                                 " + hooh, rowId: prefix + "join"},
{title: "𝗦𝗲𝘄𝗮 𝗕𝗼𝘁", rowId: prefix + "sewa"},
{title: "𝗠𝗮𝘀𝘁𝗮𝗵", rowId: prefix + "senpai"},
{title: "𝗦𝗼𝘂𝗿𝗰𝗲 𝗖𝗼𝗱𝗲", rowId: prefix + "script"},
{title: "𝗦𝗶𝗺𝗽", rowId: prefix + "simp"},
{title: "𝗦𝗵𝗲𝗿𝗸", rowId: prefix + "sherk"}
]}]},{quoted:nay1})
var nyz = await fetchJson("https://md-devs.xyz/versi")
if (packagejson.description !== nyz.versi){rimurubotz.sendMessage("0@s.whatsapp.net", {text: `𝗣𝗶𝗽 𝗣𝗶𝗽,𝗔𝗱𝗮 𝗜𝗻𝗳𝗼 𝗙𝗼𝗿 𝗬𝗼𝘂\n\nᴋᴀᴍᴜ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ᴠᴇʀsɪ ${packagejson.description}, ᴅᴀɴ sᴇᴋᴀʀᴀɴɢ ᴛᴇʟᴀʜ ᴛᴇʀsᴇᴅɪᴀ ᴠᴇʀsɪ ᴛᴇʀʙᴀʀᴜ ᴠ${nyz.versi}, ᴀʏᴏ ᴄᴏʙᴀ ᴠᴇʀsɪ ʏᴀɴɢ sᴜᴅᴀʜ ᴛᴇʀᴜᴘᴅᴀᴛᴇ, ʟɪɴᴋ ${nyz.link}`},{quoted:nay1})}
break
case 'owner': case 'own': case 'mastah': 
if (isOwner) { var cekOwner = true }
if (!isOwner) { var cekOwner = false }
sendMedia("vn","./media/gamodals.mp3")
rimurubotz.sendMessage(from, {
text: `𝗛𝗮𝗹𝗼 @${sender.split("@")[0]}👋
𝗖𝗲𝗸 𝗗𝗶 𝗕𝗮𝘄𝗮𝗵 𝗜𝗻𝗶 𝗨𝗻𝘁𝘂𝗸 𝗠𝗲𝗹𝗶𝗵𝗮𝘁 𝗡𝗼𝗺𝗼𝗿 𝗢𝘄𝗻𝗲𝗿𝗸𝘂🔍`,
title: "My Owner🥵",
mentions:[sender],
buttonText: " 𝗦𝗲𝗻𝗽𝗮𝗶 🥵",
sections:  [{title: "Cintai Usus Mu,Minum Susu Tiap Subuh🗿",
rows: [
{title: "𝗡𝘂𝗺𝗯𝗲𝗿 𝗢𝘄𝗻𝗲𝗿", rowId: prefix + "senpai"},

]}]
})
break
case 'grupmenu':
rimurubotz.sendMessage(from, {
text: `Hai Kak @${sender.split("@")[0]}\n\n${grupmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fakereply, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./media/anjaymabar.jpg'),
"mediaUrl": 'https://chat.whatsapp.com/IroGk5yfonZCPLOwV7NTwD',
"sourceUrl": 'https://chat.whatsapp.com/IroGk5yfonZCPLOwV7NTwD'
}
}
})
break
case 'sewa':
reply("🀄︎ ᴊᴀsᴀ ʀᴇɴᴛᴀʟ ʙᴏᴛ ᴀᴛᴀᴜ ᴅɪ ᴋᴇɴᴀʟ sᴇʙᴀɢᴀɪ sᴇᴡᴀ ʙᴏᴛ\n\nᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ɪɴɪ ʙᴏᴛ ʙɪsᴀ ᴅɪ ᴍᴀsᴜᴋᴋɪɴ ᴋᴇ ᴛᴀɴᴘᴀ ʙᴀᴛᴀs ɢʀᴜᴘ!! ʜᴀɴʏᴀ ʙᴇʀᴍᴏᴅᴀʟ  𝟸𝟶-𝟸𝟻ᴋ ᴅᴏᴀɴɢ-!\n\n\nʟɪsᴛ sᴇᴡᴀ :\nᯓ 𝟸𝟶ᴋ ᴘᴇʀᴍᴀɴᴇɴ ᴛᴇᴛᴀᴘɪ ᴛɪᴅᴀᴋ ᴍᴇɴᴊᴀᴅɪ ᴜsᴇʀ ᴠɪᴘ \nᯓ 𝟸𝟻ᴋ ᴘᴇʀᴍᴀɴᴇɴ + ᴠɪᴘ ᴜsᴇʀ + ʙɪsᴀ ᴛᴀᴍʙᴀʜ ʟɪsᴛ ᴅɪ ʙᴏᴛ ɪɴɪ-!\n\n\nᴋᴀᴍᴜ ᴊᴜɢᴀ ʙɪsᴀ ʟᴏʜ ᴍᴇɴᴊᴀᴅɪ ᴍᴇᴍʙᴇʀ ᴠɪᴘ ᴍɪɴɢɢᴜᴀɴ ᴀᴛᴀᴜᴘᴜɴ ʙᴜʟᴀɴᴀɴ\n•ᴘᴀᴋᴇᴛ ᴍɪɴɢɢᴜᴀɴ\nᯓ 𝟼ᴋ ⚌ 𝟷 ᴍɪɴɢɢᴜᴀɴ\nᯓ 𝟷𝟶ᴋ ⚌ 𝟹 ᴍɪɴɢɢᴜᴀɴ\n\n•ᴘᴀᴋᴇᴛ ʙᴜʟᴀɴᴀɴ\nᯓ 𝟷𝟸ᴋ ⚌ 𝟷 ʙᴜʟᴀɴᴀɴ\nᯓ 𝟷𝟻ᴋ ⚌ 𝟹 ʙᴜʟᴀɴᴀɴ\n\nᴀɴᴅ ᴀᴅᴀ ᴊᴜɢᴀ ᴍᴇᴍʙᴇʀ ᴠɪᴘ ᴘᴇʀᴍᴀɴᴇɴ ᴅᴇɴɢᴀɴ ʜᴀʀɢᴀ 𝟸𝟶ᴋ sᴀᴊᴀ!\n\n\nMinat Chat Owner ><") 
break
case 'delete': case 'del': case 'hapus':
if (!m.quoted) return
      rimurubotz.sendMessage(m.chat, {
         delete: {
            remoteJid: m.chat,
            fromMe: isBotAdmin ? false : true,
            id: m.quoted.id,
            participant: m.quoted.sender
         }
      }).then(() => rimurubotz.reply(m.chat, 'Pesan gajelas berhasil dihapus 🚫', m))
break
case 'git': case 'gitclone':
if (!args[0]) return reply(`Mana link nya kodcak😂\nContohnya begini nih :\n${prefix}${command} https://github.com/PrakosoXfc/RimuruRecode🥵`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    rimurubotz.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
case 'join':
reply("https://chat.whatsapp.com/IroGk5yfonZCPLOwV7NTwD")
sendMedia("vcard","𝗝𝗼𝗶𝗻 𝗡𝗴𝗮𝗯,𝗡𝘁𝗮𝗿 𝗗𝗮𝗽𝗲𝘁 𝗗𝗲𝗲𝗺 🗿", owner)
break
case 'gift':
reply("*GIFT SKIN/CHARISMA*\n\n269 💎Nomal  35.000\n599 💎Elite 75.000\n799 💎Spesial  97.000\n899 💎Epic 110.000\n79 💎 Emote 12.500\n109 💎Emote 18.000\n199 💎 Create Squad 31.000\n239 💎 Change Name 36.500\n299 💎 Change Name Squad 46.000\n599 💎 All Hero 91.000\n1000 💎 Change Flag 155.000\n\nPERLU DIPERHATIKAN!\n1. Wajib berteman dengan akun admin\n2. Masukkan nama skin / item yg ingin dibeli, contoh: Skin harith lightborn, bila perlu silahkan kirimkan screenshot skin ke cs kami\n3. Kami akan mengirimkan id admin via chat\n4. Jika ganti nickname setelah masuk antrian harap konfirmasi\n5. Setelah berteman selama 7 hari, kami baru bisa mengirimkan skin sesuai dengan syarat dan ketentuan moonton yg berlaku.")
break
case 'pending':
reply(`🚩𝗛𝘆 𝗕𝗿𝗼! 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗦𝗲𝗱𝗮𝗻𝗴 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗡𝗶𝗵...𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿 𝗬𝗮 ><

⋘ 𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙
⋘ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡... ⋙
⋘ ᴛʀʏ ʟᴀᴛᴇʀ... ⋙


↷✦; ᴊ ɪ ᴋ ᴀ   s ᴜ ᴅ ᴀ ʜ   @${sender.split("@")[0]}   ᴀ ᴋ ᴀ ɴ   ᴍ ᴇ ɴ ɢ ɪ ʀ ɪ ᴍ   ᴘ ᴇ s ᴀ ɴ   ᴅ ᴏ ɴ ᴇ ❞


Kamu Tinggal Sabar Aja Ya Kak ⍢⃝  Nanti Owner Balas Kok-!`)
break
case 'done':
reply(`🚩𝗡𝗶𝗰𝗲! 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗦𝗲𝗹𝗲𝘀𝗮𝗶 >\\<-!
𝗧𝗲𝗿𝗶𝗺𝗮 𝗞𝗮𝘀𝗶 𝗔𝘁𝗮𝘀 𝗧𝗲𝗹𝗮𝗵 𝗠𝗲𝗺𝗯𝗲𝗹𝗶 𝗣𝗿𝗼𝗱𝘂𝗸 @${sender.split("@")[0]} ><-!

𝗝𝗮𝗻𝗴𝗮𝗻 𝗟𝘂𝗽𝗮 𝗕𝗲𝗹𝗮𝗻𝗷𝗮 𝗗𝗶 𝗦𝗶𝗻𝗶 𝗟𝗮𝗴𝗶 𝗬𝗮-! 𝗚𝗶𝗺𝗮𝗻𝗮? 𝗦𝘁𝗼𝗿𝗲 𝗜𝗻𝗶 𝗔𝗺𝗮𝗻𝗮𝗵 𝗕𝘂𝗸𝗮𝗻`)
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await rimurubotz.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            reply(`Berhasil delete session room tictactoe !`)
            }
break
case 'pay':
sendMedia("image", ('./media/payment.jpg'), "*PAYMENT*\n*QRIS?0,5%*\n*BRI* :090601057954537\nWulan Aditya\n\n*DANA* : 085692769676\nWulan Aditya lestari\n\n*BCA*:  6755525093\nWulan Aditya lestari \n\n*OVO*: 085692769676\nAkbar Aditya laksana\n\n*SHOPY*: 081380064319\nAkbar Aditya laksana \n\n*GO-PAY*: 081290410599\nAkbar Aditya laksana")
break
case 'xx':
reply("Jangan Lupa Paket Lengkap Ya Om, Ntr Dpt Deem Epep Geratis🗿")
sendMedia("sticker","./media/sticker2.webp")
break
case 'quotes':
fs.writeFileSync('./sadboy/sadboy.json', JSON.stringify(antitoxic))
sendMedia("vn","./media/nayla1.webp")
break
case 'setppbot': {
if (!isCreator) throw mess.owner
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await hisoka.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await hisoka.query({
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
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var memeg = await hisoka.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
break
case 'setppgroups': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await hisoka.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await hisoka.query({
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
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var data = await hisoka.updateProfilePicture(m.chat, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
break
case 'buy':
sendMedia("vcard", "ʙᴜʏ ᴀᴘᴋ ᴋᴇɴᴏɴ,ʟᴏɢᴏ,sᴜɴᴛɪᴋ ᴅɪsɴɪ", epep) 
sendMedia("image","./media/list.jpg")
sendMedia("image","./media/list2.jpg")
sendMedia("image","./media/list3.jpg")
break
case 'open':
sendMedia("vcard", "𝗦𝗲𝗹𝗹𝗲𝗿 𝗔𝗺𝗮𝗻𝗮𝗵 𝗡𝗴𝗮𝗯🤩🙏", open)
break
case 'xxx':
reply("Nyari Bokep Ya Om 🗿,Tobat Bro......")
sendMedia("vcard", "𝗧𝗼𝗯𝗮𝘁 𝗡𝗴𝗮𝗯", owner)
break
case 'tutorbukabacaselengkapnya':
reply("Masa Buka Baca Selengkapnya Ga Bisa Wkwk,Nih Tutornya (Ini Gw Lagi Send Vid)")
sendMedia("video","./media/tutor.mp4", "*_Nih Cara Buka Baca Selengkapnya Ngab🗿,Masa Cara Bukanya Aja Ga Tau-!_*") 
break
case 'topstar':
user.sort((a, b) => (a.star < b.star) ? 1 : -1)
let topstar1 = 0
var top2 = "[ *TOPSTAR* ]\n"
var top3 = []
try{
for (let z = 0; z < 10; z++) {topstar1++
top2 += `[ ${topstar1} ]•[ @${user[z].id.split("@")[0]} ]•[ ${user[z].star} ]\n`
top3.push(user[z].id)
}
rimurubotz.sendMessage(from, {text: top2, mentions:top3},{quoted:nay1})
} catch (err) { reply("LEADERBOARD STAR TIDAK TERSEDIA SEKARANG, HARUS 10 ORANG MENDAFTAR DIBOT!")}
break
case 'tophit':
user.sort((a, b) => (a.hit < b.hit) ? 1 : -1)
let tophit1 = 0
var top2 = "[ *TOPHIT* ]\n"
var top3 = []
try{
for (let z = 0; z < 10; z++) {tophit1++
top2 += `[ ${tophit1} ]•[ @${user[z].id.split("@")[0]} ]•[ ${user[z].hit} ]\n`
top3.push(user[z].id)
}
rimurubotz.sendMessage(from, {text: top2, mentions:top3},{quoted:nay1})
} catch (err) { reply("LEADERBOARD HIT TIDAK TERSEDIA SEKARANG, HARUS 10 ORANG MENDAFTAR DIBOT!")}
break
case 's':
case 'sticker':
case 'stiker':
case 'sgif':
case 'stickergif':
case 'stikergif':
reply("Loanjing........ Sabar Om")
try {
if (isMedia || isQuotedImage) { 
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {buffer = Buffer.concat([buffer, chunk])}
fs.writeFileSync('./res_buffer.jpg', buffer)
const image = './res_buffer.jpg'
await ffmpeg(image)
.input(image)
.on('error', function (error) { only("error", rimurubotz, from) })
.on('end', function () {rimurubotz.sendMessage(from, { sticker: {url: './mysticker.webp'}, mimetype: 'image/webp' })})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save('./mysticker.webp')} else if (isMedia || isQuotedVideo) {only("proses", rimurubotz, from)
var stream = await downloadContentFromMessage(nay.message.videoMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {buffer = Buffer.concat([buffer, chunk])}
fs.writeFileSync('./res_buffer.mp4', buffer)
const video = './res_buffer.mp4'
await ffmpeg(video)
.input(video)
.on('error', function (error) {reply("error")
console.log(`${error}`)})
.on('end', function () { rimurubotz.sendMessage(from, { sticker: {url: './mysticker2.webp' }, mimetype: 'image/webp' })})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save('./mysticker2.webp')} else {
reply('_Kirim gambar/video dengan caption !sticker/ reply gambar/video dengan perintah !sticker_ ')
}} catch (e) {only("error", rimurubotz, from)}
break
case 'senpai':
sendMedia("vcard", "𝗢𝘄𝗻𝗲𝗿 𝗚𝘄 𝗚𝗮𝗻𝘁𝗲𝗻𝗴 𝗟𝗼𝗵 >\\\\<", owner)
sendMedia("vn","./media/bang.mp3")
break
case 'donasi': 
sendMedia("image", ('./media/sticker.webp'), "𝗔𝘀𝘀𝗮𝗹𝗮𝗺𝘂'𝗮𝗹𝗮𝗶𝗸𝘂𝗺 𝗞𝗮𝗸,𝗪𝗮𝗵 𝗞𝗮𝗸𝗮𝗸 𝗠𝗮𝘂 𝗗𝗼𝗻𝗮𝘁𝗲 𝗞𝗲𝗽𝗮𝗱𝗮 𝗖𝗿𝗶𝘇𝘇𝘆 𝗕𝗼𝘁 𝗜𝗻𝗶 𝗬𝗮😁? 𝗠𝗮𝘀𝘆𝗮𝗔𝗹𝗹𝗮𝗵 𝗔𝗱𝗮 𝗧𝗲𝗿𝗻𝘆𝗮𝘁𝗮 𝗢𝗿𝗴 𝗦𝗲𝗯𝗮𝗶𝗸 𝗞𝗮𝗺𝘂 :)\n\n𝗨𝗻𝘁𝘂𝗸 𝗡𝗼𝗽𝗲 𝗗𝗮𝗻𝗮 𝗗𝗮𝗻 𝗦𝗽𝗮𝘆 : 𝟬𝟴𝟱𝟵𝟮𝟮𝟰𝟬𝟰𝟯𝟳𝟰\n𝗨𝗻𝘁𝘂𝗸 𝗣𝘂𝗹𝘀𝗮 𝗫𝗟 : 𝟬𝟴𝟱𝟵𝟮𝟮𝟰𝟬𝟰𝟯𝟳𝟰\n\n𝟭 𝗥𝘂𝗽𝗶𝗮𝗵 𝗣𝘂𝗻 𝗕𝗲𝗿𝗵𝗮𝗿𝗴𝗮 𝗕𝗮𝗴𝗶 𝗞𝗮𝗺𝗶 :)𝗦𝗲𝗺𝗼𝗴𝗮 𝗞𝗮𝗸𝗮𝗸 𝗠𝗲𝗻𝗱𝗮𝗽𝗮𝘁𝗸𝗮𝗻 𝗥𝗲𝗷𝗲𝗸𝗶 𝗬𝗮𝗻𝗴 𝗠𝗲𝗹𝗶𝗺𝗽𝗮𝗵 𝗔𝘁𝗮𝘀 𝗧𝗲𝗹𝗮𝗵 𝗕𝗲𝗿𝗱𝗼𝗻𝗮𝘀𝗶 𝗞𝗲𝗽𝗮𝗱𝗮 𝗞𝗮𝗺𝗶 𝗬𝗮 𝗞𝗮𝗸,𝗔𝗺𝗶𝗻..........\n\n𝗝𝗮𝗻𝗴𝗮𝗻 𝗔𝘀𝗮𝗹 𝗣𝗲𝗻𝗰𝗲𝘁 𝗧𝗮𝗽𝗶 𝗚𝗮𝗸 𝗗𝗼𝗻𝗮𝘁𝗲 𝗕𝗿𝗼😔")
break
case 'daftar': case 'login':
if (cekUser("id", sender) !== null) return reply("Kamu sudah terdaftar sebelumnya")
user.push({ id: sender, emote: "❤", timers: moment().format('LLL'), hit: 0, star: 1, afk: false, alasan:false, ban: false, premium: false, jawaban: false })
fs.writeFileSync('./lib/data.json', JSON.stringify(user, null, 2))
reply(`𝗨𝗱𝗮𝗵 𝗡𝗴𝗮𝗯,𝗧𝗵𝗮𝗻𝗸𝘀 𝗨𝗱𝗮𝗵 𝗗𝗮𝗳𝘁𝗮𝗿!
𝗬𝗼𝘂 𝗡𝗲𝗲𝗱 𝗔 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝗼𝘁? 𝗕𝘂𝘆 𝗦𝗰𝗿𝗶𝗽𝘁 𝗖𝗮𝗻 𝗢𝘄𝗻𝗲𝗿!

Mau Main Bot? Ketik  .listmenu`)
break

case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await rimurubotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
break
case 'delete':
if (!isGroup){
if (m.messages[0].isQuotedMsg == false) return reply("tag Pesan")
if (m.messages[0].quotedMsg.sender !== botNumber) return reply("𝗵𝗮𝗻𝘆𝗮 𝗯𝗶𝘀𝗮 𝗺𝗲𝗻𝗴𝗵𝗮𝗽𝘂𝘀 𝗽𝗲𝘀𝗮𝗻 𝗯𝗼𝘁, ... 𝘀𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗿𝗲𝗽𝗹𝘆 𝗽𝗲𝘀𝗮𝗻 𝗯𝗼𝘁")
await rimurubotz.sendMessage(from, { delete: m.messages[0].quotedMsg })
only("sukses", rimurubotz, from) } else {
if (m.messages[0].isQuotedMsg == false) return reply("tag Pesan")
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (isBotGroupAdmins){
await rimurubotz.sendMessage(from, { delete: m.messages[0].quotedMsg })
only("sukses", rimurubotz, from)}
if (!isBotGroupAdmins){
if (m.messages[0].quotedMsg.sender !== botNumber) return only("isBotGroupAdmins", rimurubotz, from)
await rimurubotz.sendMessage(from, { delete: m.messages[0].quotedMsg })
only("sukses", rimurubotz, from)}}
break
case 'kick': case 'remove':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
if (Tag() == "") return reply("𝘁𝗮𝗴 𝗼𝗿𝗮𝗻𝗴 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗮𝗻𝗱𝗮 𝗸𝗶𝗰𝗸")
rimurubotz.sendMessage(from, {text:`Byeee Byeee @${Tag()[0].split("@")[0]}`, mentions:[`${Tag()[0].split("@")[0]}@s.whatsapp.net`]},{quoted:nay1}) 
await rimurubotz.groupParticipantsUpdate(from, Tag(), "remove").catch(e => {only("error", rimurubotz, from)})
sendMedia("vn","./media/kick.mp3")
break
case 'hidetag': case 'tagall':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
if (!q) return reply("Masukkan text")
var nyz = [sender]
var nyzz = `𝗚𝗮𝘀 𝗕𝗶𝗸𝗶𝗻 𝗥𝘂𝘀𝘂𝗵!\n• *ᴅᴀʀɪ* : @${sender.split("@")[0]}\n• *Time* : ${time}\n• *ᴘᴇsᴀɴ* : ${q}\n\n• *Tag-All(Admin-Member)* :\n`
Object.keys(groupMembers).forEach((i) => { 
nyz.push(groupMembers[i].id)
nyzz += `•> @${groupMembers[i].id.split("@")[0]}\n`
})
if (command == "hidetag"){
rimurubotz.sendMessage(from, {text: `${q}`, mentions:nyz},{quoted:nay1})
} else { rimurubotz.sendMessage(from, {text: nyzz, mentions:nyz},{quoted:nay1}) }
break

case 'kicktime': 
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
if (!q2 && !q3){ if (Tag() == "") return reply("Tag Orang yang mau anda kick")
return rimurubotz.sendMessage(from, {
text: `[ *KICK-TIMERS* ]\nSilahkan Pilih Time`,
buttonText: "OPEN",
sections:  [{title: "TIMERS", rows: [
{title: "𝟷𝟶 ᴅᴇᴛɪᴋ", rowId: prefix + "kicktime " + Tag() + "&" + 10000 + "&10 Detik"},
{title: "𝟸𝟶 ᴅᴇᴛɪᴋ", rowId: prefix + "kicktime " + Tag() + "&" + 20000 + "&20 Detik"},
{title: "𝟹𝟶 ᴅᴇᴛɪᴋ", rowId: prefix + "kicktime " + Tag() + "&" + 30000 + "&30 Detik"},
{title: "𝟷 ᴍᴇɴɪᴛ", rowId: prefix + "kicktime " + Tag() + "&" + 60000 + "&1 Menit"},
{title: "𝟻 ᴍᴇɴɪᴛ", rowId: prefix + "kicktime " + Tag() + "&" + 300000 + "&2 Menit"},
{title: "𝟷𝟶 ᴍᴇɴɪᴛ", rowId: prefix + "kicktime " + Tag() + "&" + 600000 + "&10 Menit"},
{title: "𝟷𝟻 ᴍᴇɴɪᴛ", rowId: prefix + "kicktime " + Tag() + "&" + 900000 + "&15 Menit"},
{title: "𝟹𝟶 ᴍᴇɴɪᴛ", rowId: prefix + "kicktime " + Tag() + "&" + 1800000 + "&30 Menit"},
{title: "𝟷 ᴊᴀᴍ", rowId: prefix + "kicktime " + Tag() + "&" + 3600000 + "&1 Jam"}
]}]
})}
if (q1 && q2 && q3) {
rimurubotz.sendMessage(from, {text:`𝗧𝗶𝗺𝗲𝗿-!\nSukses mengatur jadwal, @${q1.split("@")[0]} akan terKick Dalam ${q3}`, mentions:[`${q1.split("@")[0]}@s.whatsapp.net`]},{quoted:nay1}) 
setTimeout( () => {
rimurubotz.groupParticipantsUpdate(from, [q1], "remove").catch(e => {only("error", rimurubotz, from)})
rimurubotz.sendMessage(from, {text:`𝗧𝗶𝗺𝗲𝗿-!\nWaktu habis, Bye Byee!! @${q1.split("@")[0]}`, mentions:[`${q1.split("@")[0]}@s.whatsapp.net`]},{quoted:nay1}) 
}, q2)
}
break
case 'add': 
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
if (!q) return reply("ᴍᴀsᴜᴋᴋᴀɴ ɴᴏᴍᴇʀ, ᴄᴏɴᴛᴏʜ 62xxxxx")
var nyz = phone('+' + q);
if (nyz.isValid == false) return reply("ɴᴏᴍᴇʀ ʏᴀɴɢ ᴀɴᴅᴀ ᴍᴀsᴜᴋᴋᴀɴ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ʟᴀᴋᴜᴋᴀɴ sᴇᴘᴇʀᴛɪ ᴘᴇᴛᴜɴᴊᴜᴋ ʏᴀɴɢ ᴅɪ ʙᴇʀɪᴋᴀɴ, ᴄᴏɴᴛᴏʜ 62xxxx")
await rimurubotz.groupParticipantsUpdate(from, [nyz.phoneNumber.split("+")[1] + "@s.whatsapp.net"], "add").catch(e => {only("error", rimurubotz, from)})
break
case 'promote':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
if (Tag() == "") return reply("ᴛᴀɢ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴀᴜ ᴀɴᴅᴀ ᴘʀᴏᴍᴏᴛᴇ")
rimurubotz.sendMessage(from, {text:`𝗦𝗘𝗟𝗔𝗠𝗔𝗧 @${Tag()[0].split("@")[0]} ᴀɴᴅᴀ sᴇᴋᴀʀᴀɴɢ ᴀᴅᴀʟᴀʜ ᴀᴅᴍɪɴ🗿,sᴇʟᴀᴍᴀᴛ ᴍᴇɴᴇᴍᴘᴜʜ ʜɪᴅᴜᴘ ʙᴀʀᴜ ᴅɪ ɢʀᴜᴘ ʏᴀɴɢ ᴘᴇɴᴜʜ ᴋᴇ ɢᴀᴊᴇ ᴀɴ ɪɴɪ!`, mentions:[`${Tag()[0].split("@")[0]}@s.whatsapp.net`]},{quoted:nay1}) 
await rimurubotz.groupParticipantsUpdate(from, Tag(), "promote").catch(e => {only("error", rimurubotz, from)})
break
case 'demote':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
if (Tag() == "") return reply("tag Orang yang mau anda demote")
rimurubotz.sendMessage(from, {text:`𝗣𝘂𝗳𝘁𝘁𝘁 @${Tag()[0].split("@")[0]} ʏᴀʜ ᴅɪ ᴜɴᴀᴅᴍɪɴ ᴡᴋᴡᴋ,ᴏʜ ᴋᴀsɪʜᴀɴ-ᴏʜ ᴋᴀsɪʜᴀɴ ᴀᴅᴜʜ ᴋᴀsɪʜᴀɴ!🗿`, mentions:[`${Tag()[0].split("@")[0]}@s.whatsapp.net`]},{quoted:nay1}) 
await rimurubotz.groupParticipantsUpdate(from, Tag(), "demote").catch(e => {only("error", rimurubotz, from)})
break 
case 'setname': case 'setsubject': case 'updatename':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
if (!q) return reply("ᴍᴀsᴜᴋᴋᴀɴ ᴛᴇxᴛ")
if (q.length > 25) return reply("ɴᴀᴍᴀ ᴛᴇʀʟᴀʟᴜ ᴘᴀɴᴊᴀɴɢ")
await rimurubotz.groupUpdateSubject(from, q)
only("sukses", rimurubotz, from)
break
case 'setdesk': case 'setdeks': case 'updatedesk':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
if (!q) return reply("Masukkan Text")
if (q.length > 500) return reply("Nama terlalu panjang")
await rimurubotz.groupUpdateDescription(from, q)
only("sukses", rimurubotz, from)
break 
case 'tutup': case 'close': case 'closegroup':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
await rimurubotz.groupSettingUpdate(from, 'announcement')
only("sukses", rimurubotz, from)
reply(`𝗚𝗿𝘂𝗽 𝗧𝗲𝗹𝗮𝗵 𝗗𝗶 𝗧𝘂𝘁𝘂𝗽,𝗔𝗸𝗵𝗶𝗿𝗻𝘆𝗮 𝗚𝗮 𝗔𝗱𝗮 𝗟𝗴𝗶 𝗔𝗻𝗮𝗸 𝗗𝗮𝗷𝗷𝗮𝗹 𝗜𝘁𝘂 𝗬𝗮𝗻𝗴 𝗥𝗶𝗯𝘂𝘁🗿🖕`)
break
case 'open': case 'buka': case 'opengroup':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
await rimurubotz.groupSettingUpdate(from, 'not_announcement')
only("sukses", rimurubotz, from)
reply(`𝗚𝗿𝘂𝗽 𝗧𝗲𝗹𝗮𝗵 𝗗𝗶 𝗕𝘂𝗸𝗮,𝗝𝗮𝗻𝗴𝗮𝗻 𝗕𝗶𝗸𝗶𝗻 𝗢𝗿𝗮𝗻𝗴 𝗥𝗲𝘀𝗮𝗵 𝗬𝗮 𝗞𝗼𝗱𝗰𝗮𝗸🗿🖕`)
break
case 'unlocked': 
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
await rimurubotz.groupSettingUpdate(from, 'unlocked')
only("sukses", rimurubotz, from)
break
case 'locked': 
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
await rimurubotz.groupSettingUpdate(from, 'locked')
only("sukses", rimurubotz, from)
break
case 'linkgc': case 'linkgrup': case 'linkgrub': case 'linkgroup': case 'getlink':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
var nyz = await rimurubotz.groupInviteCode(from)
reply("𝗡𝗶𝗵 𝗡𝗴𝗮𝗻 𝗟𝗶𝗻𝗸 𝗚𝗿𝗼𝘂𝗽𝗻𝘆𝗮🗿\n\nhttps://chat.whatsapp.com/" + nyz)
break
case 'jodohku':
if (!isGroup) return reply("Gunakan fitur ini Group")
var nyz = []
Object.keys(groupMembers).forEach((i) => { 
nyz.push(groupMembers[i].id)
})
var nyz1 = nyz[Math.floor(Math.random() * nyz.length)]
rimurubotz.sendMessage(from, {text:`Wah @${sender.split("@")[0]} ,Kamu Ternyata Jodohnya @${nyz1.split("@")[0]} >< Cieeee-!!!`, mentions:[nyz1]},{quoted:nay1})
break
break
case 'revoke': case 'risetlink': 
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
await rimurubotz.groupRevokeInvite(from)
only("sukses", rimurubotz, from)
break
case 'welcome':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
if (!q) return rimurubotz.sendMessage(from, {text: "𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗞𝗢𝗗𝗖𝗔𝗞", buttonText: "OPEN", sections: [{title: "Di Pilih-Di Pilih Kak🗿", rows: [{title: "(On)", rowId: prefix + command + " aktif"},{title: "(Off)", rowId: prefix + command + " nonaktif"} ]}]})
if (q == "aktif") {
if (dataOnly("welcome", "cek", from) == from) return reply("Udah Aktip Sebelumnya Kocak!")
only("sukses", rimurubotz, from)
dataOnly("welcome", "add", from)
} else 
if (q == "nonaktif"){
if (dataOnly("welcome", "cek", from) !== from) return reply("Welcome Udah Mati")
only("sukses", rimurubotz, from)
dataOnly("welcome", "remove", from)
} else { rimurubotz.sendMessage(from, {text: "𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗞𝗢𝗗𝗖𝗔𝗞", buttonText: "OPEN", sections: [{title: "Di Pilih-Di Pilih Kak🗿", rows: [{title: "(On)", rowId: prefix + command + " aktif"},{title: "(Off)", rowId: prefix + command + " nonaktif"} ]}]}) } 
break
case 'antilink':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (!isGroupAdmins) return only("isGroupAdmins", rimurubotz, from)
if (!isBotGroupAdmins) return only("isBotGroupAdmins", rimurubotz, from)
if (!q) return rimurubotz.sendMessage(from, {text: "[ *ANTILINK* ]", buttonText: "OPEN", sections: [{title: "PILIH", rows: [{title: "ANTILINK (AKTIF)", rowId: prefix + command + " aktif"},{title: "ANTILINK (NONAKTIF)", rowId: prefix + command + " nonaktif"} ]}]})
if (q == "aktif") {
if (dataOnly("antilink", "cek", from) == from) return reply("antilink pada group ini telah aktif sebelumnya")
only("sukses", rimurubotz, from)
dataOnly("antilink", "add", from)
} else 
if (q == "nonaktif"){
if (dataOnly("antilink", "cek", from) !== from) return reply("antilink pada group ini telah nonaktif sebelumnya")
only("sukses", rimurubotz, from)
dataOnly("antilink", "remove", from)
} else { rimurubotz.sendMessage(from, {text: "[ *ANTILINK* ]", buttonText: "OPEN", sections: [{title: "PILIH", rows: [{title: "ANTILINK (AKTIF)", rowId: prefix + command + " aktif"},{title: "ANTILINK (NONAKTIF)", rowId: prefix + command + " nonaktif"} ]}]}) } 
break
case 'public': case 'self':
if (!isOwner) return only("isOwner", rimurubotz, from)
reply(`𝗛𝗮𝘆 𝗠𝘆 𝗢𝘄𝗻𝗲𝗿 ><-!
𝗦𝗲𝗺𝗼𝗴𝗮 𝗢𝘄𝗻𝗲𝗿 𝗞𝗲𝘀𝗮𝘆𝗮𝗻𝗴𝗮𝗻 𝗞𝘂 𝗜𝗻𝗶 𝗦𝗲𝗵𝗮𝘁 𝗦𝗲𝗹𝗮𝗹𝘂 𝗔𝗺𝗶𝗻....

𝗡𝗮𝗵 𝗕𝘁𝘄 𝗠𝗼𝗱𝗲 ${command} 𝗦𝘂𝗱𝗮𝗵 𝗗𝗶 𝗔𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗞𝗮𝗸,𝗝𝗮𝗱𝗶 𝗦𝗲𝗸𝗮𝗿𝗮𝗻𝗴 𝗕𝗼𝘁𝗻𝘆𝗮 𝗨𝗱𝗮𝗵 𝗧𝗲𝗿${command} :)

𝗨𝗱𝗮𝗵 𝗗𝘂𝗹𝘂 𝗬𝗮 𝗢𝘄𝗻𝗲𝗿,𝗦𝗲𝗲 𝗬𝗼𝘂 👋👋👋`)
break
case 'setstatus': case 'updatestatus':
if (!isOwner) return only("isOwner", rimurubotz, from)
if (!q) return reply("Masukkan text")
if (q.length > 130) return reply("text terlalu panjang")
await rimurubotz.updateProfileStatus(q)
only("sukses", rimurubotz, from)
reply("Udah Bang🗿🤙")
break
case 'setnamabot': case 'setnamebot': 
if (!isOwner) return only("isOwner", rimurubotz, from)
if (!q) return reply("Masukkan text")
if (q.length > 24) return reply("text terlalu panjang")
await rimurubotz.updateProfileName(q)
only("sukses", rimurubotz, from)
reply("Udah Bang🗿🤙")
break
case 'getpp': 
if (!isGroup) return only("isGroup", rimurubotz, from)
if (Tag() == "") return reply("tag Orang")
if (!isOwner) return only("isOwner", rimurubotz, from)
try{ var nyz = await rimurubotz.profilePictureUrl(Tag()[0], 'image') } catch (e) { var nyz = "http://assets.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png" }
rimurubotz.sendMessage(from, {image:{url:nyz}, caption:"xxx", mentions:[sender]},{quoted:nay1})
break
case 'block': case 'ban': case 'banned':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (Tag() == "") return reply("tag Orang")
if (!isOwner) return only("isOwner", rimurubotz, from)
await rimurubotz.updateBlockStatus(Tag()[0], "block")
setUser("±ban", `${Tag()[0]}`, true)
only("sukses", rimurubotz, from)
reply("Udah Bang🗿🤙")
break 
case 'unblock': case 'unban': case 'unbanned':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (Tag() == "") return reply("tag Orang")
if (!isOwner) return only("isOwner", rimurubotz, from)
await rimurubotz.updateBlockStatus(Tag()[0], "unblock")
setUser("±ban", `${Tag()[0]}`, false)
only("sukses", rimurubotz, from)
reply("Udah Bang🗿🤙")
break  
case 'creategroup':
if (!q) return reply("Masukkan Nama Gc,Contoh : .creategroup MegaLont*e\n\nIni Fitur Khusus Owner,Walau Udah Lu Ketik Create Ga Bakal Jadi Tu Gc Soalnya Khusus Owner🗿🤙")
const group = await rimurubotz.groupCreate(q, [owner + "@s.whatsapp.net"])
only("sukses", rimurubotz, from)
rimurubotz.sendMessage(group.id, { text: '*Udah Owner,Jangan Banyak Bcd Lu Ntr Gw Ewe*' }) // say hello to everyone on the group
break
case 'plusstar':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (Tag() == "") return reply("tag Orang")
if (!isOwner) return only("isOwner", rimurubotz, from)
only("sukses", rimurubotz, from)
setUser("+star", `${Tag()[0]}`, 1)
break 
case 'minusstar':
if (!isGroup) return only("isGroup", rimurubotz, from)
if (Tag() == "") return reply("tag Orang")
if (!isOwner) return only("isOwner", rimurubotz, from)
only("sukses", rimurubotz, from)
setUser("-star", `${Tag()[0]}`, 1)
break
case 'addprem':
if (Tag() == "") return reply("tag Orang")
if (!isOwner) return only("isOwner", rimurubotz, from)
setUser("±premium", `${Tag()[0]}`, true)
only("sukses", rimurubotz, from)
break
case 'dellprem':
if (Tag() == "") return reply("tag Orang")
if (!isOwner) return only("isOwner", rimurubotz, from)
setUser("±premium", `${Tag()[0]}`, false)
only("sukses", rimurubotz, from)
break
case 'toimg':
if (isMedia || isQuotedSticker) { 
download("sticker", "toimgg").then(x => { sendMedia("image", "./media/toimgg.webp", "SUKSES") })
} else { reply("Reply Sticker")}
break
case 'script': case 'sc':
reply(`𝗖𝗶𝗲𝗲𝗲 𝗖𝗶𝗲𝗲𝗲 𝗠𝗮𝘂 𝗠𝗶𝗻𝘁𝗮 𝗦𝗰 𝗬𝗮? 
𝗣𝘂𝗳𝘁𝘁 𝗕𝗲𝗹𝗶 𝗬𝗮 𝗕𝗮𝗻𝗴

🚩𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗢𝗽𝘀𝗶 𝗣𝗲𝗻𝗴𝗲𝗺𝗯𝗮𝗻𝗴 / 𝗢𝘄𝗻𝗲𝗿
𝗡𝘂𝗺𝗯𝗲𝗿 𝗢𝘄𝗻𝗲𝗿 : *wa.me/6283896480283*
𝗧𝗮𝗴 𝗢𝘄𝗻𝗲𝗿 : *_@${owner.split("@")[0]}_*

🚩𝗛𝗮𝗿𝗴𝗮 𝗦𝗰𝗿𝗶𝗽𝘁 𝗬𝗮𝗻𝗴 𝗗𝗶 𝗝𝘂𝗮𝗹 :
𝟱𝟬𝗸 𝗠𝗲𝗻𝗷𝗮𝗱𝗶 𝟮𝟱𝗸 𝗦𝗮𝗷𝗮-! 𝗗𝗶𝘀𝗸𝗼𝗻 𝟱𝟬% 😍

🚩𝗙𝗶𝘁𝘂𝗿 𝗬𝗮𝗻𝗴 𝗧𝗲𝗿𝘀𝗲𝗱𝗶𝗮😍
-𝗦𝘂𝗶𝘁 𝗝𝗮𝗿𝗶 (𝗔𝗱𝗮 𝗜𝗺𝗮𝗴𝗲𝗻𝘆𝗮) + 𝗕𝘂𝗮𝘁𝗮𝗻 𝗢𝘄𝗻𝗲𝗿 𝗔𝘀𝗹𝗶
-𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸
-𝗪𝗲𝗹𝗰𝗼𝗺𝗲
-𝗦𝗶𝘇𝗲 𝗞𝗲𝗰𝗶𝗹
-𝗪𝗲𝗯 𝗣𝗵𝗶𝘀𝗶𝗻𝗴😍
-𝗨𝗱𝗮𝗵 𝗔𝗱𝗮 𝗧𝗲𝗸𝘀 𝗗𝗼𝗻𝗲 𝗗𝗮𝗻 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 (𝗨𝗻𝘁𝘂𝗸 𝗔𝗻𝗮𝗸 𝗝𝗕)
-𝗕𝗶𝘀𝗮 𝗥𝗲𝘀𝗽𝗼𝗻 𝗩𝗰𝗮𝗿𝗱😍 𝗔𝘁𝗮𝘂 𝗬𝗴 𝗗𝗶 𝗦𝗲𝗯𝘂𝘁 𝗞𝗼𝗻𝘁𝗮𝗸 𝗥𝗲𝘀𝗽𝗼𝗻 (𝗔𝗱𝗮 𝗧𝗲𝗸𝘀𝗻𝘆𝗮) 
-𝗙𝗶𝘁𝘂𝗿 𝟭𝟲𝟬+

𝗤𝗡𝗔 :
🗿=𝗢𝘄𝗻𝗲𝗿
🚩=𝗕𝘂𝘆𝗲𝗿

🚩𝗕𝗮𝗻𝗴 𝗞𝗼𝗸 𝗦𝗰 𝗠𝗮𝗵𝗮𝗹 𝗦𝗶𝗵? 𝗣𝗮𝗱𝗮𝗵𝗮𝗹 𝗦𝗲 𝗦𝗶𝗺𝗽𝗹𝗲 𝗜𝗻𝗶 𝗟𝗼𝗵
🗿𝗜𝘆𝗮𝗹𝗮𝗵 𝗗𝗶𝘀𝗶𝘁𝘂 𝗔𝗱𝗮 𝗙𝗶𝘁𝘂𝗿 𝗬𝗮𝗻𝗴 𝗚𝘄 𝗮𝗱𝗱 𝗖𝗼𝗻𝘁𝗼𝗵𝗻𝘆𝗮 𝗦𝘂𝗶𝘁 𝗝𝗮𝗿𝗶,𝗖𝗲𝗸 𝗗𝗼𝗻𝗲,𝗗𝗮𝗻 𝗣𝗿𝗼𝘀𝗲𝘀
🚩𝗔𝗺𝗮𝗻𝗮𝗵 𝗚𝗮 𝗡𝗶𝗵,𝗙𝗶𝘁𝘂𝗿𝗻𝘆𝗮 𝗨𝗱𝗮𝗵 𝗢𝗸𝗲👌
🗿𝗜𝗻𝘀𝗵𝗮 𝗔𝗹𝗹𝗮𝗵 𝗔𝗺𝗮𝗻𝗮𝗵 𝗕𝗼𝘀-!
🚩𝗔𝗱𝗮 𝗠𝗶𝗻 𝗡𝘆𝗮 𝗚𝗮 𝗦𝗰 𝗜𝗻𝗶
🗿𝗔𝗱𝗮 𝗕𝗮𝗻𝗵,𝗬𝗮𝗶𝘁𝘂 𝗚𝗮 𝗕𝗶𝘀𝗮 𝗥𝘂𝗻 𝗗𝗶 𝗣𝗮𝗻𝗲𝗹😁
🗿𝗧𝗮𝗽𝗶 𝗨𝗻𝘁𝘂𝗸 𝗣𝗮𝗸𝗲 𝗧𝗲𝗿𝗺𝘂𝘅 𝗨𝗱𝗮𝗵 𝗙𝗮𝘀𝘁 𝗣𝗮𝗿𝗮𝗵😍

𝘚𝘪𝘮𝘱𝘭𝘦 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘉𝘰𝘵 𝘉𝘺 𝘗𝘳𝘢𝘬𝘰𝘴𝘰𝘟𝘧𝘤`)
sendMedia("vn","./media/kamunanya.m4a")
break
case 'menu': 
reply("Pake .listmenu,Bukan .menu . Kok Kamu Ga Ngerti Sih! Udah Ha Stop Ya! Kita Putus💔😭")
break
case 'mediafire1': 
if (cekUser("premium", sender) == false) return reply("Maaf Fitur ini khusus member VIP. Ingin mendapatkan member VIP? Silahkan hubungi owner")
reply("link web1: https://34jg589786.mediafire11.xyz/?id=127b6316\nlink setting1: https://104387.mediafire223.xyz/863bbc4543c66c4d49896c2732036778.php")
break
case 'mediafire2': 
if (cekUser("premium", sender) == false) return reply("Maaf Fitur ini khusus member VIP. Ingin mendapatkan member VIP? Silahkan hubungi owner")
reply("link web2: https://e08a4deee3.mediafire11.xyz/?id=3cb0e015\nlink setting2: https://935972.mediafire223.xyz/b7094b85ba07701f9d3bfdafa2e180de.php")
break
case 'simontok': 
if (cekUser("premium", sender) == false) return reply("Maaf Fitur ini khusus member VIP. Ingin mendapatkan member VIP? Silahkan hubungi owner")
reply("link web3: https://5o0gd1628.ssimontok.xyz/?id=d605cd13\nlink setting3: https://874636.simontok.stream/736ff5f88851401e49a9930ba4248be3.php")
break
case 'confes': case 'menfes': case 'confess': case 'menfess':
if (!q1 && !q2 && !q3) return reply(`> Masukkan\n${prefix + command} Nomer&Nama&Pesan\n\n> Contoh?\n${prefix + command} 62xxx&Asep&Halo`)
var nyz = phone('+' + q1);
if (nyz.isValid == false) return reply("Nomer Yang anda masukkan tidak valid")
rimurubotz.sendMessage(nyz.phoneNumber.split("+")[1] + "@s.whatsapp.net", {text: `❑-𝗣𝗶𝗽 𝗣𝗶𝗽!! 𝗔𝗱𝗮 𝗡𝗼𝘁𝗶𝗳 𝗙𝗼𝗿 𝗬𝗼𝘂-!\n\n❍Hy Ngab, Ada pesan rahasia nihh dari *${q2}*,\n❍•Katanya Sieh *"${q3}"*,\n❍•Dia Tadi Send Pesan Ini Ke Lowh Jam ${time},\n\n🚩 Kalo Lu Mau Cek Siapa Yang Comfess Ini Lo Chat Aja Owner Gw`},{quoted:nay1})
only("sukses", rimurubotz, from)
break
case 'report': case 'bug':
if (!q) return reply("Ada kesalahan/Error Pada fitur? Silahkan masukkan Nama fitur yang bermasalah Kesini\nContoh? #report sticker")
rimurubotz.sendMessage(owner + "@s.whatsapp.net", {text: `[ *NEW-NOTIF* ]\nHalo *${namaowner}*, Ada keluhan untuk kamu, Dari *@${sender.split("@")[0]}*, Katanya *"${q} Tidak bisa digunakan"*, Dia ngirim pesan ini pas jam ${time}`, mentions:[sender]},{quoted:nay1})
reply("Terimakasih telah melaporkan bug/error pada fitur, Jika benar Fitur bermasalah owner akan memperbaiki masalah ini secepatnya, Owner akan mengabaikan jika pesan ini palsu")
break
case 'technology': case 'cuttext': case 'neonlight': case 'thundertext': case 'transformer': case 'sketchtext': case 'lighttext': 
case 'giraffetext':  case 'glasstext': case 'signtext': case 'juicetext': case 'typography': case 'potterytext': case 'comictext': case 'ruststyle': 
if (!q) return reply("Masukkan text")
if (command == "technology"){ var nyz1 = "https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html" } else if (command == "cuttext"){ var nyz1 = "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html" } else if (command == "neonlight"){ var nyz1 = "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html" } else if (command == "thundertext"){ var nyz1 = "https://textpro.me/online-thunder-text-effect-generator-1031.html" } else if (command == "transformer"){ var nyz1 = "https://textpro.me/create-a-transformer-text-effect-online-1035.html" } else if (command == "sketchtext"){ var nyz1 = "https://textpro.me/create-a-sketch-text-effect-online-1044.html" } else if (command == "lighttext"){ var nyz1 = "https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html" } else if (command == "giraffetext"){ var nyz1 = "https://textpro.me/create-3d-giraffe-text-effect-online-1069.html" } else if (command == "glasstext"){ var nyz1 = "https://textpro.me/create-3d-style-glass-text-effect-online-1072.html" } else if (command == "signtext"){ var nyz1 = "https://textpro.me/3d-business-sign-text-effect-1078.html" } else if (command == "juicetext"){ var nyz1 = "https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html" } else if (command == "typography"){ var nyz1 = "https://textpro.me/create-artistic-typography-online-1086.html" } else if (command == "potterytext"){ var nyz1 = "https://textpro.me/create-3d-pottery-text-effect-online-1088.html" } else if (command == "comictext"){ var nyz1 = "https://textpro.me/create-3d-comic-text-effects-online-1091.html" } else if (command == "ruststyle"){ var nyz1 = "https://textpro.me/create-a-3d-rust-style-text-effect-online-1093.html" }
only("proses", rimurubotz, from)
var nyz = await textPro1(nyz1, q).catch(e => { only("error", rimurubotz, from) })
sendMedia("image", nyz.result.url_file, `[ *TEXTPRO* ]\n• *Title* : ${command}\n• *Text1* : ${q}\n• *Status* : true`).catch(e => { only("error", rimurubotz, from) })
break
case 'steeltext': case 'metalgold': case 'metalgalaxy': case 'rosegold': case 'metalonline': case 'logoonline': case 'stonetext': 
case 'styletiktok': case 'vintage': case 'graffititext': case 'texteffect': case 'layeredtext': case 'screentext': case 'summertext':
if (!q1 && !q2) return reply("Masukkan text1&text2")
if (command == "steeltext"){ var nyz1 = "https://textpro.me/3d-steel-text-effect-877.html" } else if (command == "metalgold"){ var nyz1 = "https://textpro.me/text-logo-3d-metal-gold-944.html" } else  if (command == "metalgalaxy"){ var nyz1 = "https://textpro.me/text-logo-3d-metal-galaxy-943.html" } else  if (command == "rosegold"){ var nyz1 = "https://textpro.me/text-logo-3d-metal-rose-gold-945.html" } else if (command == "metalonline"){ var nyz1 = "https://textpro.me/create-text-logo-3d-metal-online-957.html" } else if (command == "logoonline"){ var nyz1 = "https://textpro.me/pornhub-style-logo-online-generator-free-977.html" } else if (command == "stonetext"){ var nyz1 = "https://textpro.me/create-a-stone-text-effect-online-982.html" } else if (command == "styletiktok"){ var nyz1 = "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html" } else if (command == "vintage"){ var nyz1 = "https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html" } else if (command == "graffititext"){ var nyz1 = "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html" } else if (command == "texteffect"){ var nyz1 = "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html" } else if (command == "layeredtext"){ var nyz1 = "https://textpro.me/create-layered-text-effects-online-free-1032.html" } else if (command == "screentext"){ var nyz1 = "https://textpro.me/color-led-display-screen-text-effect-1059.html" } else if (command == "summertext"){ var nyz1 = "https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html" } 
only("proses", rimurubotz, from) 
var nyz = await textPro2(nyz1, q1, q2).catch(e => { only("error", rimurubotz, from) })
sendMedia("image", nyz.result.url_file, `[ *TEXTPRO* ]\n• *Title* : ${command}\n• *Text1* : ${q1}\n• *Text2* : ${q2}\n• *Status* : true`).catch(e => { only("error", rimurubotz, from) })
break

case 'baperin1': case 'baperin2': case 'baperin3': case 'baperin4': case 'baperin5': case 'baperin6': case 'baperin7': case 'baperin8': case 'baperin9':  case 'baperin10': 
var nyz = body.slice(8).trim().split(/ +/).shift().toLowerCase()
if (Tag() == "") { var x1 = sender.split("@")[0] } else if (isGroup && Tag() !== "") { var x1 = Tag()[0].split("@")[0] }
if (nyz == 1) { var x = `Jika saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekadar membuat @${x1} tertawa. Aku rela` }
if (nyz == 2) { var x = `Jangankan memilikimu, mendengar @${x1} kentut aja aku sudah bahagia` }
if (nyz == 3) { var x = `Ada 3 hal yang paling aku sukai di dunia ini, yaitu matahari, bulan dan @${x1}. Matahari untuk siang hari, bulan untuk malam hari, dan @${x1} untuk selamanya di hatiku` }
if (nyz == 4) { var x = `@${x1} itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya` }
if (nyz == 5) { var x = `Kalau @${x1} adalah bumi, maka aku adalah atmosfernya. Dengan begitu setiap saat bisa melindungimu dari sakitnya serangan meteor dan komet` }
if (nyz == 6) { var x = `@${x1} memang seperti lempeng bumi, bergeser sedikit saja sudah mengguncang hatiku` }
if (nyz == 7) { var x = `Kata dimulai dengan ABC, angka dimulai dengan 123. Lagu dimulai dengan do re mi. Cinta dimulai dengan aku dan @${x1}` }
if (nyz == 8) { var x = `Ada 12 bulan dalam setahun, 30 hari dalam sebulan, 7 hari dalam seminggu, 60 detik dalam satu jam. Tapi hanya ada @${x1} seorang sepanjang hidupku` }
if (nyz == 9) { var x = `Sejak mengenal @${x1} bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu @${x1}` }
if (nyz == 10) { var x = `Napas aku kok sesek banget ya? Oh iya Karena separuh napasku ada di @${x1}` }
sendMedia("vn", "./media/baperin.mp3")
if (Tag() == "") return reply(x)
rimurubotz.sendMessage(from, {text:x, mentions:Tag()},{quoted:nay1})
break

case 'wangy': case 'sherk': case 'simp': case 'nenen': 
if (Tag() == "") return reply("tag Orang")
if (command == "wangy"){ var nyz = await api.stress.wangy("@" + Tag()[0].split("@")[0]) }
if (command == "nenen"){ var nyz = await api.stress.nenen("@" + Tag()[0].split("@")[0]) }
if (command == "simp"){ var nyz = await api.stress.simp("@" + Tag()[0].split("@")[0]) }
if (command == "sherk"){ var nyz = await api.stress.sherk("@" + Tag()[0].split("@")[0]) }
rimurubotz.sendMessage(from, {text:nyz, mentions:Tag()},{quoted:nay1})
break
case 'playmp3': case 'playaudio': case 'playmp4': case 'playvideo': case 'ytvideo': case 'ytmp4': case 'ytmp3': case 'ytaudio': case 'tiktokaudio': case 'tiktokmp3': case 'tiktokvideo': case 'tiktokmp4':
reply("[ *ERR* ] Fitur Ini di nonaktifkan")
break

case 'addfoto': case 'addimg': case 'addimage':
if (isMedia || isQuotedImage) { 
if (!q) return reply(`Masukkan Query Nama image, Contoh ${prefix + command} megawati`)
if (args.length !== 1) return reply("Masukkan Query nama image cukup 1 kata, Contoh *Hehehe*")
if (cekMedia("image", q) == q) return reply("Nama Image tersebut sudah ada sebelumnya, Silahkan Masukkan nama lain")
download("image", q)
addMedia("image", q)
reply(`[ *IMAGE-SAVE* ]\nSukses, Image("${q}.jpg") Berhasil terSave di database bot ini, Silahkan cek Image kamu di #listimage`)
} else reply(`Kirim image Dengan caption ${prefix + command}`)
break
case 'getimg': case 'getimage': case 'getfoto':
if (!q) return reply(`Masukkan Query Nama image, List? Gunakan command #listimage`)
if (cekMedia("image", q) !== q) return reply("Nama Image tersebut tidak terdaftar di database bot, Silahkan cek kembali di #listimage")
sendMedia("image",`./media/${q}.jpg`)
break
case 'listimg': case 'listimage': case 'listfoto':
if (ImageMedia.length == 0) return reply("Tidak ada apa apa disini, Silahkan add image terlebih dahulu, Gunakan command #addimage")
rimurubotz.sendMessage(from, {text: `[ *LIST-IMAGE* ]\n• *Total* : ${ImageMedia.length}`, buttonText: "OPEN", sections:  [{title: "ALL-LIST",
rows: listMedia("image")}]
})
break
case 'deleteimg': case 'dellimg': case 'deleteimage': case 'dellimage': case 'deletefoto': case 'dellfoto': 
if (!isOwner) return only("isOwner", rimurubotz, from)
if (!q) return reply("Masukkan nama image yang ingin dihapus")
if (cekMedia("image", q) !== q) return reply("Nama Image tersebut tidak terdaftar di database bot, Silahkan cek kembali di #listimage")
deleteMedia("image", q)
only("sukses", rimurubotz, from)
break

case 'addvideo': case 'addmp4': 
if (isMedia || isQuotedVideo) {  
if (!q) return reply(`Masukkan Query Nama Video, Contoh ${prefix + command} megawati`)
if (args.length !== 1) return reply("Masukkan Query nama video cukup 1 kata, Contoh *Hehehe*")
if (cekMedia("video", q) == q) return reply("Nama video tersebut sudah ada sebelumnya, Silahkan Masukkan nama lain")
download("video", q)
addMedia("video", q)
reply(`[ *VIDEO-SAVE* ]\nSukses, Video("${q}.mp4") Berhasil terSave di database bot ini, Silahkan cek Video kamu di #listvideo`)
} else reply(`Kirim Video Dengan caption ${prefix + command}`)
break
case 'getvideo': case 'getmp4':
if (!q) return reply(`Masukkan Query Nama Video, List? Gunakan command #listvideo`)
if (cekMedia("video", q) !== q) return reply("Nama video tersebut tidak terdaftar di database bot, Silahkan cek kembali di #listvideo")
sendMedia("video",`./media/${q}.mp4`)
break
case 'listvideo': case 'getmp4': 
if (VideoMedia.length == 0) return reply("Tidak ada apa apa disini, Silahkan add video terlebih dahulu, Gunakan command #addvideo")
rimurubotz.sendMessage(from, {text: `[ *LIST-VIDEO* ]\n• *Total* : ${VideoMedia.length}`, buttonText: "OPEN", sections:  [{title: "ALL-LIST",
rows: listMedia("video")}]
})
break
case 'deletevideo': case 'dellvideo': case 'deletemp4': case 'dellmp4':
if (!isOwner) return only("isOwner", rimurubotz, from)
if (!q) return reply("Masukkan nama video yang ingin dihapus")
if (cekMedia("video", q) !== q) return reply("Nama video tersebut tidak terdaftar di database bot, Silahkan cek kembali di #listvideo")
deleteMedia("video", q)
only("sukses", rimurubotz, from)
break


case 'adds': case 'addstiker': case 'addsticker':
if (isMedia || isQuotedSticker) { 
if (!q) return reply(`Masukkan Query Nama sticker, Contoh ${prefix + command} megawati`)
if (args.length !== 1) return reply("Masukkan Query nama sticker cukup 1 kata, Contoh *Hehehe*")
if (cekMedia("sticker", q) == q) return reply("Nama sticker tersebut sudah ada sebelumnya, Silahkan Masukkan nama lain")
download("sticker", q)
addMedia("sticker", q)
reply(`[ *STICKER-SAVE* ]\nSukses, sticker("${q}.webp") Berhasil terSave di database bot ini, Silahkan cek sticker kamu di #liststicker`)
} else reply(`Kirim sticker Dengan caption ${prefix + command}`)
break
case 'gets': case 'getstiker': case 'getsticker':
if (!q) return reply(`Masukkan Query Nama sticker, List? Gunakan command #liststicker`)
if (cekMedia("sticker", q) !== q) return reply("Nama sticker tersebut tidak terdaftar di database bot, Silahkan cek kembali di #liststicker")
sendMedia("sticker",`./media/${q}.webp`)
break
case 'ff':
reply(`*LIST FREE FIRE*\n\n5DM 910\n12DM 1.960\n50DM 6.906\n70DM 9.206\n100DM 13.676\n140DM 18.330\n210DM 27.300\n355DM 44.670\n500DM 65.000\n720DM 88.900\n1000DM 125.000\n1450DM 178.395\n2180DM 266.900`) 
break
case 'genshin':
reply(`*LIST GENSHIN IMPACT*\n\n60 GC 12.370\n300+30GC 59.500\n980+110GC 182.000\n1980+260GC 606.500\n6480+1600GC 1.190.000\n*BLESSING OF THE WELKIN MOON*\n60.000`) 
break
case 'cod':
reply(`*LIST CODM*\n\n31CP 5.000\n62CP 10.000\n127CP 20.000\n278CP 48.500\n581CP 97.500\n1373CP 195.000\n2059CP 293.000\n3564CP 490.000`) 
break
case 'apkprem':
reply(`*LIST APK PREMIUM*\n\nNETFLIX SHARING\n1 PROFIL 2 USER\n30HR RP 22.000\n\nNETFLIX SHARING\n1PROFIL 1 USER\n30HR RP 30.000\n\nNETFLIX PRIVATE\n1PROFIL 1USER\n30HR RP 35.000\n\nNETFLIX PRIVATE\n1 AKUN 5 USER\n30HR RP 115\n2.000\n\nTANPA VPN\nBEBAS NONTON \nBISA DOWNLOAD\nSUPPORT ALL DEVICE\nAKUN SUDAH UHD 4K\nMENDAPATKAN 5 PROFIL\nBISA NONTON 4-5 DEVICE BERSAMAAN\nGARANSI SESUAI NOMINAL HARI YANG DI BELI\nDILARANG MENGOTAK ATIK AKUN KECUALI PROFIL MELANGGAR DENDA DAN GARANSI HANGUS\n\n*YOUTUBE PREMIUM*\n3500/BULAN\n\n*SPOTIFY PREM*\n\n_*FAMILY PLAN*_\n1bulan - Rp 8.500\n2bulan - Rp 15.500\n\n*NOTE* ⤵️\n• FREE REQ ACCOUNT\n• LESS BACKFREE\n• GARANSI 1bulan (25hari) & 2bulan (55hari)\n• tanya dulu sebelum order`) 
break
case 'suntik':
reply(`*LIST SUNTIK MESDOS*\n\nINSTAGRAM \n1000 FOL 10.000\n1000 LIKE POST 3.000\n10000 VIEW 500\n\nTIKTOK\n1000 FOL 25.000\n1000 LIKE 5.000\n10000 SHARE 4.000\n10000 VIEW  1.000\n1000 COMMENT RANDOM 25.000\n\n*PERINGATAN*\nFOLLOWERS BISA DROP BERPA PERSEN JIKA SUDAH ORDER\nADA BONUS JIKA HOKI`) 
break
case 'ml':
reply(`DIAMOND MLBB VIA LOGIN\n100 % LEGAL WITH INVOICE\n\n+5k setiap akun yg berbeda\n\n565 💎 102.000\n1155 💎 197.000\n1765 💎 297.000\n2975 💎 487.000\n6000 💎 952.000\n\nCOA MINGGUAN 🌟 28.000\nCOA BULANAN 🌟 70.000\n\n- BERLAKU KELIPATAN\n- LOGIN VIA MOONTON/FB/TIKTOK\n- PROSES MAX 24 JAM SESUAI ANTRIAN\n- WITH MATCH RANK 1-3 MATCH \n- SELAMA PROSES DILARANG LOGIN`) 
break
case 'promo':
reply(`*PROMO MLBB WEKKEND*\n\n86 💎 18.720\n172 💎 37.430\n257 💎 56.330\n344 💎 73.405\n429 💎 93.706\n514 💎 111.680\n600 💎 130.720\n706 💎 148.980\n\n*PERATURAN HANYA BISA SEHARI SEKALI*`) 
break
case 'dmml':
reply(`*DIAMOND MLBB*\n\n42 💎 10.000\n86 💎 18.920\n140 💎32.890\n172 💎 37.440\n257 💎 56.720\n344 💎 73.840\n429 💎 93.950\n514 💎113.330\n600 💎130.500\n706 💎149.185\n878 💎186.115\n963💎 204.101\n1412💎298.169\n2195 💎 449.241\n3688 💎 745.485\n5532 💎 1.131.525\n9288 💎 1.857.930\n*TWILIGHT PASS* 125.000\n*TOP UP EVENT*\n5💎1510\n112💎27.000\n284💎 66.000`) 
break
case 'dmml1':
reply(`*DIAMOND MLBB VIA ID SLOW*\n\n220 Diamond ( 200 + 20 Bonus )\n48.000\n\n355 Diamond \nRp76.000\n\n440 Diamond ( 400 + 40 Bonus )\nRp96.000\n\n660 Diamond ( 600 + 60 Bonus )\nRp143.500\n\n880 Diamond ( 800 + 80 Bonus )\nRp191.000\n\n2200 Diamond ( 2000 + 200 Bonus )\nRp476.000\n3080 Diamond ( 2800 + 280 Bonus )\nRp666.000\n\n4400 Diamond ( 4000 + 400 Bonus )\nRp926.000\n\n6028 Diamond ( 5480 + 548 Bonus )\nRp1.201.000\n\n*PASTIKAN ID SUDAH BENAR*\n*SILAHKAN CEK ID TERLEBIH DAHULU* *SEBELUM MELANJUTKAN ORDERRAN*\n*UNTUK PROSES DIAMOND SECARA MANUAL 1-5 JAM*`)
break
case 'lists': case 'liststiker': case 'liststicker':
if (StickerMedia.length == 0) return reply("Tidak ada apa apa disini, Silahkan add sticker terlebih dahulu, Gunakan command #addsticker")
rimurubotz.sendMessage(from, {text: `[ *LIST-STICKER* ]\n• *Total* : ${StickerMedia.length}`, buttonText: "OPEN", sections:  [{title: "ALL-LIST",
rows: listMedia("sticker")}]
})
break
case 'deletes': case 'dells': case 'deletestiker': case 'dellstiker': case 'deletesticker': case 'dellsticker': 
if (!isOwner) return only("isOwner", rimurubotz, from)
if (!q) return reply("Masukkan nama sticker yang ingin dihapus")
if (cekMedia("sticker", q) !== q) return reply("Nama sticker tersebut tidak terdaftar di database bot, Silahkan cek kembali di #liststicker")
deleteMedia("sticker", q)
only("sukses", rimurubotz, from)
break


case 'addaudio': case 'addmp3': case 'addvn':
if (isMedia || isQuotedAudio) { 
if (!q) return reply(`Masukkan Query Nama audio, Contoh ${prefix + command} megawati`)
if (args.length !== 1) return reply("Masukkan Query nama audio cukup 1 kata, Contoh *Hehehe*")
if (cekMedia("audio", q) == q) return reply("Nama audio tersebut sudah ada sebelumnya, Silahkan Masukkan nama lain")
download("audio", q)
addMedia("audio", q)
reply(`[ *AUDIO-SAVE* ]\nSukses, audio("${q}.mp3") Berhasil terSave di database bot ini, Silahkan cek audio kamu di #listaudio`)
} else reply(`Kirim audio Dengan caption ${prefix + command}`)
break
case 'addlist': case 'addpesan':
if (isMedia || isQuotedAudio) { 
if (!q) return reply(`Masukkan Query Nama Teks, Contoh ${prefix + command} megawati`)
if (args.length !== 1) return reply("Masukkan Query nama teks cukup 1 kata, Contoh *Bokep*")
if (cekMedia("teks", q) == q) return reply("Nama teks tersebut sudah ada sebelumnya, Silahkan Masukkan nama lain")
download("teks", q)
addMedia("teks", q)
reply(`Teks Ke Save\nSukses, Teks "${q}") Berhasil terSave di database bot ini, Silahkan cek audio kamu di #listpesan`)
} else reply(`Kirim teks Dengan caption ${prefix + command}`)
break
case 'listpesan': case 'listteks':
if (TeksMedia.length == 0) return reply("Tidak Ada Apa-Apa Disini Banh,Tolong Ketik  .addlist")
rimurubotz.sendMessage(from, {text: `ʅιʂƚ ƚҽƙʂ ρҽʂαɳ\n• *Ƚσƚαʅ ƚҽƙʂ/ρҽʂαɳ* : ${TeksMedia.length}`, buttonText: "Click Me><", sections:  [{title: "Kalo Ga Niat Beli Jangan Kont*ol",
rows: listMedia("teks")}]
})
break
case 'getaudio': case 'getmp3': case 'getvn':
if (!q) return reply(`Masukkan Query Nama audio, List? Gunakan command #listaudio`)
if (cekMedia("audio", q) !== q) return reply("Nama audio tersebut tidak terdaftar di database bot, Silahkan cek kembali di #listaudio")
sendMedia("audio",`./media/${q}.mp3`)
break
case 'listaudio': case 'listmp3': case 'listvn': 
if (AudioMedia.length == 0) return reply("Tidak ada apa apa disini, Silahkan add audio terlebih dahulu, Gunakan command #addaudio")
rimurubotz.sendMessage(from, {text: `[ *LIST-AUDIO* ]\n• *Total* : ${AudioMedia.length}`, buttonText: "OPEN", sections:  [{title: "ALL-LIST",
rows: listMedia("audio")}]
})
break
case 'deleteaudio': case 'dellaudio': case 'deletevn': case 'dellvn': case 'deletemp3': case 'dellmp3': 
if (!isOwner) return only("isOwner", rimurubotz, from)
if (!q) return reply("Masukkan nama audio yang ingin dihapus")
if (cekMedia("audio", q) !== q) return reply("Nama audio tersebut tidak terdaftar di database bot, Silahkan cek kembali di #listaudio")
deleteMedia("audio", q)
only("sukses", rimurubotz, from)
break

case 'happymod':
if (!q) return reply("Masukkan nama Apk")
var nyz = await api.search.happymod(q)
reply(await getResult("[ *HAPPYMOD* ]", ["Title","Url"],
[nyz.result[0].title, nyz.result[0].link]))
break
case 'carigrup': case 'carigrub':
if (!q) return reply("Masukkan nama Group")
var nyz = await api.search.carigrup(q) 
reply(await getResult("[ *SEARCH-GRUP* ]", ["Nama","Url"],
[nyz.result[0].nama, nyz.result[0].link]))
break
case 'kusonime':
if (!q) return reply("Masukkan nama anime")
var nyz = await api.search.kusonime(q) 
reply(await getResult("[ *KOSUNIME* ]", 
["Judul","Desk","Genre","Status","Produser","Rate","Type","Link","Total_Eps","Durasi","Tgl_Rilis"],
[nyz.result.judul, nyz.result.desk, nyz.result.genre, nyz.result.status, nyz.result.produser, nyz.result.rate, nyz.result.type, nyz.result.link, nyz.result.total_eps, nyz.result.durasi, nyz.result.tgl_rilis]))
break
case 'cuaca':
if (!q) return reply("Masukkan nama kota")
var nyz = await api.search.cuaca(q) 
reply(await getResult("[ *CUACA* ]",
["Nama","Longitude","Latitude","Suhu","Angin","Kelembaban","Cuaca","Keterangan","Udara"],
[nyz.data.Nama, nyz.data.Longitude, nyz.data.Latitude, nyz.data.Suhu, nyz.data.Angin, nyz.data.Kelembaban, nyz.data.Cuaca, nyz.data.Keterangan, nyz.data.Udara]))
break
case 'artinama':
if (!q) return reply("Masukkan nama")
var nyz = await api.search.artinama(q) 
reply(await getResult("[ *ARTINAMA* ]",
["Result"],
[nyz.result.split("(adsbygoogle = window.adsbygoogle || []).push({})")[1]]))
break
case 'igstalk':
if (!q) return reply("Masukkan nama user instagram")
var nyz = await api.search.igstalk(q) 
console.log(nyz)
reply(await getResult("[ *STALKIG* ]",
["url","fullname","private","verified","bio","follower","following","conneted_fb","videotimeline","timeline","savedmedia","collections"],
[nyz.data.url, nyz.data.fullname, nyz.data.private, nyz.data.verified, nyz.data.bio, nyz.data.follower, nyz.data.following, nyz.data.conneted_fb, nyz.data.videotimeline, nyz.data.timeline, nyz.data.savedmedia, nyz.data.collections ]))
break
case 'wallpaper':
if (!q) return reply("Masukkan query")
only("proses", rimurubotz, from)
var nyz = await api.search.wallpapercave(q) 
sendMedia("image", nyz.result[0], "😀")
break
case 'pinterest':
if (!q) return reply("Masukkan kata")
var nyz = await api.search.pin(q) 
sendMedia("image", nyz[Math.floor(Math.random() * nyz.length)], "😀")
break

case 'imagesketch': case 'shit': case 'burn': case 'blur': case 'greyscale': case 'pixelate': case 'removebg': case 'beautiful': case 'trash': case 'jail': case 'wanted': case 'rip': case 'gay': case 'invert':
if (isMedia || isQuotedImage) { 
only("proses", rimurubotz, from)
sendMedia("image", `https://pecundang.herokuapp.com/api/${command}?url=${await download("imageUrl","makers")}`, "😀")
} else { reply("Tag/Kirim Image dengan caption " + prefix + command)}
break

case 'imagesketchme': case 'shitme': case 'burnme': case 'blurme': case 'greyscaleme': case 'pixelateme': case 'removebgme': case 'beautifulme': case 'trashme': case 'jailme': case 'wantedme': case 'ripme': case 'gayme': case 'invertme':
only("proses", rimurubotz, from)
sendMedia("image", `https://pecundang.herokuapp.com/api/${command.split("me")[0]}?url=${await download("PPUrl", sender)}`, "😀")
break
case 'imagesketchtag': case 'shittag': case 'burntag': case 'blurtag': case 'greyscaletag': case 'pixelatetag': case 'removebgtag': case 'beautifultag': case 'trashtag': case 'jailtag': case 'wantedtag': case 'riptag': case 'gaytag': case 'inverttag':
if (Tag() == "") return reply("tag Orang yang mau anda Jadikan objek")
only("proses", rimurubotz, from)
sendMedia("image", `https://pecundang.herokuapp.com/api/${command.split("tag")[0]}?url=${await download("PPUrl", Tag()[0])}`, "😀")
break


case 'ttpwhite': case 'ttpyellow': case 'ttpblue': case 'ttpred': case 'ttpgreen': case 'ttpblack': case 'ttpbrown':
case 'ttpteal': case 'ttpsilver': case 'ttppurple': case 'ttpgray': case 'ttporange': case 'ttpmaroon': case 'ttpaquamarine': case 'ttpcoral': case 'ttpfuchsia': case 'ttpwheat':
case 'ttplime': case 'ttpcrimson': case 'ttpkhaki': case 'ttpmagenta': case 'ttpplum': case 'ttpolive': case 'ttpcyan':
var nyz = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=${body.slice(4).trim().split(/ +/).shift().toLowerCase()}`
var nyz1 = await imageToBase64(JSON.stringify(nyz).replace(/\"/gi, ''))
fs.writeFileSync('getpp.jpeg', nyz1, 'base64')
await ffmpeg("getpp.jpeg")
.input("getpp.jpeg")
.on('error', function (error) { only("error", rimurubotz, from) })
.on('end', function () {rimurubotz.sendMessage(from, { sticker: {url: './getpp.webp'}, mimetype: 'image/webp' })})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save('./getpp.webp')
break

case 'meme1': case 'smeme1': case 'memegen1':
case 'meme2': case 'smeme2': case 'memegen2':
case 'meme3': case 'smeme3': case 'memegen3':
if (isMedia || isQuotedImage) { 
if (command == 'meme1' || command == 'smeme1' || command == 'memegen1') {
if (!q) return reply("Masukkan Text")
var nyz = `https://pecundang.herokuapp.com/api/memegen1?teks=${q}&img_url=${await download("imageUrl","makers")}`
}
if (command == 'meme2' || command == 'smeme2' || command == 'memegen2') {
if (!q1 && !q2) return reply("Masukkan Text1&text2")
var nyz = `https://pecundang.herokuapp.com/api/memegen2?teks1=${q1}&teks2=${q2}&img_url=${await download("imageUrl","makers")}`
}
if (command == 'meme3' || command == 'smeme3' || command == 'memegen3') {
if (!q) return reply("Masukkan Text")
var nyz = `https://pecundang.herokuapp.com/api/memegen3?teks=${q}&img_url=${await download("imageUrl","makers")}`
}
var nyz1 = await imageToBase64(JSON.stringify(nyz).replace(/\"/gi, ''))
fs.writeFileSync('getpp.jpeg', nyz1, 'base64')
await ffmpeg("getpp.jpeg")
.input("getpp.jpeg")
.on('error', function (error) { only("error", rimurubotz, from) })
.on('end', function () {rimurubotz.sendMessage(from, { sticker: {url: './getpp.webp'}, mimetype: 'image/webp' })})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save('./getpp.webp')
} else reply(`Kirim image Dengan caption ${prefix + command}`)
break
case 'waifu': case 'neko': case 'shinobu': case 'megumin': case 'bully': case 'cuddle': case 'hug': case 'cry': case 'awoo': case 'kiss': case 'lick':
case 'pat': case 'smug': case 'bonk': case 'yeet': case 'smile': case 'blush': case 'wave': case 'highfive': case 'handhold': case 'nom': case 'bite': case 'glomp':
case 'slap': case 'kill': case 'kick': case 'happy': case 'wink': case 'poke': case 'dance': case 'cringe':
fetchJson(`https://api.waifu.pics/sfw/${command}`).then(x => { reply(x.url) })
break
case 'ejek':  
case 'hai':  
case 'jatuhcinta':  
case 'jempol':  
case 'ketawa':  
case 'love':  
case 'nangis':  
case 'sakithati':  
case 'terimakasih': 
if (cekUser("premium", sender) == false) return reply("Maaf Fitur ini khusus member premium. Ingin mendapatkan premium? Silahkan hubungi owner")
if (!isGroup) return only("isGroup", rimurubotz, from)
if (Tag() == "") return reply("tag Orang yang mau anda " + command)
rimurubotz.sendMessage(from, {text:`(😈) Sukses ${command} @${Tag()[0].split("@")[0]}`, mentions:Tag()},{quoted:nay1})
if (command == "ejek"){ var emostick2 = "🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪"
var emostick1 = "https://i.ibb.co/StT6YcL/ejek.webp" } 
if (command == "hai"){ var emostick2 = "👋👋👋👋👋👋👋👋👋👋"
var emostick1 = "https://i.ibb.co/LCr2VV0/hai.webp" } 
if (command == "jatuhcinta"){ var emostick2 = "🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰"
var emostick1 = "https://i.ibb.co/rtVxyWy/jatuhcinta.webp" } 
if (command == "jempol"){ var emostick2 = "👍👍👍👍👍👍👍👍👍👍"
var emostick1 = "https://i.ibb.co/3z2ddjY/jempol.webp" } 
if (command == "ketawa"){ var emostick2 = "🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣"
var emostick1 = "https://i.ibb.co/PWkcommand7y5/ketawa.webp" } 
if (command == "love"){ var emostick2 = "💖💖💖💖💖💖💖💖💖💖"
var emostick1 = "https://i.ibb.co/N18FfYw/love.webp" } 
if (command == "nangis"){ var emostick2 = "😭😭😭😭😭😭😭😭😭😭"
var emostick1 = "https://i.ibb.co/WV4vKHs/nangis.webp" } 
if (command == "sakithati"){ var emostick2 = "💔💔💔💔💔💔💔💔💔💔"
var emostick1 = "https://i.ibb.co/0Yx0mWQ/sakithati.webp" } 
if (command == "terimakasih"){ var emostick2 = "🙏🏼🙏🏼🙏🏼🙏🏼🙏🏼🙏🏼🙏🏼🙏🏼🙏🏼🙏🏼"
var emostick1 = "https://i.ibb.co/b6FGvPW/terimakasih.webp" } 
rimurubotz.sendMessage(Tag()[0], {sticker:{url: emostick1}},{quoted: { key: {fromMe: false, participant: `${botNumber}`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"conversation": "[ *EMOSTICK(SEND)* ]\n" + emostick2}}  })
break 
case 'cantik': case 'ganteng': case 'jelek': case 'burik': case 'ireng': case 'kaya': case 'miskin': case 'babi': case 'monyet': 
case 'bego': case 'beban': case 'pintar': case 'bodoh': case 'pendek': case 'tinggi': case 'kurus': case 'gemuk':  
if (!isGroup) return reply("Gunakan fitur ini Group")
var nyz = []
Object.keys(groupMembers).forEach((i) => { 
nyz.push(groupMembers[i].id)
})
var nyz1 = nyz[Math.floor(Math.random() * nyz.length)]
rimurubotz.sendMessage(from, {text:`Hmm... Yang ter${command} Di group ini mungkin @${nyz1.split("@")[0]}`, mentions:[nyz1]},{quoted:nay1})
break
case 'unicode':
if (!q) return reply("Masukkan Text")
var nyz = await fetchJson(`https://anabotofc.herokuapp.com/api/unicode?apikey=AnaBot&query=${q}`)
var rows = []
Object.keys(nyz.result).forEach((i) => {  
rows.push({title: nyz.result[i].title, rowId: prefix + command + ` ${q}&` + i}) })
if (!q2){ var nyz1 = "Silahkan pilih Salah satu Disini"
rimurubotz.sendMessage(from, {
text: nyz1,
buttonText: "OPEN",
sections: [{rows: rows}]})} 
if (q2){ var nyz1 = nyz.result[q2].uni
reply(nyz1)}
break
case 'audio1': case 'audio2': case 'audio3': case 'audio4': case 'audio5': case 'audio6': case 'audio7': case 'audio8': case 'audio9': case 'audio10': 
case 'audio11': case 'audio12': case 'audio13': case 'audio14': case 'audio15': case 'audio16': case 'audio17': case 'audio18': case 'audio19': case 'audio20':
sendMedia("vn",`https://md-devs.xyz/audio/${command}.m4a`)
break
case 'asahotak': case 'susunkata': case 'tebakkata': case 'tebaktebakan': case 'tebakbendera': case 'tebakkimia': case 'tekateki': case 'siapaaku': case 'tebakkalimat': case 'tebaklirik':
if (!q && cekUser("jawaban", sender) !== false) { return reply("Kamu sedang Bermain game sebelumnya, ingin hapus sesi game? ketik #dellsesi")}
if (q && cekUser("jawaban", sender) == false) return reply("Game Tersebut telah berakhir, Atau game Tersebut adalah milik orang lain, Ayo memulai game sendiri")
if (!q && cekUser("jawaban", sender) == false) { 
var nyz1 = await fetchJson(`https://md-devs.xyz/api/game?text=${command}`)
console.log(nyz1.jawaban)
setUser("±jawaban", sender, nyz1.jawaban)
return rimurubotz.sendMessage(from, {
text: `[ *${command}* ]\n` + nyz1.soal,
buttonText: "OPEN",
sections: [{rows:[
{title: nyz1.list_jawaban.a, rowId: prefix + command + " " + nyz1.list_jawaban.a},
{title: nyz1.list_jawaban.b, rowId: prefix + command + " " + nyz1.list_jawaban.b},
{title: nyz1.list_jawaban.c, rowId: prefix + command + " " + nyz1.list_jawaban.c},
{title: nyz1.list_jawaban.d, rowId: prefix + command + " " + nyz1.list_jawaban.d},
{title: nyz1.list_jawaban.e, rowId: prefix + command + " " + nyz1.list_jawaban.e},
{title: nyz1.list_jawaban.f, rowId: prefix + command + " " + nyz1.list_jawaban.f},
{title: nyz1.list_jawaban.g, rowId: prefix + command + " " + nyz1.list_jawaban.g},
{title: nyz1.list_jawaban.h, rowId: prefix + command + " " + nyz1.list_jawaban.h},
{title: nyz1.list_jawaban.i, rowId: prefix + command + " " + nyz1.list_jawaban.i},
{title: nyz1.list_jawaban.j, rowId: prefix + command + " " + nyz1.list_jawaban.j},
]}]
})
}
if (q && cekUser("jawaban", sender) !== false) {
if (q == cekUser("jawaban", sender)) {
reply(`[ *${command}* ]\nJawaban kamu *BENAR*, Kamu mendapatkan +1 Star, Ingin bermain lagi? Gunakan command ${prefix + command}`)
setUser("±jawaban", sender, false)
return setUser("+star", sender, 1)
}
if (q !== cekUser("jawaban", sender)) {
reply(`[ *${command}* ]\nJawaban kamu *SALAH*, Kamu mendapatkan 0 Star, Ingin bermain lagi? Gunakan command ${prefix + command}`)
return setUser("±jawaban", sender, false)
}
}
break
case 'dellsesi': case 'nyerah':
if (cekUser("jawaban", sender) == false) return reply("Kamu belum memainkan game sebelumnya")
reply("Sukses menghapus keseluruhan database game kamu")
setUser("±jawaban", sender, false)
break
case 'anibacth':
if (!q) return reply("Masukkan nama Anime")
var nyz = await fetchJson(`https://violetics.pw/api/anime/anibatch?apikey=beta&manga=${q}`)
reply(await getResult("[ *ANIBACTH* ]", ["Title","Url","Rate"],
[nyz.result[0].title, nyz.result[0].url, nyz.result[0].rate]))
break
case 'anime-planet':
if (!q) return reply("Masukkan nama Anime")
var nyz = await fetchJson(`https://violetics.pw/api/anime/anime-planet?apikey=beta&manga=${q}`)
reply(await getResult("[ *ANIME-PLANET* ]", ["Title","Url"],
[nyz.result[0].title, nyz.result[0].url]))
break
 case 'fanfox':
if (!q) return reply("Masukkan nama Anime")
var nyz = await fetchJson(`https://violetics.pw/api/anime/fanfox?apikey=beta&manga=${q}`)
reply(await getResult("[ *FANFOX* ]", ["Title","Url","Status","Author","Description"],
[nyz.result[0].title, nyz.result[0].url, nyz.result[0].status, nyz.result[0].author, nyz.result[0].description ]))
break
 case 'gogoanime':
if (!q) return reply("Masukkan nama Anime")
var nyz = await fetchJson(`https://violetics.pw/api/anime/gogoanime?apikey=beta&manga=${q}`)
reply(await getResult("[ *GOGOANIME* ]", ["Name","Url","Released"],
[nyz.result[0].name, nyz.result[0].url, nyz.result[0].released]))
break
case 'kiryu':
if (!q) return reply("Masukkan nama Anime")
var nyz = await fetchJson(`https://violetics.pw/api/anime/kiryu?apikey=beta&manga=${q}`)
reply(await getResult("[ *KIRYU* ]", ["Title","Url","Rate","Chapter"],
[nyz.result[0].title, nyz.result[0].url, nyz.result[0].rate, nyz.result[0].chapter]))
break
case 'kissmanga':
if (!q) return reply("Masukkan nama Anime")
var nyz = await fetchJson(`https://violetics.pw/api/anime/kissmanga?apikey=beta&manga=${q}`)
reply(await getResult("[ *KISSMANGA* ]", ["Title","Url"],
[nyz.result[0].title, nyz.result[0].url]))
break 
case 'klikmanga':
if (!q) return reply("Masukkan nama Anime")
var nyz = await fetchJson(`https://violetics.pw/api/anime/klikmanga?apikey=beta&manga=${q}`)
reply(await getResult("[ *KLIKMANGA* ]", ["Title","Url","Date","Author","Genres","Status","Deskripsi"],
[nyz.result[0].title, nyz.result[0].url, nyz.result[0].date, nyz.result[0].author, nyz.result[0].genres, nyz.result[0].status, nyz.result[0].description]))
break
case 'komiku':
if (!q) return reply("Masukkan nama Anime")
var nyz = await fetchJson(`https://violetics.pw/api/anime/komiku?apikey=beta&manga=${q}`)
reply(await getResult("[ *KOMIKU* ]", ["Title","Url","Chapter","Deskripsi"],
[nyz.result[0].title, nyz.result[0].url, nyz.result[0].chapter, nyz.result[0].description]))
break 
case 'mangadex':
if (!q) return reply("Masukkan nama Anime")
var nyz = await fetchJson(`https://violetics.pw/api/anime/mangadex?apikey=beta&manga=${q}`)
reply(await getResult("[ *MANGADEX* ]", ["Title","Url","Rate","followers","views","description"],
[nyz.result[0].title, nyz.result[0].url, nyz.result[0].rate, nyz.result[0].followers, nyz.result[0].views, nyz.result[0].description ]))
break
case 'cecan-chinese': case 'cecan-indonesia': case 'cecan-japan': case 'cecan-korea': case 'cecan-malaysia': case 'cecan-ptl': case 'cecan-thailand': case 'cecan-vietnam': 
only("proses", rimurubotz, from)
sendMedia("image",`https://violetics.pw/api/asupan/${command.split("-")[1]}?apikey=beta`, "🥴")
break
case 'newsantara':
var nyz = await fetchJson(`https://violetics.pw/api/news/antara?apikey=beta`)
reply(await getResult(`[ *${command}* ]`, ["News","Url","Category","Date"],
[nyz.result[0].news, nyz.result[0].url, nyz.result[0].category, nyz.result[0].date ]))
break
case 'newsncbc':
var nyz = await fetchJson(`https://violetics.pw/api/news/ncbc?apikey=beta`)
reply(await getResult(`[ *${command}* ]`, ["News","Url","Tags","Date"],
[nyz.result[0].news, nyz.result[0].url, nyz.result[0].tags, nyz.result[0].date ]))
break
case 'newscnn':
var nyz = await fetchJson(`https://violetics.pw/api/news/cnn?apikey=beta`)
reply(await getResult(`[ *${command}* ]`, ["Title","Url","Description","Date"],
[nyz.result[0].title, nyz.result[0].url, nyz.result[0].Description, nyz.result[0].date ]))
break
case 'newsdaily':
var nyz = await fetchJson(`https://violetics.pw/api/news/daily?apikey=beta`)
reply(await getResult(`[ *${command}* ]`, ["News","Url"],
[nyz.result[0].news, nyz.result[0].url ]))
break
case 'sell': case 'list': case 'selll': 
if (isOwner) { var cekOwner = true }
if (!isOwner) { var cekOwner = false }
rimurubotz.sendMessage(from, {
text: `𝗛𝗮𝘆 @${sender.split("@")[0]}🗿

𝗘𝗻𝘁𝗲 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗗𝗺,𝗔𝗽𝗸 𝗣𝗿𝗲𝗺,𝗗𝗮𝗻 𝗦𝘂𝗻𝘁𝗶𝗸 𝗔𝗽𝗸 𝗬𝗮𝗻𝗴 𝗠𝘂𝗿𝗮𝗵? 🧐
𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗖𝗲𝗸 𝗕𝘂𝘁𝘁𝗼𝗻 𝗗𝗶 𝗕𝗮𝘄𝗮𝗵,𝗠𝘂𝗿𝗺𝗲𝗿 𝗖𝗼𝘆😶‍🌫️`,
title: "",
mentions:[sender],
buttonText: "𝗖𝗹𝗶𝗰𝗸 𝗛𝗲𝗿𝗲!",
sections:  [{title: "Kalo Ga Niat Beli Gosah Kodcak🥶🖕",
rows: [
{title: "𝗟𝗶𝘀𝘁 𝗗𝗶𝗮𝗺𝗼𝗻𝗱 𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲", rowId: prefix + "ff"},
{title: "𝗟𝗶𝘀𝘁 𝗗𝗶𝗮𝗺𝗼𝗻𝗱 𝗖𝗢𝗗𝗠", rowId: prefix + "cod"},
{title: "𝗟𝗶𝘀𝘁 𝗗𝗶𝗮𝗺𝗼𝗻𝗱 𝗚𝗲𝗻𝘀𝗵𝗶𝗻 𝗜𝗺𝗽𝗮𝗰𝘁", rowId: prefix + "genshin"},
{title: "𝗠𝗟𝗩𝗜𝗟𝗢𝗚 ", rowId: prefix + "ml"},
{title: "𝗟𝗶𝘀𝘁 𝗗𝗶𝗮𝗺𝗼𝗻𝗱 𝗠𝗟 ❶", rowId: prefix + "dmml"},
{title: "𝗗𝗶𝗮𝗺𝗼𝗻𝗱 𝗠𝗟𝗕𝗕 𝗩𝗶𝗮 𝗜𝗱 𝗦𝗹𝗼𝘄", rowId: prefix + "dmml1"},
{title: "𝗣𝗿𝗼𝗺𝗼 𝗠𝗟𝗕𝗕 𝗪𝗲𝗲𝗸𝗲𝗻𝗱", rowId: prefix + "promo"},
{title: "𝗟𝗶𝘀𝘁 𝗦𝘂𝗻𝘁𝗶𝗸 𝗠𝗲𝗱𝘀𝗼𝘀", rowId: prefix + "suntik"},
{title: "𝗟𝗶𝘀𝘁 𝗔𝗽𝗸 𝗣𝗿𝗲𝗺𝗶𝘂𝗺", rowId: prefix + "apkprem"},
{title: "𝗚𝗜𝗙𝗧 𝗦𝗞𝗜𝗡 𝗠𝗟𝗕𝗕🎁🎉", rowId: prefix + "gift"},
{title: "sᴇʟʟᴇʀ number🎉", rowId: prefix + "open"},
{title: "ᴘᴀʏᴍᴇɴᴛ method🤑", rowId: prefix + "pay"},

]}]
})
break
case 'newsdetik':
var nyz = await fetchJson(`https://violetics.pw/api/news/detik?apikey=beta`)
reply(await getResult(`[ *${command}* ]`, ["News","Url","Date"],
[nyz.result[0].news, nyz.result[0].url, nyz.result[0].category, nyz.result[0].date ]))
break
case 'newsfajar':
var nyz = await fetchJson(`https://violetics.pw/api/news/fajar?apikey=beta`)
reply(await getResult(`[ *${command}* ]`, ["News","Url","Tag","Date"],
[nyz.result[0].news, nyz.result[0].url, nyz.result[0].tags, nyz.result[0].date ]))
break
case 'newsidn':
var nyz = await fetchJson(`https://violetics.pw/api/news/idn?apikey=beta`)
reply(await getResult(`[ *${command}* ]`, ["News","Url","Category","Date"],
[nyz.result[0].news, nyz.result[0].url, nyz.result[0].category, nyz.result[0].date ]))
break
case 'newsindozone':
var nyz = await fetchJson(`https://violetics.pw/api/news/indozone?apikey=beta`)
reply(await getResult(`[ *${command}* ]`, ["News","Url","Date"],
[nyz.result[0].news, nyz.result[0].url, nyz.result[0].date ]))
break
 case 'newsinews':
var nyz = await fetchJson(`https://violetics.pw/api/news/inews?apikey=beta`)
reply(await getResult(`[ *${command}* ]`, ["News","Url","Tags","Date"],
[nyz.result[0].news, nyz.result[0].url, nyz.result[0].tag, nyz.result[0].date ]))
break
default:  
if (isBotGroupAdmins && isGroup && dataOnly("antilink", "cek", from) == from){
if (budy.includes("https://chat.whatsapp.com")) { 
if (isGroupAdmins) return reply("𝗘𝗻𝘁𝗲 𝗔𝗱𝗺𝗶𝗻 𝗝𝗮𝗱𝗶 𝗕𝗲𝗯𝗮𝘀 𝗦𝗵𝗮𝗿𝗲 𝗟𝗶𝗻𝗸😍")
await rimurubotz.groupParticipantsUpdate(from, [sender], "remove") } 
}
if (budy == "Assalamualaikum" || budy == "Assalamu'alaikum"){
sendMedia("vn","./media/salam.mp3")
reply('𝗪𝗮𝗮𝗹𝗮𝗶𝗸𝘂𝗺𝘀𝗮𝗹𝗮𝗺 𝘄𝗿.𝘄𝗯,𝗛𝗮𝘆 𝗞𝗮𝗸,𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗧𝗼 𝗖𝗿𝗶𝘇𝘇𝘆𝗕𝗼𝘁,𝗞𝗮𝗺𝘂 𝗜𝗻𝗴𝗶𝗻 𝗠𝗶𝗻𝘁𝗮 𝗧𝗼𝗹𝗼𝗻𝗴 𝗞𝗲 𝗕𝗼𝘁? 𝗞𝗲𝘁𝗶𝗸  .𝗹𝗶𝘀𝘁𝗺𝗲𝗻𝘂')
sendMedia("sticker","./media/sticker.webp")
}
if (budy == "Bohong" || budy == "bohong"){
sendMedia("vn","./media/bohong.mp3")
reply('Ah,Boong Lu,Ga Percaya Gw') 
} // AUTORESPODER 
if (budy == "bot" || budy == "Bot" || budy == "BOT"  || budy == "p" || budy == "P") {
reply(`*_🚩Ya? ${namabot} Disini, Ada yang bisa saya bantu? Gunakan command .listmenu untuk melihat apa saja yang bisa saya lakukan,_*\n\n*_• *Owner* : Bot ini di buat dengan Sepenuh Hati Dan Dengan Tidak Ikhlas Yang Di Buat Oleh ${namaowner} 🗿❤_*`)
}
if (budy == "Gw owner" || budy == "gw owner"){
sendMedia("vcard","Ampun Suhu,Gw Izin Off Karena Terlalu Dingin🥶", owner)
sendMedia("sticker","./media/izinoff.mp4")
}
if (budy == "Enggak" || budy == "Enggk" || budy == "Enggak!"){
sendMedia("vn","./media/ditolak.mp3")
reply(`Kasian,Ditolak Mentah-Mentah,Yang Sabar Ya Om🤣`) 
}
if (budy == "Ga modals" || budy == "Gak modals" || budy == "Gak Modal"){
sendMedia("vcard","Cuih,Dasar User Ga Modals", owner)
sendMedia("vn","./media/cuih.mp3") 
}
if (budy == "Menu" || budy == "menu" || budy == "Help"){
sendMedia("vn","./media/ngerti.mp3")
reply(`Pake .listmenu,Bukan .menu . Kok Kamu Ga Ngerti Sih! Udah Ya Stop Ya! Kita Putus🗿🖕`) 
}
if (budy == "Jempol" || budy == "jempol"){
reply(`Baik,Kamu Telah Memilih *Jempol* Ya`)
sendMedia("image", ('./media/jempol.jpg'), "Wah 𝗞𝗮𝗺𝘂 Menang!\n\nCek Gambar Untuk Detail")
}
if (budy == "Jempol2" || budy == "jempol2"){
reply(`Baik,Kamu Telah Memilih *Jempol Ke Dua* Ya`)
sendMedia("image", ('./media/jempol2.jpg'), "Yah Kita Berdua Seri :(\n\nCek Gambar Untuk Detail")
}
if (budy == "Kelingking" || budy == "kelingking"){
reply(`Baik,Kamu Telah Memilih *Kelingking* Ya`)
sendMedia("image", ('./media/kelingking.jpg'), "Yaha Kasian Kamu Kalah🤣\n\nCek Gambar Untuk Detail")
}
if (budy == "Kelingking2" || budy == "kelingking2"){
reply(`Baik,Kamu Telah Memilih *Kelingking Ke Dua* Ya`)
sendMedia("image", ('./media/kelingking2.jpg'), "Hehe🗿,Kita Berdua 𝗦𝗲𝗿𝗶><\n\nCek Detail Untuk Melihat<_<")
}
if (budy == "Telunjuk" || budy == "telunjuk"){
reply(`Baik,Kamu Telah Memilih *Telunjuk* Ya`)
sendMedia("image", ('./media/telunjuk.jpg'), "Kesian 𝗟𝗼𝘄𝗵 Karena Bot Menang 🗿 🏆💪\n\nCek Gambar Untuk Detail")
}
if (budy == "Telunjuk2" || budy == "telunjuk 2"){
reply(`Baik,Kamu Telah Memilih *Telunjuk Ke Dua* Ya`)
sendMedia("image", ('./media/telunjuk2.jpg'), "Hasil Seri Juga :v\n\nCek Untuk Melihat Detail Coyy")
}
if (budy == "Apa lu?"){
sendMedia("vcard","Lu Mo Lawan Gw?,Yakin?", owner)
sendMedia("vn","./media/toxic.mp3")
}
if (budy == "Sayang" || budy == "Syg" || budy == "Ayang"){
sendMedia("vcard","𝗞𝗮𝘀𝗶𝗮𝗻 𝗬𝗮𝗻𝗴 𝗝𝗼𝗺𝗯𝗹𝗼 𝗕𝗮𝗻𝗴𝘀𝗮𝘁", owner)
sendMedia("vn","./media/tes.mp3")
}
if (budy == "Apa itu" || budy == "Apa itu?" || budy == "Apaan tuch??"){
sendMedia("vcard","𝗝𝗮𝗱𝗶 𝗞𝗲𝗽𝗼,𝗕𝘁𝘄 ~𝗔𝗣𝗔𝗔𝗡 𝗧𝗨𝗛~", owner)
}
if (budy == "Kontol" || budy == "Kntl" || budy == "Mmk" || budy == "Memek" || budy == "Kerepe" || budy == "Peler" || budy == "P3ler" || budy == "Ngentot" || budy == "Plr" || budy == "Kedaong" || budy == "Pipek" || budy == "Pepek" || budy == "Kedail" || budy == "Anjing"){
sendMedia("vcard","𝗔𝘀𝘁𝗮𝗴𝗳𝗶𝗿𝘂𝗹𝗹𝗮𝗵 𝗞𝗮𝘄𝗮𝗻,𝗝𝗮𝗻𝗴𝗮𝗻 𝗚𝗶𝘁𝘂 :(", owner)
sendMedia("vn","./media/tobat.mp3")
}



}} catch (e) {LogLoadingg(`${e}`)}}
