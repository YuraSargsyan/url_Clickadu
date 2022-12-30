const url = 'https://ai.adsrv.wtf/acm/campaigns/2175630/view/#materials'


// const params = new URLSearchParams().values(url)
// console.log(params);

let arr = url.replace('https://momo.org/', '').match(/[^\/]{1,}\//g).map(i => i.replace('/', ''));

const input = document.querySelector("#input")
const send = document.querySelector("#send")
const form = document.querySelector("#form")
const root = document.querySelector('#root')


let items = []
     

form.addEventListener("submit", (e) => {
    e.preventDefault()
    items.push(input.value)
    console.log(items);
    function urlParse(arr) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i].replace('https://momo.org/', '').match(/[^\/]{1,}\//g).map(i => i.replace('/', '')))
        }
    
        return result
    }

    const res = urlParse(items)

    function id(arr) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (Number(+arr[i][j])) {
                    result.push(+arr[i][j])
                }
            }
        }
        return result
    }
    
    const urlId = id(res);
    
    function foo(arr) {
        for (let t = 0; t < arr.length; t++) {
            root.insertAdjacentHTML('afterend', `
            <div>${arr[t]}</div>      
        `)
        }
    }
    
    foo(urlId)
    input.value = ""
    console.log(urlId)

    
})




