let handler = async (m, { conn, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0]
   ? m.mentionedJid[0]
          : m.quoted
   ? m.quoted.sender
          : m.sender;

  let yo = m.sender
  let nameYo = await conn.getName(yo);
  let nameUser = await conn.getName(who);
  let porcentaje = Math.floor(Math.random() * 101);

  if(command == 'love'){
    let frase = porcentaje < 30
? '😺 *MEJOR SER AMIGUIS DE LU*'
      : porcentaje < 60
? '😳 *HAY CHISPITA ENTRE USTEDES*'
      : porcentaje < 85
? '💗 *ESTA PAREJA DA PARA NOVIAZGO LU*'
      : '💍 *BODA CON PASTEL Y CREMITA DE LU*'

    await conn.sendMessage(m.chat, {
      text: `😺 *BOT LU AMORÓMETRO* 😺\n\n✨ *@${yo.split('@')[0]}* + *@${who.split('@')[0]}*\n📊 *COMPATIBILIDAD LU: ${porcentaje}%*\n${frase}\n\n🌙 *Escaneado con cariño gatuno por Bot Lu*`,
      mentions: [yo, who]
    }, {quoted: m})
  }
}

handler.help = ['love *@user*']
handler.tags = ['love', 'lu']
handler.command = /^(love)$/i

export default handler