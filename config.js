const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_16_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODksXG4gICAgICAgIDM2LFxuICAgICAgICAyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NixcbiAgICAgICAgMTA3LFxuICAgICAgICA2NCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDExNixcbiAgICAgICAgOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU5LFxuICAgICAgICA5LFxuICAgICAgICAyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg2LFxuICAgICAgICA2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDc2LFxuICAgICAgICAxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDksXG4gICAgICAgIDQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgyLFxuICAgICAgICAzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV2lRakhqUGEzbzU4eWw0Zm9pSm9TNjFOV3N2c0tOTy9TeEpVK3JESTY4ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicTlsRXdsVWxUQm10QmlJYzFPMVNhQVwiLFxuICBcInBob25lSWRcIjogXCI3MWM5YWRhNi0zODJkLTQ3N2YtYTk3ZC0zNGE3NTVmMGFlZjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA0LFxuICAgICAgMTgyLFxuICAgICAgMTY0LFxuICAgICAgMTkwLFxuICAgICAgNzgsXG4gICAgICA3OCxcbiAgICAgIDc5LFxuICAgICAgMTExLFxuICAgICAgMjQ0LFxuICAgICAgODQsXG4gICAgICA2OSxcbiAgICAgIDIyMixcbiAgICAgIDE2OSxcbiAgICAgIDExMyxcbiAgICAgIDYwLFxuICAgICAgMjUzLFxuICAgICAgNTksXG4gICAgICAyOSxcbiAgICAgIDQ4LFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMjMsXG4gICAgICAyMDIsXG4gICAgICAyMDgsXG4gICAgICA1NSxcbiAgICAgIDEzOSxcbiAgICAgIDE5NyxcbiAgICAgIDE2MCxcbiAgICAgIDI2LFxuICAgICAgMTQ0LFxuICAgICAgMTA4LFxuICAgICAgMTg2LFxuICAgICAgNjYsXG4gICAgICA1NSxcbiAgICAgIDMsXG4gICAgICAyMzEsXG4gICAgICAxOTAsXG4gICAgICA4OCxcbiAgICAgIDE3OSxcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkwxRExGRkFGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc1MzU3NDgwMzo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ3MDk4Nzg3OTE3ODk0Ojc1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xqLzlwa0RFTGlJcnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiekdxNXl6UnBpcjl3L1hmcG8zaTVLTkxQbWlDdXEzdldVTHY3OFdDV0dIWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6L3htOUwydndnUUJSZkRkNmMwVVIvVlBBUE8xdFNkYnI0Z2xXSEhxSmJGRTJUOVI5eCtxVmJrblNFeGtlaFh0UlZHcXFjY29QNkpRT1FJV0owMWlBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6VHd3cFVmYzVnYk5BWERXbDNPb2prR3ZKZ1NyZ1VKUndtLzNUb1Vteml4OUhyT2hraFhtNkNZSHFjN29pNDZzbHBBRkQyWFFFZ3B4dm16a0dYWTVoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1MzU3NDgwMzo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQxOTM4N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
