
$(document).ready(function () {
  $(".content").click(function () {
    $(this).parents(".week").find(".inside").slideToggle(700);
  });
});

