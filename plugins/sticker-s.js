import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (!/webp|image|video/g.test(mime)) return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🎨 *STICKER*
│
│ ⚠️ *Responde a una imagen, video o gif*
│ 🐾 *Para convertirlo en sticker*
╰─────────────────❒`)
    let img = await q.download()
    let stiker = await sticker(img, false, 'Bot Lu', 'Whois Yallico')
    await conn.sendFile(m.chat, stiker, 'sticker.webp', `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ ✨ *STICKER CREADO*
│
│ > *Lu dejó su patita aquí* 🐾
╰─────────────────❒`, m)
}
handler.help = ['s']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker']
export default handler