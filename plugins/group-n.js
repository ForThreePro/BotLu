let mutedUsers = new Set();

let handler = async (m, { conn, command, participants }) => {
    let mentionedJid = m.mentionedJid[0]? m.mentionedJid[0] : m.quoted? m.quoted.sender : false;
    if (!mentionedJid) return m.reply(`╭─🐾 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐾
│ 🐱 *MIAU! ERROR*
│
│ 🎀 *USO:* Responde a un mensaje
│
│ > *“Necesito a quien callar, humano~”* 🐾
╰─────────────────❒`);

    let isUserAdmin = participants.find(p => p.id === mentionedJid)?.admin;
    if (isUserAdmin) return m.reply(`╭─🐾 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐾
│ 👑 *NO PUEDO*
│
│ ⚠️ *No se puede mutear a un administrador*
│
│ > *“Es un gato importante, miau~”* 🐱
╰─────────────────❒`);

    if (mentionedJid === conn.user.jid) return m.reply(`╭─🐾 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐾
│ 😿 *MIAU TRISTE*
│
│ ⚠️ *No puedo mutearme a mí misma*
│
│ > *“¿Quién maullaría entonces?”* 🐾
╰─────────────────❒`);

    if (command === "mute") {
        mutedUsers.add(mentionedJid);
        conn.reply(m.chat, `╭─🐾 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐾
│ 🔇 *GATITO SILENCIADO*
│
│ 👤 *Objetivo:* @${mentionedJid.split('@')[0]}
│ 📊 *Estado:* MUTE ACTIVADO
│
│ > *“Shhh... ya no maullará más”* 😼
╰─────────────────❒`, m, { mentions: [mentionedJid] });
    } else if (command === "unmute") {
        mutedUsers.delete(mentionedJid);
        conn.reply(m.chat, `╭─🐾 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐾
│ 🔊 *GATITO LIBERADO*
│
│ 👤 *Objetivo:* @${mentionedJid.split('@')[0]}
│ 📊 *Estado:* MUTE DESACTIVADO
│
│ > *“Ya puede maullar de nuevo~”* 🐱
╰─────────────────❒`, m, { mentions: [mentionedJid] });
    }
};

handler.before = async (m, { conn, isAdmin }) => {
    // Si el remitente del mensaje está en la lista de muteados, eliminamos el mensaje
    if (mutedUsers.has(m.sender)) {
        try {
            await conn.sendMessage(m.chat, { delete: m.key });
        } catch (e) {
            console.error(e);
        }
    }
};

handler.help = ['mute ( Reacciona Al Mensaje )', 'unmute ( Reacciona Al Mensaje )'].map(v => v + ' @user');
handler.tags = ['grupos'];
handler.command = /^(mute|unmute)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler