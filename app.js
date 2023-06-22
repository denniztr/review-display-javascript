const reviewContainer = document.getElementById('review-container');

const reviews = [
    {
        img: 'https://images.unsplash.com/photo-1486486704382-8ee6f7754a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
        alt: 'Profile picture of Hanna Williams',
        text: 'Good for running, able to wear at school and cool looking',
        name: 'Hanna Williams',
    },
    {
        img: 'https://images.unsplash.com/photo-1445404590072-16ef9c18bd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        alt: 'Profile picture of Nicole Moor',
        text: 'Shoes fit amazingly!!! They complete my outfits perfectly! I just love that!!!',
        name: 'Nicole Moor',
    },
    {
        img: 'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1101&q=80',
        alt: 'Profile picture of Cristina May',
        text: 'My new shoes fit perfectly. Love how comfortable they are on my feet. Love them!',
        name: 'Cristina May',
    },
    {
        img: 'https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        alt: 'Profile picture of Kimberly Filley',
        text: 'I love love it highly recommended it’s very comfortable and a brand new',
        name: 'Kimberly Filley',
    }
]

function populateDisplay() {
    reviews.forEach(review => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card')

        cardElement.addEventListener('mouseover', showCard)
        cardElement.addEventListener('mouseleave', blurCard)

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')
        const imageElement = document.createElement('img')
        imageElement.setAttribute('src', review.img)
        imageElement.setAttribute('alt', review.alt)
        imageContainer.append(imageElement)

        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = review.text
        const nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container')
        nameContainer.textContent = review.name


        cardElement.append(imageContainer, paragraphElement, nameContainer)

        reviewContainer.append(cardElement)
    })
}
populateDisplay()

function showCard () {
    this.classList.add('active')
}

function blurCard () {
    this.classList.remove('active')
}