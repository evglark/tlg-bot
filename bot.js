require('dotenv').config();
const { Telegraf } = require('telegraf');
const bip39 = require('bip39');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Привет! Я твой Telegram-бот 🚀'));
bot.help((ctx) => ctx.reply('Я умею отвечать на сообщения. Просто напиши мне что-нибудь!'));

bot.on('text', (ctx) => {
    const mnemonic = bip39.generateMnemonic();
    ctx.reply("Сгенерированная сид-фраза:");
    ctx.reply(mnemonic);
});

bot.launch();

console.log('Бот запущен!');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
