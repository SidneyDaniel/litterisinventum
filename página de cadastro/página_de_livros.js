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






//adicionar itens ao banco de dados//

const db = firebase.firestore();
/*
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let tarefa = document.querySelector('[name=tarefa]').value;
    db.collection('tarefas').add({
        tarefa: tarefa
        
    })
    console.log(e);
    alert("inserido com sucesso");
    form.reset();
    
})
*/
// mostrar na tela os itens do banco de dados//
db.collection('tarefas').onSnapshot(function(data){
    let list = document.querySelector(".list");
    list.innerHTML = '';
    data.docs.map(function(val){
        list.innerHTML+=`${val.data().tarefa}<br>`;
    })
})