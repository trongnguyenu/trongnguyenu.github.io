const myBtn = document.querySelector('button');
const myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Vui lòng nhập tên của bạn.');

    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, '+ storedName;
}

myBtn.addEventListener('click', () => {
    setUserName();
});

