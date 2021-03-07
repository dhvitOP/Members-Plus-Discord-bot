# Experience+ Bot
# Credit
=> The bot is originally made by DynamoYT. <br />
=> If you will use the bot in public or any use please just give us credits. <br />
# Features
=> Added Premium in Bot. <br />
=> Easily customizable. <br />
=> You can add Premium in any commands. <br />
=> Added Lottery System. <br />
# How to Install
=1) do ``git clone https://github.com/dhvitOP/Members-Plus-Discord-bot.git`` or paste `https://github.com/dhvitOP/Members-Plus-Discord-bot.git` in the website you want to host. <br />
=2) Fill the config.json. <br />
=3) change Your bot invite link in commands/help.js and commands/invite.js. <br />
=4) do ``npm install`` in console or terminal. <br />
=5) do ``npm start`` in console or just run if you are hosting on website. <br />
=6) if the response from terminal/console say `i am ready` after `running on port 6000` then congrats youre done bot is ready to run enjoy. <br />
# FAQS
=1) Can i host on glitch <br />
Ans - Yes you can easily <br />
=2) Can i host on repl.it or any website <br />
Ans - Yes You can just you need latest node.js version <br />
=3) Something error come?<br />
Ans - Just Contact me on discord my name is dhvit you can find me on Discord 『𝐔𝐓𝐕』 ⏤͟͟͞★₲ɄƉɃØ¥ 𝓓𝓮𝓥  『</>』#3759 on this id . <br />
=4) how do i add premium in any command? <br />
Ans - Just Copy Paste - <br /> 
let notpremium = new Discord.MessageEmbed() <br />
.setTitle('`You're Not a premium user`') <br />
 let checking = db.get('`premium`') <br />

if(checking && checking.find(find => find.userid != message.author.id)) { <br /> 
  console.log(message.author.username) <br />
  message.channel.send(notpremium); <br />

  return; <br />

} <br /> This in any command if you wanna add premium. <br />
 <br />
  <br />
  =5) For how many days the premium is?  <br />
  Ans - The Premium is of 15 days.  <br />
  <br />
  =6) How Lottery Works? <br />
  Ans - The lottery Is always start it never stops and the winner gets 200 coins and if you wanna check how many participants joined do `{prefix}lotterystats` (it is only for owners). <br />
  =7) How to end lottery ? <br />
  Ans - Just do `{prefix}end` to end the lottery (this is also only for owners). <br />
  =8) How to participate in lottery? <br />
  Ans - Do `{prefix}lottery` to prticiapate in lottery anyone can participate. <br />
  =9) How to create or redeem premium? <br />
  Ans - You Have to create code by doing `{prefix}create code <any code your choice>` for creating a code (only for owners) and for redeeming do `{prefix}redeem <here your code which you have entered before in create code>` for redeeming premium (anyone can). <br />
  =10) The bot is spamming cannot find module "ms". <br />
  Ans - Just do `npm install ms` and done restart the bot. <br />
  =11) when starting the bot in console it is showing cannot find module "better-sqlite3" <br />
Ans - Do `npm install quick.db` if still error come do `npm i better_sqlite3` if still come do `npm install sqlite3` And youre done restart the bot. <br />

