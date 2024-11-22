selector_to_html = {"a[href=\"#update-cash-payment\"]": "<figure class=\"align-default\" id=\"update-cash-payment\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Update_Cash_Payment.png\"><img alt=\"../../_images/Update_Cash_Payment.png\" src=\"../../_images/Update_Cash_Payment.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Update Cash Payment</span><a class=\"headerlink\" href=\"#update-cash-payment\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#void-replace\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Void/Replace<a class=\"headerlink\" href=\"#void-replace\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#buyback-details-submit\"]": "<figure class=\"align-default\" id=\"buyback-details-submit\">\n<a class=\"reference internal image-reference\" href=\"../../_images/BuyBack_Details_Submit.png\"><img alt=\"../../_images/BuyBack_Details_Submit.png\" src=\"../../_images/BuyBack_Details_Submit.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">BuyBack Details Submit</span><a class=\"headerlink\" href=\"#buyback-details-submit\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#buyback-details\"]": "<figure class=\"align-default\" id=\"buyback-details\">\n<a class=\"reference internal image-reference\" href=\"../../_images/BuyBack_Details.png\"><img alt=\"../../_images/BuyBack_Details.png\" src=\"../../_images/BuyBack_Details.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">BuyBack Void/Replace Details</span><a class=\"headerlink\" href=\"#buyback-details\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#buyback-main-page\"]": "<figure class=\"align-default\" id=\"buyback-main-page\">\n<a class=\"reference internal image-reference\" href=\"../../_images/BuyBack.png\"><img alt=\"../../_images/BuyBack.png\" src=\"../../_images/BuyBack.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">BuyBack Main Page</span><a class=\"headerlink\" href=\"#buyback-main-page\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#buyback\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">BuyBack<a class=\"headerlink\" href=\"#buyback\" title=\"Link to this heading\">#</a></h1><h2>Update Payment<a class=\"headerlink\" href=\"#update-payment\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#update-payment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Update Payment<a class=\"headerlink\" href=\"#update-payment\" title=\"Link to this heading\">#</a></h2>"}
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
