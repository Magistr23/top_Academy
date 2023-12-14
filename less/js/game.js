//Создали переменную
var p1=-1, p2=-1, p3=-1, p4=-1, p5=-1, p6=-1, p7=-1, p8=-1, p9=-1;
var fotoKres = "img/kres.jpg";
var fotoNol = "img/nol.jpg";
var fotoZero = "img/zero.jpg";
var numIgrok = 1; // по умолчанию номер игрока будет крестик - номер 1

//nameImage выдуманное переменная

function gamer(nameImage) {
    if (nameImage == pict1 && p1 == -1) {
         if(numIgrok == 1) {
            pict1.src=fotoKres; // если условие верно то открываем картинку 
            numIgrok = 0;
            p1=1;
         } 
         else if(numIgrok == 0) {
            pict1.src=fotoNol;
            numIgrok = 1;
            p1=0;
         }
    }
    else if(nameImage == pict2 && p2 == -1) {
        if(numIgrok == 1) {
            pict2.src=fotoKres; // если условие верно то открываем картинку 
            numIgrok = 0;
            p2=1;
         } 
         else if(numIgrok == 0) {
            pict2.src=fotoNol;
            numIgrok = 1;
            p2=0;
         }
    }
    else if(nameImage == pict3 && p3 == -1) {
        if(numIgrok == 1) {
            pict3.src=fotoKres; // если условие верно то открываем картинку 
            numIgrok = 0;
            p3=1;
         } 
         else if(numIgrok == 0) {
            pict3.src=fotoNol;
            numIgrok = 1;
            p3=0;
         }
    }
    else if(nameImage == pict4 && p4 == -1) {
        if(numIgrok == 1) {
            pict4.src=fotoKres; // если условие верно то открываем картинку 
            numIgrok = 0;
            p4=1;
         } 
         else if(numIgrok == 0) {
            pict4.src=fotoNol;
            numIgrok = 1;
            p4=0;
         }
    }
    else if(nameImage == pict5 && p5 == -1) {
        if(numIgrok == 1) {
            pict5.src=fotoKres; // если условие верно то открываем картинку 
            numIgrok = 0;
            p5=1;
         } 
         else if(numIgrok == 0) {
            pict5.src=fotoNol;
            numIgrok = 1;
            p5=0;
         }
    }
    else if(nameImage == pict6 && p6 == -1) {
        if(numIgrok == 1) {
            pict6.src=fotoKres; // если условие верно то открываем картинку 
            numIgrok = 0;
            p6=1;
         } 
         else if(numIgrok == 0) {
            pict6.src=fotoNol;
            numIgrok = 1;
            p6=0;
         }
    }
    else if(nameImage == pict7 && p7 == -1) {
        if(numIgrok == 1) {
            pict7.src=fotoKres; // если условие верно то открываем картинку 
            numIgrok = 0;
            p7=1;
         } 
         else if(numIgrok == 0) {
            pict7.src=fotoNol;
            numIgrok = 1;
            p7=0;
         }
    }
    else if(nameImage == pict8 && p8 == -1) {
        if(numIgrok == 1) {
            pict8.src=fotoKres; // если условие верно то открываем картинку 
            numIgrok = 0;
            p8=1;
         } 
         else if(numIgrok == 0) {
            pict8.src=fotoNol;
            numIgrok = 1;
            p8=0;
         }
    }
    else if(nameImage == pict9 && p9 == -1) {
        if(numIgrok == 1) {
            pict9.src=fotoKres; // если условие верно то открываем картинку 
            numIgrok = 0;
            p9=1;
         } 
         else if(numIgrok == 0) {
            pict9.src=fotoNol;
            numIgrok = 1;
            p9=0;
         }
    }
}