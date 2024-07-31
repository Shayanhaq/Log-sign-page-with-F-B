import {auth,onAuthStateChanged } from "./Firebase.js"



onAuthStateChanged(auth, (user) => {
    if (user) {

   
      window.location = "./dashboard.html"
        
    } else {

        window.location = "./login.html" 
    }
  });
  