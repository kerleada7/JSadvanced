const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title, price=0) => {
   // 2. Добавьте значения по умолчанию для аргументов функции. price по умолчанию 0
  textcontant = `<div class="col">
                  <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"/>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">${title}</text>
                    </svg>
                    <div class="card-body">
                      <p class="card-text">Price: ${price}</p>
                      <div class="d-flex justify-content-between align-items-center">
<!--                        <div class="btn-group">-->
<!--                          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>-->
<!--                          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>-->
<!--                        </div>-->
<!--                        <small class="text-muted">9 mins</small>-->
                      </div>
                    </div>
                  </div>
                </div>`;


  //return `<div><div><h3>${title}</h3><p>${price}</p></div></div>`;
  return textcontant
};

const renderGoodsList = (list) => {
  //Как можно упростить или сократить запись функций?
  //old
  //let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  //document.querySelector('.goods-list').innerHTML = goodsList;
  //new
  document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join('');
  //*Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
  //преобразованием его в строку
}

renderGoodsList(goods);