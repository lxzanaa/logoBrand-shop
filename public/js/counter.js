document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('[data-item]');
    var totalElement = document.getElementById('total');
    var emptyMessage = document.getElementById('empty-message');

    function updateTotal() {
        var total = 0;
        items.forEach(function(item) {
            var price = parseFloat(item.getAttribute('data-price'));
            var counterValue = item.querySelector('.counter-value').textContent;
            total += price * parseInt(counterValue, 10);
        });
        totalElement.textContent = '$' + total.toFixed(2);
    }

    function checkIfEmpty() {
        items = document.querySelectorAll('[data-item]');
        if (items.length === 0) {
            emptyMessage.classList.remove('hidden');
        } else {
            emptyMessage.classList.add('hidden');
        }
    }

    items.forEach(function(item) {
        var decrementButton = item.querySelector('[data-action="decrement"]');
        var incrementButton = item.querySelector('[data-action="increment"]');
        var removeButton = item.querySelector('[data-action="remove"]');
        var counterValueElement = item.querySelector('.counter-value');
        var totalPriceElement = item.querySelector('.total-price');
        var price = parseFloat(item.getAttribute('data-price'));

        decrementButton.addEventListener('click', function() {
            var value = parseInt(counterValueElement.textContent, 10);
            if (value > 0) {
                value--;
                counterValueElement.textContent = value;
                totalPriceElement.textContent = '$' + (price * value).toFixed(2);
                updateTotal();
            }
        });

        incrementButton.addEventListener('click', function() {
            var value = parseInt(counterValueElement.textContent, 10);
            if (value < 20) {
                value++;
                counterValueElement.textContent = value;
                totalPriceElement.textContent = '$' + (price * value).toFixed(2);
                updateTotal();
            }
        });

        removeButton.addEventListener('click', function() {
            item.remove();
            updateTotal();
            checkIfEmpty();
        });
    });

    updateTotal();
    checkIfEmpty();
});
