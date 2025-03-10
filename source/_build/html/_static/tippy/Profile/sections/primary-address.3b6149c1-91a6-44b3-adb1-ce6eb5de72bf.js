selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/primary-address-zoomed-in.webp\" id=\"profile-screen-primary-address\"><img alt=\"../../_images/primary-address-zoomed-in.webp\" id=\"profile-screen-primary-address\" loading=\"lazy\" src=\"../../_images/primary-address-zoomed-in.webp\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Primary Address</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#company-profile-primary-address\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Company Profile: Primary Address<a class=\"headerlink\" href=\"#company-profile-primary-address\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Primary Address</span></span> section is where you can change the primary location of your company.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
