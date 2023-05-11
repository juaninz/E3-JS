document.addEventListener('DOMContentLoaded', () => {
  const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
      imagen: "./img/muzzarella.png",
    },
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
      imagen: "./img/muzzarella.png",
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
      imagen: "./img/cebolla.png",
    },
  
    {
      id: 3,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
      imagen: "./img/4quesos.png",
    },
  
    {
      id: 4,
      nombre: "pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
      imagen: "./img/especial.png",
    },
  
    {
      id: 5,
      nombre: "pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
      imagen: "./img/anana.png",
    },

  ];

  const form = document.getElementById('pizza-form');
  const resultContainer = document.getElementById('result-container');
  const pizzaIdInput = document.getElementById('pizza-id');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pizzaId = parseInt(pizzaIdInput.value);

    if (isNaN(pizzaId)) {
      renderError('Por favor, ingresa un número válido.');
    } else if (!pizzaIdInput.value) {
      renderError('Por favor, ingresa un ID de pizza.');
    } else {
      const pizza = pizzas.find((pizza) => pizza.id === pizzaId);
      if (pizza) {
        renderPizzaCard(pizza);
        localStorage.setItem('lastPizza', JSON.stringify(pizza));
      } else {
        renderError('No se encontró ninguna pizza con ese ID.');
      }
    }
  });

  const renderPizzaCard = (pizza) => {
    resultContainer.innerHTML = `
      <div class="card">
        <h2>${pizza.nombre}</h2>
        <img src="${pizza.imagen}" alt="${pizza.nombre}">
        <p>Precio: $${pizza.precio}</p>
      </div>
    `;
  };

  const renderError = (message) => {
    resultContainer.innerHTML = `<p class="error-message">${message}</p>`;
  };

  // Recuperar la última pizza buscada al recargar la página
  const lastPizza = JSON.parse(localStorage.getItem('lastPizza'));
  if (lastPizza) {
    renderPizzaCard(lastPizza);
  }
});