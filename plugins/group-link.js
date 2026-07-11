let handler = async (m, { conn }) => {
    try {
        let link = await conn.groupInviteCode(m.chat)
        let text = `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔗 *LINK DE LA CASITA*
│
│ 🐾 https://chat.whatsapp.com/${link}
│
│ > *“Invita con responsabilidad”* 😼
╰─────────────────❒`
        m.reply(text)
    } catch {
        m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 😿 *ERROR*
│
│ 🐾 *No pude obtener el link*
│ 😼 *¿Lu es administradora de la casita?*
╰─────────────────❒`)
    }
}

handler.help = ['link']
handler.tags = ['grupos']
handler.command = ['link', 'linkgroup']
handler.group = true
handler.botAdmin = true

export default handler