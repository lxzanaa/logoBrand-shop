document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('[data-item]');
    const totalElement = document.getElementById('total');
    const emptyMessage = document.getElementById('empty-message');
    const container = document.querySelector('.max-w-[1180px]');

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('[data-item]').forEach(item => {
            const price = parseFloat(item.getAttribute('data-price'));
            const counterValue = item.querySelector('.counter-value').textContent;
            total += price * parseInt(counterValue, 10);
        });
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    function checkIfEmpty() {
        if (document.querySelectorAll('[data-item]').length === 0) {
            emptyMessage.classList.remove('hidden');
        } else {
            emptyMessage.classList.add('hidden');
        }
    }

    items.forEach(item => {
        const decrementButton = item.querySelector('[data-action="decrement"]');
        const incrementButton = item.querySelector('[data-action="increment"]');
        const removeButton = item.querySelector('[data-action="remove"]');
        const counterValueElement = item.querySelector('.counter-value');
        const totalPriceElement = item.querySelector('.total-price');
        const price = parseFloat(item.getAttribute('data-price'));

        decrementButton.addEventListener('click', () => {
            let value = parseInt(counterValueElement.textContent, 10);
            if (value > 0) {
                value--;
                counterValueElement.textContent = value;
                totalPriceElement.textContent = `$${(price * value).toFixed(2)}`;
                updateTotal();
            }
        });

        incrementButton.addEventListener('click', () => {
            let value = parseInt(counterValueElement.textContent, 10);
            if (value < 20) {
                value++;
                counterValueElement.textContent = value;
                totalPriceElement.textContent = `$${(price * value).toFixed(2)}`;
                updateTotal();
            }
        });

        removeButton.addEventListener('click', () => {
            item.remove();
            updateTotal();
            checkIfEmpty();
        });
    });

    // Initialize total and check if empty on page load
    updateTotal();
    checkIfEmpty();
});
