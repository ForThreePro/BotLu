const handler = async (m, { conn, text, isAdmin, isOwner }) => {
    if (!m.isGroup) return m.reply('⛈️ *RAYO PREM* ⚡ Solo en grupos')
    if (!isAdmin && !isOwner) return m.reply('⛈️ *RAYO PREM* ⚡ Solo admins')

    let chat = global.db.data.chats[m.chat] ??= {}
    
    if (!text) return m.reply(`🌩️ *RAYO PREM SETWELCOME* ⚡\n\n❌ *¡FALTA EL MENSAJE!*\n\n💡 *Ejemplo:*\n.setwelcome ⛈️ Bienvenido @user a @group`)
        
    chat.customWelcome = text.trim();
    m.reply(`⛈️ *RAYO PREM* ⚡\n\n✅ *¡BIENVENIDA GUARDADA!*\n\n\`\`${text.trim()}\``)
};

handler.help = ['setwelcome <mensaje>'];
handler.tags = ['group'];
handler.command = 'setwelcome'; // <-- FORZADO
handler.admin = true;
handler.group = true;
export default handler;