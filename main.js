
var menuList = document.querySelector('.menu-items');

menuItems.forEach(menuItem => {
  var item = document.createElement('div');
  item.classList.add('menu-item');

  item.addEventListener('click', (view) => {
  });

  const image = document.createElement('img');
  image.src = menuItem.picture;
  item.appendChild(image);

  const name = document.createElement('h3');
  name.textContent = menuItem.name;
  item.appendChild(name);

  const price = document.createElement('p');
  price.textContent = menuItem.price;
  item.appendChild(price);

  menuList.appendChild(item);
});

var menuItems = [
    {
      picture: "images/y1.png",
      name: "Y1",
      price: "₱95.00"
    },
    {
      picture: "images/y2.png",
      name: "Y2",
      price: "₱139.00"
    },
    {
      picture: "images/y3.png",
      name: "Y3",
      price: "₱129.00"
    },
    {
      picture: "images/y4.png",
      name: "Y4",
      price: "₱129.00"
    },
    {
      picture: "images/y5.png",
      name: "Y5",
      price: "₱129.00"
    },
    {
      picture: "images/y6.png",
      name: "Y6",
      price: "₱129.00"
    },
    {
      picture: "images/y7.png",
      name: "Y7",
      price: "₱235.00"
    },
    {
      picture: "images/y8.png",
      name: "Y8",
      price: "₱229.00"
    },
    {
      picture: "images/y9.png",
      name: "Y9",
      price: "₱175.00"
    },  
    {
      picture: "images/y10.png",
      name: "Y10",
      price: "₱129.00"
    },
    {
      picture: "images/y11.png",
      name: "Y11",
      price: "₱135.00"
    },
    {
      picture: "images/y12.png",
      name: "Y12",
      price: "₱129.00"
    }];
  