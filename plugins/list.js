let WhatsAlexa = require('../events');
let Config = require('../config');
let {MessageType} = require('@adiwajshing/baileys');
let Language = require('../language');
let Lang = Language.getString('list');
let td = Config.WORKTYPE == 'public' ? false : true

var language = ''
var MSG = ''
if (Config.LANG == 'EN') language = 'English',  MSG = '*🚀*\n   *⦁🚀*\n*🚀*\n\n*🚀 BOT INFO ◆*\n\n```☁ Developer:``` *🚀*\n```▣ Owner:``` *'+Config.OWNER+'*\n```▣ Contact Owner:``` *wa.me/'+Config.OWNERNUM+'*\n```▣ Language:``` *'+language+'*\n```▣ Work Type:``` *'+Config.WORKTYPE+'*\n\n∎ ⇓ *Commands* ⇓ ∎\n\n'
if (Config.LANG == 'ML') language = 'മലയാളം', MSG = '*🚀*\n   *⦁🚀*\n*🚀*\n\n*🚀 ബോട്ട് വിവരം ◆*\n\n```☁ ഡെവലപ്പർ:``` *🚀*\n```▣ ഉടമ:``` *'+Config.OWNER+'*\n```▣ ഉടമയുമായി ബന്ധപ്പെടുക:``` *wa.me/'+Config.OWNERNUM+'*\n```▣ ഭാഷ:``` *'+language+'*\n```▣ വര്‍ക്ക്‌ തരം:``` *'+Config.WORKTYPE+'*\n\n∎ ⇓ *കതരംതരം* ⇓ ∎\n\n'
if (Config.LANG == 'SI') language = 'Sinhala', MSG = '*🚀*\n   *⦁🚀*\n*🚀*\n\n*🚀 INFORMASI BOT ◆*\n\n```☁Pengembang:``` *🚀*\n```🚀:``` *'+Config.OWNER+'*\n```🚀:``` *wa.me/'+Config.OWNERNUM+'*\n```🚀:``` *'+language+'*\n```🚀:``` *'+Config.WORKTYPE+'*\n\n *🚀* \n\n'

    WhatsAlexa.addCommand({pattern: 'list ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        var CMD_HELP = '';
        if (match[1] === '') {
            WhatsAlexa.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '*🚀 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                    if (command.desc !== '') CMD_HELP += '*🌟 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            );
        
            await message.client.sendMessage(
                message.jid, MSG + CMD_HELP, MessageType.text, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🚀", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/Amazone.png')}}}});
        } else {

            if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }
            var CMD_HELP = '';
            WhatsAlexa.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }
                
                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += '*🚀 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                        if (command.desc !== '') CMD_HELP += '*🌟 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                        if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, MSG + CMD_HELP, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "◄━━━━━━━⦁⦁ WhatsAlexa Menu ⦁⦁━━━━━━━━►", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/WhatsAlexa.png')}}}});
        }
    }));
