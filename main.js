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

