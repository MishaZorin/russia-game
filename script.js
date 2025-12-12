let regions = document.querySelectorAll('path')
let find = document.getElementById('find')
let fadeButton = document.getElementById('fadeButton')


function playAgain() {
    let randomIndex = Math.floor(Math.random() * regions.length)
    // Получаем регион по индексу
    let randomRegion = regions[randomIndex]
    find.innerHTML = "Найди на карте:" + randomRegion.id
    fadeButton.style.display = 'none'
    regions.style.fill = 'white'
    


}
let randomIndex = Math.floor(Math.random() * regions.length)
// Получаем регион по индексу
let randomRegion = regions[randomIndex]
find.innerHTML = "Найди на карте:" + randomRegion.id


regions.forEach(region => {
    // console.log(randomRegion);

    // console.log(region);
    region.addEventListener('click', function () {
        // alert("Регион:" + region.id)
        console.log(region.id);

        if (randomRegion === region) {
            find.innerHTML = 'Победа!'
            this.style.fill = 'green'
            fadeButton.style.display = 'block'


        }
        else {
            find.innerHTML = "Найди на карте:" + randomRegion.id
            this.style.fill = 'red'
        }
    })
})

