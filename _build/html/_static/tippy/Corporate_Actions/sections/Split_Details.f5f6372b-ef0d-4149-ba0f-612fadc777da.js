selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Summary_And_Invoice.png\"><img alt=\"../../_images/Summary_And_Invoice.png\" src=\"../../_images/Summary_And_Invoice.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Reverse Split - Summary and Invoice</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#split-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Split Details<a class=\"headerlink\" href=\"#split-details\" title=\"Link to this heading\">#</a></h1><h2>Summary and Invoice<a class=\"headerlink\" href=\"#summary-and-invoice\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#split-report\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Split Report<a class=\"headerlink\" href=\"#split-report\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Documents<a class=\"headerlink\" href=\"#documents\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#summary-and-invoice\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Summary and Invoice<a class=\"headerlink\" href=\"#summary-and-invoice\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#fractional-shares-cash-payout\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Fractional Shares Cash Payout<a class=\"headerlink\" href=\"#fractional-shares-cash-payout\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<figure class=\"align-default\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Fractional_Shares_Cash_Payout.png\"><img alt=\"../../_images/Fractional_Shares_Cash_Payout.png\" src=\"../../_images/Fractional_Shares_Cash_Payout.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Reverse Split - Fractional Shares Cash Payout</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#documents-error\"]": "<figure class=\"align-default\" id=\"documents-error\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Documents_Error.png\"><img alt=\"../../_images/Documents_Error.png\" src=\"../../_images/Documents_Error.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Reverse Split - Documents Error</span><a class=\"headerlink\" href=\"#documents-error\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id4\"]": "<figure class=\"align-default\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Documents.png\"><img alt=\"../../_images/Documents.png\" src=\"../../_images/Documents.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Reverse Split -Documents</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-default\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Split_Report.png\"><img alt=\"../../_images/Split_Report.png\" src=\"../../_images/Split_Report.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Reverse Split - Split Report</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
