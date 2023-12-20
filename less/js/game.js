//Создали переменные
//p1 - p9 - если -1,  то квадратик закрыт
//var p1=-1, p2=-1, p3=-1, p4=-1, p5=-1, p6=-1, p7=-1, p8=-1, p9=-1;
var p = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
var fotoKres="img/kres.jpg";
var fotoNol="img/nol.jpg";
var fotoZero="img/zero.jpg";
var numIgrok=1; //По умолчанию номер игрока будет крестик - номер 1
var start=false;
var paragraph = document.querySelector('h6');
var myQuery = document.getElementsByClassName("query");


function gamer(nameImage){  //nameImage - переменная, можно x1, v
if(start==true){   //if(start==true)  -> if(true) можно start==true  
    if(nameImage==pict1 && p[0]==-1){  //p1==-1 - квадратик не открыт
        cell(pict1,0);
    }  
    else if(nameImage==pict2 && p[1]==-1){  //p1==-1 - квадратик не открыт
        cell(pict2,1);
    }

    else if(nameImage==pict3 && p[2]==-1){  //p1==-1 - квадратик не открыт
        cell(pict3,2);
    }

    else if(nameImage==pict4 && p[3]==-1){  //p1==-1 - квадратик не открыт
        cell(pict4,3);
    }

    else if(nameImage==pict5 && p[4]==-1){  //p1==-1 - квадратик не открыт
        cell(pict5,4);
    }

        else if(nameImage==pict6 && p[5]==-1){  //p1==-1 - квадратик не открыт
            cell(pict6,5);
        }

        else if(nameImage==pict7 && p[6]==-1){  //p1==-1 - квадратик не открыт
            cell(pict7,6);
        }

        else if(nameImage==pict8 && p[7]==-1){  //p1==-1 - квадратик не открыт
            cell(pict8,7);
        }

        else if(nameImage==pict9 && p[8]==-1){  //p1==-1 - квадратик не открыт
            cell(pict9,8);
        }
    } //Закрывает условие проверки начала игры
} //Закрывает функцию

function newGame(){
   // p1=-1, p2=-1, p3=-1, p4=-1, p5=-1, p6=-1, p7=-1, p8=-1, p9=-1;
   p = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
    numIgrok=1;
    pict1.src=fotoZero;
    pict2.src=fotoZero;
    pict3.src=fotoZero;
    pict4.src=fotoZero;
    pict5.src=fotoZero;
    pict6.src=fotoZero;
    pict7.src=fotoZero;
    pict8.src=fotoZero;
    pict9.src=fotoZero;
    start=true;
    paragraph.textContent = 'Игра в крестики-нолики';
    myQuery[0].innerHTML = 'Ход Крестики';
}

function winner(x){
    if ((p[0]==x && p[1]==x && p[2]==x) || (p[3]==x && p[4]==x && p[5]==x) || (p[6]==x && p[7]==x && p[8]==x) ||
    (p[0]==x && p[3]==x && p[6]==x) || (p[1]==x && p[4]==x && p[7]==x) || (p[2]==x && p[5]==x && p[8]==x) ||
    (p[0]==x && p[4]==x && p[8]==x) || (p[2]==x && p[4]==x && p[6]==x)){
    if (x==1){
        //alert("Выигрыш (крестик)");
        paragraph.textContent = 'Победили Крестики';
        start=false;
        }
    else{
        //alert("Выигрыш (нолик)");
        paragraph.textContent = 'Победили Нолики';
        start=false;
    }
    }

    else if(p[0]>-1 && p[1]>-1 && p[2]>-1 && p[3]>-1 && p[4]>-1 && p[5]>-1 && p[6]>-1 && p[7]>-1 && p[8]>-1){
    //alert("Ничья");
    paragraph.textContent = 'Ничья';
    start=false;
    }
}

function cell(pict,i){   //p=-1
    if(numIgrok==1){
        pict.src=fotoKres;
        numIgrok=0;
        p[i]=1;
        myQuery[0].innerHTML = 'Ход Нолики';
    }
    else if(numIgrok==0){
        pict.src=fotoNol;
        numIgrok=1;
        p[i]=0;
        myQuery[0].innerHTML = 'Ход Крестики';
    }
    winner(1-numIgrok);
}