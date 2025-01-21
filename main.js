const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const productList = Array.from(document.querySelectorAll('.card-content'));
const noResultMessage = document.getElementById('noResultMessage');

function searchProduct() {
  const searchValue = searchInput.value.toLowerCase().trim();

  const filterProducts = productList.filter(product => {
    const productName = product.getAttribute('data-name').toLowerCase();
    return productName.includes(searchValue);
  });

  productList.forEach(product => product.style.display = 'none');

  filterProducts.forEach(product => product.style.display = 'flex'); 

  noResultMessage.style.display = filterProducts.length ? 'none' : 'block';
}

searchButton.addEventListener('click', searchProduct);
// searchInput.addEventListener('keyup', searchProduct);
