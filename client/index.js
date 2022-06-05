const newFaveForm = document.querySelector('#new-fave-form');
const newFirstName = document.querySelector('#first-name');
const newLastName = document.querySelector('#last-name');
const newPhoneNumber = document.querySelector('#phone-number');
const newImgUrl = document.querySelector('#img-url');
const faveContainer = document.querySelector('#fave-container');

const baseURL = 'http://localhost:4040';
const clearErr = (err) => console.log(err);



const createNewFaveCard = (fave) => {
    let faveCard = document.createElement('div');
    faveCard.innerHTML = `<img src='${fave.imgUrl}'>
    <h2>${fave.firstName} ${fave.lastName}</h2>
    <p>${fave.phoneNumber}</p>`

    faveContainer.appendChild(faveCard);
}



const createNewFave = (event) => {
    event.preventDefault();

    const reqBody = {
        firstName: newFirstName.value,
        lastName: newLastName.value,
        phoneNumber: newPhoneNumber.value,
        imgUrl: newImgUrl.value
    }

    axios
        .post(baseURL + '/api/fave', reqBody)
        .then(res => {
            createNewFaveCard(res.data)
        })
        .catch(clearErr);

}

newFaveForm.addEventListener('submit', createNewFave);