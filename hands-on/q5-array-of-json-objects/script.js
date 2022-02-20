let users = [];
let loadUser = document.querySelector('#load-users-btn').addEventListener('click', async function(){
    let response = await axios.get('users.json')
    let users = response.data.users;
    let userList = document.querySelector('#all-users')
    for (let u of users){
        let newElement = document.createElement('li')
        newElement.innerHTML = u.firstName + " " + u.lastName + " " + u.emailAddress;
        userList.appendChild(newElement);
    }
})

document.querySelector('#btnFind')
    .addEventListener('click', function () {
        let searchBy = document.querySelector('#search').value;
        let targetUser = null;
        for (let u of users) {
            if (u.userId == searchBy) {
                targetUser = u;
            }
        }
        alert(targetUser.firstName + " " + targetUser.lastName);
    })

// let search = document.querySelector('#search').addEventListener('click', function(search){
// let searchList = document.querySelector('#searchByID').value;
// let targetUser = null;    
// for (let u of users){
//         let searchElement = document.createElement('li');
//         if (u.userId == searchList){
//             searchElement.innerHTML = u;
//             searchList.appendChild(searchElement);            
//         }
//     }
// })