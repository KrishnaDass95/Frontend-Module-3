// Elements
const fetchDataBtn = document.querySelector('#btn');
const postsTable = document.querySelector('#posts');

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










function handlePromiseChain(){
    PromiseAPI1()
}

fetchDataBtn.addEventListener('click', handlePromiseChain);
