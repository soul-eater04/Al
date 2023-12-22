async function selection(){    
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){        
        let min_index = i;
        // Change color of the position to swap with the next min
        ele[i].style.background = 'blue';
        for(let j = i+1; j < ele.length; j++){            
            // Change color for the current comparision (in consideration for min_index)
            ele[j].style.background = 'red';

            await wait(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){               
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = 'rgb(177, 221, 241)';
                }
                min_index = j;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = 'rgb(177, 221, 241)';
            }   
        }
        await wait(delay);
        swap(ele[min_index], ele[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = 'rgb(177, 221, 241)';
        // change the sorted elements color to green
        ele[i].style.background = 'green';
    }
}


