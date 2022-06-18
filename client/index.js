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
    faveCard.innerHTML = `<img class='fav-img' src='${fave.imgUrl}'/>
    <h2 class='name-of-fave'>${fave.firstName} ${fave.lastName}</h2>
    <p class='fav-phone-number'>${fave.phoneNumber}</p>`

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
    // console.log(reqBody)

    axios
        .post(baseURL + '/api/fave', reqBody)
        .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                createNewFaveCard(res.data[i])
            }

        })
        .catch(clearErr);

}

newFaveForm.addEventListener('submit', createNewFave);

