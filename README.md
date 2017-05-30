# Sessions

A React-Native based App that will allow a user to create study sessions and alert other users within a geographical radius of that session. 


![alt text](https://github.com/myztajay/Sessions/blob/master/Mock_up.jpg?raw=true "Logo Title Text 1")


Technologies:
- React
- React-Native( for Android/IOS)
- Firebase
- Twilio 


Install:
1. Run ```npm install```
2. Create a file in the main session directory (with index.android.js and index.ios.js) called "Firebase.js"
- import firebase
- add private keys for firebase
- ```const Firebase = firebase.initializeApp(config)```
- ```export { Firebase }```
3. ```react-native run-android```

Requirements:
- At the moment we are using Genymotion for testing, but because it react-native you theoretically will have the same App in IOS. Except for customizations that IOS doesn't allow that android does. Ex coloring nav menus.
- Android SDK
