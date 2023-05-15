

const imageGallery = document.querySelector(".image-gallery");


const images = [
  {
    url: "glipson.jpg",
    description: "Gibson Les Paul",
    price: 800
    
    },

    {
      url: "FENDER.jpg",
      description: "Fender Player Stratocaster",
      price: 560
    },
    {
      url: "ibanez.jpg",
      description: "Ibanez Azes 40",
      price: 500
    },
    {
      url: "gibson flying V.jpg",
      description: "Gibson Flying V",
      price: 1100
    },
    
    {
      url: "FENDER PLAYER TELECASTER .jpg",
      description: "Fender Player Telecaster ",
      price: 750
      
    },
    {
      url: "fender Vintera 60s.jpg",
      description: "Fender Vintera 60s",
      price: 1000
    },
    
    
    
    {
      url: "Yamaha Pacifica 012 dbm.jpg",
      description: "Yamaha Pacifica 012 dbm",
      price: 320
      
    },

    {
      url: "Gibson EDS-1275 Doubleneck.jpg",
      description: "Gibson EDS-1275 Doubleneck",
      price: 8000
      
    },
    
    
  ];
  
  
  for (let i = 0; i < 4; i++) {
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");
    
    const image = document.createElement("img");
    image.src = images[i].url;
    
    const imageDescription = document.createElement("div");
    imageDescription.classList.add("image-description");
    imageDescription.textContent = images[i].description + " " + images[i].price + "$";
    
    imageCard.appendChild(image);
    imageCard.appendChild(imageDescription);
    imageGallery.appendChild(imageCard);
  }
  
  function loadMore() {
    
    document.querySelector(".load-buttons button").style.display = "none";
    
    for (let i = 4; i <= 7; i++) {
      const imageCard = document.createElement("div");
      imageCard.classList.add("image-card");
      
      const image = document.createElement("img");
      image.src = images[i].url;
      
      const imageDescription = document.createElement("div");
      imageDescription.classList.add("image-description");
      imageDescription.textContent = images[i].description + " " + images[i].price + "$"; 
      
      imageCard.appendChild(image);
      imageCard.appendChild(imageDescription);
      imageGallery.appendChild(imageCard);
    }
    
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    
    
    setTimeout(function() {
      if (localStorage.getItem("subscribed") != "true") {
          document.getElementById('popup').style.display = 'block';
      }
  }, 15000);
  
    document.getElementById('accept-btn').addEventListener('click', function() {
      localStorage.clear();
      localStorage.setItem('subscribed', "true");
      document.getElementById('popup').style.display = 'none';
      alert('Дякуємо за приєднання!');
    });
    
    document.getElementById('reject-btn').addEventListener('click', function() {
      document.getElementById('popup').style.display = 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    
  
    setTimeout(function() {
      document.getElementById('reklama').style.display = 'block';
      
  }, 5000);

  setTimeout(function() {
    document.getElementById('close').style.display = 'flex';
    
}, 10000);

  
  
    document.getElementById('close').addEventListener('click', function() {
      document.getElementById('reklama').style.display = 'none';

    });
  });
  
  
  