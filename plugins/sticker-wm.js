import { addExif } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
  if (!m.quoted) return conn.reply(m.chat, `🐱 *BOT LU* ➔ Maulla sobre un *sticker* para robármelo.`, m)
  
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) return conn.reply(m.chat, `🐱 *BOT LU* ➔ Eso no es un *sticker*. Solo robo stickers, no fotos.`, m)
    
    let img = await m.quoted.download()
    if (!img) return conn.reply(m.chat, `🐱 *BOT LU* ➔ No pude bajar el *sticker*. Se escapó como ratón.`, m)
    
    stiker = await addExif(img, packname || 'Bot Lu Stickers', author || 'Whois Yallico 🐾')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '🐱 *Bot Lu* | Sticker reclamado con las patitas', m)
    else return conn.reply(m.chat, `🐱 *BOT LU* ➔ Error al procesar el *sticker*. Se enredó en el ovillo.`, m)
  }
}

handler.help = ['wm <nombre>|<autor>']
handler.tags = ['sticker']
handler.command = ['take', 'robar', 'wm'] 
handler.limit = false

export default handler