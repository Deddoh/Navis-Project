'use strict';

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
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}




var companyName = document.getElementById('company_name');
  var email = document.getElementById('business_email');
  var phone = document.getElementById('phone');
  var sector = document.getElementById('sector');
  var monthlyRevenue = document.getElementById('monthly_revenue');
  var option_check = document.getElementsByClassName('cbox');
  var radio = document.querySelectorAll('track');
  const submit = document.getElementById('submitButton');
 // const r = $("input[class='rbox']:checked").val() ? "yes" : "no";


  

//grab a form
const form = document.querySelector('#registration-form');
const subscribeForm = document.getElementById('#subscription_form');
//config your firebase push
// const firebaseConfig = {
//   apiKey: "AIzaSyC_bBlnZT4qy1QonXpZTTyrnbSo3aiagFU",
//   authDomain: "navis-4b50f.firebaseapp.com",
//   databaseURL: "https://navis-4b50f.firebaseio.com",
//   projectId: "navis-4b50f",
//   storageBucket: "navis-4b50f.appspot.com",
//   messagingSenderId: "385737457607",
//   appId: "1:385737457607:web:52d4b06d187a248019a3e2",
//   measurementId: "G-2X3GW0X7PV"
// };


//create a functions to push
    function firebasePush(companyName, email, phone, sector, monthlyRevenue, option_check, radio ) {


        //prevents from braking
        // if (!firebase.apps.length) {
        //     firebase.initializeApp(firebaseConfig);
        // }

        //push itself
        var mailsRef = firebase.database().ref('users').push().set(
            {
                Company_name: companyName.value,
                Email : email.value,
                Phone : phone.value,
                Sector: sector.value,
                Monthly_Revenue: monthly_revenue.value,
                
               






                // Monthly_Revenue : monthlyRevenue,
                // Expense_Track: $("input[type='checkbox']:checked").val(),
                // Early_Access: $("input[type='radio']").val() ? "yes" : "no",
                
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(companyName, email, phone, sector, monthlyRevenue, radio );
           function sendEmailVerification() {
      // [START sendemailverification]

      firebase.auth().currentUser.sendEmailVerification(email, actionCodeSettings).then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        window.localStorage.setItem('emailForSignIn', email);
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      }).catch(function(error){

      });
      // [END sendemailverification]
    }

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    

// submit.addEventListener('click', ($event) =>{
//   $event.preventDefault();
//   firebasePush();
// })



var actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be whitelisted in the Firebase Console.
  url: 'auth.html',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
};

 };




 function firebasePush( email ) {


        //prevents from braking
        // if (!firebase.apps.length) {
        //     firebase.initializeApp(firebaseConfig);
        // }

        //push itself
        var mailsRef = firebase.database().ref('subscribers').push().set(
            {
               
                Email : email.value,
    
            }
        );

    }

//push on form submit
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function ($event) {
            $event.preventDefault();
            firebasePush(email );

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        });
    }