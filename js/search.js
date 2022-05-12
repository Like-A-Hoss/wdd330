const input = form.elements.searchInput;
input.addEventListener('change', () => alert('changed'), false);
input.value = 'Search Here';
const form = document.forms['search'];
form.addEventListener ('submit', search, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}