// let keyword = 'teeth';
let imageArr = [];
let API_KEY = '54AnYbncB80nSRHld5G9rdvore3HpH3Y';
let searchingkeyword = document.getElementById('searching-keyword');
let itemAmout = document.getElementById('item-amout');
let submitButton = document.getElementById('submit-button');
let removeButton = document.getElementById('remove-button');
let result = document.getElementById('result');
const getImage = (keyword, amout) => {
    axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: keyword,
            api_key: API_KEY
        }
    })
        .then(res => {

            let resArr = res.data.data;
            for (let i = 0; i < amout; i++) {
                imageArr.push(resArr[i].images.preview_gif.url)
            }
            displayImage();
        })
        .catch(error => console.log(error))
}

submitButton.addEventListener('click', () => {
    let keyword = searchingkeyword.value;
    let amout = itemAmout.value;
    getImage(keyword, amout);
    console.log(imageArr);

})
const displayImage = () => {
    let html = '';
    for (let i = 0; i < imageArr.length; i++) {
        html += `<img src ="${imageArr[i]}" alt="" >`;
    }
    result.innerHTML = html;
}
removeButton.addEventListener('click', ()=>{
    result.innerHTML = '';
    imageArr =[];
})
