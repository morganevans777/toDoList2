var firebase = require('firebase');

exports.init = function(){
    var config = {
        apiKey: 'AIzaSyAVgJFZ8qvyFNSk097b1-u5e60stAVaeAo',
        authDomain: 'to-do-list-9c52f.firebaseapp.com',
        databaseURL: 'https://to-do-list-9c52f.firebaseio.com',
        storageBucket: 'to-do-list-9c52f.appspot.com',
    };
    firebase.initializeApp(config);
    console.log('firebase initialized')
};

exports.fetchData = function(callback) {
    return firebase.database().ref('/task').once('value').then(function(snapshot) {
        if(snapshot) {
            callback(snapshot.val())
        } else {
            callback('error')
        }
    });
}

exports.writeData = function() {
    firebase.database().ref('/task' + 7).set({
        task: clean
      });
}