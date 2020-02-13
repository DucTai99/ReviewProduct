// var lastScrollTop = 0;
// document.addEventListener("scroll", function() {
// var scrollTop = document.documentElement.scrollTop;
// if (scrollTop > lastScrollTop) {
//   // down
//   // nextShow();
//   console.log("down");
//   $(".page-change").toggleClass;
// } else {
//   //up
//   // preShow();
//   console.log("up");
// }
// lastScrollTop = scrollTop > 0 ? scrollTop : 0;
// console.log("Scroll");
// });
var indexShow = 0;
// const show = index => {
//   $(".page-change").css("display", "none");
//   if (index > $(".page-change").length - 1) {
//     index = 0;
//     indexShow = 0;
//   }
//   if (index < 0) {
//     index = 0;
//     indexShow = 0;
//   }
//   $(".page-change")[index].css("display", "block");
// };
// show(indexShow);
const nextShow = () => {
  indexShow++;
  show(indexShow);
};
const preShow = () => {
  indexShow--;
  show(indexShow);
};
// console.log($(".page-change")[indexShow].addClass("active"));
var pageShow = document.getElementsByClassName("page-change");
// console.log(pageShow.length);
const show = index => {
  if (index > pageShow.length - 1) {
    index = 0;
    indexShow = 0;
  }
  if (index < 0) {
    index = pageShow.length - 1;
    indexShow = pageShow.length - 1;
    console.log(index);
  }
  for (i = 0; i < pageShow.length; i++) {
    pageShow[i].style.display = "none";
    pageShow[i].style.opacity = "0";
  }
  pageShow[index].style.display = "block";
  pageShow[index].style.opacity = "1";
};
// show(indexShow);
// setInterval(nextShow, 10000);
