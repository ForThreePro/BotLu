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
╰─────────────────❒`,

    // PERÚ + TUS 5
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

    // +30 NUEVOS PERÚ
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
    'bamba': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *BAMBA* 📱
│ ⚠️ *CELULAR DURA 2 DIAS*
│
│ > *“Lu no da garantía”* 🐾
╰─────────────────❒`,
    'yapa': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *YAPA* 🥭
│ 😏 *SIEMPRE PIDE DE MÁS*
│
│ > *“Lu le da solo migajas”* 🐾
╰─────────────────❒`,
    'caña': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *CAÑA* 🥃
│ 🍺 *CON 2 YA ESTÁ TIRADO*
│
│ > *“Lu le sirve agua”* 🐾
╰─────────────────❒`,
    'pata': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *PATA* 🤝
│ 😎 *EL ALMA DE LA JODA*
│
│ > *“Lu invita las galletas”* 🐾
╰─────────────────❒`,
    'floro': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *FLORO* 💬
│ 💋 *ENAMORA CON PURA MENTIRA*
│
│ > *“Lu no se traga el cuento”* 🐾
╰─────────────────❒`,
    'gil': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *GIL* 🤡
│ 😵 *SE CAE SOLO*
│
│ > *“Lu le pone almohadas”* 🐾
╰─────────────────❒`,
    'gilasa': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *GILASA* 🤡
│ 😵 *CREE TODO*
│
│ > *“Lu le explica con dibujitos”* 🐾
╰─────────────────❒`,
    'lenteja': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *LENTEJA* 🐢
│ 🐌 *DEMORA 1 HORA EN RESPONDER*
│
│ > *“Lu ya se durmió esperando”* 🐾
╰─────────────────❒`,
    'chibolo': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *CHIBOLO* 👶
│ 🎮 *VIVE EN FREE FIRE*
│
│ > *“Lu le presta su rascador”* 🐾
╰─────────────────❒`,
    'chibola': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *CHIBOLA* 👧
│ 💄 *SUBE 20 HISTORIAS AL DÍA*
│
│ > *“Lu le roba el filtro”* 🐾
╰─────────────────❒`,
    'viejo': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *VIEJO* 👴
│ 😮‍💨 *SE QUEJA DE TODO*
│
│ > *“Lu le da su pastilla”* 🐾
╰─────────────────❒`,
    'vieja': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *VIEJA* 👵
│ 🗣️ *CHISME NIVEL DIOS*
│
│ > *“Lu le tapa la boca”* 🐾
╰─────────────────❒`,
    'grasa': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *GRASA* 💪
│ 🏋️ *SOLO VA AL GYM A TOMAR FOTOS*
│
│ > *“Lu le enseña a levantar”* 🐾
╰─────────────────❒`,
    'graso': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *GRASO* 💪
│ 😎 *PIENSA QUE ESTÁ BUENAZO*
│
│ > *“Lu le baja los humos”* 🐾
╰─────────────────❒`,
    'pituco': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *PITUCO* 💎
│ 💳 *PAGA CON YAPE DE SU MAMÁ*
│
│ > *“Lu prefiere propina en atún”* 🐾
╰─────────────────❒`,
    'pituca': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *PITUCA* 💎
│ 💅 *TOMA CAFÉ DE 30 SOLES*
│
│ > *“Lu toma agua nomás”* 🐾
╰─────────────────❒`,
    'sapa': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *SAPA* 🐸
│ 👀 *VE TODO Y CUENTA TODO*
│
│ > *“Lu le tapa los ojos”* 🐾
╰─────────────────❒`,
    'sapo': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *SAPO* 🐸
│ 👀 *EL INFORMATIVO DEL GRUPO*
│
│ > *“Lu le quita el micrófono”* 🐾
╰─────────────────❒`,
    'trome': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *TROME* 👑
│ 🔥 *EL CRACK DEL BARRIO*
│
│ > *“Lu le pide autógrafo”* 🐾
╰─────────────────❒`,
    'reina': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *REINA* 👑
│ 💅 *MANDA EN EL GRUPO*
│
│ > *“Lu le hace reverencia”* 🐾
╰─────────────────❒`,
    'king': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *KING* 👑
│ 😎 *EL JEFE DE LA JODA*
│
│ > *“Lu le sirve la corona”* 🐾
╰─────────────────❒`,
    'zombie': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *ZOMBIE* 🧟
│ 😴 *VIVE CON SUEÑO*
│
│ > *“Lu le da café”* 🐾
╰─────────────────❒`,
    'tóxica': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *TÓXICA* ☠️
│ 💔 *REVISA CELULAR*
│
│ > *“Lu cambia su clave”* 🐾
╰─────────────────❒`,
    'tóxico': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *TÓXICO* ☠️
│ 💔 *CELOSO NIVEL DIOS*
│
│ > *“Lu se esconde”* 🐾
╰─────────────────❒`,
    'simp': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *SIMP* 🥺
│ 💌 *MANDA 50 AUDIOS*
│
│ > *“Lu bloquea notificaciones”* 🐾
╰─────────────────❒`,
    'vago': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *VAGO* 🛌
│ 😴 *TRABAJA 2 HORAS AL AÑO*
│
│ > *“Lu le da chamba”* 🐾
╰─────────────────❒`,
    'vaga': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *VAGA* 🛌
│ 📺 *MARATON DE NETFLIX*
│
│ > *“Lu le apaga la tele”* 🐾
╰─────────────────❒`,
    'loquito': `╭─🐱 *『 𝐁𝐎𝐓 𝐋𝐔 』* 🐱
│ 🔍 *SCANNER LU*
│
│ 😼 *${userTarget}* *ES* *${porcentaje}%* *LOQUITO* 🤪
│ 🌀 *HABLA SOLO*
│
│ > *“Lu le da su pastillita”* 🐾
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

handler.help = ['gay', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'burro', 'burra', 'kbro', 'chivo', 'kchera', 'choro', 'cachero', 'cauchera', 'cabezón', 'jinetero', 'sangre', 'tragón', 'fresa', 'pipero', 'muerto', 'bamba', 'yapa', 'caña', 'pata', 'floro', 'gil', 'gilasa', 'lenteja', 'chibolo', 'chibola', 'viejo', 'vieja', 'grasa', 'graso', 'pituco', 'pituca', 'sapa', 'sapo', 'trome', 'reina', 'king', 'zombie', 'tóxica', 'tóxico', 'simp', 'vago', 'vaga', 'loquito', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + " *@user*")
handler.tags = ['fun']
handler.command = /^(gay|lesbiana|pajero|pajera|puto|puta|burro|burra|kbro|chivo|kchera|choro|cachero|cauchera|cabezón|jinetero|sangre|tragón|fresa|pipero|muerto|bamba|yapa|caña|pata|floro|gil|gilasa|lenteja|chibolo|chibola|viejo|vieja|grasa|graso|pituco|pituca|sapa|sapo|trome|reina|king|zombie|tóxica|tóxico|simp|vago|vaga|loquito|manco|manca|rata|prostituta|prostituto)$/i

export default handler