const filterContainer = document.querySelector(".gallery-filter");
galleryItems = document.querySelectorAll(".gallery-item");
const filterContainer2 = document.querySelector(".gallery-filter2");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        // deactivate existing active 'filter-item'
        elementSelected = filterContainer2.querySelector(".active").innerHTML
        filterContainer.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if ((item.classList.contains(filterValue) && item.classList.contains(elementSelected)) || (item.classList.contains(filterValue) && elementSelected === 'All') || (filterValue === 'all' && elementSelected === 'All') || (filterValue === 'all' && item.classList.contains(elementSelected))) {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});

filterContainer2.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item2")) {
        // deactivate existing active 'filter-item'
        raceSelected = filterContainer.querySelector(".active").innerHTML
        filterContainer2.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter2");
        galleryItems.forEach((item) => {
            if ((item.classList.contains(filterValue) && item.classList.contains(raceSelected)) || (item.classList.contains(filterValue) && raceSelected === 'All') || (filterValue === 'all' && raceSelected === 'All') || (filterValue === 'all' && item.classList.contains(raceSelected))) {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});