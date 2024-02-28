navigation = document.querySelector('.navigation')
menubar = document.querySelector('.menu-bar')
close = document.querySelector('.close')


// const menuShow = () =>{
//     navigation.classList.add('show')
// }

// const closeMenu = () =>{
//     navigation.classList.remove('show')
// }


menubar.addEventListener('click', () =>{
    navigation.classList.add('show')
})

close.addEventListener('click', () =>{
    navigation.classList.remove('show')
})


