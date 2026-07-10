const handler = async (m, { conn, text, command, isAdmin, isOwner }) => {
    if (!m.isGroup || (!isAdmin &&!isOwner)) {
        return m.reply('⛈️ *RAYO PREM* ⚡\n\n❌ *¡ACCESO DENEGADO!*\nSolo los admins o el dueño pueden dictar sentencia.');
    }

    let chat = global.db.data.chats[m.chat]??= {}

    if (command === 'setkick') {
        if (!text) return m.reply(`🌩️ *RAYO PREM SETKICK* ⚡\n\n❌ *¡FALTA EL MENSAJE!*\n\n📝 *Placeholders:*\n@user = Mención\n@group = Grupo\n@count = Miembros\n@desc = Descripción\n💡 *Ejemplo:*\n.setkick 🚫 @user fue alcanzado por el trueno ⚡\n🌩️ Eliminado de @group\n👥 Quedan @count guerreros`);

        chat.customKick = text.trim();

        return m.reply(`⛈️ *RAYO PREM* ⚡\n\n✅ *¡KICK GUARDADO!*\n\n📝 *Vista previa:*\n\`\`${text.trim()}\`\n\n🗑️ *Para borrar:* .delkick`);

    } else if (command === 'delkick') {
        if (!chat.customKick) return m.reply('🌩️ *RAYO PREM* ⚡\n\n⚠️ *No tienes un kick editado.*\nSe está usando el juicio del trueno por defecto.');
        delete chat.customKick;
        return m.reply('⛈️ *RAYO PREM* ⚡\n\n✅ *¡LISTO!*\n\n🗑️ Se eliminó el kick personalizado.\n⚡ Ahora se usa el de `welcome.js` del trueno.');
    }
};
handler.help = ['setkick <mensaje>', 'delkick'];
handler.tags = ['group'];
handler.command = /^(setkick|delkick)$/i;
handler.admin = true;
handler.group = true;
export default handler;
