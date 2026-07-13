import axios from 'axios'
import fs from 'fs'
import { exec } from 'child_process'

var handler = async (m, { conn, text, usedPrefix, command }) => {
    let final = text ? text.trim() : (m.quoted?.text || null)
    if (!final) return conn.reply(m.chat, `🐱 *BOT LU* ➔ Maulla el texto para tu sticker\n> *Ejemplo:* ${usedPrefix + command} Soy el rey del techo`, m)

    if (final.length > 35) {
        return conn.reply(m.chat, `🐱 *BOT LU* ➔ Demasiado largo michi.\n\n📌 Máximo: *35 letras*`, m)
    }

    await m.react('🐾')

    try {
        const formatted = wrap(final, 28)
        const key = Buffer.from('c3lscGh5LTZmMTUwZA==', 'base64').toString('utf-8')
        const url = `https://sylphyy.xyz/tools/brat?text=${encodeURIComponent(formatted)}&color=black&fondo=white&type=Nose&api_key=${key}`

        const res = await axios.get(url, { responseType: 'arraybuffer' })

        const img = `./tmp-${Date.now()}.png`
        const webp = `./tmp-${Date.now()}.webp`
        fs.writeFileSync(img, res.data)

        await new Promise((resolve, reject) => {
            exec(`ffmpeg -i ${img} -vcodec libwebp -vf "scale=512:512:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000" ${webp}`, (err) => {
                if (err) reject(err)
                else resolve()
            })
        })

        await conn.sendMessage(m.chat, { 
            sticker: fs.readFileSync(webp), 
            packname: "Bot Lu Stickers 🐾", 
            author: "Whois Yallico 🐾" 
        }, { quoted: m })

        await m.react('😼')

        if (fs.existsSync(img)) fs.unlinkSync(img)
        if (fs.existsSync(webp)) fs.unlinkSync(webp)

    } catch (e) {
        await m.react('❌')
        m.reply('🐱 *BOT LU ERROR* ➔ Se me cayó el ovillo al generar el sticker.')
    }
}

function wrap(text, max = 22) {
    let words = text.split(' ')
    let lines = []
    let cur = []
    for (let w of words) {
        if ((cur.join(' ').length + w.length + 1) > max) {
            lines.push(cur.join(' '))
            cur = [w]
        } else {
            cur.push(w)
        }
    }
    if (cur.length) lines.push(cur.join(' '))
    return lines.join('\n')
}

handler.help = ['brat <texto>']
handler.tags = ['sticker']
handler.command = /^(brat)$/i
handler.limit = true

export default handler