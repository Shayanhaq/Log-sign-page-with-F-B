import {auth,signOut,onAuthStateChanged } from "./Firebase.js"
import {
  db,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from "./firestore.js";
let userEmailDiv = document.querySelector( "#user-email")



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
const form = document.querySelector("#product-form");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productDetail = document.querySelector("#product-detail");
const allProducts = document.querySelector(".all-products");

const myCollectionReference = collection(db, "products");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const myProduct = {
    productName: productName.value,
    productPrice: Number(productPrice.value),
    productImg: null,
    productDetail: productDetail.value,
    createdAt: serverTimestamp(),
  };

  try {
    await addDoc(myCollectionReference, myProduct);
    console.log("Document added successfully");

    // Clear the form fields
    form.reset();  // This will clear all form fields
  } catch (e) {
    console.log("Error adding document: ", e);
  }
});

// Fetch initial data
const querySnapshot = await getDocs(myCollectionReference);

querySnapshot.forEach((doc) => {
  const product = doc.data();

  allProducts.innerHTML += `<div>
        <!-- <img src="" alt=""> -->
        <h3>${product.productName?.toUpperCase()}</h3>
        <p class="price">Rs.${product.productPrice}</p>
        <p>${product.productDetail}</p>
      </div>`;
});

// Real-time updates
onSnapshot(myCollectionReference, (snapshot) => {
  allProducts.innerHTML = "";

  snapshot.docs.forEach((doc, index) => {
    const product = doc.data();

    allProducts.innerHTML += `<div>
        ${index + 1}
        <h3>${product.productName}</h3>
        <p class="price">Rs.${product.productPrice}</p>
        <p>${product.productDetail}</p>
      </div>`;
  });
});
