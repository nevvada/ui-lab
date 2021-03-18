const renderImage = (entries) => {
  entries.forEach(entry => {
    const img = entry.target;
    const isBlurred = !img.classList.contains('unblur');

    if (entry.intersectionRatio && isBlurred) {
      img.classList.add('unblur');
    }
  });
};

const observer = new IntersectionObserver(renderImage);

const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');

[img1, img2, img3].forEach(img => observer.observe(img));
