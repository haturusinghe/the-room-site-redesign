const open_btn = document.getElementById("open-trailer");
const model_container = document.getElementById("trailer_container");
const model_container_div = document.getElementById("trailer_modal");
const close_btn = document.getElementById("close");
const yt_vid = document.getElementById("yt_trailer");

open_btn.onclick = function () {
  yt_vid.width = model_container_div.offsetWidth - 10;
  console.log("Show trailer");
  model_container.classList.add("show");
};

close_btn.onclick = function () {
  console.log("Hide trailer");
  model_container.classList.remove("show");
  yt_vid.src = yt_vid.src;
};
