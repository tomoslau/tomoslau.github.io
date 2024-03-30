const preview = document.getElementById("preview");
const cdc = document.getElementById("cdc");
const tectonic = document.getElementById("tectonic");
const wristcheck = document.getElementById("wristcheck");
const dhgroupordering = document.getElementById("dhgroupordering");
const gogoxdelivery = document.getElementById("gogoxdelivery")
const hypebeast = document.getElementById("hypebeast")
const hbx = document.getElementById("hbx")

const previewReset = () => {
    preview.innerHTML = ``;
}

cdc.addEventListener("mouseover", () => {preview.innerHTML = `<video autoplay muted loop playsinline style="border-radius: 13%/6%; width:100%;max-width:320px; border: 6px solid black"><source src="video/screen-recordings/cdc-480.webm" type="video/webm"></video>`});
cdc.addEventListener("mouseout", previewReset);

tectonic.addEventListener("mouseover", () => {preview.innerHTML = `<video autoplay muted loop playsinline class="img-fluid mx-auto rounded"
style="border: 6px solid black; width:100%; border-radius: 2%">
<source src="video/screen-recordings/tectonic.webm" type="video/webm">
</video>`});
tectonic.addEventListener("mouseout", previewReset);

wristcheck.addEventListener("mouseover", () => {preview.innerHTML = `<img
style="border: 6px solid black; width: 100%;border-radius: 2%" src="img/wristcheck.webp">`});
wristcheck.addEventListener("mouseout", previewReset);

dhgroupordering.addEventListener("mouseover", () => {preview.innerHTML = `<video autoplay muted loop playsinline"
style="border-radius: 13%/6%; width:100%; max-width:320px; border: 6px solid black">
<source src="video/screen-recordings/foodpanda-480.webm" type="video/webm">
</video>`});
dhgroupordering.addEventListener("mouseout", previewReset);

gogoxdelivery.addEventListener("mouseover", () => {preview.innerHTML = `<video autoplay muted loop playsinline
style="border-radius: 13%/6%; max-width:320px; border: 6px solid black">
<source src="video/screen-recordings/gogox.mp4" type="video/mp4">
</video>`});
gogoxdelivery.addEventListener("mouseout", previewReset);

hypebeast.addEventListener("mouseover", () => {preview.innerHTML = `<img src="img/hypebeast-flush.webp"
style="border: 6px solid black;width:100%; border-radius: 2%">`});
hypebeast.addEventListener("mouseout", previewReset);

hbx.addEventListener("mouseover", () => {preview.innerHTML = `<img src="img/hbx.webp"
style="width:100%">`});
hbx.addEventListener("mouseout", previewReset);