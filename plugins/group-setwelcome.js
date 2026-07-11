const handler = async (m, { conn, text, command, isAdmin, isOwner }) => {
    if (!m.isGroup || (!isAdmin &&!isOwner)) {
        return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 😿 *ACCESO DENEGADO*
│
│ 🐾 *Solo los admins o el humano*
│ 😼 *pueden dar la bienvenida*
╰─────────────────❒`);
    }

    let chat = global.db.data.chats[m.chat]
    if (!chat) global.db.data.chats[m.chat] = {}
    chat = global.db.data.chats[m.chat]

    if (command === 'setwelcome') {
        if (!text) return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 👋 *CONFIGURAR BIENVENIDA*
│
│ 😼 *Falta el mensaje*
│
│ 📝 *Placeholders:*
│ @user = Mención
│ @group = Casita  
│ @count = Miembros
│ @desc = Descripción
│
│ 💡 *Ejemplo:*
│ .setwelcome 🐾 @user llegó a la casita 😼
│ 🏠 Bienvenido a @group
│ 👥 Eres el gatito #@count
╰─────────────────❒`);
        chat.customWelcome = text.trim();
        return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ ✅ *BIENVENIDA GUARDADA*
│
│ 📝 *Vista previa:*
│ \`\`${text.trim()}\`\`
│
│ 🗑️ *Para borrar:* .delwelcome
╰─────────────────❒`);
    }
    if (command === 'delwelcome') {
        if (!chat.customWelcome) return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ ⚠️ *SIN BIENVENIDA*
│
│ 😼 *No tienes una bienvenida editada*
╰─────────────────❒`);
        delete chat.customWelcome;
        return m.reply(`╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ ✅ *BIENVENIDA ELIMINADA*
│
│ 🗑️ *Se borró el mensaje personalizado*
│ 🐾 *Ahora se usa la de welcome.js*
╰─────────────────❒`);
    }
};
handler.help = ['setwelcome <mensaje>', 'delwelcome'];
handler.tags = ['group'];
handler.command = /^(setwelcome|delwelcome)$/i;
handler.admin = true;
handler.group = true;
export default handler;