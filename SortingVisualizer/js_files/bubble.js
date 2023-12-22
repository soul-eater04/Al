async function bubble() {    
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){        
        for(let j = 0; j < ele.length-i-1; j++){            
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            await wait(delay);
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){              
                swap(ele[j], ele[j+1]);
                await wait(delay/2);
            }
            ele[j].style.background = 'rgb(177, 221, 241)';
            ele[j+1].style.background = 'rgb(177, 221, 241)';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}


