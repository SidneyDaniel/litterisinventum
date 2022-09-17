// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs5HBnUQ-rkvvLPF3JEY1bMft59s3bQgY",
  authDomain: "litterisinventum.firebaseapp.com",
  projectId: "litterisinventum",
  storageBucket: "litterisinventum.appspot.com",
  messagingSenderId: "138411156631",
  appId: "1:138411156631:web:2e78ddd03fee8d175d35d2"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();

db.collection('tarefas').onSnapshot(function(data){
    let list = document.querySelector(".list");
    list.innerHTML = '';
    data.docs.map(function(val,doc){
        console.log(doc.id)
        list.innerHTML+=`
        <div id="${val.data(doc).id}" class="listaDeLivros">
        <p id="nomeLivro">${val.data().bookName}</p>
        <img src="${val.data().capa}"/>
        <p>Autor:${val.data().bookAuthor}</p>
        <p>Editora:${val.data().bookPublisher}</p>
        <p>Págs: ${val.data().numberOfPages}</p>
        <a class="btn" id="read" href="${val.data().readLink}">Ler</a>
        </div>
        `;
        
    }) 
})