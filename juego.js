const main = () => {
  let imagenes = document.querySelectorAll("#cajaImagenes img");
  let rellenar1 = document.getElementById("rellenar1");
  let rellenar2 = document.getElementById("rellenar2");
  let rellenar3 = document.getElementById("rellenar3");

  for (let imagen of imagenes) {
    imagen.addEventListener("dragstart", dragStart, false);
    imagen.addEventListener("dragend", dragEnd, false);
  }

  let cajasARellenar = [rellenar1, rellenar2, rellenar3];
  for (let caja of cajasARellenar) {
    caja.addEventListener(
      "dragenter",
      (e) => {
        e.preventDefault();
      },
      false
    );
    caja.addEventListener(
      "dragover",
      (e) => {
        e.preventDefault();
      },
      false
    );
    caja.addEventListener("drop", (e) => drop(e, caja), false);
  }
};
const dragStart = (e) => {
  elemento = e.target;
  e.dataTransfer.setData("Text", elemento.getAttribute("id"));
};
const dragEnd = (e) => {
  elemento = e.target;
  if (e.dataTransfer.dropEffect !== "none") elemento.style.height = "0px";
};

const drop = (e, box) => {
  e.preventDefault();
  var id = e.dataTransfer.getData("Text");
  try {
    var src = document.getElementById(id).src;
    box.innerHTML = '<img src="' + src + '" height="400px" width="275px">';
  } catch (err) {
    if (!box.innerHTML.includes("<img")) box.innerHTML = "ELEMENTO INVALIDO";
  }
};

main();
