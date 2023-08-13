//let output = document.querySelector('.output');
//output.innerHTML = '';

// let i = 10;



// output.appendChild(para);

//const para = document.createElement('p');
//para.textContent = '';
let i=10;
const fullCountdown=[];
while(i>-1) {
//    const para = document.createElement('p');
    if(i===0) {
        fullCountdown.push('Blast Off!');
    }
    else if(i<10){
        fullCountdown.push(i);
    }
    else{
        fullCountdown.push('Countdown ' + i);
    };
//    output.appendChild(para);
    i--;
};
document.getElementById("myTest").innerHTML = fullCountdown;
//[object HTMLParagraphElement]