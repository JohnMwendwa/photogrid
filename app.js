const images = ['images/img1.jpg','images/img2.jpg','images/img3.jpg','images/img4.jpg','images/img5.jpg'];

const img = document.querySelector('.img');

// Loop through images array and provide 30 images
for(let i = 0;i < 30; i++){
    let imgSrc = images[i%images.length]
 img.innerHTML +=`<img src=${imgSrc}  alt='' />`;
}