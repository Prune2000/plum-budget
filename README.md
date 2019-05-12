# Plum Budget is built using the MERN stack (MongoDB, Express, React/Redux, Node.js).

![Screenrecord](https://media.giphy.com/media/PnJgIL2lCkodGytTAl/giphy.gif)

**The goal is to build a secure and confidential budget app.** Too many budget apps will sell financial information to 3rd parties as well as track users to get better insights on their shopping habits. This app aims to give a free and confidential app to track your daily finances.

Plum budget is an open-source project, so feel free to help! Contact me on twitter or by email if you need help!

## Wanna help?

If you want to help, you'll need to create your own Database and connect it to Express. Go to MongoDB and create a profile, then create a new project with one cluster. Inside your new MongoDB project, go to Security and create a new user (which will be used to connect Mongoose to your MongoDB). Then, still in Security, go to IP Whitelist and add your own IP. 

After cloning the GitHub repo on your machine, create a "config" folder in the main directory. This new folder will automatically be ignored by git and make sure it stays that way so you don't accidently push your database logins to GitHub. In the "config" folder, create 3 files:
* ***config.json***
``` javascript
{
    "uname": "(Add here the username of your MongoDB cluster's user)",
    "pwd": "(Add here the password of your MongoDB cluster's user)"
}
```

* ***index.js***
``` javascript
const configValues = require('./config');
module.exports = {
    getDbConnectionString: () => {
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@cluster0.mongodb.net/test?retryWrites=true`;
    }
    // The address above comes from the Connect section in your MongoDB cluster, when you choose the option "Connect your application". 
};
```

* ***session.json***
``` javascript
{
    "hey": "(Write here a meaningless sentence which will be used for encryption)",
    "hoy": "(Write here another meaningless sentence which will be used for encryption)"
}
```

After you have completed the "config" folder, open a terminal and go to the main directory and to launch the app, type:
yarn dev

The app will listen to localhost:3000

**If you have any problem at any point, feel free to contact me on Twitter (https://twitter.com/prune_cam) or by email (camille@plommetre.com)**

## License

plum-budget is licensed under the GNU Affero General Public License 3 or any later version at your choice with an exception for Highcharts. See LICENSE for details.
