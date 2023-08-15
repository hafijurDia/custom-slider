const images = [
    'image/img1.jpg',
    'image/img2.jpg',
    'image/img3.jpg',
    'image/img4.jpg',
];
let imageIdex = 0;

//common function 
const comonfunction = () => {
    if (imageIdex === images.length || imageIdex < 0) {
        imageIdex = 0;
       }
       const imageUrl = images[imageIdex];
       divEle.setAttribute('src',imageUrl)
}

const divEle = document.getElementById('slider-img');
//slide autoplay by setinterval
const sliderAutoPlay = setInterval(() => {
    comonfunction();
    imageIdex++;
},1500);

//previous button function
document.getElementById('btn-prev').addEventListener('click',()=>{
    clearInterval(sliderAutoPlay);
    comonfunction();
    imageIdex--;
})
//next button function
document.getElementById('btn-next').addEventListener('click',()=>{
    clearInterval(sliderAutoPlay);
    comonfunction();
    imageIdex++;
})