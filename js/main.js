$(document).ready(function () {
  let tab = $(".tab");
  tab.on("click", function (event) {
    $(".content").removeClass("content_active");
    $(".content[data-tab=" + $(this).attr("data-tab") + "]").toggleClass(
      "content_active"
    );
  });
  let flag = false;
  $(".sevices-js").on("click", function () {
    if (!flag) {
      $(".sevices-menu").slideDown();
      $(".sevices-more").css("transform", "rotate(180deg)");
    } else {
      $(".sevices-menu").slideUp();
      $(".sevices-more").css("transform", "rotate(360deg)");
    }
    flag = !flag;
  });

  $(".Shop-js").on("click", function () {
    if (!flag) {
      $(".Shop-menu").slideDown();
      $(".Shop-more").css("transform", "rotate(180deg)");
    } else {
      $(".Shop-menu").slideUp();
      $(".Shop-more").css("transform", "rotate(360deg)");
    }
    flag = !flag;
  });

  let burger = $(".menu-burger");
  let close = $(".close");
  burger.on("click", function () {
    $(".nav").addClass("is-open");
  });
  close.on("click", function () {
    $(".nav").removeClass("is-open");
  });
});
