let profile = document.querySelector('.user-drops');
let showDropdown = document.querySelector('.dropdown-menu-right');
let serviceChecked = document.querySelector('.bi-check-circle-fill');
let serviceAds = document.querySelectorAll('.bi-circle');

// togal porfile section
profile.onclick = function () {
    profile.classList.add('show');
    showDropdown.classList.add('show');
    // console.log(profile.classList.contains('show'));
    // switch (profile.classList.contains('show')) {
    //     case true:
    //         profile.classList.remove('show');
    //         showDropdown.classList.remove('show');
    //         break;
    //     case false:
    //         profile.classList.add('show');
    //         showDropdown.classList.add('show');
    //         break;
    //     default:
    //         break;
    // }
    // if (profile.classList.contains('show')) {
    //     profile.classList.remove('show');
    //     showDropdown.classList.remove('show');
    // } else {
    //     profile.classList.add('show');
    //     showDropdown.classList.add('show');
    // }
};
window.onclick = function () {
    if (profile.classList.toggle('show')) {
        profile.classList.remove('show');
        showDropdown.classList.remove('show');
    }
}

//  add check pointer in service ads
serviceAds.forEach((icon) => {

    icon.addEventListener('click', (e) => {
        e.currentTarget.classList.remove('bi-circle');
        e.currentTarget.classList.toggle('bi-check-circle-fill');
    })
})

// Get references to the plus and minus icons and the total span
const plusIcon = document.getElementById('plus');
const minusIcon = document.getElementById('minus');
const totalSpan = document.getElementById('total');
const displayTotalSpan = document.getElementById('displayTotal');

// Set initial values
let count = 1;
let total = 100;

// Update initial display
totalSpan.textContent = count;
displayTotalSpan.textContent = `$${total}`;

// Function to handle click on plus icon
plusIcon.addEventListener('click', function () {
    count += 1;
    total += 100;
    totalSpan.textContent = count;
    displayTotalSpan.textContent = `$${total}`;
});

// Function to handle click on minus icon
minusIcon.addEventListener('click', function () {
    if (count > 1) {
        count -= 1;
        total -= 100;
        totalSpan.textContent = count;
        displayTotalSpan.textContent = `$${total}`;
    }
});

// Function to add review content
document.addEventListener('DOMContentLoaded', function() {
    const postReviewBtn = document.getElementById('postReviewBtn');
    const reviewTextarea = document.getElementById('review');
    const reviewContainer = document.querySelector('.row-review'); // Container for existing reviews

    let reviewCount = 0; // Track the number of reviews added

    postReviewBtn.addEventListener('click', function() {
        const reviewContent = reviewTextarea.value.trim(); // Get review content from textarea

        if (reviewContent !== '') {
            const reviewTemplate = `
                        <div class="col-1">
                            <img class="img" src="https://kafiil.s3.eu-central-1.amazonaws.com/media/avatar/bacde012c374fe24711da9157f14a5f3/c/6077aec8bd9cf4da40ce768d24cde290-small.jpg" alt="" />
                        </div>
                        <div class="col-11">
                            <h4 class="review-name">Ahmed Elsayed</h4>
                            <i class="bi bi-star-fill star-gold"></i>
                            <i class="bi bi-star-fill star-gold"></i>
                            <i class="bi bi-star-fill star-gold"></i>
                            <i class="bi bi-star-fill star-gold"></i>
                            <i class="bi bi-star" style="color: #E6EAEF;"></i>
                            <span class="review-time">30m</span>
                            <p class="review-content">${reviewContent.slice(0,50)}</p>
                        </div>
            `;

            const reviewElement = document.createElement('div');
            reviewElement.classList.add('row');
            reviewElement.innerHTML = reviewTemplate;

            reviewContainer.parentNode.insertBefore(reviewElement, reviewContainer); // Insert the new review before the existing reviews container

            // Increment the review count
            reviewCount++;

            // Clear the textarea after posting the review
            reviewTextarea.value = '';
        }
    });
});

// Function to add favirate service
// document.addEventListener('DOMContentLoaded', function() {
//     const heartIcon = document.getElementById('heartIcon');

//     heartIcon.addEventListener('click', function() {
//         const heart = heartIcon.querySelector('.bi-heart');
//         if (heart.classList.contains('bi-heart-fill')) {
//             heart.classList.remove('bi-heart-fill');
//             heart.style.color = '';
//         } else {
//             heart.classList.remove('bi-heart')
//             heart.classList.add('bi-heart-fill');
//             heart.style.color = 'red'; 
//         }
//     });
// });

function toggleHeartColor(icon) {
    
    const heart = icon.querySelector('.bi-heart') || icon.querySelector('.bi-heart-fill');
    if (heart.classList.contains('bi-heart-fill')) {
        heart.classList.remove('bi-heart-fill');
        heart.classList.add('bi-heart');
        heart.style.color = ''; // Remove inline color if set
    } else {
        heart.classList.add('bi-heart-fill');
        heart.classList.remove('bi-heart')
        heart.style.color = 'red'; // Set color to red
    }
    
}




