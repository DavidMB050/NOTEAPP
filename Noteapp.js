
const Appcadre = document.getElementById ("Appcadre");
const datecrea = document.getElementById ("datecrea");
const Note = document.getElementById ("Note");
const Notetitre = document.getElementById ("Notetitre");
const Notecorps = document.getElementById ("Notecorps");

const Titreh2 = document.getElementById ("Titreh2");

const Gras = document.getElementById ("Gras");
const Italique = document.getElementById ("Italique");
const Souligné = document.getElementById ("Souligné");
const Titrebouton = document.getElementById ("Titrebouton");
const Paragraphebouton = document.getElementById ("Paragraphebouton");
const Listebouton = document.getElementById ("Listebouton");
const savebutton = document.getElementById ("savebutton");
const afficher = document.getElementById ("afficher");
const réduire = document.getElementById ("réduire");
const Colorchange = document.getElementById ("Colorchange");


let selection;
let range;
let fragdom;
let span;
let clickcount =0;
let date = new Date();




// Affichage de la note à la fin de l'édit

function affichage () {
  afficher.addEventListener ("click", ()=>{
    let hauteur = 300;
    Notecorps.style.height =`${hauteur}px`;
      Gras.style.display = "block";
    Italique.style.display = "block";
   Souligné.style.display = "block";
      Titrebouton.style.display = "block";
      Paragraphebouton.style.display = "block";
     Listebouton.style.display = "block";
     Colorchange.style.display = "block";
  });

  réduire.addEventListener ("click", ()=>{
    let hauteur = 100;
    Notecorps.style.height = `${hauteur}px`;
    Gras.style.display = "none";
    Italique.style.display = "none";
   Souligné.style.display = "none";
      Titrebouton.style.display = "none";
      Paragraphebouton.style.display = "none";
     Listebouton.style.display = "none";
     Colorchange.style.display = "none";

  });
};

// Titre toujours en H2

Notetitre.addEventListener("input", () => {
 let h2 = document.createElement ("h2");
 Notetitre.appendChild (h2);
});


// Sélection de texte 

function Select () {

Notecorps.addEventListener("mouseup", () => {

 selection = window.getSelection();
range = selection.getRangeAt(0);
fragdom = range.extractContents();
span= document.createElement ("span");

span.appendChild(fragdom);
range.insertNode (span);

console.log (span);
console.log (span.textContent);
console.log (fragdom.textContent);

   
});

};

// Changement de style du texte 

function boutonevent () {

Italique.addEventListener ("click",()=>{
clickcount++;
  if (clickcount % 2 !== 0) {
span.style.fontStyle = "italic";
Select ();
selection.removeAllRanges()}
else {
  span.style.fontStyle = "normal";
Select ();
selection.removeAllRanges()
}
console.log ( clickcount);
});

Souligné.addEventListener ("click",()=>{
  clickcount ++;
if (clickcount % 2 !== 0) {
span.style.textDecoration = "underline";
Select ();
selection.removeAllRanges();}
else {
  span.style.textDecoration = "none";

selection.removeAllRanges();
}
});

Gras.addEventListener ("click",()=>{
clickcount ++;
if (clickcount % 2 !== 0) {
span.style.fontWeight = "bolder";
Select ();
selection.removeAllRanges()}
else {
 span.style.fontWeight = "normal";
Select ();
selection.removeAllRanges() 
}
});


Colorchange.addEventListener("input", (event)=>{
span.style.color = event.target.value;});




};

// Ajout de nouveaux éléments HTML P, checkbox , H3

function boutonelementHtml () {

  
Titrebouton.addEventListener ("click",()=>{
const h3 = document.createElement ("h3");


selection = window.getSelection();
 if (!selection.rangeCount) return;
range = selection.getRangeAt(0);


if (selection.toString ()=="") {

h3.innerText = "Mon sous-titre";
range.insertNode(h3);
}

else {
fragdom = range.extractContents();

h3.appendChild(fragdom);

range.insertNode (h3);

};


console.log (h3);
console.log (h3.textContent);
selection.removeAllRanges();

});


Paragraphebouton.addEventListener ("click",()=>{
const P = document.createElement ("p");

selection = window.getSelection();
 if (!selection.rangeCount) return;
range = selection.getRangeAt(0);



if (selection.toString()=="") {
range.insertNode(P);
P.innerText = "mon paragraphe";
}

else {
  fragdom = range.extractContents();
P.appendChild(fragdom);
range.insertNode (P);

};



console.log (P);
selection.removeAllRanges();

});


Listebouton.addEventListener ("click",()=>{
const input = document.createElement ("input");
const label = document.createElement ("label");
label.attributes 
input.setAttribute ("type", "checkbox");
input.id = "checkit";
label.setAttribute ("for","checkit");

selection = window.getSelection();
 if (!selection.rangeCount) return;
range = selection.getRangeAt(0);



if (selection.toString()=="") {
label.innerText ="ma liste";
range.insertNode(label);
  range.insertNode(input);



}

else {
fragdom = range.extractContents();
label.appendChild(fragdom);
range.insertNode (label);
}

Select ();

});
};


// Date de création de la note

function créadate () {
 
 
  const Daycrea = document.createElement ("p");
Daycrea.innerText = `créé le : ${date}`;
  Daycrea.style.fontStyle = "italic";
  
 
  datecrea.appendChild (Daycrea);
  
  console.log (Daycrea);
};



Select ();
boutonevent ();
boutonelementHtml();
créadate();
affichage ();



// sauvegarde à voir après une monté en compétence

/*
Note.addEventListener ("click",()=>{
  
  const Daydate = document.createElement ("p");

Daydate.innerText = `modifié le : ${date}`;
Daydate.style.fontStyle = "italic";
Note.appendChild (Daydate);

console.log ( Daydate);

 
  
});
*/

/*
function saveNote() {
  localStorage.setItem("Appcadre", Appcadre.innerHTML);
};

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("Appcadre");
  if (saved) {
    Appcadre.innerHTML = saved;
  }
});

saveNote();

*/




