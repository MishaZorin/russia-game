let regions = document.querySelectorAll('path')
let find = document.getElementById('find')



regions.forEach(region => {
    let randomRegion = Math.floor(Math.random() * regions.length)
    console.log(randomRegion.id);
    find.innerHTML = "Найди на карте:" + randomRegion.id
    // console.log(region);
    region.addEventListener('click', function () {
        // alert("Регион:" + region.id)
        if (randomRegion.id === region.id) {
            find.innerHTML = 'Победа!'
            this.style.fill = 'green'
        }
        else {
            find.innerHTML = 'Это другой регион!'
            this.style.fill = 'red'
        }
    })
})