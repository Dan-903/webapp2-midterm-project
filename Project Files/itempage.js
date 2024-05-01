const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/photos/${itemId}`)
    .then(response => response.json())
    .then(item => {
        const itemitself = document.getElementById('item-itself');
        const itemdetails = document.createElement('div');
        itemdetails.classList.add('item-details-container');
        itemdetails.innerHTML = `
            <h2 class="title">${item.title}</h2>
            <img src="${item.url}" alt="${item.title}">
            <p>ID: ${item.id}</p>
            <p>Album ID: ${item.albumId}</p>
            <p>Thumbnail URL: ${item.thumbnailUrl}</p>
            <button onclick="goBack()">Main Page</button>
        `;
        itemitself.appendChild(itemdetails);
    })

function goBack(){
    window.location.href = 'mainpage.html';
}