const input = form.elements.searchInput;
input.addEventListener('change', () => alert('changed'), false);
input.value = 'Search Here';
const form = document.forms['search'];
form.addEventListener ('submit', search, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}
// const clickParagraph = document.getElementById('click');

// clickParagraph.addEventListener('click',() => console.log('click') );
// clickParagraph.addEventListener('mousedown',() => console.log('down') );
// clickParagraph.addEventListener('mouseup',() => console.log('up') );

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event){
    event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );