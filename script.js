const main = document.querySelector('.main')
const numOfTimes = document.querySelector('.times')
let times = 0;
main.addEventListener('dblclick', (e)=>{
    times++
    numOfTimes.textContent = times

   const heart= document.createElement('i')
   heart.classList.add('fa-sharp', 'fa-solid', 'fa-heart')
   main.appendChild(heart)

   heart.style.top = e.offsetY +"px"
   heart.style.left = e.offsetX +"px"
   
   setTimeout(() => {
       heart.remove()
   }, 900);
})