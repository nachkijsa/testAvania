const filterContainer = document.querySelector(".gallery-filter");
galleryItems = document.querySelectorAll(".gallery-item");
const filterContainer2 = document.querySelector(".gallery-filter2");
const filterContainer3 = document.querySelector(".gallery-filter3");
const filterContainer4 = document.querySelector(".gallery-filter4");

function text_check_ALL(itemSelected) {
    if (itemSelected == 'All') {
        itemSelected = 'gallery-item'
    }
    return itemSelected
}

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        raceSelected = filterValue;
        raceSelected = text_check_ALL(raceSelected);
        elementSelected = filterContainer2.querySelector(".active").innerHTML;
        elementSelected = text_check_ALL(elementSelected);
        distanceSelected = filterContainer3.querySelector(".active").innerHTML;
        distanceSelected = text_check_ALL(distanceSelected);
        typeAtkSelected = filterContainer4.querySelector(".active").innerHTML;
        typeAtkSelected = text_check_ALL(typeAtkSelected);
        galleryItems.forEach((item) => {
            if ((item.classList.contains(elementSelected) && item.classList.contains(raceSelected) && item.classList.contains(distanceSelected) && item.classList.contains(typeAtkSelected))) {
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
        filterContainer2.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter2");
        raceSelected = filterContainer.querySelector(".active").innerHTML;
        raceSelected = text_check_ALL(raceSelected);
        elementSelected = filterValue;
        elementSelected = text_check_ALL(elementSelected);
        distanceSelected = filterContainer3.querySelector(".active").innerHTML;
        distanceSelected = text_check_ALL(distanceSelected);
        typeAtkSelected = filterContainer4.querySelector(".active").innerHTML;
        typeAtkSelected = text_check_ALL(typeAtkSelected);
        galleryItems.forEach((item) => {
            if ((item.classList.contains(elementSelected) && item.classList.contains(raceSelected) && item.classList.contains(distanceSelected) && item.classList.contains(typeAtkSelected))) {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});

filterContainer3.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item3")) {
        // deactivate existing active 'filter-item'
        filterContainer3.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter3");
        raceSelected = filterContainer.querySelector(".active").innerHTML;
        raceSelected = text_check_ALL(raceSelected);
        elementSelected = filterContainer2.querySelector(".active").innerHTML;
        elementSelected = text_check_ALL(elementSelected);
        distanceSelected = filterValue;
        distanceSelected = text_check_ALL(distanceSelected);
        typeAtkSelected = filterContainer4.querySelector(".active").innerHTML;
        typeAtkSelected = text_check_ALL(typeAtkSelected);
        galleryItems.forEach((item) => {
            if ((item.classList.contains(elementSelected) && item.classList.contains(raceSelected) && item.classList.contains(distanceSelected) && item.classList.contains(typeAtkSelected))) {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});

filterContainer4.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item4")) {
        // deactivate existing active 'filter-item'
        filterContainer4.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter4");
        raceSelected = filterContainer.querySelector(".active").innerHTML;
        raceSelected = text_check_ALL(raceSelected);
        elementSelected = filterContainer2.querySelector(".active").innerHTML;
        elementSelected = text_check_ALL(elementSelected);
        distanceSelected = filterContainer3.querySelector(".active").innerHTML;
        distanceSelected = text_check_ALL(distanceSelected);
        typeAtkSelected = filterValue;
        typeAtkSelected = text_check_ALL(typeAtkSelected);
        galleryItems.forEach((item) => {
            if ((item.classList.contains(elementSelected) && item.classList.contains(raceSelected) && item.classList.contains(distanceSelected) && item.classList.contains(typeAtkSelected))) {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});