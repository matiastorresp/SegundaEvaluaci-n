jQuery(document).ready(function () {
  $("#showpassword").on('click', function () {

      var pass = $("#txtContrasena");
      var pass2 = $("#txtRepetirContrasena");

      var fieldtype = pass.attr('type');
      var fieldtype2 = pass2.attr('type');

      if (fieldtype == 'text' & fieldtype2 == 'text') {
          pass.attr('type', 'password');
          pass2.attr('type', 'password');
          $(this).text("Ver contraseña");
      } else {
          pass.attr('type', 'text');
          pass2.attr('type', 'text');
          $(this).text("Ocultar contraseña");
      }
  });
});
