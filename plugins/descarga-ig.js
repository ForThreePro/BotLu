import axios from 'axios'
let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, `⛈️ *RAYO PREM INSTAGRAM* 🌙\n\n⚡ *Ingresa un enlace de Instagram.*\n📌 *Ejemplo:*.ig https://www.instagram.com/reel/xxx/`, m) // Cambiado
    await m.react('⏳')
    try {
        const key = Buffer.from('ZWt1c2Fz', 'base64').toString('utf-8').split('').reverse().join('')
        const { data } = await axios.get(`https://api.evogb.org/dl/instagram?url=${encodeURIComponent(text)}&key=${key}`)
        if (!data.status) return m.reply(`⛈️ *RAYO PREM ERROR* ➔ *Error al procesar el enlace.*`) // Cambiado

        let media = data.data[0]
        let type = media.type === 'video'? 'VIDEO' : 'IMAGEN'

        let cap = `⛈️ *RAYO PREM INSTAGRAM* 🌙\n\n` // Cambiado
        cap += `⚡ *Tipo:* ${type}\n`
        cap += `🌩️ *Enviando contenido...*\n⛈️ *Team Nightwish*` // Cambiado

        await conn.sendMessage(m.chat, {
            [media.type === 'video'? 'video' : 'image']: { url: media.url },
            mimetype: media.type === 'video'? 'video/mp4' : 'image/jpeg',
            caption: cap
        }, { quoted: m })
        await m.react('✅')
    } catch {
        await m.react('❌')
        m.reply(`⛈️ *RAYO PREM ERROR* ➔ *No se pudo descargar el contenido.*`) // Cambiado
    }
}
handler.command = /^(ig|instagram)$/i
handler.help = ['ig <link>']
handler.tags = ['downloader']
export default handler