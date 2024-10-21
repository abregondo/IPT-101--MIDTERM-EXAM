const products = [
    {"id": 1, "name": "LENOVO LAPTOP INTEL I3", "price": 43000, "stock": 10},
    {"id": 2, "name": "RAKK Kusog Pro 7.1", "price": 995, "stock": 54},
    {"id": 3, "name": "Limeide Gtx300", "price": 238, "stock": 25}
  ];

  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product && product.stock > 0) {
      product.stock--;
      displayNotification(`${product.name} added to cart successfully.`); 
      document.getElementById(`stock${productId}`).textContent = `In Stock: ${product.stock}`;
    } else {
      alert(`Sorry, ${product ? product.name : 'this product'} is out of stock.`);
    }
  }

  function displayNotification(message) {
    const notification = document.getElementById('notif');
    notification.textContent = message;
    notification.classList.remove('d-none');
    setTimeout(() => {
      notification.classList.add('d-none'); 
    }, 3000);
  }