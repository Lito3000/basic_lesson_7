document.querySelector('#row').addEventListener('click', newTweet);


function newTweet(ej) {
    ej.preventDefault();
    ej.target.remove();
    link.innerHTML = '<a href="#" id="link">Payment</a>';
}