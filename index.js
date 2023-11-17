const numberOfArticle = document.querySelector('#nombre');
const priceTotal = document.getElementById('priceTotal');
const totalPrice = document.querySelector('#totalPrice');
const item = document.querySelector('#element');
const history = document.querySelector('#myHistory');
const clear = document.querySelector('#clear');
const checkout = document.querySelector('#checkout');
const explore = document.querySelector('#explore');
const muBoutton = document.querySelectorAll('.myBtn');
const myImage = document.querySelectorAll('.img');
const card = document.querySelectorAll('.card');
const image = document.querySelectorAll('.img');
const detail = document.querySelector('.detail');
const element = document.getElementById('myHistory');

const icone = document.querySelectorAll('.icon');


history.addEventListener('click',()=>{
    detail.classList.remove('hidden');
});


function upDatePage(){
if(JSON.parse(localStorage.getItem('item'))){

}
}


function addElement(){
    let myTableau = JSON.parse(localStorage.getItem('item')) || [];
    let myObjet = {
        article : 'elementClicke',
        price: price,
        numero: count()
    }
    myTableau.push(myObjet)
    localStorage.setItem('item',JSON.stringify(myTableau))
    upDatePage()
}
// for(let i= 0; i < image.length; i++){
//     image[i].addEventListener('mouseenter',()=>{
//         icone[i].classList.remove('hidden')
  
//     });
//     image[i].addEventListener('mouseleave',()=>{
//         icone[i].classList.add('hidden');
//     })
// }
// count = 0;
// function compter(){
//     comp = count
//     count++;
//     return count
// }
// for(let i = 0; i < icone.length;i++){
//     icone[i].addEventListener('click',()=>{
//         const output = document.querySelector(".monBtn");
     
//         numberOfArticle.textContent = numberOfArticle.textContent < 10? `0${compter()}`:compter();
//         priceTotal.textContent
//         console.log(output)

//     })
// }