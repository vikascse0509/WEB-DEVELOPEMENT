// nested if-else
// let a =prompt('hello mr singh')
// a = Number.parseInt(a)
// // console.log(typeof a)
// if (a<0){
//     alert('its invalid age')
// }
// else if (a<9){
//     alert('your are a kid')
// }
// else if(a<18 && a>=9){
//     alert('you can for drive after 18')
// }
// else{
//     alert('you can drive')
// }

// switch case
let a = prompt('its swicth statement')
a = Number.parseInt(a)
switch (a) {
    case 1:
        alert('The day is sunday')
        break;
        case 2:
            alert('The Day is monday')
            break;
        case 3:
            alert('The Day is tuesday')
        case 4:
            alert('The Day is wednesday')
        case 5:
            alert('The Day is Thursday')
        case 6:
            alert('The Day is Friday')
        case 7:
            alert('The day is Saturday')
    default:
            alert('Enterd day is not valid')
        break;
}