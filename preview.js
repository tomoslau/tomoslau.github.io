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
const phantom = document.getElementById("phantom")
const previewReset = () => {
    preview.innerHTML = ``;
}
const previewPhantom = () => {
    preview.innerHTML = `<dotlottie-player src="lottie/wink-purple.lottie" speed="1" style="width: 300px; display:inline-block;" direction="1" playMode="normal" autoplay></dotlottie-player>`
}
const previewCdc = () => {
    preview.innerHTML = `<video autoplay muted loop playsinline  class="phone" src="video/screen-recordings/cdc-480.webm" poster="video/poster/cdc.webp" type="video/webm"></video>`
}
const previewTectonic = () => {
    preview.innerHTML = `<video  autoplay muted loop playsinline class="desktop d3-2"
    src="video/screen-recordings/tectonic.webm" poster="video/poster/tectonic.webp" type="video/webm">
    </video>`
}
const previewWristcheck = () => {
    preview.innerHTML = `<img class="desktop d16-9" src="img/wristcheck.webp">`
}
const previewDhgroupordering = () => {
    preview.innerHTML = `<video  autoplay muted loop playsinline class="phone" src="video/screen-recordings/foodpanda-480.webm" poster="video/poster/foodpanda-480.webp" type="video/webm">
    </video>`
}
const previewDhpreorder = () => {
    preview.innerHTML = `<video  autoplay muted loop playsinline class="phone" src="video/screen-recordings/foodpanda-preorder.webm" poster="video/poster/foodpanda-preorder.webp" type="video/webm">
    </video>`
}
const previewGogoxdelivery = () => {
    preview.innerHTML = `<video  autoplay muted loop playsinline class="phone" src="video/screen-recordings/gogox.mp4" poster="video/poster/gogox.webp" type="video/mp4">
    </video>`
}
const previewGgb = () => {
    preview.innerHTML = `<video  autoplay muted loop playsinline class="desktop d16-9" src="video/screen-recordings/ggb.webm" poster="video/poster/ggb.webp" type="video/webm"></video>`
}
const previewHypebeast = () => {
    preview.innerHTML = `<img src="img/hypebeast-flush.webp" class="desktop d3-2">`
}
const previewHbx = () => {
    preview.innerHTML = `<img src="img/hbx.webp" style="width:100%">`
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.onclick = function (e) {
        e.target == phantom ? previewPhantom()
        : e.target == cdc ? previewCdc()
            : e.target == tectonic ? previewTectonic()
                : e.target == wristcheck ? previewWristcheck()
                    : e.target == dhgroupordering ? previewDhgroupordering()
                        : e.target == dhpreorder ? previewDhpreorder()
                            : e.target == gogoxdelivery ? previewGogoxdelivery()
                                : e.target == ggb ? previewGgb()
                                    : e.target == hypebeast ? previewHypebeast()
                                        : e.target == hbx ? previewHbx()
                                                : previewReset()
    }
} else {
    phantom.addEventListener("mouseenter", previewPhantom);
    phantom.addEventListener("mouseleave", previewReset);
    cdc.addEventListener("mouseenter", previewCdc);
    cdc.addEventListener("mouseleave", previewReset);
    tectonic.addEventListener("mouseenter", previewTectonic);
    tectonic.addEventListener("mouseleave", previewReset);
    wristcheck.addEventListener("mouseenter", previewWristcheck);
    wristcheck.addEventListener("mouseleave", previewReset);
    dhgroupordering.addEventListener("mouseenter", previewDhgroupordering);
    dhgroupordering.addEventListener("mouseleave", previewReset);
    dhpreorder.addEventListener("mouseenter", previewDhpreorder);
    dhpreorder.addEventListener("mouseleave", previewReset);
    gogoxdelivery.addEventListener("mouseenter", previewGogoxdelivery);
    gogoxdelivery.addEventListener("mouseleave", previewReset);
    ggb.addEventListener("mouseenter", previewGgb);
    ggb.addEventListener("mouseleave", previewReset);
    hypebeast.addEventListener("mouseenter", previewHypebeast);
    hypebeast.addEventListener("mouseleave", previewReset);
    hbx.addEventListener("mouseenter", previewHbx);
    hbx.addEventListener("mouseleave", previewReset);
}