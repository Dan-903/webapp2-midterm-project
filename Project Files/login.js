const url = 'https://jsonplaceholder.typicode.com/users';
const button = document.getElementById('submit');

button.addEventListener('click', function(event){
    event.preventDefault();

    const input = document.getElementById('username').value;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const array = []
        data.forEach(datum =>{
            array.push(datum.username);
        }
        )
        if(array.includes(input)){
            window.location.href = 'mainpage.html';
        }
        else{
            alert("Wrong Username!");
        }
    })
})

const inputbox = document.getElementById('username');

inputbox.addEventListener('focusin', function(){
    document.getElementById('label').classList.add('entering');
})
inputbox.addEventListener('focusout', function(){
    if (inputbox.value === ''){
        document.getElementById('label').classList.remove('entering');
    }
})


