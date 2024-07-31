import {auth,signOut,onAuthStateChanged } from "./Firebase.js"
let userEmailDiv = document.querySelector( "#user-email")


// let mytestfun = async ()=> {
// try {
//         await onAuthStateChanged ( auth)
    
// } catch (error) {
//     console.log( "  User is sign out");
// }
// }
// mytestfun()

onAuthStateChanged(auth, (user) => {
    if (user) {

    //    window.location = 

        console.log( "~ onAuthStateChanged ~ user:" , user);
      
        userEmailDiv.innerText = user.email


    } else {

        window.location = "./login.html" 

      console.log("User is signed out");
    }
  });
  


// Assuming you have a function to fetch user data
async function fetchUserData() {
  const userData = await fetch('/api/user').then(response => response.json());
  document.getElementById('user-email').textContent = userData.email;
  // Set profile picture source based on user data
}

fetchUserData();












let btn = document.querySelector("#Logout-button")



 btn.addEventListener("click", async() => {
   
try {
       await signOut(auth);

  console.log( " Sign-out successful ");
    
} catch (error) {
   
    console.log(" ~ btn.addEventListener ~ error:", error);
}
})
