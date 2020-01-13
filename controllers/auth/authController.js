const Users = require('../../models/userModel');

const bodyParser = require('body-parser');

const LocalStrategy = require('passport-local').Strategy;
const bCrypt = require('bcrypt');


module.exports = (app, passport) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    
    passport.deserializeUser((id, done) => {
        Users.findById(id, function(err, user) { 
            done(err, user);
        });
    });

    // =====================================
    // LOGIN ==============================
    // =====================================
    app.post('/auth/login', passport.authenticate('login', {
      successRedirect: '/auth/successLogin',
      failureRedirect: '/',
      failureFlash: 'Invalid username or password.',
      successFlash: 'Welcome back! Please visit the /dashboard page.' 
    }));

    app.get('/auth/successLogin', (req, res) => {
      res.send(res.req.username);
    });




    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/auth/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // =====================================
    // SIGNUP ==============================
    // =====================================
    app.post('/auth/signup', passport.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash : true 
    }));


    // Passport Sign-Up
    passport.use('signup', new LocalStrategy({
        passReqToCallback : true
      },
      (req, username, password, done) => {
        findOrCreateUser = () =>{
          // find a user in Mongo with provided username
          Users.findOne({
              'username': username,
              'email': req.body.email
            }, (err, user) => {
            // In case of any error return
            if (err){
              console.log('Error in SignUp: '+err);
              return done(err);
            }
            // already exists
            if (user) {
              console.log('User already exists');
              return done(null, false, 
                 req.flash('message','User Already Exists'));
            } 
            else {
              // if there is no user with that email
              // create the user
              var newUser = new Users();
              // set the user's local credentials
              newUser.username = username;
              newUser.email = createHash(req.body.email);
              newUser.password = createHash(password);
     
              // save the user
              newUser.save(function(err) {
                if (err){
                  console.log('Error in Saving user: '+err);  
                  throw err;  
                }
                console.log('User Registration succesful');    
                return done(null, newUser);
              });
            }
          });
        };
         
        // Delay the execution of findOrCreateUser and execute 
        // the method in the next tick of the event loop
        process.nextTick(findOrCreateUser);
      })
    );

    // Generates hash using bCrypt
    const createHash = (password) => {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

    // Passport Login
    passport.use('login', new LocalStrategy({
        passReqToCallback : true
    },
    (req, username, password, done) => { 
        // check in mongo if a user with username exists or not
        Users.findOne({ 'username' :  username }, 
        (err, user) => {
            // In case of any error, return using the done method
            if (err) {
                return done(err);
            }
            // Username does not exist, log error & redirect back
            if (!user){
                console.log('User Not Found with username '+username);
                return done(null, false, 
                        req.flash('message', 'User Not found.'));                 
            }
            // User exists but wrong password, log the error 
            if (!isValidPassword(user, password)){
                console.log('Invalid Password');
                return done(null, false, 
                    req.flash('message', 'Invalid Password'));
            }
            // User and password both match, return user from 
            // done method which will be treated like success
            return done(null, user);
            }
        );
    }));

    const isValidPassword = (user, password) => {
        return bCrypt.compareSync(password, user.password);
    }

    const isValidEmail = (user, email) => {
      return bCrypt.compareSync(email, user.email);
    }
}