const preview = document.getElementById("preview");
const cdc = document.getElementById("cdc");
const tectonic = document.getElementById("tectonic");
const wristcheck = document.getElementById("wristcheck");
const dhgroupordering = document.getElementById("dhgroupordering");
const dhpreorder = document.getElementById("dhpreorder");
const gogoxdelivery = document.getElementById("gogoxdelivery")
const ggb = document.getElementById("ggb")
const hypebeast = document.getElementById("hypebeast")
const hbx = document.getElementById("hbx")

const previewReset = () => {
    preview.innerHTML = ``;
}

cdc.addEventListener("mouseover", () => {preview.innerHTML = `<video autoplay muted loop playsinline class="phone"><source src="video/screen-recordings/cdc-480.webm" type="video/webm"></video>`});
cdc.addEventListener("mouseout", previewReset);

tectonic.addEventListener("mouseover", () => {preview.innerHTML = `<video autoplay muted loop playsinline class="desktop d3-2"
<source src="video/screen-recordings/tectonic.webm" type="video/webm">
</video>`});
tectonic.addEventListener("mouseout", previewReset);

wristcheck.addEventListener("mouseover", () => {preview.innerHTML = `<img class="desktop d16-9" src="img/wristcheck.webp">`});
wristcheck.addEventListener("mouseout", previewReset);

dhgroupordering.addEventListener("mouseover", () => {preview.innerHTML = `<video autoplay muted loop playsinline" class="phone">
<source src="video/screen-recordings/foodpanda-480.webm" type="video/webm">
</video>`});
dhgroupordering.addEventListener("mouseout", previewReset);

dhpreorder.addEventListener("mouseover", () => {preview.innerHTML = `<video autoplay muted loop playsinline" class="phone">
<source src="video/screen-recordings/foodpanda-preorder.webm" type="video/webm">
</video>`});
dhpreorder.addEventListener("mouseout", previewReset);

gogoxdelivery.addEventListener("mouseover", () => {preview.innerHTML = `<video autoplay muted loop playsinline class="phone">
<source src="video/screen-recordings/gogox.mp4" type="video/mp4">
</video>`});
gogoxdelivery.addEventListener("mouseout", previewReset);

ggb.addEventListener("mouseover", () => {preview.innerHTML = `<video autoplay muted loop playsinline class="desktop d16-9">
<source src="video/screen-recordings/ggb.webm" type="video/webm">
</video>`});
ggb.addEventListener("mouseout", previewReset);

hypebeast.addEventListener("mouseover", () => {preview.innerHTML = `<img src="img/hypebeast-flush.webp" class="desktop d3-2">`});
hypebeast.addEventListener("mouseout", previewReset);

hbx.addEventListener("mouseover", () => {preview.innerHTML = `<img src="img/hbx.webp" style="width:100%">`});
hbx.addEventListener("mouseout", previewReset);