import { exec } from "child_process"

const handler = async (m, { conn }) => {
    const owner = "👑 *Creador: Whois Yallico*"

    if (m.react) await m.react('🐾')

    await conn.reply(m.chat, '🐱 *BOT LU* ➔ Maullando para sincronizar... Actualizando módulos gatunos.', m)

    exec('git pull', async (err, stdout, stderr) => {
        if (err) {
            if (m.react) await m.react('❌')
            return conn.reply(m.chat, `🐱 *BOT LU ERROR* ➔ Se cayó el rascador, falló la actualización.\n\n\`\`${err.message}\`\n\n${owner}\n🐾 *Vuelve a intentarlo michi*`, m)
        }

        if (stdout.includes('Already up to date.')) {
            if (m.react) await m.react('😴')
            return conn.reply(m.chat, `🐱 *BOT LU* ➔ Ya estoy en la versión más reciente.\nNo hay nuevas croquetas que instalar.\n\n${owner}\n> "Un gato que actualiza, es un gato feliz" 🐾`, m)
        }

        if (m.react) await m.react('🐾')
        return conn.reply(m.chat, `🐱 *BOT LU* ➔ ¡Actualización aplicada con éxito!\n\n*📜 Cambios nuevos para rascar:*\n\`\`${stdout}\`\n\n${owner}\n🐾 *Gracias por alimentar al bot*`, m)
    })
}

handler.help = ['update']
handler.tags = ['owner']
handler.command = /^(update|actualizar|fix)$/i
handler.rowner = true

export default handler