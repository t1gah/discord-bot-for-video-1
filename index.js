const Discord = require('discord.js');
const bot = new Discord.Client

const token = 'Your bot's token'

bot.on('ready', () =>{
    console.log('I am online!')
    bot.user.setActivity('oink, oink!')

})

bot.on('message', msg=>{
    if(msg.content === 'oink'){
        msg.channel.send('oink hello')
    }
})



bot.login(token)