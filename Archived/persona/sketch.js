var submitButton;
var inputField;
var mydatabase;
var ref;

function setup() {

  const firebaseConfig = {
    apiKey: "AIzaSyDqhM8CCYXidjWGgVpkLTNx6jXEjaI7SiU",
    authDomain: "persona-1f4ab.firebaseapp.com",
    databaseURL: "https://persona-1f4ab-default-rtdb.firebaseio.com",
    projectId: "persona-1f4ab",
    storageBucket: "persona-1f4ab.appspot.com",
    messagingSenderId: "156433376224",
    appId: "1:156433376224:web:17650e3bff06479dff8185",
    measurementId: "G-MSB7K36EWK"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  mydatabase = firebase.database();
  ref = mydatabase.ref('input');
  inputField = createInput('I...');
  inputField.id('inputField');
  inputField.parent('inputSection');
  submitButton = createButton('Feed');
  submitButton.id('submitButton');
  submitButton.parent('inputSection');
  submitButton.class('button');
  submitButton.mousePressed(submitInfo);

  ref.on('value',gotData, errData); //on the event value, call a function to get data, and another in case there's an error

}



function gotData(data) {

var inputs = data.val();
var keys = Object.keys(inputs); //get the keys of all the objects
for (var i=0; i<keys.length; i++) {
  var k = keys[i];
  var myinput = inputs[k].userInput;
  // console.log(myinput);
}
}

function errData(err) {
console.log('Error!');
console.log(err);

}


function submitInfo() {
  var data = {
    userInput: inputField.value()
  }
  console.log(data);

 //create a reference called 'input'
  ref.push(data);

  window.location.href = 'growth.html';


}
