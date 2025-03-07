selector_to_html = {"a[href=\"#mailing-address\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Mailing Address<a class=\"headerlink\" href=\"#mailing-address\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Mailing Address</span></span> section is where you can change the mailing address of your company (if different from the primary address).</p>", "a[href=\"../../Universal/InformationPane/information-pane.html#information-pane-main-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Information Pane<a class=\"headerlink\" href=\"#information-pane\" title=\"Link to this heading\">#</a></h1><p>The <strong>Information Pane</strong> (Right Column) provides both an <strong>Activity Log</strong> and a <strong>Created &amp; Modified</strong> Section.</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/mailing-address-zoomed-in.webp\" id=\"profile-screen-mailing-address\"><img alt=\"../../_images/mailing-address-zoomed-in.webp\" id=\"profile-screen-mailing-address\" loading=\"lazy\" src=\"../../_images/mailing-address-zoomed-in.webp\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Mailing Address</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
