function showMessage() {
	console.log('Я учу JavaScript!');
}

showMessage();



function next() {
    let catImage1 = document.getElementById('catImage1');
    catImage1.src = '../task2/assets/images/cat2.jpeg';
}

function prev() {
    let catImage1 = document.getElementById('catImage1');
    catImage1.src ='../task2/assets/images/cat1.jpg';
}
