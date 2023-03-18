// Elements
const fetchDataBtn = document.querySelector('#btn');
const postsTable = document.querySelector('#posts');
const productsTable = document.querySelector('#products');
const todoTable = document.querySelector('#todos');

function PromiseAPI1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            fetch('https://dummyjson.com/posts')
                .then((response)=> response.json())
                    .then((data) => {
                        console.log('posts object from fetch', data);
                        posts = data.posts;
                        console.log('individual posts', posts);
                        // go through data and show on UI
                        const tableRows = posts.map((post)=>{
                            return `
                            <tr>
                            <td>${post.id}</td>
                            <td>${post.title}</td>
                            <td>${post.body}</td>
                            </tr>
                            `
                        });
                        postsTable.innerHTML += tableRows.join('');
                    })
        })
    })


}

function PromiseAPI2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            fetch('https://dummyjson.com/products')
                .then(response => response.json())
                    .then(jsonObject => {
                        const products = jsonObject.products;
                        console.log('products object after JSON method', products);
                        productsArray = products.map((item)=>{
                            return `
                            <tr>
                            <td>${item.brand}</td>
                            <td>${item.title}</td>
                            <td>${item.description}</td>
                            </tr>
                            `
                        })
                        productsTable.innerHTML += productsArray.join('');
                    })
        }, 2000)
    })

}

function PromiseAPI3(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            fetch('https://dummyjson.com/todos')
                .then(response => response.json())
                    .then((jsonObject) => {
                        console.log('todo JSON object ->',jsonObject);

                        const todoArray = jsonObject.todos;
                        console.log('todos object array',todoArray);
                        let todoAddArray = todoArray.map((item)=>{
                            return `
                            <tr>
                            <td>${item.id}</td>
                            <td>${item.todo}</td>
                            <td>${item.completed}</td>
                            </tr>
                            `
                        })
                        todoTable.innerHTML += todoAddArray.join('');
                    })
        }, 3000)
    })
}

function handlePromiseChain(){
    // PromiseAPI1();
    // PromiseAPI2();
    PromiseAPI3();
    
}

fetchDataBtn.addEventListener('click', handlePromiseChain);
