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
    console.log(data, 'writeData')
   return firebase.database().ref('/tasks/').push('/tasks/').set(data);
}

exports.fetchData = function(callback) {
    return firebase.database().ref('/tasks').once('value').then(function(snapshot) {
            var allData = [];
        if(snapshot) {
            for(var id in snapshot.val()){
                allData.push({id: id, title: snapshot.val()[id].title});
            }
            callback(allData)
        } else {
            callback(allData)
        }
    });
}

exports.removeData = function(id) {
    return firebase.database().ref('/tasks/' + id + '/').remove()
}