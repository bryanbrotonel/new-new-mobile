import firebase from 'firebase/app';
import 'firebase/database';

function formatDate(date) {
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getYear().toString().substring(1);

  return day + '/' + ('0' + (month + 1)).slice(-2) + '/' + year;
}

// Get post data for all posts
export function getPosts() {
  return new Promise(function (resolve, reject) {
    // Firebase post data reference
    firebase
      .database()
      .ref('posts')
      .orderByChild('posted')
      .once('value', function (snapshot) {
        return snapshot ? resolve(snapshot) : reject(snapshot);
      });
  });
}

// Get artist data for all artists
export function getArtists(artistsData) {
  var posts = [];

  return new Promise(function (resolve, reject) {
    // Firebase artists data reference
    firebase
      .database()
      .ref('artists_list')
      .once('value', function (snapshot) {
        const postData = snapshot.val();

        // For each loop iterating each post key
        artistsData.forEach(function (artistSnapshot) {
          const artistData = postData[artistSnapshot.key];

          // Format post timestamp
          const timeStamp = formatDate(
            new Date(
              parseInt(
                artistSnapshot.val()['posted'].toString().substring(1),
                10
              )
            )
          );

          // Store data snapshot in object
          const artistItem = {
            name: artistData.name,
            image: artistData.image,
            notableTitle: artistData.notableTitle,
            notableLink: artistData.notableLink,
            instagram: artistData.instagram,
            soundcloud: artistData.soundcloud,
            submitter: artistSnapshot.val()['author'],
            timeStamp: timeStamp.toString(),
          };

          // Add to posts array
          posts.push(artistItem);

          // Return with posts array
          return posts ? resolve(posts) : reject(posts);
        });
      });
  });
}

// Pushes artist submissions to DB
export function submitArtist(artist, handle) {
  const firebaseDB = firebase.database();

  var share = {
    artist: artist,
    handle: handle,
  };

  var updates = {};

  updates['shares/' + firebaseDB.ref('submissions').push().key] = share;

  firebaseDB.ref().update(updates);
}
var firebaseConfig = {
  apiKey: 'AIzaSyC5TlvfDFxDz5ng2dWBFZWFO458vHGCVOQ',
  authDomain: 'new-new-test-dbb62.firebaseapp.com',
  databaseURL: 'https://new-new-test-dbb62-default-rtdb.firebaseio.com',
  projectId: 'new-new-test-dbb62',
  storageBucket: 'new-new-test-dbb62.appspot.com',
  messagingSenderId: '539866181949',
  appId: '1:539866181949:web:7c11674c59a488998b5554',
  measurementId: 'G-Q1TBPMFF0R',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
