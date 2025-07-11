console.log("Hello world");
const rect = document.getElementById('send');
const Name= document.getElementById('name');
const Email = document.getElementById('email');
const Message = document.getElementById('massge');

rect.addEventListener("click",()=>{
    if(!Name.value || !Email.value || !Message.value){
        alert("❌ kindly fill the all required fields");
    }else{
    alert("✅ Your message will displayed successfully");
    }
});
