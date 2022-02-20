let btn = document.querySelector("#load-image-btn").addEventListener('click', async function(btn){
let response = await axios.get('artwork.json')
let data = response.data
document.querySelector('#artwork').innerHTML = `<h1>${data.title}</h1>`
document.querySelector('#artwork').innerHTML = `<img class ="${data.class}"src="${data.image_url}" alt="">`;
})