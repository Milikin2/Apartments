(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const widgetTitle = document.querySelectorAll(".aside__title");
    const locationButton = document.querySelectorAll(".aside-location__item");
    const script_showMore = document.querySelector(".aside-optional__showMore");
    const flatsShowMore = document.querySelector(".flats__showMore");
    widgetTitle.forEach((function(item) {
        item.addEventListener("click", (function() {
            const widgetContent = item.nextElementSibling;
            item.classList.toggle("widget__active");
            if (item.classList.contains("aside-underground__title")) {
                widgetContent.classList.toggle("aside-underground__location");
                widgetContent.classList.toggle("underground__content");
            }
            if (item.classList.contains("aside-ranting__title")) {
                widgetContent.classList.toggle("aside-ranting__list");
                widgetContent.classList.toggle("ranting__content");
            }
            if (item.classList.contains("aside-optional__title")) {
                widgetContent.classList.toggle("aside-optional__list");
                widgetContent.classList.toggle("ranting__content");
            }
            if (!widgetContent.style.maxHeight) widgetContent.style.maxHeight = null; else widgetContent.style.maxHeight = widgetContent.scrollHeight + "px";
        }));
    }));
    locationButton.forEach((function(item) {
        item.addEventListener("click", (function() {
            item.classList.toggle("location-item__active");
            if (item.classList.contains("aside-location__any")) {
                for (let i = 0; i < locationButton.length; i++) if (i != locationButton.length - 1) {
                    locationButton[i].classList.remove("location-item__active");
                    item.classList.add("location-item__active");
                }
            } else locationButton[locationButton.length - 1].classList.remove("location-item__active");
            const activeButtons = document.querySelectorAll(".location-item__active");
            if (0 == activeButtons.length) item.classList.add("location-item__active");
        }));
    }));
    script_showMore.addEventListener("click", (function() {
        const hiddenOptionalList = document.querySelector(".hidden-optional");
        const currentHiddenList = document.querySelector(".hidden-optional__list");
        const servicesToggle = document.querySelector(".services-toggle");
        hiddenOptionalList.classList.toggle("hidden-optional__list-disable");
        currentHiddenList.classList.toggle("hidden-optional__list-active");
        if (currentHiddenList.classList.contains("hidden-optional__list-active")) {
            script_showMore.innerHTML = "Скрыть";
            servicesToggle.style.marginTop = "30px";
        } else {
            script_showMore.innerHTML = "Показать ещё";
            servicesToggle.style.marginTop = "15px";
        }
    }));
    flatsShowMore.addEventListener("click", (function() {
        const flatsHiddenList = document.querySelector(".flats-hidden");
        flatsHiddenList.classList.remove("flats-hidden__disable");
    }));
    window["FLS"] = true;
    isWebp();
})();