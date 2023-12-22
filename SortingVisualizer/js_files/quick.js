
async function sortHelper(ele, l, r){    
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){        
        // color current element
        ele[j].style.background = 'yellow';
        // pause
        await wait(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){            
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if(i != l) ele[i-1].style.background = 'pink';
            if(i != j) ele[j].style.background = 'pink';
            // pause
            await wait(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    // pause
    await wait(delay);
    swap(ele[i], ele[r]);     
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    // pause
    await wait(delay);
    
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'rgb(177, 221, 241)';
    }

    return i;
}

async function quickSort(ele, l, r){
    if(l < r){
        let pivot = await sortHelper(ele, l, r);
        await quickSort(ele, l, pivot - 1);
        await quickSort(ele, pivot + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}

