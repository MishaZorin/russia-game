let regions = document.querySelectorAll('path')
let find = document.getElementById('find')

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
            
        }
        else {
            find.innerHTML = 'Это другой регион!'
            this.style.fill = 'red'
        }
    })
})