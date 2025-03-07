selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/info-zoomed-in.webp\" id=\"profile-screen-info\"><img alt=\"../../_images/info-zoomed-in.webp\" id=\"profile-screen-info\" loading=\"lazy\" src=\"../../_images/info-zoomed-in.webp\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Name and Contact Information</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#name-and-contact-information\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Name and Contact Information<a class=\"headerlink\" href=\"#name-and-contact-information\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Info</span></span> section of the <strong>Profile</strong> screen allows you to edit various details about your company.</p>"}
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
