import fs from 'fs'

let handler = async (m) => {
    const tmpPath = './tmp'
    if (fs.existsSync(tmpPath)) {
        fs.readdirSync(tmpPath).forEach(file => fs.unlinkSync(`${tmpPath}/${file}`))
    }
    m.reply(`╭─❒ *『 𝗧𝗘𝗔𝗠 𝗡𝗜𝗚𝗛𝗧𝗪𝗜𝗦𝗛 』* ❒
│ 🧹 *PURGA DE CACHÉ*
│
│ ✅ *Estado:* Archivos temporales eliminados
│ 🌙 *El trueno está limpio*
╰─────────────────❒`)
}

handler.help = ['cleartmp']
handler.tags = ['main']
handler.command = ['cleartmp']
handler.rowner = true

export default handler