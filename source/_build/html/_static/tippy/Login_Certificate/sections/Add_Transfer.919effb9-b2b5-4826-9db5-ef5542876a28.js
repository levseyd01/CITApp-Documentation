selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Transfer_From_Certificates.png\"><img alt=\"../../_images/Transfer_From_Certificates.png\" src=\"../../_images/Transfer_From_Certificates.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Transfer From Certificates</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#transfer-from-certificates\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Transfer From Certificates<a class=\"headerlink\" href=\"#transfer-from-certificates\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#add-transfer\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add Transfer<a class=\"headerlink\" href=\"#add-transfer\" title=\"Link to this heading\">#</a></h1><h2>Transfer From Certificates<a class=\"headerlink\" href=\"#transfer-from-certificates\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#medallion-stamps\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Medallion Stamps<a class=\"headerlink\" href=\"#medallion-stamps\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#is-fast-transfer-add-transfer\"]": "<figure class=\"align-default\" id=\"is-fast-transfer-add-transfer\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Is_Fast_Transfer1.png\"><img alt=\"../../_images/Is_Fast_Transfer1.png\" src=\"../../_images/Is_Fast_Transfer1.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Is Fast Transfer? (Add Transfer, Add Conversion, Add Retirement, Add Reserved Shares Issuance)</span><a class=\"headerlink\" href=\"#is-fast-transfer-add-transfer\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-default\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Medallion_Stamps_Add_Medallion_Stamp.png\"><img alt=\"../../_images/Medallion_Stamps_Add_Medallion_Stamp.png\" src=\"../../_images/Medallion_Stamps_Add_Medallion_Stamp.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Medallion Stamps</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
