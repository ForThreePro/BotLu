import uploadImage from '../../lib/uploadImage.js';

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    if (!mime) return m.reply(`❄ *Responde a una imagen con ${usedPrefix + command}*`);
    if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`⚠️ *Solo imágenes JPG/PNG*`);

    await m.react('⏳');
    await conn.reply(m.chat, `*🧑‍💻 Quitando fondo...*`, m);
    
    try {
        let img = await q.download();
        let url = await uploadImage(img); // sube la imagen
        
        // API lolhuman removebg
        let apiUrl = `https://api.lolhuman.xyz/api/removebg?apikey=${lolkeysapi}&img=${url}`;
        let res = await fetch(apiUrl);
        let json = await res.json();
        
        if (json.status !== 200) throw new Error(json.message || 'API Error');
        let imgResult = json.result; // url de la imagen sin fondo

        await conn.sendMessage(m.chat, {
            image: { url: imgResult },
            caption: `✅ *Fondo eliminado*\n⚡ *API:* lolhuman`
        }, { quoted: m });

        await m.react('✅');

    } catch (e) {
        console.log(e);
        await m.react('❌');
        m.reply(`*[❗] Error:* ${e.message}\n\n*Responde a una imagen*`);
    }
};

handler.help = ['removebg', 'nofondo'];
handler.tags = ['tools'];
handler.command = /^removebg|nofondo|delfon|rbg$/i;

export default handler;