const userSpamData = {}

let handler = async (m, { conn, args, isOwner }) => {
  if (!isOwner) return global.dfail('owner', m, conn)
  let bot = global.db.data.settings[conn.user.jid] || {}

  if (/on/i.test(args[0])) {
    bot.antiSpam = true
    await conn.reply(m.chat, "⛈️ *RAYO PREM ANTI-SPAM* 🌙\n\n⚡ *ANTI-SPAM ACTIVADO*\n\n🌩️ *Filtro:* Stickers y Emojis\n⛈️ *Team Nightwish*", m) // Cambiado
  } else if (/off/i.test(args[0])) {
    bot.antiSpam = false
    await conn.reply(m.chat, "⛈️ *RAYO PREM ANTI-SPAM* 🌙\n\n❌ *ANTI-SPAM DESACTIVADO*", m) // Cambiado
  } else {
    await conn.reply(m.chat, `⛈️ *RAYO PREM ANTI-SPAM* 🌙\n\n📌 *Uso:* *.antispam on/off*\n⚡ *Protege al grupo de spam de stickers y emojis*`, m) // Cambiado
  }
}

handler.help = ['antispam on/off']
handler.tags = ['config']
handler.command = /^(antispam)$/i

handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner, isPrems }) {
  const chat = global.db.data.chats[m.chat]
  const bot = global.db.data.settings[conn.user.jid] || {}

  if (!bot.antiSpam || m.fromMe) return

  const sender = m.sender
  const currentTime = Date.now()
  const timeWindow = 6000
  const warnLimit = 4
  const kickLimit = 6

  const isEmojiOnly = m.text? /^(?:\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}|\p{Emoji_Modifier}|\p{Emoji_Component})+$/u.test(m.text.trim()) : false
  const isSticker = m.mtype === 'stickerMessage'

  if (!isSticker &&!isEmojiOnly) return

  if (!userSpamData[sender] || (currentTime - userSpamData[sender].startTime > timeWindow)) {
    userSpamData[sender] = {
      startTime: currentTime,
      messageCount: 1
    }
  } else {
    userSpamData[sender].messageCount++
  }

  const count = userSpamData[sender].messageCount

  if (isOwner || isROwner) {
    if (count === warnLimit) {
      await conn.reply(m.chat, `⛈️ *RAYO PREM* 🌙\n\n⚡ *Oye creador, baja al spam* 🌀\n> Estás saturando con stickers/emojis`, m) // Cambiado
    }
    return
  }

  if (m.isGroup && (isAdmin || isPrems ||!isBotAdmin)) return

  if (count === warnLimit) {
    await conn.reply(m.chat, `⛈️ *RAYO PREM ALERTA* 🌙\n\n⚡ *@${sender.split('@')[0]}* ¡Bájale al spam!\n\n📊 *Stickers/Emojis:* ${count}/${kickLimit}\n> Sigue así y te fulmina el trueno ⚡`, m, { mentions: [sender] }) // Cambiado
  }
  else if (count >= kickLimit) {
    await conn.reply(m.chat, `⛈️ *RAYO PREM EXPULSIÓN* 🌙\n\n⚡ *@${sender.split('@')[0]}* fue eliminado por spam de stickers/emojis.\n\n🚮 *Causa:* Flood\n👥 *El trueno no perdona*`, m, { mentions: [sender] }) // Cambiado
    if (m.isGroup) {
      await conn.groupParticipantsUpdate(m.chat, [sender], 'remove')
    }
    delete userSpamData[sender]
  }
}

export default handler