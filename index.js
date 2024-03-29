const { Client, MessageAck } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const {addPair,searchPair,searchPairRev} = require("./user")

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// Listening to all incoming messages
client.on('message_create', message => {
    if(message.body=="!start"){
        client.sendMessage(message.from,"Untuk menggunakan bot ini silahkan ketik nomor tujuan diawali 62");
    }else if(message.body.slice(0,2)=="62"){
        addPair(message.from,message.body+"@c.us")
        client.sendMessage(message.from,"Silahkan ketikkan pesan diawali =");
    }else if(message.body.slice(0,1)=="="){
        targetNumber = searchPair(message.from)
        targetMessage = message.body.slice(message.body.indexOf("=")+1,message.body.length)
        finalMessage = `> *Confess From : XX${message.from.slice(message.from.indexOf("@")-3,message.from.indexOf("@"))}* \n_${targetMessage}_ \n\nUntuk membalasnya awali dengan ?`
        client.sendMessage(targetNumber,finalMessage);
        client.sendMessage(message.from,"Terkirim");
    }else if(message.body.slice(0,1)=="?"){
        targetNumber = searchPairRev(message.from)
        targetMessage = message.body.slice(message.body.indexOf("?")+1,message.body.length)
        finalMessage = `> *Dia balas :* \n_${targetMessage}_ \n\nUntuk membalasnya awali dengan =`
        client.sendMessage(targetNumber,finalMessage);
    }
});


client.initialize();
