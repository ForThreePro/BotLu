let handler = async (m, { conn, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0]
          : m.quoted? m.quoted.sender
          : m.sender;

  let name = await conn.getName(who);
  let userTarget = m.mentionedJid && m.mentionedJid[0]? `@${who.split('@')[0]}` : name;
  let porcentaje = Math.floor(Math.random() * 500) + 1;

  let respuestas = {
    // BASE
    'gay': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *GAY*\n🐾 *Maulla con orgullo* 🐾`,
    'lesbiana': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *LESBIANA*\n🐾 *Gatita independiente* 🐾`,
    'pajero': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERO*\n🐾 *Se la pasa amasando cobijas* 🐾`,
    'pajera': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERA*\n🐾 *Amasando 24/7* 🐾`,
    'puto': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *PUTO*\n🔥 *MÁS INFORMACIÓN A SU CAJA DE ARENA* 🔥🥵\n🐾`,
    'puta': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *PUTA*\n🔥 *MÁS INFORMACIÓN A SU CAJA DE ARENA* 🔥🥵\n🐾`,
    'manco': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *MANCO* 💩\n🐾 *Ni atrapa ratones* 🐾`,
    'manca': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *MANCA* 💩\n🐾 *Se cae del techo* 🐾`,
    'rata': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *RATA* 🐁 *COME QUESO* 🧀\n🐾 *Competencia de Bot Lu* 🐾`,
    'prostituto': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTO* 🫦👅\n❓ *¿QUIÉN QUIERE ADOPTARLO?*\n🐾`,
    'prostituta': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTA* 🫦👅\n❓ *¿QUIÉN QUIERE ADOPTARLA?*\n🐾`,

    // GATUNOS
    'burro': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *BURRO* 🫏\n🐾 *Ni el rascador lo entiende*\n🐾`,
    'burra': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *BURRA* 🫏\n🐾 *Reprobó en cazar cucarachas*\n🐾`,
    'kbro': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *KBRO* 😈\n🔥 *NO RESPETA NI A SU DUEÑO* 🔥\n🐾`,
    'chivo': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *CHIVO* 🐐\n🐾 *Huele a atún y travesuras*\n🐾`,
    'kchera': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *KCHERA* 😈💃\n🔥 *ROMPE CORAZONES MICHIS* 🔥\n🐾`,
    'cornudo': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *CORNUOO* 🦌\n🔥 *LE PUSIERON CUERNOS DE JUGUETE* 🔥\n🐾`,
    'kchudo': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *KCHUDO* 😈\n🔥 *NO PERDONA NI UN PESCADO* 🔥\n🐾`,
    'sarnoso': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *SARNOSO* 🤢\n⚠️ *NI SE LE ACERQUEN* ⚠️\n🐾`,

    // NUEVOS
    'infiel': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *INFIEL* 💔\n🚨 *CAMBIA DE DUEÑO COMO DE CAMA* 🚨\n🐾`,
    'fiel': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *FIEL* 💍\n😇 *EL GATO MÁS LEAL DEL MUNDO*\n🐾`,

    // +30 PERÚ GATUNOS
    'choro': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *CHORO* 🏃‍♂️💨\n⚠️ *GUARDEN SUS PESCADOS* ⚠️\n🐾`,
    'cachero': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *CACHERO* 😈\n🔥 *NI EN AZOTEA LO PARAN* 🔥\n🐾`,
    'cauchera': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *CAUCHERA* 😈💃\n🔥 *REINA DEL TECHO* 🔥\n🐾`,
    'cabezón': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *CABEZÓN* 🤯\n🐾 *Cabeza más grande que su cuerpo*\n🐾`,
    'jinetero': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *JINETERO* 🏍️\n🐾 *Corre como si lo persiguiera un perro*\n🐾`,
    'sangre': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *SANGRE* 🩸\n🐾 *Vive pidiendo croquetas*\n🐾`,
    'tragón': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *TRAGÓN* 🍻\n🐾 *Se toma hasta el agua del florero*\n🐾`,
    'fresa': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *FRESA* 🍓\n🐾 *Solo come comida premium*\n🐾`,
    'pipero': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *PIPERO* 🌿\n🐾 *Vive en la caja de cartón*\n🐾`,
    'muerto': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *MUERTO* 💀\n🐾 *Duerme 20 horas al día*\n🐾`,
    'bamba': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *BAMBA* 📱\n⚠️ *Su rascador se desarma en 2 días*\n🐾`,
    'yapa': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *YAPA* 🥭\n🐾 *Siempre pide más comida*\n🐾`,
    'caña': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *CAÑA* 🥃\n🐾 *Con 2 ronroneos ya está mareado*\n🐾`,
    'pata': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *PATA* 🤝\n🐾 *El alma de la manada de gatos*\n🐾`,
    'floro': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *FLORO* 💬\n🐾 *Maulla bonito para que le den comida*\n🐾`,
    'gil': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *GIL* 🤡\n🐾 *Se cae solo del sillón*\n🐾`,
    'gilasa': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *GILASA* 🤡\n🐾 *Cree en todo*\n🐾`,
    'lenteja': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *LENTEJA* 🐢\n🐾 *Demora 1 hora en bajar de la mesa*\n🐾`,
    'chibolo': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *CHIBOLO* 👶\n🐾 *Gatito que solo juega*\n🐾`,
    'chibola': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *CHIBOLA* 👧\n🐾 *Gatita que sube 20 fotos*\n🐾`,
    'viejo': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *VIEJO* 👴\n🐾 *Se queja de todo y duerme al sol*\n🐾`,
    'vieja': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *VIEJA* 👵\n🐾 *Chisme nivel azotea*\n🐾`,
    'grasa': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *GRASA* 💪\n🐾 *Solo va al techo a tomar fotos*\n🐾`,
    'graso': `🐱 *BOT LU SCANNER MICHIS* 🐾\n😼 *${userTarget}* *ES* *${porcentaje}%* *GRASO* 💪\n🐾 *Piensa que está hermoso*\n🐾`,
    'pituco': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *PITUCO* 💎\n🐾 *Toma leche de la cara*\n🐾`,
    'pituca': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *PITUCA* 💎\n🐾 *Duerme en cama de 200 soles*\n🐾`,
    'sapa': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *SAPA* 🐸\n🐾 *Ve todo desde la ventana*\n🐾`,
    'sapo': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *SAPO* 🐸\n🐾 *El chismoso del barrio*\n🐾`,
    'trome': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *TROME* 👑\n🔥 *EL ALFA DEL TEJADO* 🔥\n🐾`,
    'reina': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *REINA* 👑\n🐾 *Manda en toda la casa*\n🐾`,
    'king': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *KING* 👑\n🐾 *EL JEFE DE LA JODA GATUNA*\n🐾`,
    'zombie': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *ZOMBIE* 🧟\n🐾 *Vive con sueño*\n🐾`,
    'tóxica': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *TÓXICA* ☠️\n🐾 *Revisa el celular de su dueño*\n🐾`,
    'tóxico': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *TÓXICO* ☠️\n🐾 *Celoso hasta de la almohada*\n🐾`,
    'simp': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *SIMP* 🥺\n🐾 *Manda 50 maullidos*\n🐾`,
    'vago': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *VAGO* 🛌\n🐾 *Trabaja 2 horas al año*\n🐾`,
    'vaga': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *VAGA* 🛌\n🐾 *Maratón de siestas*\n🐾`,
    'loquito': `🐱 *BOT LU SCANNER MICHIS* 🐾\n\n😼 *${userTarget}* *ES* *${porcentaje}%* *LOQUITO* 🤪\n🐾 *Persigue su cola*\n🐾`
  }

  let respuestaFinal = respuestas[command.toLowerCase()];

  if (respuestaFinal) {
    await conn.sendMessage(m.chat, {
      text: respuestaFinal,
      mentions: [who]
    }, { quoted: m });
  }
}

handler.help = ['gay', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'burro', 'burra', 'kbro', 'chivo', 'kchera', 'cornudo', 'kchudo', 'sarnoso', 'infiel', 'fiel', 'choro', 'cachero', 'cauchera', 'cabezón', 'jinetero', 'sangre', 'tragón', 'fresa', 'pipero', 'muerto', 'bamba', 'yapa', 'caña', 'pata', 'floro', 'gil', 'gilasa', 'lenteja', 'chibolo', 'chibola', 'viejo', 'vieja', 'grasa', 'graso', 'pituco', 'pituca', 'sapa', 'sapo', 'trome', 'reina', 'king', 'zombie', 'tóxica', 'tóxico', 'simp', 'vago', 'vaga', 'loquito', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + " *@user*")
handler.tags = ['fun']
handler.command = /^(gay|lesbiana|pajero|pajera|puto|puta|burro|burra|kbro|chivo|kchera|cornudo|kchudo|sarnoso|infiel|fiel|choro|cachero|cauchera|cabezón|jinetero|sangre|tragón|fresa|pipero|muerto|bamba|yapa|caña|pata|floro|gil|gilasa|lenteja|chibolo|chibola|viejo|vieja|grasa|graso|pituco|pituca|sapa|sapo|trome|reina|king|zombie|tóxica|tóxico|simp|vago|vaga|loquito|manco|manca|rata|prostituta|prostituto)$/i

export default handler