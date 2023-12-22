async function merge(ele, low, mid, high){    
    const n1 = mid - low + 1;
    const n2 = high - mid;    
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await wait(delay);        
        // color
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await wait(delay);        
        // color
        ele[mid + 1 + i].style.background = 'yellow';
        right[i] = ele[mid + 1 + i].style.height;
    }
    await wait(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await wait(delay);        
        // To add color for which two r being compared for merging        
        if(parseInt(left[i]) <= parseInt(right[j])){           
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }
            
            ele[k].style.height = left[i];
            ele[k].textContent = parseInt(ele[k].style.height)/2;
            i++;
            k++;
        }
        else{           
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            } 
            ele[k].style.height = right[j];
            ele[k].textContent = parseInt(ele[k].style.height)/2;
            j++;
            k++;
        }
    }
    while(i < n1){
        await wait(delay);        
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        ele[k].textContent = parseInt(ele[k].style.height)/2;
        i++;
        k++;
    }
    while(j < n2){
        await wait(delay);        
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right[j];
        ele[k].textContent = parseInt(ele[k].style.height)/2;
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r){    
    if(l >= r){        
        return;
    }
    const m = l + Math.floor((r - l) / 2);    
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

