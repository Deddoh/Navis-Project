// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC_bBlnZT4qy1QonXpZTTyrnbSo3aiagFU",
    authDomain: "navis-4b50f.firebaseapp.com",
    databaseURL: "https://navis-4b50f.firebaseio.com",
    projectId: "navis-4b50f",
    storageBucket: "navis-4b50f.appspot.com",
    messagingSenderId: "385737457607",
    appId: "1:385737457607:web:52d4b06d187a248019a3e2",
    measurementId: "G-2X3GW0X7PV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();




var companyName = document.getElementById('company_name');
  var email = document.getElementById('business_email');
  var phone = document.getElementById('phone');
  var monthlyRevenue = document.getElementById('monthly_revenue');
  const submit = document.getElementById('submitButton');



  function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

// $(".submit").click(function(e){
// e.preventDefault();
// writeUserData();
// })

submit.addEventListener('click', ($event) =>{
  $event.preventDefault();
  writeUserData();
})

