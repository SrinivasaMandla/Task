const uploadButton = document.getElementById('upload-button');
const uploadImage = document.getElementById('upload-image');
const imageContainer = document.getElementById('image-container');
const imgName = document.getElementById('img-name');

uploadButton.addEventListener('click', () => {
    uploadImage.click();
});

uploadImage.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader(); //code will check seleted file if selected then proced to crete a filereader
        reader.onload = function (e) {
            imageContainer.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image">';
            imgName.textContent = file.name;
        };
        reader.readAsDataURL(file);
    }
});

const centerImg = document.getElementById('center-image');
centerImg.addEventListener('click', () => {
    imageContainer.classList.toggle('centered');
});

const redColor = document.getElementById('red-color');
redColor.addEventListener('click', () => {
    imageContainer.style.backgroundColor = 'red';
});

const greenColor = document.getElementById('green-color');
greenColor.addEventListener('click', () => {
    imageContainer.style.backgroundColor = 'green';
});

const yellowColor = document.getElementById('yellow-color');
yellowColor.addEventListener('click', () => {
    imageContainer.style.backgroundColor = 'yellow';
});

const dropDown = document.getElementById('dropdown');
const dropDownList = document.getElementById('dropdwon-button');
dropDownList.addEventListener('click', () => {
    dropDown.style.display = 'block';
});

dropDown.addEventListener('change', () => {
    const selectedColor = dropDown.value;
    if (selectedColor) {
        imageContainer.style.backgroundColor = selectedColor;
    }
});

document.getElementById('fontsize-submit').addEventListener('click', () => {
    const fontSize = document.getElementById('font-size').value + 'px';
    document.getElementById('img-name').style.fontSize = fontSize; // Corrected line
});