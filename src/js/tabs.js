const tabsBtnCii = document.querySelectorAll(".category-cii__tab");
const tabsItemsCii = document.querySelectorAll(".category-cii__tabs-block");

tabsBtnCii.forEach(function (item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      tabsBtnCii.forEach(function (item) {
         item.classList.remove('tab-active')
      })
      tabsItemsCii.forEach(function (item) {
         item.classList.remove('tab-active')
      })

      currentBtn.classList.add('tab-active');
      currentTab.classList.add('tab-active');

   })
})

const tabsBtnKateg = document.querySelectorAll(".category-kateg__tab");
const tabsItemsKateg = document.querySelectorAll(".category-kateg__tabs-block");

tabsBtnKateg.forEach(function (item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      tabsBtnKateg.forEach(function (item) {
         item.classList.remove('tab-active')
      })
      tabsItemsKateg.forEach(function (item) {
         item.classList.remove('tab-active')
      })

      currentBtn.classList.add('tab-active');
      currentTab.classList.add('tab-active');

   })
})