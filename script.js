let regions = document.querySelectorAll('path')
let find = document.getElementById('find')



regions.forEach(region => {
    let randomIndex = Math.floor(Math.random() * regions.length)
    let selectedRegion = regions[randomIndex]
    console.log(selectedRegion.id);
    find.innerHTML = "Найди на карте:" + selectedRegion.id

    region.addEventListener('click', function () {
        
        // alert("Регион:" + region.id)
        if (selectedRegion.id === region.id) {
            find.innerHTML = 'Победа!'
            this.style.fill = 'green'
        }
        else {
            find.innerHTML = 'Это другой регион!'
            this.style.fill = 'red'
        }
    })
})