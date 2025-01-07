selector_to_html = {"a[href=\"#primary-address\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Primary Address<a class=\"headerlink\" href=\"#primary-address\" title=\"Link to this heading\">#</a></h2><p>You can edit any of the information in this section by simply clicking into the field.</p><p>The following fields are required and cannot be left blank:</p>", "a[href=\"#mailing-address\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Mailing Address<a class=\"headerlink\" href=\"#mailing-address\" title=\"Link to this heading\">#</a></h2><p>Similar to the Primary address, you can edit the following information:</p>", "a[href=\"#upload-logo\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Upload Logo<a class=\"headerlink\" href=\"#upload-logo\" title=\"Link to this heading\">#</a></h2><p><strong>To Upload:</strong></p>", "a[href=\"#editing-company-information\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Editing Company Information<a class=\"headerlink\" href=\"#editing-company-information\" title=\"Link to this heading\">#</a></h1><p>The <strong>Profile</strong> screen allows you edit the following information about your company:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/primary-address-zoomed-in.png\"><img alt=\"../../_images/primary-address-zoomed-in.png\" src=\"../../_images/primary-address-zoomed-in.png\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Primary Address</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#profile-screen-information-section\"]": "<figure class=\"align-center\" id=\"profile-screen-information-section\">\n<a class=\"reference internal image-reference\" href=\"../../_images/main-screen.png\"><img alt=\"../../_images/main-screen.png\" src=\"../../_images/main-screen.png\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Information Section</span><a class=\"headerlink\" href=\"#profile-screen-information-section\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#file-explorer-filename-png\"]": "<figure class=\"align-center\" id=\"file-explorer-filename-png\">\n<a class=\"reference internal image-reference\" href=\"../../_images/file-explorer-filename-png.png\"><img alt=\"../../_images/file-explorer-filename-png.png\" src=\"../../_images/file-explorer-filename-png.png\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">File Explorer, File Name Selected</span><a class=\"headerlink\" href=\"#file-explorer-filename-png\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/info-zoomed-in.png\"><img alt=\"../../_images/info-zoomed-in.png\" src=\"../../_images/info-zoomed-in.png\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Name and Contact Information</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/mailing-address-zoomed-in.png\"><img alt=\"../../_images/mailing-address-zoomed-in.png\" src=\"../../_images/mailing-address-zoomed-in.png\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Mailing Address</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#name-and-contact-information\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Name and Contact Information<a class=\"headerlink\" href=\"#name-and-contact-information\" title=\"Link to this heading\">#</a></h2><p>The <strong>Info</strong> section of the <strong>Profile</strong> screen allows you to edit the following information about your company:</p>", "a[href=\"#upload-logo-section\"]": "<figure class=\"align-center\" id=\"upload-logo-section\">\n<a class=\"reference internal image-reference\" href=\"../../_images/upload-logo.png\"><img alt=\"../../_images/upload-logo.png\" src=\"../../_images/upload-logo.png\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Upload Logo Section</span><a class=\"headerlink\" href=\"#upload-logo-section\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#upload-logo-button\"]": "<img src='/_static/solo_app/Profile/upload-logo-section/upload-logo-button.png' alt='Upload Logo Button' style='width:200px;'>", "a[href=\"#file-explorer-open\"]": "<img src='/_static/solo_app/Universal/file-explorer-open.png' alt='File Explorer Open' style='width:200px;'>"}
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
                onShow(instance) {MathJax.typesetPromise([instance.popper]).then(() => {});},
            });
        };
    };
    console.log("tippy tips loaded!");
};
