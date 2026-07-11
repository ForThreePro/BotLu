let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = {
        'abrir': 'not_announcement',
        'cerrar': 'announcement',
    }[(args[0] || '')]

    if (isClose === undefined) {
        await conn.reply(m.chat, `🐱 *CONFIGURAR CASITA* 🐱\n\n😼 *Elije una opción:*\n*${usedPrefix + command}* abrir\n*${usedPrefix + command}* cerrar`, m)
        return
    }

    await conn.groupSettingUpdate(m.chat, isClose)

    // Aviso de la acción realizada
    let estado = isClose === 'announcement'? 'cerrada 🔒' : 'abierta 🔓'
    let emoji = isClose === 'announcement'? '😿' : '😼'
    await conn.reply(m.chat, `${emoji} *CASITA ${estado.toUpperCase()}*\n🐾 *Acción por:* @${m.sender.split('@')[0]}\n😼 *Bot Lu cuidando la casita*`, m, {
        mentions: [m.sender]
    })
}

handler.help = ['grupo abrir', 'grupo cerrar']
handler.tags = ['grupos']
handler.command = ['group', 'grupo']
handler.admin = true
handler.botAdmin = true

export default handler