// swap function util for sorting algorithms takes input of 2 elements with .style.height feature
function swap(el1, el2) {   
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;

    let tempText = el1.textContent;
    el1.textContent = el2.textContent;
    el2.textContent = tempText    
    
}


function disableSortingBtn(){
    document.querySelector(".Sort").disabled = true;
}


function enableSortingBtn(){
    document.querySelector(".Sort").disabled = false;
}


function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}


function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}


function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}


function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}


function disableAlgorithmSelector(){
    document.getElementById("Algorithm").setAttribute("disabled", "disabled");
}


function enableAlgorithmSelector(){
    document.getElementById("Algorithm").removeAttribute("disabled");
}


function wait(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}


let arraySize = document.querySelector('#arr_sz');


arraySize.addEventListener('input', function(){   
    createNewArray(parseInt(arraySize.value));
});


let delay = 500; // default value


let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function(){    
    delay = 1000 - parseInt(delayElement.value);
});


let array = [];


createNewArray();


function createNewArray(noOfBars = 30) {
   
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 230) + 21);
    }
    
    
    const bars = document.querySelector("#bars");

    
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;        
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bar.textContent = array[i];
        
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){    
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

const Sortbtn = document.querySelector(".Sort");
Sortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    disableAlgorithmSelector();
     
    var selectedAlgorithm = document.getElementById("Algorithm").value;
    switch (selectedAlgorithm) {
        case "Bubble":
            console.log("Bubble Sort selected");
            await bubble();            
            break;
        case "Selection":            
            console.log("Selection Sort selected");
            await selection();
            break;
        case "Insertion":
            console.log("Insertion Sort selected");
            await insertion();
            break;
        case "Quick":            
            console.log("Quick Sort selected");            
            await quickSort(ele, l, r);
            break;
        case "Merge":
            console.log("Merge Sort selected");
            await mergeSort(ele, l, r);
            break;
        default:
            // Default case
            console.log("Unknown algorithm selected");
    }
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    enableAlgorithmSelector()
});
