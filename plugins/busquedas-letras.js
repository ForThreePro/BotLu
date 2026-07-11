import axios from 'axios'

let handler = async (m, { conn, text }) => {
    if (!text) return m.reply(`╭─❒ *『 𝗧𝗘𝗔𝗠 𝗡𝗜𝗚𝗛𝗧𝗪𝗜𝗦𝗛 』* ❒
│ 🎵 *BUSCADOR DE LETRAS*
│
│ 🌙 *¿Qué canción buscas?*
│ ⚡ *Uso:*.letra Nightwish
╰─────────────────❒`)

    await m.react('🎵')
    try {
        let { data } = await axios.get(`https://api.delirius.store/search/lyrics?query=${encodeURIComponent(text)}`)
        let res = data.data
        if (!res) return m.reply(`╭─❒ *『 𝗧𝗘𝗔𝗠 𝗡𝗜𝗚𝗛𝗧𝗪𝗜𝗦𝗛 』* ❒
│ ❌ *SIN RESULTADOS*
│
│ ⚡ *No encontré la letra de:* ${text}
╰─────────────────❒`)

        let txt = `╭─❒ *『 𝗧𝗘𝗔𝗠 𝗡𝗜𝗚𝗛𝗧𝗪𝗜𝗦𝗛 』* ❒
│ 🎵 *LETRA ENCONTRADA*
│
│ ⚡ *Título:* ${res.title}
│ 👤 *Artista:* ${res.artists}
│ ⏳ *Duración:* ${res.duration || 'N/A'}
╰─────────────────❒\n\n`
        txt += `╭─── 🌙 𝗟𝗘𝗧𝗥𝗔 𝗡𝗢𝗖𝗧𝗨𝗥𝗡𝗔 ───╮\n`
        txt += `${res.lyrics}\n`
        txt += `╰─────────────────────────╯\n\n`
        txt += `> *“La música resuena en la tormenta”* ⚡\n> *© Team Nightwish*`

        m.reply(txt)
        await m.react('✅')
    } catch { 
        await m.react('❌')
        m.reply(`╭─❒ *『 𝗧𝗘𝗔𝗠 𝗡𝗜𝗚𝗛𝗧𝗪𝗜𝗦𝗛 』* ❒
│ ⛈️ *ERROR*
│
│ ⚡ *Falló al buscar la letra*
│ 🌙 *Intenta de nuevo*
╰─────────────────❒`)
    }
}
handler.help = ['letra <cancion>']
handler.tags = ['search']
handler.command = /^(letra|lyrics)$/i
export default handler