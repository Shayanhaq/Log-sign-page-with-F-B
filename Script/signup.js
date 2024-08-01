


import { auth, createUserWithEmailAndPassword } from './Firebase.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#Signup-form");
    const msgDiv = document.querySelector("#msg");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        // Clear previous messages
        msgDiv.classList.add('d-none');
        msgDiv.innerText = "";

        try {
            // Capture email and password
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;
            
            // Call Firebase function to create a new user
            const result = await createUserWithEmailAndPassword(auth, email, password);
            
            // Redirect to dashboard on successful signup
            window.location.href = "./dashboard.html";
            console.log(result);
        } catch (error) {
            // Display error message
            msgDiv.innerText = error.message || "An error occurred during sign up.";
            msgDiv.classList.remove('d-none');
            console.log("Error message: ", error.message);
        }
    });
});


