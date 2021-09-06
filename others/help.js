const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/839939556177739810/884322774552821820/apple-bot.png `)
    .setTitle(`**Apple Bot**`)
    .setDescription(`
**|** **User Commands**
**__invite - support- about - ping - prefix - uptime - tinvites - sug - roleuser - report__**

**|** **Music Commands**
**__play - skip - skipto - stop - volume  nowplaying - shuffle - search  - loop - lyrics -radio__**

**|** **Gif Commands**
**__boy - girl - couple - sad - cartoon - anime - neon__**

**|** **Moderation Commands**
**__ban - unban - setnick - roleadd - roleremove - vkick - setprefix - clear - close - open - senddm__**

**|** **Game Commands**
**__kiss - slap - hug - slots__**

 <a:link:864935879603781633> **Links**
 [Support](https://discord.gg/u56dbrvHvh)
 [Invite](https://discord.com/api/oauth2/authorize?client_id=878987721618628628&permissions=8&scope=bot)
 [Website](coming soon)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
