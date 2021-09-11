const imageEl = document.querySelector('.images');

const generateImages = () => {
  const randomNumber = Math.floor(Math.random() * 999999);
  let div = document.createElement('div');
    let image = document.createElement('img');
    image.src = `https://source.unsplash.com/random/300x300?sig=${randomNumber}`;
    div.className = 'image-box';
    div.appendChild(image);
    imageEl.appendChild(div);
}

for ( let i = 0; i <= 14; i++ ) {
  generateImages();
}

