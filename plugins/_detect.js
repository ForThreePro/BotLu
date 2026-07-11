import chalk from 'chalk'
import { WAMessageStubType } from '@whiskeysockets/baileys'

let handler = m => m

handler.before = async function (m, { conn, groupMetadata }) {
    if (!m.messageStubType ||!m.isGroup) return

    let chat = global.db.data.chats[m.chat]
    if (!chat?.detect) return

    const userJid = m.sender
    const usuario = `@${userJid.split('@')[0]}`
    const group = groupMetadata.subject

    let txt = ''

    switch (m.messageStubType) {
        case 21: // Cambiar nombre
            txt = `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🐾 *REGISTRO DEL GRUPO*
│
│ 📢 *CAMBIO DE NOMBRE*
│ 👤 *Usuario:* ${usuario}
│ 📝 *Nuevo:* _${m.messageStubParameters[0]}_
│ 🏠 *Grupo:* ${group}
│
│ > *“Lu tomó nota del cambio”* 😼
╰─────────────────❒`; break

        case 22: // Cambiar foto
            txt = `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🐾 *REGISTRO DEL GRUPO*
│
│ 📸 *CAMBIO DE FOTO*
│ 👤 *Usuario:* ${usuario}
│ 🖼️ *Nueva imagen establecida*
│ 🏠 *Grupo:* ${group}
│
│ > *“Que linda se ve la casita”* 🐱
╰─────────────────❒`; break

        case 23: // Cambiar link
            txt = `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ ⚠️ *ALERTA DE SEGURIDAD*
│
│ 🔗 *LINK RESETEADO*
│ 👤 *Usuario:* ${usuario}
│ 🏠 *Grupo:* ${group}
│
│ > *“El portal del grupo cambió”* 🐾
╰─────────────────❒`; break

        case 25: // Cambiar ajustes
            txt = `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🛡️ *AJUSTES MODIFICADOS*
│
│ 👤 *Usuario:* ${usuario}
│ ⚙️ *Permisos:* ${m.messageStubParameters[0] == 'on'? '*SOLO ADMINS* 🔒' : '*TODOS* 🔓'}
│ 📊 *Edición de info de grupo*
│
│ > *“Lu registró el cambio”* 😼
╰─────────────────❒`; break

        case 26: // Abrir/Cerrar
            txt = `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🐾 *ESTADO DEL CHAT*
│
│ 👤 *Usuario:* ${usuario}
│ 🗣️ *Modo:* ${m.messageStubParameters[0] == 'on'? '*SOLO ADMINS* 🔒' : '*TODOS* 🔓'}
│ 📢 *Grupo:* ${m.messageStubParameters[0] == 'on'? 'CERRADO' : 'ABIERTO'}
│
│ > *“Lu vigila la puerta”* 🐱
╰─────────────────❒`; break

        case 29: // Dar admin
            txt = `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 👑 *NUEVO ADMIN*
│
│ 🐾 *Nuevo Admin:* @${m.messageStubParameters[0].split('@')[0]}
│ 👤 *Otorgado por:* ${usuario}
│ 😼 *Rango:* Administrador
│
│ > *“Que gobierne con sabiduría”* 🐾
╰─────────────────❒`; break

        case 30: // Quitar admin
            txt = `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 📉 *ADMIN DESTITUIDO*
│
│ 💥 *Admin caído:* @${m.messageStubParameters[0].split('@')[0]}
│ 👤 *Ejecutado por:* ${usuario}
│ 🗑️ *Rango removido*
│
│ > *“Lu registró la destitución”* 😿
╰─────────────────❒`; break

        case WAMessageStubType.GROUP_PARTICIPANT_ADD:
            txt = `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🐾 *NUEVO INTEGRANTE*
│
│ 💖 *Bienvenido:* @${m.messageStubParameters[0].split('@')[0]}
│ 🏠 *Grupo:* ${group}
│ 😼 *Estado:* Ingreso registrado
│
│ > *“Ronroneos para el nuevo”* 🐱
╰─────────────────❒`; break

        case WAMessageStubType.GROUP_PARTICIPANT_LEAVE:
            txt = `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 💨 *SALIDA REGISTRADA*
│
│ 😿 *Se fue:* @${m.messageStubParameters[0].split('@')[0]}
│ 🏠 *Grupo:* ${group}
│ 🌫️ *Estado:* Abandonó el grupo
│
│ > *“Lu extrañará sus ronroneos”* 🐾
╰─────────────────❒`; break

        case WAMessageStubType.GROUP_PARTICIPANT_REMOVE:
            txt = `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🗑️ *EXPULSIÓN EJECUTADA*
│
│ 🚮 *Eliminado:* @${m.messageStubParameters[0].split('@')[0]}
│ 👤 *Por orden de:* ${usuario}
│ ⚠️ *Causa:* Violación de reglas
│
│ > *“Lu protegió al grupo”* 😼
╰─────────────────❒`; break
    }

    if (txt) {
        await this.sendMessage(m.chat, {
            text: txt,
            mentions: [userJid,...(m.messageStubParameters?.[0]? [m.messageStubParameters[0]] : [])]
        })
    }
}

export default handler