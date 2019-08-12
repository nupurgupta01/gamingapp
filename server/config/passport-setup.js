const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys.js')
const User = require('../models/userModel')
//console.info("keys", keys)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});
passport.use(new googleStrategy({
    //option for google strategy
    clientID: keys.google.clientID,
    clientSecret: keys.google.secretID,
    callbackURL: '/auth/google/redirect',
    

}, (accessToken, refreshToken, profile, done) => {
    // passport callback function
//     console.log('fired')
//     console.log(profile)
//     new User({
//         googleId: profile.id,
//         userName: profile.displayName
//     }).save().then((data) => {
//         console.log('userdata' + data)
//         var token_data={
//             username: data.userName,
//             _id: data._id.toString(),
//         }

//         console.log(token_data)
        
//     })
// })

        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);