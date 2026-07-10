import { WAMessageStubType } from '@whiskeysockets/baileys'

export async function before(m, { conn, groupMetadata }) {
  try {
    if (!m.messageStubType ||!m.isGroup) return

    const chat = global.db?.data?.chats?.[m.chat]
    if (!chat?.detector) return

    const userJid = m.messageStubParameters?.[0] || m.participant || m.sender
    if (!userJid) return

    const user = `@${userJid.split('@')[0]}`
    const group = groupMetadata?.subject || 'este grupo'
    const img = 'https://files.evogb.win/91Vvmc.jpg'

    let txt = ''
    switch (m.messageStubType) {
      case WAMessageStubType.GROUP_PARTICIPANT_ADD:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n🌩️ ${user} se unió a *${group}*`; break
      case WAMessageStubType.GROUP_PARTICIPANT_LEAVE:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n💨 ${user} salió de *${group}*`; break
      case WAMessageStubType.GROUP_PARTICIPANT_REMOVE:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n🚮 ${user} fue expulsado de *${group}*`; break
      case WAMessageStubType.GROUP_PARTICIPANT_ADD_ADMIN:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n👑 ${user} ahora es *ADMIN*`; break
      case WAMessageStubType.GROUP_PARTICIPANT_REMOVE_ADMIN:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n📉 ${user} ya no es *ADMIN*`; break
      case WAMessageStubType.GROUP_CHANGE_SUBJECT:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n📝 *Nombre cambiado* a: ${m.messageStubParameters?.[0]}`; break
      case WAMessageStubType.GROUP_CHANGE_DESCRIPTION:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n📜 *Descripción cambiada*`; break
      case WAMessageStubType.GROUP_CHANGE_ICON:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n🖼️ *Foto del grupo cambiada*`; break
    }

    if (txt) {
      await conn.sendMessage(m.chat, {
        image: { url: img },
        caption: txt,
        mentions: [userJid]
      })
    }

  } catch (e) {
    console.log("Error Detector:", e)
  }
}

export default function(){}