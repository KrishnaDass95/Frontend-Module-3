// Elements
const fetchDataBtn = document.querySelector('#btn');
const table = document.querySelector('#data-table');

function PromiseAPI1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            fetch('https://dummyjson.com/posts')
                .then((response)=> response.json())
                    .then((data) => {
                        console.log(data);
                    })

        })
    })


}










function handlePromiseChain(){
    PromiseAPI1()
}

fetchDataBtn.addEventListener('click', handlePromiseChain);
