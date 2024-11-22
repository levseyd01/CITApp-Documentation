selector_to_html = {"a[href=\"#add-conversion\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add Conversion<a class=\"headerlink\" href=\"#add-conversion\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#convert-from-certificate\"]": "<figure class=\"align-default\" id=\"convert-from-certificate\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Convert_From_Certificates.png\"><img alt=\"../../_images/Convert_From_Certificates.png\" src=\"../../_images/Convert_From_Certificates.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Add Certificate</span><a class=\"headerlink\" href=\"#convert-from-certificate\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#convert-from-certificates\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Convert From Certificates<a class=\"headerlink\" href=\"#convert-from-certificates\" title=\"Link to this heading\">#</a></h1>"}
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
