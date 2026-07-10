import yts from 'yt-search'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`⛈️ *RAYO PREM YT* 🌙\n\n⚡ *Ingresa un enlace o nombre de YouTube.*\n*Ejemplo:* ${usedPrefix + command} https://youtu.be/xxx`) // Cambiado

  let res = await yts(text)
  let vid = res.videos[0]
  if (!vid) return m.reply(`⛈️ *RAYO PREM ERROR* ➔ *No se encontró el video.*`) // Cambiado

  let apiUrl = `https://api.evogb.org/dl/ytmp3?url=${encodeURIComponent(vid.url)}&key=sasuke`
  let json = await (await fetch(apiUrl)).json()
  if (!json.status) return m.reply(`⛈️ *RAYO PREM ERROR* ➔ *Error al procesar el audio.*`) // Cambiado

  let cap = `⛈️ *RAYO PREM AUDIO* 🌙\n\n` // Cambiado
  cap += `⚡ *Título:* ${vid.title}\n`
  cap += `📁 *Formato:* MP3\n`
  cap += `⏱️ *Duración:* ${vid.timestamp}\n`
  cap += `👁️ *Vistas:* ${vid.views.toLocaleString()}\n\n`
  cap += `🌩️ *Descargando audio...* \n⛈️ *Team Nightwish*` // Cambiado

  await conn.sendMessage(m.chat, { image: { url: vid.thumbnail }, caption: cap }, { quoted: m })
  await conn.sendMessage(m.chat, { audio: { url: json.data.dl }, mimetype: 'audio/mpeg', fileName: `${vid.title}.mp3` }, { quoted: m }) // Agregado fileName
}

handler.help = ['ytmp3 <url>']
handler.tags = ['downloader']
handler.command = /^ytmp3$/i

export default handler