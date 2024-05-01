
document.addEventListener("DOMContentLoaded", function(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(photos => {
        const container = document.getElementById('container');
        
        photos.slice(0, 50).forEach(photo => {
            const div = document.createElement('div');
            div.classList.add('photocontainer')
            
            const title = document.createElement('p');
            title.textContent = photo.title;
            div.appendChild(title);
            const img = document.createElement('img');
            img.src = photo.thumbnailUrl;
            img.loading = "lazy";
            
            div.appendChild(img);

            div.addEventListener("click", function() {
                window.location.href = `itempage.html?id=${photo.id}`;
            });
             

            container.appendChild(div)
        })        

    })
})



