import uploadImage from '../../lib/uploadImage.js';

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    if (!mime) return m.reply(`❄ *Responde a una imagen con ${usedPrefix + command}*`);
    if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`⚠️ *Solo imágenes JPG/PNG*`);

    await m.react('⏳');
    let img = await q.download();
    
    let result = null;
    let apiUsed = '';

    try {
        let url = await uploadImage(img);

        // 1. LOLHUMAN
        try {
            apiUsed = 'lolhuman';
            let res = await fetch(`https://api.lolhuman.xyz/api/removebg?apikey=GataDiosV3&img=${url}`);
            let json = await res.json();
            if (json.status == 200) result = json.result;
            else throw json.message;
        } catch { result = null }

        // 2. STELLAR
        if (!result) try {
            apiUsed = 'stellar';
            let res = await fetch(`https://api.stellarwa.xyz/removebg?apikey=api-1wGnd&url=${url}`);
            let json = await res.json();
            if (json.status) result = json.result;
            else throw json.message;
        } catch { result = null }

        // 3. SKIZO
        if (!result) try {
            apiUsed = 'skizo';
            let res = await fetch(`https://skizo.tech/api/removebg?apikey=GataDios&url=${url}`);
            let json = await res.json();
            if (json.status) result = json.result;
            else throw json.message;
        } catch { result = null }

        // 4. SIPUTZX - Esta es la mas estable gratis
        if (!result) try {
            apiUsed = 'siputzx';
            let res = await fetch(`https://api.siputzx.my.id/api/iloveimg/removebg?image=${encodeURIComponent(url)}`);
            if (res.ok) result = res.url; // siputzx devuelve directo
            else throw 'error';
        } catch { result = null }

        // 5. EXONITY
        if (!result) try {
            apiUsed = 'exonity';
            let res = await fetch(`https://exonity.tech/api/removebg?apikey=GataDios&url=${url}`);
            let json = await res.json();
            if (json.status) result = json.result;
            else throw json.message;
        } catch { result = null }

    } catch (e) {
        console.log(e)
    }

    if (!result) {
        await m.react('❌');
        return m.reply('⚠️ *Todas las APIs fallaron. Prueba con otra imagen*');
    }

    await conn.sendMessage(m.chat, {
        image: { url: result },
        caption: `✅ *Fondo eliminado*\n⚡ *API:* ${apiUsed}`
    }, { quoted: m });

    await m.react('✅');
};

handler.help = ['removebg', 'nofondo'];
handler.tags = ['tools'];
handler.command = /^removebg|nofondo|delfon|rbg$/i;

export default handler;