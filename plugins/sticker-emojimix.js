let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [emoji1, emoji2] = text.split(/[&+\s]+/)
    if (!emoji1 || !emoji2) return conn.reply(m.chat, `🐱 *BOT LU* ➔ Uso correcto: ${usedPrefix + command} emoji1+emoji2\n> Ejemplo: ${usedPrefix + command} 🐱+⚡\n> Combina 2 emojis y crea un sticker michi`, m)

    let url = `https://api.evogb.org/tools/emojimix?emoji1=${encodeURIComponent(emoji1)}&emoji2=${encodeURIComponent(emoji2)}&key=sasuke`

    try {
        await conn.sendMessage(m.chat, { sticker: { url: url } }, { quoted: m })
        await conn.react(m.chat, '🐾', m.key) // Huellita
    } catch (e) {
        conn.reply(m.chat, `🐱 *BOT LU ERROR* ➔ Se me enredó el ovillo al mezclar los emojis.\n\`\`${e.message}\`\n🐾 *Intenta con otros 2 emojis*`, m)
    }
}

handler.help = ['emojimix <emoji1>+<emoji2>']
handler.tags = ['fun']
handler.command = ['emojimix', 'mix']
handler.limit = true

export default handler