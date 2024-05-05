let btn=document.querySelectorAll('#btn');
let side=document.querySelectorAll('#sidebar-wrapper');



   const btn2 = document.querySelector('.btn2');
   const side2=document.querySelectorAll('#sidebar-wrapper');


btn2.addEventListener('click', () => {

 //btn2.setAttribute('class','activeside');
 document.getElementById('sidebar-wrapper').classList.toggle('activeside');
 document.getElementById('sidebar-wrapper').classList.toggle('togglenew');
 document.getElementById('My').classList.toggle('my');
 const list=document.querySelectorAll('.name' );
list[0].classList.toggle('Namelist');
list[1].classList.toggle('Namelist');
list[2].classList.toggle('Namelist');
list[3].classList.toggle('Namelist');
list[4].classList.toggle('Namelist');
list[5].classList.toggle('Namelist');
list[6].classList.toggle('Namelist');
 document.getElementById('sidebar-wrapper').classList.toggle('sidebar-nav-new');
 document.getElementById('page-content-wrapper').classList.toggle('page-content-wrapper2');


 const icon2=document.querySelectorAll('.all' );
 icon2[0].classList.toggle('icon2');
 icon2[1].classList.toggle('icon2');
 icon2[2].classList.toggle('icon2');

 icon2[3].classList.toggle('icon2');

 icon2[4].classList.toggle('icon2');
 icon2[5].classList.toggle('icon2');

 icon2[6].classList.toggle('icon2');
 icon2[7].classList.toggle('icon2');
 document.getElementById('btn').classList.toggle('toggle2');







 //document.querySelector('.name' ).classList.toggle('Namelist');



});
