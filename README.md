# 🚀 Discord Bot Template written in JavaScript
*Last updated: 04-06-2024*

## Getting started with this template
1. Download/clone this GitHub repository and open it in your code editor (e.g. Visual Studio Code).

2. Create a new file called `.env` and open it to see what you need to paste in where.
```env
TOKEN=
GUILD_ID=
CLIENT_ID=
MONGODB_URI=
```

3. Setup a MongoDB datbase and add your credentials.

4. Open the `config.json` file and change the values to match both the server ID of your test server and the user ID of all developers working on this project (can be multiple, just add multiple elements inside the array).
   
5. Save everything and open your terminal/console.
    
6. Run the following command to install every package needed for this template to run properly:
```
npm install discord.js dotenv fs mongoose ms path colors nodemon
```

7. Run one of the following commands to start your bot:
```
npm run dev

npm run public
```
*💡 Run* `npm run dev` *if you want to edit your dev-only commands that are registered on your test server - the bot will not auto-restart on every save you make in your code editor. Run* `npm run public` *if you want to edit your regular commands that are registered globally - the bot will auto-restart on every save you make in your code editor.*

## Having problems?
If you have any questions about this template or you face issues when following this step-by-step guide, you can try contacting me on any of my socials 😄