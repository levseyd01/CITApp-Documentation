selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/upload-logo.webp\" id=\"upload-logo-section\"><img alt=\"../../_images/upload-logo.webp\" id=\"upload-logo-section\" loading=\"lazy\" src=\"../../_images/upload-logo.webp\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Upload Logo Section</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#upload-logo\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Upload Logo<a class=\"headerlink\" href=\"#upload-logo\" title=\"Link to this heading\">#</a></h1><p><strong>To Upload:</strong></p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/file-explorer-filename-png.webp\" id=\"file-explorer-filename-png\"><img alt=\"../../_images/file-explorer-filename-png.webp\" id=\"file-explorer-filename-png\" loading=\"lazy\" src=\"../../_images/file-explorer-filename-png.webp\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">File Explorer, File Name Selected</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#upload-logo-section\"]": "<img alt=\"../../_images/upload-logo.webp\" id=\"upload-logo-section\" loading=\"lazy\" src=\"../../_images/upload-logo.webp\" style=\"width: 400px;\"/>", "a[href=\"#file-explorer-open\"]": "<img src='/_static/solo_app/Universal/file-explorer-open.webp' alt='File Explorer Open' style='width:200px;'>", "a[href=\"#upload-logo-button\"]": "<img src='/_static/solo_app/Profile/upload-logo-section/upload-logo-button.webp' alt='Upload Logo Button' style='width:200px;'>"}
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
