let tabs = document.querySelectorAll("h3");
// console.log(tabs);

let tabcontent = document.querySelectorAll(".tab-content div");
// console.log(tabcontent);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    //removing active class from all the divs
    tabcontent.forEach((content) => {
      content.classList.remove("active");
    });

    //removing active class from all the h3 tags
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabcontent[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});
