const handler = async (m, { conn, text, command, isAdmin, isOwner }) => {
    if (!m.isGroup || (!isAdmin &&!isOwner)) {
        return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 😿 *ACCESO DENEGADO*
│
│ 🐾 *Solo los admins o el humano*
│ 😼 *pueden dictar reglas*
╰─────────────────❒`);
    }

    let chat = global.db.data.chats[m.chat]
    if (!chat) global.db.data.chats[m.chat] = {}
    chat = global.db.data.chats[m.chat]

    if (command === 'setkick') {
        if (!text) return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🚫 *CONFIGURAR KICK*
│
│ 😼 *Falta el mensaje*
│
│ 💡 *Ejemplo:*
│ .setkick 🚫 @user fue sacado de la casita 🐾
╰─────────────────❒`);
        chat.customKick = text.trim();
        return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ ✅ *KICK GUARDADO*
│
│ 📝 *Vista previa:*
│ \`\`${text.trim()}\`\`
│
│ 🗑️ *Para borrar:* .delkick
╰─────────────────❒`);
    }
    if (command === 'delkick') {
        if (!chat.customKick) return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ ⚠️ *SIN KICK*
│
│ 😼 *No tienes un kick personalizado*
╰─────────────────❒`);
        delete chat.customKick;
        return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ ✅ *KICK ELIMINADO*
│
│ 🗑️ *Se borró el mensaje personalizado*
╰─────────────────❒`);
    }
};
handler.help = ['setkick <mensaje>', 'delkick'];
handler.tags = ['group'];
handler.command = /^(setkick|delkick)$/i;
handler.admin = true;
handler.group = true;
export default handler;