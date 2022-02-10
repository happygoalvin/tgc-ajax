let btn = document.querySelector('#btn').addEventListener('click', async function(){
    let response = await axios.get('items.txt')
    let data = response.data
    let Arr = [];
    Arr = data.split(",")
    for (fruit in Arr){
    let fruits = document.querySelector('#fruit')
    fruitList = document.createElement('li')
    fruitList.innerHTML = Arr[fruit] + "";
    fruits.appendChild(fruitList)
    }
})