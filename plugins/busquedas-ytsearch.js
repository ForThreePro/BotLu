import axios from 'axios'
let handler = async (m, { conn, text }) => {
    if (!text) return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 📺 *BUSCADOR DE YOUTUBE*
│
│ 😼 *¿Qué deseas buscar?*
│ 🐾 *Uso:*.yts Bot Lu
╰─────────────────❒`)
    
    await m.react('📺')
    try {
        let { data } = await axios.get(`https://api.delirius.store/search/ytsearch?q=${encodeURIComponent(text)}`)
        if (!data.data || data.data.length === 0) return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ ❌ *SIN RESULTADOS*
│
│ 😿 *No encontré nada sobre:* ${text}
╰─────────────────❒`)

        let res = data.data.slice(0, 5).map((v, i) => 
            `╭─── 🐾 *RESULTADO ${i+1}* ───╮\n` +
            `│ 📌 *${v.title}*\n` +
            `│ ⏳ *Duración:* ${v.duration} | 👁️ *Vistas:* ${v.views}\n` +
            `│ 👤 *Canal:* ${v.author.name}\n` +
            `│ 🔗 ${v.url}\n` +
            `╰─────────────────────╯`
        ).join('\n\n')

        let cap = `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 📺 *RESULTADOS DE YOUTUBE*
│
│ 😼 *Búsqueda:* ${text}
╰─────────────────❒\n\n`
        cap += res
        cap += `\n\n> *“Usa:* .play <número> *o copia el link para descargar”*\n> *© Bot Lu* 🐾`

        m.reply(cap)
        await m.react('✅')
    } catch { 
        await m.react('❌')
        m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ ⛈️ *ERROR*
│
│ 😿 *Falló la búsqueda*
│ 🐾 *Intenta de nuevo*
╰─────────────────❒`)
    }
}
handler.help = ['yts <busqueda>']
handler.tags = ['search']
handler.command = /^(yts|ytsearch)$/i
export default handler