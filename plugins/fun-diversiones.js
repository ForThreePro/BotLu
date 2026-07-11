let handler = async (m, { conn, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0]
          : m.quoted? m.quoted.sender
          : m.sender;

  let name = await conn.getName(who);
  let userTarget = m.mentionedJid && m.mentionedJid[0]? `@${who.split('@')[0]}` : name;
  let porcentaje = Math.floor(Math.random() * 500) + 1;

  let respuestas = {
    'gay': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *GAY*
│
│ > *“Lu lo detectó con sus bigotes”* 🐾
╰─────────────────❒`,
    'lesbiana': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *LESBIANA*
│
│ > *“Ronroneo de confirmación”* 🐾
╰─────────────────❒`,
    'pajero': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERO*
│
│ > *“Lu no juzga, solo observa”* 🐾
╰─────────────────❒`,
    'pajera': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERA*
│
│ > *“Lu lava sus patitas y se va”* 🐾
╰─────────────────❒`,
    'puto': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *PUTO*
│ 🔥 *MÁS INFO A SU PRIVADO* 🔥🥵
│
│ > *“Lu se sonroja”* 🐾
╰─────────────────❒`,
    'puta': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *PUTA*
│ 🔥 *MÁS INFO A SU PRIVADO* 🔥🥵
│
│ > *“Lu se tapa los ojitos”* 🐾
╰─────────────────❒`,
    'manco': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *MANCO* 💩
│
│ > *“Ni para cazar ratones sirve”* 🐾
╰─────────────────❒`,
    'manca': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *MANCA* 💩
│
│ > *“A practicar con el rascador”* 🐾
╰─────────────────❒`,
    'rata': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *RATA* 🐁 *COME QUESO* 🧀
│
│ > *“Cuidado Lu te va a cazar”* 🐾
╰─────────────────❒`,
    'prostituto': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTO* 🫦👅
│ ❓ *¿QUIÉN QUIERE SUS SERVICIOS?*
│
│ > *“Lu ofrece galletas a cambio”* 🐾
╰─────────────────❒`,
    'prostituta': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTA* 🫦👅
│ ❓ *¿QUIÉN QUIERE SUS SERVICIOS?*
│
│ > *“Lu cobra en atún”* 🐾
╰─────────────────❒`
  }

  let respuestaFinal = respuestas[command.toLowerCase()];

  if (respuestaFinal) {
    await conn.sendMessage(m.chat, {
      text: respuestaFinal,
      mentions: [who]
    }, { quoted: m });
  }
}

handler.help = ['gay', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + " *@user*")
handler.tags = ['fun']
handler.command = /^(gay|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto)$/i

export default handler