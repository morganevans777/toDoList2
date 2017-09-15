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

exports.writeData = function(data) {
    console.log(data)
   return firebase.database().ref('tasks/' +data.id + '/').set(data);
}

exports.fetchData = function(callback) {
    return firebase.database().ref('/tasks').once('value').then(function(snapshot) {
        if(snapshot) {
            callback(snapshot.val())
        } else {
            callback('error')
        }
    });
}

