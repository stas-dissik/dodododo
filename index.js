function Reload(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if(tasks===null){tasks = []}
    
    list.innerHTML = ' ';
    tasks.forEach(task => {
        let el = document.createElement('li');
        el.textContent = task;
        list.appendChild(el)
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
    
}
function addd(){

    let task = input.value;
    if(task === '' || task.trim() === ''){return;}
    else{
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        if(tasks===null){tasks = []}
        tasks.push(task);
        tasks.sort();
        list.innerHTML = ' ';
        tasks.forEach(task => {
            let el = document.createElement('li');
            el.textContent = task;
            list.appendChild(el)
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        input.value = '';
        
    }
}

function Reset(){
    localStorage.setItem('tasks',null);
    list.innerHTML = ' ';
}

let ct = document.querySelector('#container');

let  input = ct.appendChild(document.createElement('input'));

let add = ct.appendChild(document.createElement('button'));
add.textContent = 'Add';

let reset = ct.appendChild(document.createElement('button'));
reset.textContent = 'Reset';

list = ct.appendChild(document.createElement('ul'));

add.addEventListener('click', addd);
reset.addEventListener('click', Reset);

Reload();
