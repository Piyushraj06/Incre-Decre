// const countValue = document.querySelector("#counter");
const countValue = document.getElementById("counter");

function increment(){
    let value = parseInt(countValue.innerText);
    value += 1;
    countValue.innerText = value;
};

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value -= 1;
    countValue.innerText = value;
};

// increment aur decrement function ko dono trah se likhh skte hai 