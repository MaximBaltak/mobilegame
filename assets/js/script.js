document.addEventListener("DOMContentLoaded",() =>{

    const data = {
        "rating": [
            {
                "id": "123",
                "name": "Владимир",
                "lastName": "Ларионов",
                "img": "./male.png",
                "points": "463"
            },
            {
                "id": "9",
                "name": "Владимир",
                "lastName": "Сергеев",
                "img": "./male.png",
                "points": "521"
            },
            {
                "id": "231",
                "name": "Вениамин",
                "lastName": "Васильев",
                "img": "./male.png",
                "points": "865"
            },
            {
                "id": "321",
                "name": "Мария",
                "lastName": "Логинова",
                "img": "./female.png",
                "points": "865"
            },
            {
                "id": "492",
                "name": "Борис",
                "lastName": "Казанцев",
                "img": "./male.png",
                "points": "784"
            },
            {
                "id": "452",
                "name": "Полина",
                "lastName": "Калинина",
                "img": "./female.png",
                "points": "225"
            },
            {
                "id": "796",
                "name": "Даниил",
                "lastName": "Воробьёв",
                "img": "./male.png",
                "points": "642"
            },
            {
                "id": "4",
                "name": "Эрик",
                "lastName": "Аксёнов",
                "img": "./male.png",
                "points": "150"
            },
            {
                "id": "1155",
                "name": "Иван",
                "lastName": "Иванов",
                "img": "./male.png",
                "points": "100"
            },
            {
                "id": "12145",
                "name": "Артем",
                "lastName": "Алексеев",
                "img": "./male.png",
                "points": "1000"
            }
        ],
        "friends": [
            {
                "id": "9",
                "name": "Владимир",
                "lastName": "Сергеев",
                "img": "./male.png"
            },
            {
                "id": "4",
                "name": "Эрик",
                "lastName": "Аксёнов",
                "img": "./male.png"
            },
            {
                "id": "15411",
                "name": "Ирина",
                "lastName": "Чеснокова",
                "img": "./female.png"
            },
            {
                "id": "15564",
                "name": "Дарина",
                "lastName": "Боброва",
                "img": "./female.png"
            }
        ]
    }
    
    let male = document.querySelector('.male'),
    dirs = document.querySelectorAll('.dirs'),
    arrows = document.querySelectorAll('.arrows'),
    plus = document.querySelectorAll('.plus'),
    rating = document.querySelector('.rating'),
    overlay = document.querySelector('.overlay'),
    univer= document.querySelector('.univer'),
    out = document.querySelector('.out'),
    content =document.querySelector('.slider_content'),
    window = document.querySelector('.window'),
    text = document.querySelectorAll('.text'),
    nomber = document.querySelectorAll('.number'),
    icon = document.querySelectorAll('.icon'),
    name = document.querySelectorAll('.name'),
    xp = document.querySelectorAll('.xp');

    let offset=0;

    

    dirs.forEach(el => {
            el.addEventListener('mouseover',()=>{
                let plus = el.querySelector('.plus');
                plus.style.opacity = '1.0';

            });
            el.addEventListener('mouseout',()=>{
                let plus = el.querySelector('.plus');
                plus.style.opacity = '0.0';

            });
        });

    male.addEventListener('mouseover',()=>{
        male.style.top='-5px';
    });
    male.addEventListener('mouseout',()=>{
        male.style.top ='0px';
    })
    rating.addEventListener('click',()=>{
        overlay.style.display= 'block';
        overlay.style.animation ='overlay 0.5s linear forwards';
        window.style.animation ='window 0.8s linear forwards';

    });
    out.addEventListener('click',()=>{
        overlay.style.animation ='overlayr 0.5s  linear  forwards';
        window.style.animation ='windowr 0.8s   linear  forwards';
          setTimeout(()=>{
            overlay.style.display ='none';
        }, 990);
        

    });
    
   
    arrows[0].addEventListener('click',()=>{
        
        if (offset<=0) {
            offset = 0
            content.style.left = offset+'px';
        } else if (offset==476 || offset <476) {
            offset = offset-68;
           content.style.left = -offset+'px';
        }
        
    });
    arrows[1].addEventListener('click',()=>{
        if (offset>=476) {
            offset = 476 ;
            content.style.left = -offset+'px';
        }else
        offset = offset +68;
        content.style.left = -offset+'px';
        
        
    }); 

    console.log(icon[6]); 
               let one = data.rating[4],
               two = data.rating[6],
               three = data.friends[1],
               four = data.friends[3],
               five = data.rating[3],
               six = data.friends[2],
               seven= data.rating[1];
               
            
               
               nomber[0].value ='2';
               icon[0].innerHTML=`<img class= "male" src = "assets/icons/${one.img}" alt="png">`;
               name[0].value =one.name +" "+ one.lastName;
               if (one.points == undefined) {
                xp[0].value ='0';
               }else{
               xp[0].value = one.points;
               }
               nomber[1].value ='3';
               icon[1].innerHTML=`<img class= "male" src = "assets/icons/${two.img}" alt="png">`;
               name[1].value =one.name +" "+ two.lastName;
               if (two.points == undefined) {
                xp[1].value ='0';
               }else{
               xp[1].value = two.points;
               }
               nomber[2].value ='1';
               icon[2].innerHTML=`<img class= "male" src = "assets/icons/${three.img}" alt="png">`;
               name[2].value =three.name +" "+ three.lastName;
               if (three.points == undefined) {
                xp[2].value ='0';
               }else{
               xp[2].value = three.points;
               }
               nomber[3].value ='5';
               icon[3].innerHTML=`<img class= "male" src = "assets/icons/${four.img}" alt="png">`;
               name[3].value =four.name +" "+ four.lastName;
               if (four.points == undefined) {
                xp[3].value ='0';
               }else{
               xp[3].value = four.points;
               }

               nomber[4].value ='1';
               icon[4].innerHTML=`<img class= "male" src = "assets/icons/${five.img}" alt="png">`;
               name[4].value =five.name +" "+ five.lastName;
               if (five.points == undefined) {
                xp[4].value ='0';
               }else{
               xp[4].value = five.points;
               }
               nomber[5].value ='5';
               icon[5].innerHTML=`<img class= "male" src = "assets/icons/${six.img}" alt="png">`;
               name[5].value =six.name +" "+ six.lastName;
               if (six.points == undefined) {
                xp[5].value ='0';
               }else{
               xp[5].value = six.points;
               }
               nomber[6].value ='4';
               icon[6].innerHTML=`<img class= "male" src = "assets/icons/${seven.img}" alt="png">`;
               name[6].value =seven.name +" "+ seven.lastName;
               if (seven.points == undefined) {
                xp[6].value ='0';
               }else{
               xp[6].value = seven.points;
               }

               univer.addEventListener('click',()=>{
                   if (male.style.animation ='animation 18s infinite linear paused backwards') {
                        male.style.animation ='animation 18s infinite linear running backwards';
                   }
                   setTimeout(()=>{male.style.animation ='animation 18s infinite linear paused backwards'},374);
               });
               
               
            
                
                
                
                
            
            

        
    

});