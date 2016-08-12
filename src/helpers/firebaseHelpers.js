import firebase from 'firebase'

export function fireInit(func) {
	// !!!! Replace with your own Firebase settings !!!!!
	var config = {
	  apiKey: '!! Replace with your own Firebase settings !!',
	  authDomain: '!! Replace with your own Firebase settings !!',
	  databaseURL: '!! Replace with your own Firebase settings !!',
	  storageBucket: '!! Replace with your own Firebase settings !!'
	}
	firebase.initializeApp(config)

	firebase.auth().onAuthStateChanged(function (user) {
	  if (user) {
	    func(true, user)
	  } else {
	    func(false)
	  }
	}, function(error) {
	  console.log(error)
	})
}
