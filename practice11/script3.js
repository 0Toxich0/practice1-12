document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    
    let total = 0;
    let maxPrice = -Infinity;
    let maxItem = null;

    items.forEach(item => {
        const price = Number(item.dataset.price);
        total += price;

        if (price > maxPrice) {
            maxPrice = price;
            maxItem = item;
        }

        if (item.classList.contains('active')) {
            item.classList.add('highlight');
        }
    });

    console.log('Суммарная стоимость всех товаров:', total);
    if (maxItem) {
        console.log('Товар с максимальной ценой:', maxItem.textContent, '(цена:', maxPrice, ')');
    }
});