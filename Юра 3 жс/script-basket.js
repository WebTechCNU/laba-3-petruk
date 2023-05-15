const basketTotal = document.getElementById("basket-total");
const imageGallery = document.querySelector(".image-gallery");
const clear = document.getElementById("clear");
const Statistic = document.getElementById("statistic");


let barColors = [
  "rgba(0,0,255,0.5)",
  "rgba(255,0,255,0.5)",
  "rgba(255,0,0,0.5)",
  "rgba(0,255,255,0.5)",
  "rgba(0,255,0,0.5)",
  "rgba(0,205,255,0.5)",
  "rgba(0,205,255,0.5)",
];


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
  
  

  let arrayCard = images.map(elem => {return {description: elem.description, amount: 0}});
  
  function renderImages(images) {
    imageGallery.innerHTML = "";
    for (let i = 0; i < images.length; i++) {
      const imageCard = document.createElement("div");
      imageCard.classList.add("image-card");
  
      const image = document.createElement("img");
      image.src = images[i].url;

      
      
      const imageDescription = document.createElement("div");
      imageDescription.classList.add("image-description");
      imageDescription.textContent = images[i].description + ' - ' + images[i].price + ' UAH';
      
      imageCard.appendChild(image);
      imageCard.appendChild(imageDescription);
      
      imageGallery.appendChild(imageCard);
      
      
      image.addEventListener("click", () => {
        
        const price = images[i].price;
        const currentTotal = parseInt(basketTotal.textContent);
        basketTotal.textContent = currentTotal + price + " $";
       
        document.getElementById('statistic').style.display = 'inline';
        
        // document.getElementById('myChart').style.display = 'flex';
        // displayCart();
        
        // document.getElementById('myBar').style.display = 'flex';
        // displayCartBar();
        
        // document.getElementById('myRadar').style.display = 'flex';
        // displayCartRadar();

        arrayCard[i].amount ++;
      
      });
    }
  }
  
  clear.addEventListener("click", () => {
    const currentTotal = parseInt(basketTotal.textContent);
    basketTotal.textContent = currentTotal - currentTotal + " UAN";

    for(let i = 0; i < 7; i++)
    {
    arrayCard[i].amount = 0; 

    }

    document.getElementById('statistic').style.display = 'none';
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('myBar').style.display = 'none';
    document.getElementById('myRadar').style.display = 'none';
  });
  renderImages(images);  

function sortByName() {
    images.sort((a, b) => a.description.localeCompare(b.description));
    renderImages(images);
  }
  
  function sortByPrice() {
    images.sort((a, b) => a.price - b.price);
    renderImages(images);
  }

  function handleSortChange() {
    const select = document.getElementById("sortSelect");
    const selectedValue = select.value;
    if (selectedValue === "name")  sortByName(); 
    if (selectedValue === "price") sortByPrice();
    
  }
  

  
function displayCart(){

  new Chart("myChart", {
    type: "pie",
    data: {
        labels: arrayCard.map(x => x.description),
        datasets: [{
            backgroundColor: barColors,
            data: arrayCard.map(x => x.amount)
        }]
    },
    options: {
        title: {
            display: true,
            text: "Statistic"
        }
    }
});
}

function displayCartBar(){

  new Chart("myBar", {
    type: "bar",
    data: {
        labels: arrayCard.map(x => x.description),
        datasets: [{
            backgroundColor: barColors,
            data: arrayCard.map(x => x.amount)
        }]
    },
    options: {
        title: {
            display: true,
            text: "Statistic"
        }
    }
});
}

function displayCartRadar(){

  new Chart("myRadar", {
    type: "radar",
    data: {
        labels: arrayCard.map(x => x.description),
        datasets: [{
            backgroundColor: barColors,
            data: arrayCard.map(x => x.amount)
        }]
    },
    options: {
        title: {
            display: true,
            text: "Statistic"
        }
    }
});
}

const scrollToTopButton = document.getElementById('scroll-to-top-btn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > (window.innerHeight * 2) / 3) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function handleSelectStatistic() {
  const select = document.getElementById("SelectStatistic");
  const selectedValue = select.value;
  if (selectedValue === "pie") 
  {

    document.getElementById('myBar').style.display = 'none';
    document.getElementById('myRadar').style.display = 'none';
    document.getElementById('myChart').style.display = 'flex';
        displayCart();
  }
  if (selectedValue === "bar") 
  {
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('myRadar').style.display = 'none';
    document.getElementById('myBar').style.display = 'flex';
    displayCartBar();
  }
  if (selectedValue === "radar") 
  {
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('myBar').style.display = 'none';
    document.getElementById('myRadar').style.display = 'flex';
    displayCartRadar();

  }
  
}
