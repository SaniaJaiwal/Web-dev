let display=document.querySelector(".display");
let btn1 = document.querySelector(".btn1");
let string='';
let calc=document.querySelector('.calc');
let mode=document.querySelector('#mode');
mode.addEventListener('click',()=>{
    document.body.classList.toggle('light');

});
let nbtn=document.querySelectorAll(".numeric-btn") ;
Array.from(nbtn).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML==='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML==="AC"){
            string='';
            document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML==="C"){
            if (string.length > 0) {
                string = string.slice(0, -1);
                document.querySelector('input').value=string;
        }}
        else if(e.target.innerHTML==="M"){
            document.calc.classList.toggle('light');
        }
        else{ 
            string=string+e.target.innerText;
            document.querySelector('input').value=string;

        }
    });
});
