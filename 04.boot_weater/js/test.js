$(".register").click(function () {
  const email = $("#inputEmail3").val();
  const password = $("#inputPassword3").val();
  const gender = $("#gender").val();
  let Like = "";

  $("input[name=gridRadios]").each(function () {
    var value = $(this).val();

    var checked = $(this).prop("checked");

    if (checked) {
      Like = value;
      return;
    }
  });
});
