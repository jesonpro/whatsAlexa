/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

let WhatsAlexa = require('../events');
let {MessageType,Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let ffmpeg = require('fluent-ffmpeg');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('conventer');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'mp3', fromMe: true, desc: Lang.MP4TOAUDİO_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})
        var downloading = await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO,MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withNoVideo()
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    WhatsAlexa.addCommand({pattern: 'photo', fromMe: true, desc: Lang.STİCKER_DESC}, (async (message, match) => {   

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }
 
        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.STİCKER_NEEDREPLY, MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})
        var downloading = await message.client.sendMessage(message.jid,Lang.STİCKER,MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fromFormat('webp_pipe')
            .save('output.jpg')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
else if (Config.WORKTYPE == 'public') {

    WhatsAlexa.addCommand({pattern: 'mp3', fromMe: false, desc: Lang.MP4TOAUDİO_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})
        var downloading = await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO,MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withNoVideo()
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    WhatsAlexa.addCommand({pattern: 'photo', fromMe: false, desc: Lang.STİCKER_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.STİCKER_NEEDREPLY, MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})
        var downloading = await message.client.sendMessage(message.jid,Lang.STİCKER,MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fromFormat('webp_pipe')
            .save('output.jpg')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
