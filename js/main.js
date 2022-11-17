//Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
//Creare un carosello come nella foto allegata.  Milestone 0:
//
//Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
//costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
//Milestone 1:
//Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare
// dinamicamente il carosello. Al click dell’utente sulle frecce verso sinistra o destra,
// l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.    
//  Milestone 2:
//Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima
// e l’utente clicca la freccia indietro, la miniatura che deve attivarsi sarà l’ultima e 
//viceversa per l’ultima miniatura se l’utente clicca la freccia avanti.
//BONUS 1:
//Aggiungere le thumbnails (sottoforma di miniatura) ed al click 
//attivare l’immagine corrispondente.
//BONUS 2:
//Aggiungere funzionalità di autoplay: dopo un certo periodo di 
//tempo (3 secondi) l’immagine attiva dovrà cambiare alla 
//successiva.
//BONUS 3:
//Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
let imgIndex = 0;
const slideImg = document.querySelector(".slide-img");
const grigliaDestra = document.querySelector(".griglia-destra");
const btnTop = document.getElementById("button-top");
const btnBot = document.getElementById("button-bot");
let imgSlide;
const btnStart = document.getElementById("btn-start")
const btnStop = document.getElementById("btn-stop")
//creo un ciclo per creare le immagini
for (let i = 0; i < images.length; i++) {
    const immagini = images[i].image;
    const titleText = images[i].title;
    const descriptionText = images[i].text;

    //creo l'immagine
    let boxImg = document.createElement("div");
    let imgSlide = document.createElement("img");
    imgSlide.src = immagini;
    boxImg.dataset.immagineGrande = (i);

    console.log(imgSlide); 
    //aggiungo la classe d-none
    boxImg.classList.add("box-img");
    boxImg.classList.add("display-none");
    
    slideImg.append(boxImg);
    boxImg.append(imgSlide);

    let imgDestra = document.createElement("img");
    imgDestra.src = immagini;
    imgDestra.dataset.immaginePiccola = (i);
    imgDestra.classList.add("crystal");

    imgDestra.addEventListener("click", function() {
        //let imgGrigliaDestra = imgGrigliaDestra.querySelector("griglia-destra > *");
        //imgGrigliaDestra.classList.remove("active")
        destra = document.querySelectorAll(`.crystal`);

        destra.forEach(element => {
            element.classList.remove("active");
        });

        //grande = document.querySelectorAll(".box-img");
//
        //grande.forEach(element => {
        //    element.classList.remove("display-none");
        //});
//
        //grande.forEach(element => {
        //    element.classList.add("display-none");
        //});
//
        //grande[imgIndex + -1].classList.remove("display-none");
        //    
        
        imgIndex = this.dataset.immaginePiccola
        
        this.classList.add("active");
        console.log(this.dataset.immaginePiccola);
        console.log(boxImg.dataset.immagineGrande);

        

        //imgSlide.document.createElement("img");
        //imgSlide.src = immagini(imgIndex);

        //const oldActiveEl = boxImg.querySelector( "div" );
        //const oldThumbActiveEl = imgDestra.querySelector( ".active" );

        //if (oldActiveEl.classList.includes("display-none")) {
        //    
        //} else {
        //    oldActiveEl.classList.add("display-none")
        //}
    
        //oldActiveEl.classList.add( "display-none" );
        //oldThumbActiveEl.classList.remove( "active" );
        //
    
    
        //const imgElements = boxImg.querySelectorAll( "div" );
        //imgElements.classList.add ("display-none");
        //const thumbElements = imgDestra.querySelectorAll( "img" );
    
        //const newActiveEl = imgElements[ imgIndex ];
        //const newThumbActiveEl = thumbElements[ imgIndex ];
    
        //newActiveEl.classList.remove( "display-none" );
        //newThumbActiveEl.classList.add( "active" );

        
        console.log(imgIndex);
        //console.log(this);
        //cambiaImmagine(false)


    })     //********************* */



    grigliaDestra.append(imgDestra)

    let divTitle = document.createElement("div");
    divTitle.classList.add("descrizione");
    boxImg.append(divTitle);

    let title = document.createElement("h3");
    title.innerHTML = titleText;
    
    let description = document.createElement("p");
    
    description.innerHTML = descriptionText;
    divTitle.append(title);
    divTitle.append(description);

    if( i === 0){
        boxImg.classList.remove("display-none");
        imgDestra.classList.add("active");
    }
}
//metto in ascolto il bottone
btnTop.addEventListener("click", function () {
//invoco la funzione cambiaimmagine dicendo indirettamente che isnext é false
    cambiaImmagine(false);
  
});

//metto in ascolto il bottone
btnBot.addEventListener("click", function () {
//invoco la funzione cambiaimmagine dicendo indirettamente che isnext é true
    cambiaImmagine(true);

});



//btnStart.addEventListener("click", function (){
// console.log("ciao");
//    
//})
//btnStop.addEventListener("click", function (){
// console.log("stop");
//    setInterval(function() {
//
//        return
//    
//    }, 3000);
//})

//setInterval(function() {
//    
//           cambiaImmagine(true);
//       
//       }, 3000);
//

//creo una funzione chiamandola cambiaimmagine
function cambiaImmagine(isNext) {

    const oldImgEl = document.querySelector(`.slide-img > :nth-child(${imgIndex + 1})`);
    oldImgEl.classList.add("display-none");

    const oldImgRight = document.querySelector(`.griglia-destra > :nth-child(${imgIndex + 1})`);
    oldImgRight.classList.remove("active");
    //se isnext é = a true incrementa
    if (isNext === true) {

        // --
        imgIndex++;

        if (imgIndex >= images.length) {
            imgIndex = 0
        }
        // ----
    } else { // se é false decrementa

        imgIndex--;

        if (imgIndex < 0) {
            imgIndex = images.length - 1;
        }        
    }
    

    const newImgEl = document.querySelector(`.slide-img > :nth-child(${imgIndex + 1})`);
    newImgEl.classList.remove("display-none");

    const newImgRight = document.querySelector(`.griglia-destra > :nth-child(${imgIndex + 1})`);
    newImgRight.classList.add("active");
    
    
    console.log(imgIndex);
}
