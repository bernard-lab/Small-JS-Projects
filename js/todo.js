const listContainer = document.getElementById('list-container');
const input = document.getElementById('input');

function addTask(){
    if(input.value === ''){
        alert('No task to add.');
    }else{
        //Add <li> tag with input value
        let task = document.createElement('li');
        task.innerHTML = input.value;
        listContainer.appendChild(task);
        //Add <span> tag inside the <li> tag with 'x' unicode value
        let remove = document.createElement('span');
        remove.innerHTML = '\u00d7';
        task.appendChild(remove);
    }
    input.value = '';
}

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  });

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');//return toggle true
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
     console.log(e.target);  
}, false);