"use sctrict";

const glagol = ["ерошил","запатентуем","избиралась","каландрируешь","поисповедаю","приубери","траверсируете","напаривавший","отстыковывайте","провязывался"];
const Nick = ["Парфентий","Судислав","Анастас","Кирьян","Лукиан","Генриетта","Ирада","Кирьяна","Урбана","Феоктиста"];

let hiddenDiv;
let fonf = document.getElementById("fon");

let i = 0;

for (let index = 0; index < 3; index++) {
    i++;
    addNews(i);
    
}

fonf.addEventListener("click", function (event) {
    let del = event.target.closest('.delete');

    if (!del) return;
    if (!fonf.contains(del)) return;

    let div = event.target.closest('.news');
    none(div);

});

function random() {
    let index = Math.floor(Math.random() * 10);
    return index;
}

function none(div) {
    hiddenDiv = div;
    if (hiddenDiv) {
        hiddenDiv.remove();
    }
}


let NewNews = document.getElementById("NewNews");
NewNews.addEventListener("click", function (event) {
    let addDiv = event.target.closest('#NewNews');
    if (!addDiv) return;

    addNews(i += 1);

});

function addNews(index) {

    let block = document.createElement('div');
    block.className = "news";
    let p = document.createElement('p');
    p.textContent = `Новость под №${index} ${Nick[random()]} ${glagol[random()]} ${Nick[random()]}`;
    block.append(p);
    let but = document.createElement('button');
    but.className = "delete";
    but.textContent = "Удалить запись";
    block.append(but);
    let fonf = document.getElementById("fon");
    fonf.append(block);
}