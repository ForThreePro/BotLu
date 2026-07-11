let handler = async (m, { conn, isOwner, isAdmin, isROwner, command }) => {
  if (!m.isGroup) return
  let chat = global.db.data.chats[m.chat]
  let type = command.toLowerCase()

  if (!(isAdmin || isOwner || isROwner)) {
    global.dfail('admin', m, conn)
    return
  }

  switch (type) {
    case 'banchat': case 'banearchat':
      if (chat.isBanned) return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 😿 *ESTADO DE LA CASITA*
│
│ 🐾 *Este chat ya está baneado*
│ 😼 *El bot está dormidito aquí*
╰─────────────────❒`)
      chat.isBanned = true
      await conn.reply(m.chat, `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🚫 *CASITA BANEADA*
│
│ 😿 *Lu se va a dormir en este grupo*
│ 🐾 *No responderé a ningún comando*
│ 😼 *Desbaneen para que Lu despierte*
╰─────────────────❒`, m)
      break

    case 'unbanchat': case 'desbanearchat':
      if (!chat.isBanned) return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ ✅ *ESTADO DE LA CASITA*
│
│ 😼 *Este chat no está baneado*
│ 🐾 *Lu está despierta y activa*
╰─────────────────❒`)
      chat.isBanned = false
      await conn.reply(m.chat, `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ ✅ *CASITA DESBANEADA*
│
│ 😼 *Lu ha despertado*
│ 🐾 *Todos los comandos disponibles*
│ 💖 *Lu volvió a ronronear aquí*
╰─────────────────❒`, m)
      break

    default:
      return
  }
}

handler.help = ['banchat', 'unbanchat']
handler.tags = ['grupos']
handler.command = /^(banchat|banearchat|unbanchat|desbanearchat)$/i

export default handler