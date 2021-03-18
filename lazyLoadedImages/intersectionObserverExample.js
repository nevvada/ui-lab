const renderImage = (entries) => {
  entries.forEach(entry => {
    const img = entry.target;

    if (entry.intersectionRatio && !img.src) {
      img.src = img.dataset.src;
    }
  });
};

const observer = new IntersectionObserver(renderImage);

const img4 = document.querySelector('#img4');
const img5 = document.querySelector('#img5');
const img6 = document.querySelector('#img6');

[img4, img5, img6].forEach(img => observer.observe(img));
