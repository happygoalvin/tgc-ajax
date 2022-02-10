let loadbtn = document.querySelector("#load-btn").addEventListener('click', async function(){
    let response = await axios.get('contact.txt').then(function(response){
        document.querySelector('#content').innerHTML += response.data;
    })    
})