const algorithms = document.querySelectorAll('.dropdown-content a');
const arr = Array.from(algorithms);
const dropbtn = document.querySelector('.dropbtn');
arr.forEach((algorithm) => {
    algorithm.addEventListener('click',(e)=>{
        dropbtn.textContent = e.target.textContent;
    })
})

