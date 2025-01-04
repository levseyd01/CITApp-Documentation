selector_to_html = {"a[href=\"#fill-out-proxy-information\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Fill out Proxy Information<a class=\"headerlink\" href=\"#fill-out-proxy-information\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#fill-in-proxy-detail\"]": "<figure class=\"align-default\" id=\"fill-in-proxy-detail\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Fill_In_Proxy_Detail.png\"><img alt=\"../../_images/Fill_In_Proxy_Detail.png\" src=\"../../_images/Fill_In_Proxy_Detail.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Fill in Proxy Detail</span><a class=\"headerlink\" href=\"#fill-in-proxy-detail\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Complete_Summary_Message.png\"><img alt=\"../../_images/Complete_Summary_Message.png\" src=\"../../_images/Complete_Summary_Message.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Complete Summary Message</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#complete-summary-message\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Complete Summary Message<a class=\"headerlink\" href=\"#complete-summary-message\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#required-fields-error\"]": "<figure class=\"align-default\" id=\"required-fields-error\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Required_Fields_Error.png\"><img alt=\"../../_images/Required_Fields_Error.png\" src=\"../../_images/Required_Fields_Error.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Required Fields Error</span><a class=\"headerlink\" href=\"#required-fields-error\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#add-proxy\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add Proxy<a class=\"headerlink\" href=\"#add-proxy\" title=\"Link to this heading\">#</a></h1><h2>Fill out Proxy Information<a class=\"headerlink\" href=\"#fill-out-proxy-information\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#select-an-issuer\"]": "<figure class=\"align-default\" id=\"select-an-issuer\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Select_An_Issuer.png\"><img alt=\"../../_images/Select_An_Issuer.png\" src=\"../../_images/Select_An_Issuer.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Select an Issuer</span><a class=\"headerlink\" href=\"#select-an-issuer\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
