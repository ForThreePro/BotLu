import uploadImage from '../../lib/uploadImage.js';

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    if (!mime) return m.reply(`❄ *Responde a una imagen con ${usedPrefix + command}*`);
    if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`⚠️ *Solo imágenes JPG/PNG*`);

    await m.react('⏳');
    await conn.reply(m.chat, `*🧑‍💻 Quitando fondo... Probando APIs*`, m);

    let img = await q.download();
    let url = await uploadImage(img);
    let result = null;
    let apiUsed = '';

    // TUS APIS Y KEYS DIRECTAS AQUI
    const apis = [
        { name: 'lolhuman', url: `https://api.lolhuman.xyz/api/removebg?apikey=GataDiosV3&img=${url}` },
        { name: 'stellar', url: `https://api.stellarwa.xyz/removebg?apikey=api-1wGnd&url=${url}` },
        { name: 'skizo', url: `https://skizo.tech/api/removebg?apikey=GataDios&url=${url}` },
        { name: 'alyachan', url: `https://api.alyachan.dev/api/removebg?url=${url}` },
        { name: 'exonity', url: `https://exonity.tech/api/removebg?apikey=GataDios&url=${url}` },
        { name: 'ryzendesu', url: `https://api.ryzendesu.vip/api/removebg?url=${url}` },
        { name: 'neoxr', url: `https://api.neoxr.eu/api/removebg?apikey=GataDios&image=${url}` },
        { name: 'davidcyriltech', url: `https://api.davidcyriltech.my.id/api/removebg?url=${url}` },
        { name: 'dorratz', url: `https://api.dorratz.com/removebg?url=${url}` },
        { name: 'siputzx', url: `https://api.siputzx.my.id/api/iloveimg/removebg?image=${encodeURIComponent(url)}` },
        { name: 'vreden', url: `https://api.vreden.web.id/api/removebg?url=${url}` },
        { name: 'fgmods', url: `https://api.fgmods.xyz/api/removebg?apikey=elrebelde21&url=${url}` }
    ];

    for (let api of apis) {
        try {
            let res = await fetch(api.url, { timeout: 15000 });
            let json = await res.json();
            
            // Detectar resultado segun cada API
            if (json.result) result = json.result;
            else if (json.data?.url) result = json.data.url;
            else if (json.data) result = json.data;
            else if (json.image) result = json.image;
            else continue;

            apiUsed = api.name;
            break;
        } catch (e) {
            console.log(`[X] ${api.name} fallo`)
            continue;
        }
    }

    if (!result) {
        await m.react('❌');
        return m.reply('⚠️ *Todas las APIs fallaron. Intenta más tarde*');
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