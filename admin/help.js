const fs = require('fs') 
const listmenu = JSON.parse(fs.readFileSync('./admin/listmenu.json')); 

const menu = (x, y, z) => {     
var menu1 = []
var menu2 = ""
Object.keys(x).forEach((i) => { menu1.push(x[i]) }) 
Object.keys(menu1).forEach((i) => { 
menu2 += `ᯤ ⊹ ִֶָ  ${z + menu1[i]}\n` }) 
var menu3 = `${y}\n${menu2}`
return menu3
}
const help = (prefix, reply, cekUser, namabot, sender) => {
var help1 = `𝘏𝘰𝘭𝘢𝘢 @${sender.split("@")[0]} 👋
🇬🇧 : 𝘓𝘪𝘴𝘵 𝘈𝘭𝘭 𝘍𝘦𝘢𝘵𝘶𝘳𝘦𝘴. 
🇮🇩 : 𝘋𝘢𝘧𝘵𝘢𝘳 𝘚𝘦𝘮𝘶𝘢 𝘍𝘪𝘵𝘶𝘳. 

🇬🇧 : 𝘏𝘦𝘺 𝘍𝘳𝘪𝘦𝘯𝘥𝘴, 𝘞𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 𝘊𝘳𝘪𝘻𝘻𝘺 𝘉𝘰𝘵, 𝘐 𝘊𝘢𝘯 𝘏𝘦𝘭𝘱 𝘠𝘰𝘶 𝘞𝘩𝘦𝘯𝘦𝘷𝘦𝘳 𝘠𝘰𝘶 𝘞𝘢𝘯𝘵. 𝘙𝘦𝘮𝘦𝘮𝘣𝘦𝘳, 𝘋𝘰𝘯*𝘵 𝘚𝘱𝘢𝘮 𝘵𝘩𝘦 𝘉𝘰𝘵

[ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗕𝗢𝗧 ]
• 𝘕𝘢𝘮𝘢 𝘉𝘰𝘵 : 𝘊𝘳𝘪𝘻𝘻𝘺 𝘉𝘰𝘵
• 𝘕𝘢𝘮𝘢 𝘖𝘸𝘯𝘦𝘳 : 𝘗𝘳𝘢𝘬𝘰𝘴𝘰𝘟𝘧𝘤
• 𝘓𝘪𝘣𝘳𝘢𝘳𝘺 𝘠𝘢𝘯𝘨 𝘋𝘪 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 : 𝘉𝘢𝘪𝘭𝘺𝘦𝘴-𝘔𝘋
• 𝘉𝘢𝘩𝘢𝘴𝘢 𝘚𝘤𝘳𝘪𝘱𝘵 : 𝘑𝘢𝘷𝘢 𝘚𝘤𝘳𝘪𝘱𝘵
• 𝘉𝘰𝘵 𝘔𝘰𝘥𝘦 : 𝘗𝘶𝘣𝘭𝘪𝘤
• 𝘍𝘦𝘢𝘵𝘶𝘳𝘦𝘴 𝘉𝘰𝘵 : 𝘖𝘯𝘦 𝘩𝘶𝘯𝘥𝘳𝘦𝘥 𝘔𝘰𝘳𝘦
• 𝘌𝘥𝘪𝘵 𝘞𝘩𝘢𝘵 𝘗𝘦𝘳𝘤𝘦𝘯𝘵 : 89,0%
• 𝘚𝘤𝘳𝘪𝘱𝘵 𝘙𝘦𝘢𝘭 : 𝘚𝘤𝘳𝘪𝘱𝘵 𝘉𝘺 𝘙𝘪𝘮𝘶𝘳𝘶𝘉𝘰𝘵𝘻
• 𝘚𝘤𝘳𝘪𝘱𝘵 𝘙𝘦𝘤𝘪𝘥𝘦 : 𝘚𝘤𝘳𝘪𝘱𝘵 𝘠𝘢𝘯𝘨 𝘋𝘪 𝘌𝘥𝘪𝘵 𝘏𝘢𝘮𝘱𝘪𝘳 𝘍𝘶𝘭𝘭 𝘋𝘢𝘳𝘪 𝘗𝘳𝘢𝘬𝘰𝘴𝘰𝘟𝘧𝘤
• 𝘚𝘰𝘶𝘳𝘤𝘦 𝘊𝘰𝘥𝘦 : 𝘚𝘤? 𝘎𝘢 𝘋𝘪 𝘗𝘶𝘣𝘭𝘪𝘤 + 𝘒𝘢𝘭𝘰 𝘔𝘢𝘶 𝘌𝘥𝘪𝘵 𝘚𝘦𝘯𝘥𝘪𝘳𝘪


${menu(listmenu.simple, "𝗦𝗜𝗠𝗣𝗟𝗘 𝗠𝗘𝗡𝗨", prefix)}
${menu(listmenu.terbaru, "𝗡𝗘𝗪 𝗙𝗜𝗧𝗨𝗥", prefix)}
${menu(listmenu.webp, "𝗪𝗘𝗕 𝗣𝗛𝗜𝗦𝗜𝗡𝗚", prefix)}
${menu(listmenu.group, "𝗚𝗥𝗢𝗨𝗣", prefix)}
${menu(listmenu.owner, "𝗢𝗪𝗡𝗘𝗥", prefix)}
${menu(listmenu.textpro1, "𝗧𝗘𝗫𝗧 𝗣𝗥𝗢 ①", prefix)}
${menu(listmenu.textpro2, "𝗧𝗘𝗫𝗧 𝗣𝗥𝗢 ②", prefix)}
${menu(listmenu.gombal, "𝗚𝗢𝗠𝗕𝗔𝗟", prefix)}
${menu(listmenu.stress, "𝗦𝗔𝗡𝗚𝗘𝗔𝗡", prefix)}
${menu(listmenu.memegen, "𝗠𝗘𝗠𝗘𝗚𝗘𝗡", prefix)}
${menu(listmenu.download, "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗", prefix)}
${menu(listmenu.storage, "𝗦𝗜𝗠𝗣𝗔𝗡 𝗦𝗘𝗦𝗨𝗔𝗧𝗨 𝗗𝗜 𝗕𝗢𝗧", prefix)}
${menu(listmenu.search, "𝗦𝗘𝗔𝗥𝗖𝗛", prefix)}
${menu(listmenu.creatif, "𝗖𝗥𝗘𝗔𝗧𝗜𝗙 ①", prefix)}
${menu(listmenu.creatifme, "𝗖𝗥𝗘𝗔𝗧𝗜𝗙②", prefix)}
${menu(listmenu.creatiftag, "𝗖𝗥𝗘𝗔𝗧𝗜𝗙③", prefix)}
${menu(listmenu.ttp, "𝗧𝗧𝗣 𝗦𝗘𝗧 𝗖𝗢𝗟𝗢𝗨𝗥𝗦", prefix)}
${menu(listmenu.ranime, "𝗔𝗡𝗜𝗠𝗘", prefix)}
${menu(listmenu.emostick, "𝗘𝗠𝗢𝗦𝗧𝗜𝗖𝗞", prefix)}
${menu(listmenu.tagrandom, "𝗧𝗔𝗚 𝗢𝗡𝗟𝗬 𝗚𝗥𝗢𝗨𝗣", prefix)}
${menu(listmenu.listaudio, "𝗔𝗨𝗗𝗜𝗢", prefix)}
${menu(listmenu.userbot, "𝗨𝗦𝗘𝗥'𝗦 𝗕𝗢𝗧", prefix)}
${menu(listmenu.games, "𝗚𝗔𝗠𝗘𝗦", prefix)}
${menu(listmenu.animes, "𝗪𝗜𝗕𝗨", prefix)}
${menu(listmenu.cecan, "𝗖𝗘𝗖𝗔𝗡 𝗔𝗟𝗟 𝗡𝗘𝗚𝗔𝗥𝗔", prefix)}
${menu(listmenu.news, "𝗡𝗘𝗪𝗦 𝗨𝗣𝗗𝗔𝗧𝗘", prefix)}

                   𝗕𝗔𝗧𝗔𝗦 𝗧𝗘𝗥𝗔𝗞𝗛𝗜𝗥
               ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
               
               `
var footer_nya =`𝘚𝘪𝘮𝘱𝘭𝘦 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘉𝘰𝘵 𝘉𝘺 𝘗𝘳𝘢𝘬𝘰𝘴𝘰𝘟𝘧𝘤`
// JANGAN UBAH/HAPUS THX TO🤥
var cr = `𝗦𝗶𝗺𝗽𝗹𝗲 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗕𝗼𝘁 𝗕𝘆 𝗣𝗿𝗮𝗸𝗼𝘀𝗼𝗫𝗳𝗰`
return help1
}

module.exports = { help }