const addOrders = document.querySelector('.add-orders');
const ordersEl = document.querySelector('.orders');
const orders = JSON.parse(localStorage.getItem('orders')) || [];

function addOrder(event){
    event.preventDefault();
    const text = (this.querySelector('[name=order]')).value;
    const order = {
        text,
        done:false
    };

    orders.push(order);
    populateList(orders, ordersEl);
    localStorage.setItem('orders', JSON.stringify(orders));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate,i) =>{
        return `
        <li>
          <input type="checkbox" data-index=${i} id="order${i}" ${plate.done ? 'checked' : ''}/>
          <label for="order${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
}

function orderDone (arr){
    if(!arr.target.matches('input')) 
    return;
    const el = arr.target;
    const index = el.dataset.index;
    orders[index].done = !orders[index].done;
    localStorage.setItem('orders', JSON.stringify(orders));
    populateList(orders, ordersEl);
}

addOrders.addEventListener('submit',addOrder);
ordersEl.addEventListener('click',orderDone);

populateList(orders,ordersEl);