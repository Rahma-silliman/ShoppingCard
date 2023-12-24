const numberOfArticle = document.querySelector('#nombre');
const priceTotal = document.getElementById('priceTotal');
const totalPrice = document.querySelector('.totalPrice');
const item = document.querySelector('.element');
const history = document.querySelector('#myHistory');
const clear = document.querySelector('#clear');
const checkout = document.querySelector('#checkout');
const explore = document.querySelector('#explore');
const muBoutton = document.querySelectorAll('.myBtn');
const myImage = document.querySelectorAll('.card');
const heighCard = document.querySelectorAll('.tout')
const image = document.querySelectorAll('.card-img-top');
const myStarElement = document.querySelectorAll('.my-element')
const alerte = document.querySelector('.reussi')
const shop = document.querySelectorAll('.shop');

const detail = document.querySelector('.detail');
const element = document.querySelector('.history');
const classesElementHistory = element.classList
const shope = document.querySelectorAll('.shope')
const icone = document.querySelectorAll('.icon');
for (let i = 0; i < 11; i++) {
    image[i].setAttribute('id', `image-${i}`)
}



for (let i = 0; i < myImage.length; i++) {
    myImage[i].addEventListener('mouseenter', () => {
        shop[i].style.transform = "translate(0%,0%)"
    });
    myImage[i].addEventListener('mouseleave', () => {
        shop[i].style.transform = "translate(100%,100%)"
    });
}


const myCake = document.querySelector('#cakes');

const myCupCake = document.querySelector('#cupCakes')
const myCakeBride = document.querySelector('#sweets')
const myCakeBirthday = document.querySelector('#doughnut');
const cakeElement = document.querySelector('#myCakes');
const cupCakeElement = document.querySelector('#myCupCake');
const sweetElement = document.querySelector('#mySweet');
const doughnutElement = document.querySelector('#myDoughnut');
const allElement = document.querySelector('#all');
const newDiv = document.querySelector("#newDiv");
const allBtn = document.querySelector('#allBtn');
const myInput = document.querySelector('#input');
const myStar = document.querySelectorAll('.etoil');
const defileImage = document.querySelector('.card-two');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
const divParcors = document.querySelector('#parcoursItem')

let elementId;
let newTable = [];
let deletItem = () => {
    let delet = document.querySelectorAll('.delet')
    for (let i = 0; i < delet.length; i++) {
        delet[i].addEventListener('click', () => {
            let monElement = delet[i].parentElement.parentNode
            let index = +monElement.getAttribute('data-indice');
            newTable.splice(index, 1);
            localStorage.setItem('newTable', JSON.stringify(newTable || []));
            addItem();

            console.log(monElement.getAttribute('data-indice'));
        })
    }
}

let  updateStarRating = (starIndex, table) => {
    const starRating = JSON.parse(localStorage.getItem(`${starIndex}`)) || [];

    table.forEach((star, index) => {
        const isNote = index < starRating.length && starRating[index];
        star.classList.toggle('note', isNote);
    });
}


let  handleStarClick =(starIndex, table, starIndexInTable) =>{
    return () => {
        table.forEach((star, index) => {
            const isNote = index <= starIndexInTable;
            star.classList.toggle('note', isNote);
        });
        const storeRating = table.map(star => star.classList.contains('note'));
        localStorage.setItem(`${starIndex}`, JSON.stringify(storeRating));
    };
} 


let notation = ()=> {

    myStarElement.forEach((element, starIndex) => {
        const stars = Array.from(element.children[0].children);

       
        stars.forEach((star, starIndexInTable) => {
            star.addEventListener('click', handleStarClick(starIndex, stars, starIndexInTable));
        });

       
        updateStarRating(starIndex, stars);
    });
}

document.addEventListener('DOMContentLoaded', notation);

                                    


const filterData = (event) => {

    if (typeof event !== "string") {
        elementId = event.target.id;
    }
    else {
        elementId = event.trim();

    }
    newDiv.innerHTML = ''
    let cakesHtml = ''
    for (let i = 0; i < myTable[elementId].length; i++) {
        cakesHtml += `<div class="col-md-3 my-2 bor" id="tout">
    <div class="card m-auto i">
      <img src="./${myTable[elementId][i].link}"
        alt="" class="card-img-top"/>
      <div class="position-absolute shop " id="cupCake-one"><img src="${myTable[elementId][i].img}" alt="" srcset=""></div>
      <div class="d-flex justify-content-end align-items-center position-absolute my-element w-100"><ul class="list-unstyled d-flex align-items-center"> <li class="p-1 etoil"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg></li>
      <li class="p-1 etoil"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg></li><li class="p-1 etoil"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg></li><li class="p-1 etoil"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg></li><li class="p-1 etoil"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg></li></ul></div>
    </div>
    <div class="card-body m-auto bg-light">
      <ul class="list-unstyled d-flex justify-content-between">
        <li>  ${myTable[elementId][i].name}</li>
        <li><output class="btn monBtn">  ${myTable[elementId][i].price}</output></li>
      </ul>
    </div>
  </div>`
    }


    allElement.classList.add('d-none');
    newDiv.innerHTML = `<div class="d-md-flex justify-content-md-evenly" id="mycakes">${cakesHtml}</div>`

    const cardAdd = document.querySelectorAll('.i');

    for (let i = 0; i < cardAdd.length; i++) {
        cardAdd[i].addEventListener('mouseenter', () => {
            cardAdd[i].children[1].style.transform = "translate(0%,0%)"
        });
        cardAdd[i].addEventListener('mouseleave', () => {
            cardAdd[i].children[1].style.transform = "translate(100%,100%)"
        });
        cardAdd[i].children[1].addEventListener('click', (event) => {
            let myClass = event.target;
            if (!event.target.classList.contains('shop')) {
                myClass = event.target.parentElement;
            }
            img = myClass.previousElementSibling.getAttribute('src');
            const parenttitleAndPrice = myClass.parentElement.nextElementSibling.children[0];
            const title = parenttitleAndPrice.children[0].textContent;
            let price = +parenttitleAndPrice.children[1].textContent.replace('$', '').trim();
            let findElement = newTable.find((element, index) => {
                if (element.img === img) {
                    newTable[index].nbre++
                }
                return element.img === img
            });

            if (!findElement) {
                newTable.push({ price, title, img, nbre: 1 });
            };

            localStorage.setItem('newTable', JSON.stringify(newTable || []));
            addItem();
            deletItem();
        });
    }
    const myAllStar = document.querySelectorAll('.etoil');
    let myAllStarElement = document.querySelectorAll('.my-element');
    myAllStarElement.forEach((element, starIndex) => {
        const stars = Array.from(element.children[0].children);

       
        stars.forEach((star, starIndexInTable) => {
            star.addEventListener('click', handleStarClick(starIndex, stars, starIndexInTable));
        });

       
        updateStarRating(starIndex, stars);
    });
    const imageAddForFunction = document.querySelectorAll('.card-img-top');
    let cheminsImage = [];
    for (let i = 0; i < imageAddForFunction.length; i++) {
        cheminsImage.push(imageAddForFunction[i].getAttribute('src'))
        imageAddForFunction[i].addEventListener('click', () => {
            divParcors.classList.remove('d-none')
            defileImage.innerHTML = ''

            console.log(i);
            console.log(cheminsImage);
            const img = document.createElement('img');
            img.setAttribute('src', imageAddForFunction[i].getAttribute('src'))
            img.classList.add('imageDetail');

            defileImage.appendChild(img);
            arrowLeft.addEventListener('click', () => {
                if (imageAddForFunction.length !== null) {
                    defileImage.innerHTML = ''
                    i = i + 1;
                    const img = document.createElement('img');
                    img.setAttribute('src', imageAddForFunction[i].getAttribute('src'))
                    img.classList.add('imageDetail');
                    defileImage.appendChild(img);
                }

            });
            arrowRight.addEventListener('click', () => {
                if (imageAddForFunction.length !== null) {
                    defileImage.innerHTML = ''
                    i = i - 1;
                    const img = document.createElement('img');
                    img.setAttribute('src', imageAddForFunction[i].getAttribute('src'))
                    img.classList.add('imageDetail');
                    defileImage.appendChild(img);
                }

            });

        })



    }
    document.querySelector('.fermer').addEventListener('click', () => {
        divParcors.classList.add('d-none')
    })

}





myCake.addEventListener('click', filterData)
myCupCake.addEventListener('click', filterData)
myCakeBride.addEventListener('click', filterData)
myCakeBirthday.addEventListener('click', filterData)
allBtn.addEventListener('click', () => {
    newDiv.innerHTML = ''

    allElement.classList.remove('d-none')
});
// filter the data
document.querySelector('#boutton-addon1').addEventListener('click', () => {
    if (myInput.value) {
        elementId = myInput.value;
        filterData(elementId);
    };

});
myInput.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (myInput.value) {
        if (event.key === "Enter") {
            console.log(myTable[myInput.value]);
            elementId = myInput.value;
            filterData(elementId);
        }
    }

});



let reset = () => {
    localStorage.clear();
    location.reload();
}
// cette function ajout des articles sur la card;
function isKeyObject(obj, key) {
    if (obj[key] === undefined) {
        return false;
    }
    else {
        return true
    }
}
let img = ''
const addItem = () => {

    if (JSON.parse(localStorage.getItem('newTable'))) {
        let tableLocal = JSON.parse(localStorage.getItem('newTable'));

        newTable = tableLocal;
        item.innerHTML = ''
        let total = [];

        let imageUpDate = [];
        for (let i = 0; i < tableLocal.length; i++) {
            item.innerHTML += `<ul data-indice="${i}" class="list-unstyled d-flex align-items-center w-100">
            <li><img src="${tableLocal[i].img}" alt="" class=" class"></li>
            <li class="d-inline-block w-100"><span class="d-block text-light">${tableLocal[i].title}</span><span class="">${tableLocal[i].nbre} X $ ${tableLocal[i].price} = ${tableLocal[i].nbre * tableLocal[i].price}</span></li>
            <li class=" "><button class="btn text-danger border-0 delet"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 " viewBox="0 0 16 16" class="">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg></button> </li>
          </ul>`
            let sommeTable = +newTable[i].price * newTable[i].nbre
            total.push(sommeTable);
            imageUpDate.push(newTable[i].img);

            let somme = 0;
            for (let j = 0; j < total.length; j++) {
                somme += total[j]
            }

            isKeyObject(newTable[i], img)

            priceTotal.textContent = `Items - $ ${somme}`
            totalPrice.innerHTML = `$ ${somme}`


        }
        numberOfArticle.innerHTML = ' ' + newTable.length;
        deletItem()
    }
}
// cette fonction suprime un element à la fois

// ses ligne de code executes les instructions porté sur l'evenement click des boutons ajouter dans le panier

for (let i = 0; i < shop.length; i++) {

    shop[i].addEventListener('click', (event) => {

        let myClass = event.target;
        if (!event.target.classList.contains('shop')) {
            myClass = event.target.parentElement;
        }
        img = myClass.previousElementSibling.getAttribute('src');
        const parenttitleAndPrice = myClass.parentElement.nextElementSibling.children[0];
        const title = parenttitleAndPrice.children[0].textContent;
        let price = +parenttitleAndPrice.children[1].textContent.replace('$', '').trim();


        let findElement = newTable.find((element, index) => {
            if (element.img === img) {
                newTable[index].nbre++
            }
            return element.img === img
        })
        if (!findElement) {
            newTable.push({ price, title, img, nbre: 1, });
        }
        setInterval(() => {
            alerte.classList.remove('d-none')
        }, 100)

        localStorage.setItem('newTable', JSON.stringify(newTable || []));
        addItem();
        deletItem();

    })
}
// evenement porté sur le button clear card
clear.addEventListener('click', () => {
    reset()
})

addItem();

for (let i = 0; i < image.length; i++) {
    image[i].classList.add('sweet');

};
history.addEventListener('click', () => {
    let resultat = classesElementHistory.toggle('d-none');
});




let cheminsImage = [];
for (let i = 0; i < image.length; i++) {
    cheminsImage.push(image[i].getAttribute('src'))
    image[i].addEventListener('click', () => {
        divParcors.classList.remove('d-none')
        defileImage.innerHTML = ''

        console.log(i);
        console.log(cheminsImage);
        const img = document.createElement('img');
        img.setAttribute('src', image[i].getAttribute('src'))
        img.classList.add('imageDetail');

        defileImage.appendChild(img);
        arrowLeft.addEventListener('click', () => {

            defileImage.innerHTML = ''
            i = i - 1;
            console.log(i);
            const img = document.createElement('img');
            img.setAttribute('src', image[i].getAttribute('src'))
            img.classList.add('imageDetail');
            defileImage.appendChild(img);




        });
        arrowRight.addEventListener('click', () => {
            defileImage.innerHTML = ''
            i = i + 1;
            console.log(i);
            const img = document.createElement('img');
            img.setAttribute('src', image[i].getAttribute('src'))
            img.classList.add('imageDetail');
            defileImage.appendChild(img);

        });

    })


}
document.querySelector('.fermer').addEventListener('click', () => {
    divParcors.classList.add('d-none')
})
document.querySelector('.list').addEventListener('click',()=>{
    console.log(document.querySelector('.madiv').classList);
    document.querySelector('.madiv').classList.toggle('d-none')

})