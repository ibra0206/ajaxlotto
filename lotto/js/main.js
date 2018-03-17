document.addEventListener('DOMContentLoaded', init);

function init(){
document.getElementById("btnSend").addEventListener('click', nav);
document.getElementById("btnBack").addEventListener('click', nav);

}

function nav(ev){
ev.preventDefault(); //dont let the button navigate away    
//this function will run when either button is clicked
let btn = ev.target;
 
if (btn.id === 'btnBack'){
//hide the buttons, show the form
document.getElementById('home').classList.add('active');
document.getElementById('list').classList.remove('active') ;   

} else if (btn.id == 'btnSend'){
 //hide the numbers, show the form (and get the numbers)
 document.getElementById('home').classList.remove('active');
 document.getElementById('list').classList.add('active');    

getNumbers(){
    let url = "http://:localhost:8888/mad9014-lotto/nums.php"
    digits=8?
}
    
    
    
}   else{
    //no one else should be calling this function
}
    
    
    
}