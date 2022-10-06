let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

        let body=document.querySelector('body');
if(isMobile.any()) {
        body.classList.add('touch');
        let arrow=document.querySelectorAll('.arrow');
    for(i=0;i<arrow.length; i++){
            let thisLink=arrow[i].previousElementSibling;
            let subMenu=arrow[i].nextElementSibling;
            let thisArrow=arrow[i];

            thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function(){
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
    }else{
        body.classList.add('mouse');
    };


/*
jivo_api.setContactInfo({
    "name": "John Smith",
    "email": "email@example.com",
    "phone": "+14084987855",
    "description": "Description text"
 }); 
 */


/*slider*/
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:false,
        slidesToShow:3,
        autoplay:true,
        speed:1500,
        autoplaySpeed:1500,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});










/*click*/
    let opPanel=document.querySelector('.panel');
    let opanel=document.querySelector('.form-logo__image');
    opanel.addEventListener('click', function(){
        opPanel.classList.toggle('openClass');
    })

    let exLink = document.getElementById('exit-link');
    exLink.addEventListener('click', function(){
        opPanel.classList.remove('openClass');
    });

    let formReg = document.getElementById('form-reg');
    let registerBtn = document.getElementById('reg-btn');
    let regClose = document.getElementById('regclose');
    let formRegBg = document.getElementById('formregbg');
    registerBtn.addEventListener('click', function(){
        formRegBg.classList.add('reg-bg');
    	formReg.classList.add('openrg');
 	});

    regClose.addEventListener('click', function(){
        formRegBg.classList.remove('reg-bg');
        formReg.classList.remove('openrg');
    });

    registerBtn.addEventListener('click', function(){
        opPanel.classList.remove('openClass');
    });	

    formRegBg.addEventListener('click', function(){
        formRegBg.classList.remove('reg-bg');
        formReg.classList.remove('openrg');
    });

    let formAuth = document.getElementById('form-auth');
    let authBtn = document.getElementById('auth-btn');
    let authClose = document.getElementById('authclose');
    let formAuthBg = document.getElementById('formauthbg');

    authBtn.addEventListener('click', function(){
        formauthbg.classList.add('auth-bg');
        formAuth.classList.add('openauth');
    });

    authClose.addEventListener('click', function(){
        formAuthBg.classList.remove('auth-bg'); 
        formAuth.classList.remove('openauth');
    });

    authBtn.addEventListener('click', function(){
        opPanel.classList.remove('openClass');
    }); 

     formAuthBg.addEventListener('click', function(){
        formAuthBg.classList.remove('auth-bg');
        formAuth.classList.remove('openauth');
    });


window.onkeyup = okno; // нажатие Esc, см. условие "e.keyCode==27" 
document.getElementById('popup').onclick = okno;

function okno(e) {
  if (e.target.nodeName != 'DIV' && e.target.nodeName != 'FIGCAPTION' || e.keyCode==27) { // через && перечисляются теги, клинкув на которые окно не будет закрыто; сюда же можно включить тег A или IFRAME 
    document.getElementById('popup').style.display='none';
    localStorage.setItem('popup1', 'none');
  }
}

if(localStorage.getItem('popup1')) {
  document.getElementById('popup').style.display='none';
}