let items = document.querySelectorAll('.faq__lines');
let panels = document.querySelectorAll('.faq__accordion-text');
let titles = document.querySelectorAll('.faq__accordion-title');

for (let index = 0; index < items.length; index++) {
    titles[index].addEventListener("click", function () {

        items[index].children[0].classList.toggle("faq__line1_active");
        items[index].children[1].classList.toggle("faq__line2_active");

        titles[index].classList.toggle("faq__accordion-title_active");

        if (panels[index].style.maxHeight) {
            panels[index].style.maxHeight = null;

        } else {
            panels[index].style.maxHeight = panels[index].scrollHeight + "px";


            for (let j = 0; j < panels.length; j++) {
                if (j != index) {
                    panels[j].style.maxHeight = null;
                    titles[j].classList.remove("faq__accordion-title_active");
                    items[j].children[0].classList.remove("faq__line1_active");
                    items[j].children[1].classList.remove("faq__line2_active");
                }
            }
        }
    });
}

