let handler = async (m, { conn }) => {
    try {
        await conn.groupParticipantsUpdate(m.chat, [conn.user.jid], 'promote')
        m.reply(`╭─❒ *『 𝗕𝗢𝗧 𝗟𝗨 』* ❒
│ 👑 *AUTOPROMOTE*
│
│ ✅ *Estado:* Admin asignado
│ 😼 *Bot Lu toma las riendas de la casa*
╰─────────────────❒`)
    } catch (e) {
        m.reply(`╭─❒ *『 𝗕𝗢𝗧 𝗟𝗨 』* ❒
│ ❌ *ERROR AUTOPROMOTE*
│
│ ⚠️ *No pude darme admin michi*
│ 🐾 *Hazme admin primero para cuidar el grupo*
╰─────────────────❒`)
    }
}

handler.help = ['autoadmin']
handler.tags = ['owner']
handler.command = ['autoadmin']
handler.rowner = true

export default handler