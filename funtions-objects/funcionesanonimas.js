//funciones anonimas auto-ejecutables

(function () {
  console.log("funcion anonima auto-ejecutable 1");
})();

(function (d, w, c) {
  console.log("funcion anonima auto-ejecutable 2");
  console.log('objeto DOM', d);
  console.log('objeto windows', w);
  c.log('este es el objeto console');
})(document, window, console);
