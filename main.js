var indexShow = 0;
var page = 0;
var scroll = true;
setTimeout(function() {
  $(window).bind("mousewheel", function(event) {
    if (scroll) {
      if (event.originalEvent.wheelDelta >= 0) {
        setTimeout(preShow, 1000);
      } else {
        setTimeout(nextShow, 1000);
      }
    }
  });
}, 2000);

const show = index => {
  $(".page-change").css("display", "none");
  $(".page-indicator div").css({ background: "#b6bcceb3", height: "30px" });
  if (index > $(".page-change").length - 1) {
    index = $(".page-change").length - 1;
    indexShow = $(".page-change").length - 1;
  }
  if (index < 0) {
    index = 0;
    indexShow = 0;
  }
  page = index + 1;
  $(".number")
    .children()
    .text(page);
  $(".number")
    .children()
    .addClass("animated flipInX");
  setTimeout(function() {
    $(".number")
      .children()
      .removeClass("animated flipInX");
  }, 500);
  if (page == $(".page-change").length) {
    $(".sroll-indicator").fadeOut();
    $(".page-indicator").fadeOut();
    $(".next-indicator").css("display", "block");
  } else {
    $(".sroll-indicator").fadeIn();
    $(".page-indicator").fadeIn();
    $(".next-indicator").css("display", "none");
    $(".next-indicator").css("animation-delay", "1.1s");
    $(".pre-indicator").css("display", "none");
    $(".slide-item").css("display", "none");
    $(".slide-item:nth-child(1)").css("display", "block");
    $(".slide").css("left", "50%");
    move = 50;
  }
  $(`.page-indicator div:nth-child(${index + 1})`).css({
    background: "white",
    height: "60px"
  });

  setTimeout(function() {
    $(".audio-btn img").addClass("active-audio");
  }, 600);
  $($(".page-change")[index]).css("display", "block");
};

const nextShow = () => {
  indexShow++;
  show(indexShow);
};

const preShow = () => {
  indexShow--;
  show(indexShow);
};
const loadingg = () => {
  $(".loading").css("display", "flex");
  setTimeout(function() {
    $(".loading").css("display", "none");
    setTimeout(function() {
      show(indexShow);
    }, 500);
  }, 6000);
};
loadingg();
$(".page-home .btn-flag").click(function() {
  nextShow();
});

$(".sroll-indicator").click(function() {
  nextShow();
});

$(".logo-1").click(function() {
  indexShow = 0;
  show(indexShow);
});

$(".logo-2").click(function() {
  indexShow = 0;
  show(indexShow);
});

$(".logo-1-black").click(function() {
  indexShow = 0;
  show(indexShow);
  scroll = true;
  $(".page-howtobuy").css("display", "none");
  $(".shop-button").fadeIn();
  $(".page-indicator").fadeIn();
  $(".sroll-indicator").fadeIn();
  $(".logo-1").fadeIn();
  $(".logo-2").fadeIn();
  $(".nav-icon").fadeIn();
  $(".audio-btn").fadeIn();
  $(".wrapper-hint-2").css("display", "none");
  $(".back-indicator").css("display", "none");
  $(".country").css("display", "none");
  $(".page-howtobuy .wrapper-hint").css("display", "block");
  $(".sub").css("display", "block");
  $(".shop-head").css("display", "block");
});

$(".logo-2-black").click(function() {
  indexShow = 0;
  show(indexShow);
  scroll = true;
  $(".page-howtobuy").css("display", "none");
  $(".shop-button").fadeIn();
  $(".page-indicator").fadeIn();
  $(".sroll-indicator").fadeIn();
  $(".logo-1").fadeIn();
  $(".logo-2").fadeIn();
  $(".nav-icon").fadeIn();
  $(".audio-btn").fadeIn();
  $(".page-howtobuy").css("overflow", "hidden");
  $(".wrapper-hint-2").css("display", "none");
  $(".back-indicator").css("display", "none");
  $(".country").css("display", "none");
  $(".page-howtobuy .wrapper-hint").css("display", "block");
  $(".sub").css("display", "block");
  $(".shop-head").css("display", "block");
});

$(".shop-button").click(function() {
  scroll = false;
  $(".page-howtobuy").css("display", "block");
  $(".page-change").css("display", "none");
  $(".shop-button").fadeOut("slow");
  $(".page-indicator").fadeOut("slow");
  $(".sroll-indicator").fadeOut("slow");
  $(".logo-1").fadeOut("slow");
  $(".logo-2").fadeOut("slow");
  $(".nav-icon").fadeOut("slow");
  $(".audio-btn").fadeOut("slow");
  $(".next-indicator").css("display", "none");
  $(".next-indicator").css("animation-delay", "1.1s");
  $(".pre-indicator").css("display", "none");
  $(".slide-item").css("display", "none");
  $(".slide-item:nth-child(1)").css("display", "block");
  $(".slide").css("left", "50%");
  move = 50;
});

$(".page-howtobuy .close-button").click(function() {
  scroll = true;
  $(".page-howtobuy").css("display", "none");
  $(".page-indicator").fadeIn();
  $(".sroll-indicator").fadeIn();
  show(indexShow);
  $(".shop-button").fadeIn();
  $(".logo-1").fadeIn();
  $(".logo-2").fadeIn();
  $(".nav-icon").fadeIn();
  $(".audio-btn").fadeIn();
  $(".page-howtobuy").css("overflow", "hidden");
  $(".wrapper-hint-2").css("display", "none");
  $(".back-indicator").css("display", "none");
  $(".country").css("display", "none");
  $(".page-howtobuy .wrapper-hint").css("display", "block");
  $(".sub").css("display", "block");
  $(".shop-head").css("display", "block");
});

$(".page-howtobuy .shop-head-btn").click(function() {
  $(".page-howtobuy .wrapper-hint").css("display", "none");
  $(".sub").css("display", "none");
  $(".shop-head").css("display", "none");
  $(".page-howtobuy").css("overflow-y", "scroll");
  $(".wrapper-hint-2").css("display", "block");
  $(".back-indicator").css("display", "block");
  $(".country").css("display", "flex");
});

$(".back-indicator").click(function() {
  $(".page-howtobuy").css("overflow", "hidden");
  $(".wrapper-hint-2").css("display", "none");
  $(".back-indicator").css("display", "none");
  $(".country").css("display", "none");
  $(".page-howtobuy .wrapper-hint").css("display", "block");
  $(".sub").css("display", "block");
  $(".shop-head").css("display", "block");
});

$(".nav-icon").click(function() {
  scroll = false;
  $(".page-nav-icon").css("display", "block");
  $(`.list-page-items:nth-child(${indexShow + 1})`).css("color", "white");
  $(".page-change").css("display", "none");
  $(".shop-button").fadeOut("slow");
  $(".page-indicator").fadeOut("slow");
  $(".sroll-indicator").fadeOut("slow");
  $(".logo-1").fadeOut("slow");
  $(".logo-2").fadeOut("slow");
  $(".nav-icon").fadeOut("slow");
  $(".audio-btn").fadeOut("slow");
  $(".next-indicator").css("display", "none");
  $(".next-indicator").css("animation-delay", "1.1s");
  $(".pre-indicator").css("display", "none");
  $(".slide-item").css("display", "none");
  $(".slide-item:nth-child(1)").css("display", "block");
  $(".slide").css("left", "50%");
  move = 50;
});

$(".list-page-items").click(function() {
  scroll = true;
  $(".page-nav-icon").css("display", "none");
  $(`.list-page-items:nth-child(${indexShow + 1})`).css("color", "#5F5E66");
  $(".page-indicator").fadeIn();
  $(".sroll-indicator").fadeIn();
  indexShow = $(this).index();
  console.log(indexShow);
  show(indexShow);
  $(".shop-button").fadeIn();
  $(".logo-1").fadeIn();
  $(".logo-2").fadeIn();
  $(".nav-icon").fadeIn();
  $(".audio-btn").fadeIn();
});

$(".page-nav-icon .close-button").click(function() {
  scroll = true;
  $(".page-nav-icon").css("display", "none");
  $(`.list-page-items:nth-child(${indexShow + 1})`).css("color", "#5F5E66");
  $(".page-indicator").fadeIn();
  $(".sroll-indicator").fadeIn();
  show(indexShow);
  $(".shop-button").fadeIn();
  $(".logo-1").fadeIn();
  $(".logo-2").fadeIn();
  $(".nav-icon").fadeIn();
  $(".audio-btn").fadeIn();
});

$(".page-nav-icon .shop-head-btn").click(function() {
  $(".page-nav-icon").css("display", "none");
  $(".page-howtobuy").css("display", "block");
});

$(".page-nav-icon .small a:first-child()").click(function(event) {
  $(".page-nav-icon .videoContainer").css("display", "none");
  $(".page-nav-icon .list-page").css("display", "none");
  $(".page-nav-icon .shop-head").css("display", "none");
  $(".page-nav-icon .close-button").css("display", "none");
  $(".page-nav-icon .small").css("display", "none");
  $(".page-nav-icon .credits").css("display", "block");
  $(".page-nav-icon .credits .close-button").css("display", "block");
  $(".page-nav-icon .credits .videoContainer").css("display", "flex");
  $(".audio-btn").css("display", "block");
  // // Prevent default anchor click behavior
  // event.preventDefault();
  // // Store hash
  // var hash = this.hash;
  // console.log(hash);
  // // Using jQuery's animate() method to add smooth page scroll
  // // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  // $("html,body").animate(
  //   {
  //     scrollTop: $(hash).offset().top
  //   },
  //   15000,
  //   function() {
  //     // Add hash (#) to URL when done scrolling (default click behavior)
  //     window.location.hash = hash;
  //     console.log(hash + 2);
  //   }
  // );
});

$(".page-nav-icon .credits .close-button").click(function() {
  $(".page-nav-icon .credits").css("display", "none");
  $(".page-nav-icon").css("display", "none");
  show(indexShow);
  $(".page-nav-icon .videoContainer").css("display", "flex");
  $(".page-nav-icon .list-page").css("display", "inline-flex");
  $(".page-nav-icon .shop-head").css("display", "block");
  $(".page-nav-icon .close-button").css("display", "block");
  $(".page-nav-icon .small").css("display", "block");
});

$(".page-nav-icon .small a:last-child()").click(function() {
  $(".page-nav-icon .videoContainer").css("display", "none");
  $(".page-nav-icon .list-page").css("display", "none");
  $(".page-nav-icon .shop-head").css("display", "none");
  $(".page-nav-icon .close-button").css("display", "none");
  $(".page-nav-icon .small").css("display", "none");
  $(".page-nav-icon .imprint").css("display", "block");
  $(".page-nav-icon .imprint .close-button").css("display", "block");
});

$(".page-nav-icon .imprint .close-button").click(function() {
  $(".page-nav-icon .imprint").css("display", "none");
  $(".page-nav-icon").css("display", "none");
  show(indexShow);
  $(".page-nav-icon .videoContainer").css("display", "flex");
  $(".page-nav-icon .list-page").css("display", "inline-flex");
  $(".page-nav-icon .shop-head").css("display", "block");
  $(".page-nav-icon .close-button").css("display", "block");
  $(".page-nav-icon .small").css("display", "block");
});

$(".audio-btn").click(function() {
  $(".audio-btn img").toggleClass("active-audio");
});

$(".page-product .btn-flag").click(function() {
  var numberItems = $(this).index() + 1;
  console.log(numberItems);
  scroll = false;
  $(".page-product .videoContainer").css("display", "none");
  $(".page-product .head-hint").css("display", "none");
  $(".page-product .wrapper-hint").css("display", "none");
  $(".page-product .btn-flag").css("display", "none");
  $(".shop-button").fadeOut("slow");
  $(".page-indicator").fadeOut("slow");
  $(".sroll-indicator").fadeOut("slow");
  $(".logo-1").fadeOut("slow");
  $(".logo-2").fadeOut("slow");
  $(".nav-icon").fadeOut("slow");
  $(".page-product .page-product-content").css("display", "block");
  $(".page-product .page-product-content .videoContainer").css(
    "display",
    "flex"
  );
  $(".page-product .page-product-content .select-btn").fadeIn("slow");
  $(
    `.page-product .page-product-content .select-btn a:nth-child(${numberItems})`
  ).css("color", "white");
  $(
    `.page-product .page-product-content .select-btn a:nth-child(${numberItems})`
  ).addClass("active-items");
  $(
    `.page-product .page-product-content .select-content div:nth-child(${numberItems})`
  ).css("display", "block");
  $(".page-product .page-product-content .close-button").fadeIn("slow");
});

$(".page-product .select-btn a").click(function(event) {
  var numberItemsA = $(this).index();
  $(".page-product .page-product-content .select-btn a").css(
    "color",
    "#5F5E66"
  );
  $(".page-product .page-product-content .select-btn a").removeClass(
    "active-items"
  );
  event.target.className = "active-items";
  $(".page-product .page-product-content .select-content div").css(
    "display",
    "none"
  );
  $(
    $(".page-product .page-product-content .select-content div")[numberItemsA]
  ).css("display", "block");
});

$(".page-product .page-product-content .close-button").click(function() {
  scroll = true;
  $(".page-product .page-product-content close-button").fadeOut("slow");
  $(".page-product .page-product-content .select-btn a").css(
    "color",
    "#5F5E66"
  );
  $(".page-product .page-product-content .select-btn a").removeClass(
    "active-items"
  );
  $(".page-product .page-product-content .select-content div").css(
    "display",
    "none"
  );
  $(".page-product .page-product-content .select-btn").fadeOut("slow");
  $(".page-product .page-product-content .videoContainer").css(
    "display",
    "none"
  );
  $(".page-product .page-product-content").css("display", "none");
  $(".page-product .videoContainer").css("display", "block");
  $(".page-product .head-hint").css("display", "block");
  $(".page-product .wrapper-hint").css("display", "block");
  $(".page-product .btn-flag").css("display", "block");
  $(".shop-button").fadeIn("slow");
  $(".page-indicator").fadeIn("slow");
  $(".sroll-indicator").fadeIn("slow");
  $(".logo-1").fadeIn("slow");
  $(".logo-2").fadeIn("slow");
  $(".nav-icon").fadeIn("slow");
});

$(".items-btn").click(function() {
  var numberItems = $(this).index() + 1;
  scroll = false;
  $(".page-items .videoContainer").css("display", "none");
  $(".page-items .head-hint").css("display", "none");
  $(".page-items .wrapper-hint").css("display", "none");
  $(".page-items .items-btn").css("display", "none");
  $(".page-items .lines-limited").css("display", "none");
  $(".shop-button").fadeOut("slow");
  $(".page-indicator").fadeOut("slow");
  $(".sroll-indicator").fadeOut("slow");
  $(".logo-1").fadeOut("slow");
  $(".logo-2").fadeOut("slow");
  $(".nav-icon").fadeOut("slow");
  $(".page-items .page-items-content").css("display", "block");
  $(
    `.page-items .page-items-content .videoContainer:nth-child(${numberItems})`
  ).css("display", "flex");
  $(".page-items .page-items-content .select-btn").fadeIn("slow");
  $(
    `.page-items .page-items-content .select-btn a:nth-child(${numberItems})`
  ).css("color", "white");
  $(
    `.page-items .page-items-content .select-btn a:nth-child(${numberItems})`
  ).addClass("active-items");
  $(
    `.page-items .page-items-content .select-content div:nth-child(${numberItems})`
  ).css("display", "block");
  $(".page-items .page-items-content .close-button").fadeIn("slow");
});
$(".page-items .select-btn a").click(function(event) {
  var numberItemsA = $(this).index();
  $(".page-items .page-items-content .select-btn a").css("color", "#5F5E66");
  $(".page-items .page-items-content .select-btn a").removeClass(
    "active-items"
  );
  event.target.className = "active-items";
  $(".page-items .videoContainer").css("display", "none");
  $($(".page-items .page-items-content .videoContainer")[numberItemsA]).css(
    "display",
    "flex"
  );
  $(".page-items .page-items-content .select-content div").css(
    "display",
    "none"
  );
  $($(".page-items .page-items-content .select-content div")[numberItemsA]).css(
    "display",
    "block"
  );
});
$(".page-items .page-items-content .close-button").click(function() {
  scroll = true;
  $(".page-items .page-items-content close-button").fadeOut("slow");
  $(".page-items .page-items-content .select-btn a").css("color", "#5F5E66");
  $(".page-items .page-items-content .select-btn a").removeClass(
    "active-items"
  );
  $(".page-items .page-items-content .select-content div").css(
    "display",
    "none"
  );
  $(".page-items .page-items-content .select-btn").fadeOut("slow");
  $(".page-items .page-items-content .videoContainer").css("display", "none");
  $(".page-items .page-items-content").css("display", "none");
  $(".page-items .videoContainer").css("display", "block");
  $(".page-items .head-hint").css("display", "block");
  $(".page-items .wrapper-hint").css("display", "block");
  $(".page-items .items-btn").css("display", "block");
  $(".page-items .lines-limited").css("display", "block");
  $(".shop-button").fadeIn("slow");
  $(".page-indicator").fadeIn("slow");
  $(".sroll-indicator").fadeIn("slow");
  $(".logo-1").fadeIn("slow");
  $(".logo-2").fadeIn("slow");
  $(".nav-icon").fadeIn("slow");
});

$(".page-journey .flag-2").click(function() {
  scroll = false;
  $(".page-journey .videoContainer").css("display", "none");
  $(".page-journey .head-hint").css("display", "none");
  $(".page-journey .wrapper-hint").css("display", "none");
  $(".page-journey .watch-film").css("display", "none");
  $(".page-journey .flag-2").css("display", "none");
  $(".shop-button").fadeOut("slow");
  $(".page-indicator").fadeOut("slow");
  $(".sroll-indicator").fadeOut("slow");
  $(".logo-1").fadeOut("slow");
  $(".logo-2").fadeOut("slow");
  $(".nav-icon").fadeOut("slow");
  $(".page-journey .page-journey-content").css("display", "block");
  $(`.page-journey .page-journey-content .videoContainer:nth-child(${1})`).css(
    "display",
    "flex"
  );
  $(".page-journey .page-journey-content .select-btn").fadeIn("slow");
  $(`.page-journey .page-journey-content .select-btn a:nth-child(${1})`).css(
    "color",
    "white"
  );
  $(
    `.page-journey .page-journey-content .select-btn a:nth-child(${1})`
  ).addClass("active-items");
  $(
    `.page-journey .page-journey-content .select-content div:nth-child(${1})`
  ).css("display", "block");
  $(".page-journey .page-journey-content .close-button").fadeIn("slow");
});
$(".page-journey .select-btn a").click(function(event) {
  var numberItemsA = $(this).index();
  $(".page-journey .page-journey-content .select-btn a").css(
    "color",
    "#5F5E66"
  );
  $(".page-journey .page-journey-content .select-btn a").removeClass(
    "active-items"
  );
  event.target.className = "active-items";
  $(".page-journey .videoContainer").css("display", "none");
  $($(".page-journey .page-journey-content .videoContainer")[numberItemsA]).css(
    "display",
    "flex"
  );
  $(".page-journey .page-journey-content .select-content div").css(
    "display",
    "none"
  );
  $(
    $(".page-journey .page-journey-content .select-content div")[numberItemsA]
  ).css("display", "block");
});
$(".page-journey .page-journey-content .close-button").click(function() {
  scroll = true;
  $(".page-journey .page-journey-content close-button").fadeOut("slow");
  $(".page-journey .page-journey-content .select-btn a").css(
    "color",
    "#5F5E66"
  );
  $(".page-journey .page-journey-content .select-btn a").removeClass(
    "active-items"
  );
  $(".page-journey .page-journey-content .select-content div").css(
    "display",
    "none"
  );
  $(".page-journey .page-journey-content .select-btn").fadeOut("slow");
  $(".page-journey .page-journey-content .videoContainer").css(
    "display",
    "none"
  );
  $(".page-journey .page-journey-content").css("display", "none");
  $(".page-journey .videoContainer").css("display", "block");
  $(".page-journey .head-hint").css("display", "block");
  $(".page-journey .wrapper-hint").css("display", "block");
  $(".page-journey .watch-film").css("display", "block");
  $(".page-journey .flag-2").css("display", "flex");
  $(".shop-button").fadeIn("slow");
  $(".page-indicator").fadeIn("slow");
  $(".sroll-indicator").fadeIn("slow");
  $(".logo-1").fadeIn("slow");
  $(".logo-2").fadeIn("slow");
  $(".nav-icon").fadeIn("slow");
});
var direction = 50;
var move = 50;
$(".next-indicator").click(function() {
  $(".pre-indicator").css("display", "block");
  $(".slide-item").css("display", "block");
  if (move == -350) {
    $(".next-indicator").css("display", "none");
    move = move - direction;
  } else {
    move = move - direction;
  }
  $(".slide").css("left", `${move}%`);
});
$(".pre-indicator").click(function() {
  if (move == -400) {
    $(".next-indicator").css("animation-delay", "0.1s");
    $(".next-indicator").css("display", "block");
  }
  if (move == 0) {
    $(".pre-indicator").css("display", "none");
    move = move + direction;
  } else {
    move = move + direction;
  }
  $(".slide").css("left", `${move}%`);
});
var direction2 = 100;
var move2 = 0;
$(".slide .slide-item").click(function() {
  scroll = false;
  var indexImg = $(this).index();
  move2 = indexImg * -100;
  $(".page-gallery .head-hint").css("display", "none");
  $(".page-gallery .wrapper-hint").css("display", "none");
  $(".page-gallery .slide").css("display", "none");
  $(".shop-button").fadeOut("slow");
  $(".audio-btn").fadeOut("slow");
  $(".sroll-indicator").fadeOut("slow");
  $(".logo-1").fadeOut("slow");
  $(".logo-2").fadeOut("slow");
  $(".nav-icon").fadeOut("slow");
  $(".next-indicator").css("display", "none");
  $(".next-indicator").css("animation-delay", "1.1s");
  $(".pre-indicator").css("display", "none");
  $(".slide-item").css("display", "none");
  $(".slide-item:nth-child(1)").css("display", "block");
  $(".slide").css("left", "50%");
  move = 50;
  $(".page-gallery .full-img").css("display", "block");
  $(".next-img").css("display", "block");
  $(".pre-img").css("display", "block");
  $(".list-img").css("left", `${move2}%`);
  $("img-indicator").fadeIn("slow");
  $(".page-gallery .full-img .close-button-img").fadeIn("slow");
  $($(".img-indicator div")[indexImg]).css({
    background: "white",
    width: "60px"
  });
});
var index = 0;
$(".next-img").click(function() {
  $(".img-indicator div").css({ background: "#b6bcceb3", width: "30px" });
  if (move2 == -900) {
    move2 = -900;
  } else {
    move2 = move2 - direction2;
  }
  $(".list-img").css("left", `${move2}%`);
  index = (move2 / 100) * -1 + 1;
  $(`.img-indicator div:nth-child(${index})`).css({
    background: "white",
    width: "60px"
  });
});
$(".pre-img").click(function() {
  $(".img-indicator div").css({ background: "#b6bcceb3", width: "30px" });
  if (move2 == 0) {
    move2 = 0;
  } else {
    move2 = move2 + direction2;
  }
  $(".list-img").css("left", `${move2}%`);
  index = (move2 / 100) * -1 + 1;
  $(`.img-indicator div:nth-child(${index})`).css({
    background: "white",
    width: "60px"
  });
});
$(".page-gallery .full-img .close-button-img").click(function() {
  scroll = true;
  $(".next-img").css("display", "none");
  $(".pre-img").css("display", "none");
  $("img-indicator").fadeOut("slow");
  $(".img-indicator div").css({ background: "#b6bcceb3", width: "30px" });
  $(".page-gallery .full-img").css("display", "none");
  $(".page-gallery .head-hint").css("display", "block");
  $(".page-gallery .wrapper-hint").css("display", "block");
  $(".page-gallery .slide").css("display", "flex");
  $(".next-indicator").css("display", "block");
  $(".shop-button").fadeIn("slow");
  $(".sroll-indicator").fadeIn("slow");
  $(".logo-1").fadeIn("slow");
  $(".logo-2").fadeIn("slow");
  $(".nav-icon").fadeIn("slow");
  $(".audio-btn").fadeIn("slow");
});
