let handler = async (m, { conn, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0]
          : m.quoted? m.quoted.sender
          : m.sender;

  let name = await conn.getName(who);
  let userTarget = m.mentionedJid && m.mentionedJid[0]? `@${who.split('@')[0]}` : name;
  let porcentaje = Math.floor(Math.random() * 500) + 1;

  let respuestas = {
    // BASE
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

    // TUS 5 + NUEVOS 3
    'burro': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *BURRO* 🫏
│ 🤡 *NI EL JEFE LO ENTIENDE*
│
│ > *“Lu le presta su cerebro”* 🐾
╰─────────────────❒`,
    'burra': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *BURRA* 🫏
│ 🤡 *REPROBÓ HASTA EN EDUC. FÍSICA*
│
│ > *“Lu le da clases gratis”* 🐾
╰─────────────────❒`,
    'kbro': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *KBRO* 😈
│ 🔥 *NO RESPETA NI A SU ABUELA*
│
│ > *“Lu se aleja por si acaso”* 🐾
╰─────────────────❒`,
    'chivo': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *CHIVO* 🐐
│ 💨 *HUELE A CERVEZA Y DISCOTECA*
│
│ > *“Lu le ofrece un baño”* 🐾
╰─────────────────❒`,
    'kchera': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *KCHERA* 😈💃
│ 🔥 *ROMPE CORAZONES*
│
│ > *“Lu cobra en pescado”* 🐾
╰─────────────────❒`,

    // NUEVOS 3 PEDIDOS
    'cornudo': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *CORNUOO* 🦌
│ 🔥 *LE PUSIERON LOS CUERNOS* 🔥
│
│ > *“Lu le presta su gorrito”* 🐾
╰─────────────────❒`,
    'kchudo': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *KCHUDO* 😈
│ 🔥 *NO PERDONA NI UNA* 🔥
│
│ > *“Lu le tapa los ojitos”* 🐾
╰─────────────────❒`,
    'sarnoso': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *SARNOSO* 🤢
│ ⚠️ *NI SE LE ACERQUEN* ⚠️
│
│ > *“Lu le regala jabón”* 🐾
╰─────────────────❒`,

    // PERÚ +30
    'choro': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *CHORO* 🏃‍♂️💨
│ ⚠️ *CUIDEN SUS CELULARES* ⚠️
│
│ > *“Lu ya llamó a serenazgo”* 🐾
╰─────────────────❒`,
    'cachero': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *CACHERO* 😈
│ 🔥 *NI EL TOQUE LE GANA* 🔥
│
│ > *“Lu prefiere su caja de arena”* 🐾
╰─────────────────❒`,
    'cauchera': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *CAUCHERA* 😈💃
│ 🔥 *REINA DEL HUARIQUE* 🔥
│
│ > *“Lu cobra en ceviche”* 🐾
╰─────────────────❒`,
    'cabezón': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *CABEZÓN* 🤯
│ 🧠 *PIENSA CON LA OTRA CABEZA*
│
│ > *“Lu recomienda casco”* 🐾
╰─────────────────❒`,
    'jinetero': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *JINETERO* 🏍️
│ 💨 *PILOTO DE MOTOTAXI*
│
│ > *“Lu se sube pero con casco”* 🐾
╰─────────────────❒`,
    'sangre': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *SANGRE* 🩸
│ 💸 *VIVE DE PRESTAMO*
│
│ > *“Lu no fía”* 🐾
╰─────────────────❒`,
    'tragón': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *TRAGÓN* 🍻
│ 🍺 *SE TOMA HASTA EL AGUA DEL FLORERO*
│
│ > *“Lu se esconde la cerveza”* 🐾
╰─────────────────❒`,
    'fresa': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *FRESA* 🍓
│ 💅 *HABLA COMO GRINGO*
│
│ > *“Lu prefiere el atún nacional”* 🐾
╰─────────────────❒`,
    'pipero': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *PIPERO* 🌿
│ 😵‍💫 *VIVE EN OTRA DIMENSIÓN*
│
│ > *“Lu le quita la pipa”* 🐾
╰─────────────────❒`,
    'muerto': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *MUERTO* 💀
│ 😴 *DUERME EN TODA REUNIÓN*
│
│ > *“Lu le echa agua”* 🐾
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
    //... aquí pegas los otros 30 que ya tenías: bamba, yapa, caña, pata, floro, gil, etc
  }

  let respuestaFinal = respuestas[command.toLowerCase()];

  if (respuestaFinal) {
    await conn.sendMessage(m.chat, {
      text: respuestaFinal,
      mentions: [who]
    }, { quoted: m });
  }
}

handler.help = ['gay', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'burro', 'burra', 'kbro', 'chivo', 'kchera', 'cornudo', 'kchudo', 'sarnoso', 'choro', 'cachero', 'cauchera', 'cabezón', 'jinetero', 'sangre', 'tragón', 'fresa', 'pipero', 'muerto', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + " *@user*")
handler.tags = ['fun']
handler.command = /^(gay|lesbiana|pajero|pajera|puto|puta|burro|burra|kbro|chivo|kchera|cornudo|kchudo|sarnoso|choro|cachero|cauchera|cabezón|jinetero|sangre|tragón|fresa|pipero|muerto|manco|manca|rata|prostituta|prostituto)$/i

export default handler