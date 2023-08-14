//create people array with list of names, including Phil and Lola
//create array of admitted and refused guests
//create loop
//set condition for Lola and Phil
const people=['Bob','Julie','Terrance','Misty','Andrea','Lola',
    'Jude','Phil'];
//const admitted=[];
//const refused=[];
let admitted = '';
let refused = '';

let i = 0;

console.log(people.length);
for(i=0; i < people.length; i++) {
    console.log(i);
    if(people[i] === 'Lola' || people[i] === 'Phil') {
        refused = refused + people[i] + ', ';
    }
    else{
        admitted = admitted + people[i] + ', ';
    };
};
let myAdmit = admitted.substring(0, admitted.length-2);
let myRefuse = refused.substring(0, refused.length-2);

document.getElementById('admitted').innerHTML = 
    'Guests for Admission: ' + myAdmit;
document.getElementById('refused').innerHTML = 
    'Guests for Refusal: ' + myRefuse;
