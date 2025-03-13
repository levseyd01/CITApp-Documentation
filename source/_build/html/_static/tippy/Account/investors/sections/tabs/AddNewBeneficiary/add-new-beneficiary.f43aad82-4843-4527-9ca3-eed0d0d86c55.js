selector_to_html = {"a[href=\"#adding-a-new-beneficiary\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Adding a New Beneficiary<a class=\"headerlink\" href=\"#adding-a-new-beneficiary\" title=\"Link to this heading\">#</a></h1><p>To add a new beneficiary to the investor\u2019s account:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../../../_images/view-investor-information-tab-investor-info-section-add-plus-sign.webp\" id=\"add-beneficiary-button-location\"><img alt=\"../../../../../_images/view-investor-information-tab-investor-info-section-add-plus-sign.webp\" id=\"add-beneficiary-button-location\" loading=\"lazy\" src=\"../../../../../_images/view-investor-information-tab-investor-info-section-add-plus-sign.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Investor Details, Add Beneficiary Button Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../../../../_images/view-investor-information-tab-investor-info-section-add-beneficiary-popup.webp\" id=\"add-beneficiary-popup\"><img alt=\"../../../../../_images/view-investor-information-tab-investor-info-section-add-beneficiary-popup.webp\" id=\"add-beneficiary-popup\" loading=\"lazy\" src=\"../../../../../_images/view-investor-information-tab-investor-info-section-add-beneficiary-popup.webp\" style=\"width: 80%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Add Beneficiary Popup</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
