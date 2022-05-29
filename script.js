// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0zn5ROtiZisUGgdrvS-xnK5uKvSnHoac",
  authDomain: "frontendfinal-fd614.firebaseapp.com",
  projectId: "frontendfinal-fd614",
  storageBucket: "frontendfinal-fd614.appspot.com",
  messagingSenderId: "272360066411",
  appId: "1:272360066411:web:079a0e2629a2606191d02e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const email = document.getElementById('email');
const submit = document.getElementById('submit');
const nama = document.getElementById('name');
const telpon = document.getElementById('telpon');
const events = document.getElementById('events');

submit.addEventListener("click", async function(event){
        event.preventDefault();
        if(!email.value.includes('@'))
        {
            alert("Email must include '@'");
            return;
        }
   
        if(nama.value.length <3)
        {
            alert("Name must be more than 3 characters!");
            return;
        }
         if(!telpon.value.startsWith("08") || telpon.value.length>14)
            {
                alert("Number must starts with '08' and must be less than 14 characters!");
                return;
            }
        
            
        
            addDoc(collection(db, "users"), {
                email: email.value,
                nama: nama.value,
                telpon: telpon.value,
                events: events.value
              }).then(()=>{
                email.value="";
                nama.value="";
                telpon.value="";
                alert("Submitted Successfully!");
              })
          
});

