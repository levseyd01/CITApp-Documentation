selector_to_html = {"a[href=\"#cash-distribution-tab\"]": "<figure class=\"align-default\" id=\"cash-distribution-tab\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Cash_Distribution_Tab.png\"><img alt=\"../../_images/Cash_Distribution_Tab.png\" src=\"../../_images/Cash_Distribution_Tab.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Dividend Details - Cash Distribution Tab</span><a class=\"headerlink\" href=\"#cash-distribution-tab\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#cash-distribution\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Cash Distribution<a class=\"headerlink\" href=\"#cash-distribution\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#cash-distribution-green-button\"]": "<figure class=\"align-default\" id=\"cash-distribution-green-button\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Cash_Distribution_Green_Button.png\"><img alt=\"../../_images/Cash_Distribution_Green_Button.png\" src=\"../../_images/Cash_Distribution_Green_Button.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Dividend Details - Cash Distribution Tab - Green Button</span><a class=\"headerlink\" href=\"#cash-distribution-green-button\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#cash-distribution-documents-tab\"]": "<figure class=\"align-default\" id=\"cash-distribution-documents-tab\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Documents_Tab.png\"><img alt=\"../../_images/Documents_Tab.png\" src=\"../../_images/Documents_Tab.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Dividend Details - Documents Tab</span><a class=\"headerlink\" href=\"#cash-distribution-documents-tab\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#dividend-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dividend Details<a class=\"headerlink\" href=\"#dividend-details\" title=\"Link to this heading\">#</a></h1><h2>Cash Distribution<a class=\"headerlink\" href=\"#cash-distribution\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Documents<a class=\"headerlink\" href=\"#documents\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Cash_Distribution_Update_Cash_Payment.png\"><img alt=\"../../_images/Cash_Distribution_Update_Cash_Payment.png\" src=\"../../_images/Cash_Distribution_Update_Cash_Payment.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Dividend Details - Cash Distribution Tab - Update Cash Payment</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#information-tab\"]": "<figure class=\"align-default\" id=\"information-tab\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Information_Tab.png\"><img alt=\"../../_images/Information_Tab.png\" src=\"../../_images/Information_Tab.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Dividend Details - Information Tab</span><a class=\"headerlink\" href=\"#information-tab\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
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
