import { Blob } from 'node:buffer';
import { FormData } from 'formdata-node';
import fetch from 'node-fetch';

let cooldown = new Set()

let handler = async (m, { conn, usedPrefix, command }) => {
    // Anti spam 10 seg
    if (cooldown.has(m.sender)) return m.reply('🐱 *Miau~* Espera 10 seg para usarlo de nuevo')
    cooldown.add(m.sender)
    setTimeout(() => cooldown.delete(m.sender), 10000)

    let q = m.quoted? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    if (!mime) throw `🐱 *Bot Lu* 💜\n\n*Miau~* Responde a una foto con *${usedPrefix + command}* para quitarle el fondo`;
    if (!/image\/(jpe?g|png)/.test(mime)) {
        throw `🐾 *Formato no soportado.* Solo JPG/PNG gatitos. Nada de stickers`;
    }

    const API_KEY = "FEx4CYmYN1QRQWD1mbZp87jV";

    await m.react('🐾');
    await m.reply('🐱 *Bot Lu limpiando la foto con sus patitas...*');

    try {
        let img = await q.download();
        if (!img) throw '❌ *Miau* No pude descargar la imagen';
        if (img.length > 12 * 1024 * 1024) throw '❌ *Esta foto está muy gordita.* Máximo 12MB';

        let base64Img = img.toString('base64');
        
        let form = new FormData();
        form.append('image_file_b64', base64Img);
        form.append('size', 'auto');

        let res = await fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: {
                'X-Api-Key': API_KEY
            },
            body: form
        });

        if (!res.ok) {
            let errorText = await res.text();
            if (res.status === 402) throw '🐱 *Se me acabaron las croquetas...* Créditos agotados';
            throw `❌ Error ${res.status}: ${errorText}`;
        }

        let processedImg = await res.buffer();

        await conn.sendFile(
            m.chat,
            processedImg,
            'bot_lu.png',
            '✨ *Fondo eliminado con éxito* ✨\n\n🐱 *Bot Lu | Gatitos Team* 💜\n*Miau gracias por usarme~*',
            m
        );

        await m.react('✅');

    } catch (error) {
        console.error('Bot Lu Error:', error);
        await m.reply(`${error}`);
        await m.react('😿');
    }
};

handler.help = ['removebg', 'quitafondo'];
handler.tags = ['tools'];
handler.command = ['removebg', 'quitafondo', 'nobg', 'rmbg', 'gatonobg'];
handler.register = false;

export default handler;