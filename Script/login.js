
import { auth, signInWithEmailAndPassword } from './Firebase.js';

let form = document.querySelector("#login-form");
// let msgDiv = document.querySelector("#msg");


form.addEventListener("submit", async (event) => {
    event.preventDefault();
   
    // msgDiv.innerText = "Loading.....";
    // msgDiv.classList.remove('d-none');
    
    try {
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
     swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
            
          }); 
       let result = await signInWithEmailAndPassword(auth, email, password);
       
          
        window.location.href = "./dashboard.html";
        console.log("result", result);

    } catch (error) {
        swal({
            title: "WRONG",
            text: "Error",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          
          });
        msgDiv.innerText = error.message || "An error occurred";
        // msgDiv.classList.add('alert-danger');
        // console.log("my error msg", error.message);
    }
});
