selector_to_html = {"a[href=\"#id5\"]": "<figure class=\"align-center\" id=\"id5\">\n<a class=\"reference internal image-reference\" href=\"../../_images/upload-logo.webp\" id=\"upload-logo-section\"><img alt=\"../../_images/upload-logo.webp\" id=\"upload-logo-section\" loading=\"lazy\" src=\"../../_images/upload-logo.webp\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Upload Logo Section</span><a class=\"headerlink\" href=\"#id5\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id6\"]": "<figure class=\"align-center\" id=\"id6\">\n<a class=\"reference internal image-reference\" href=\"../../_images/file-explorer-filename-png.webp\" id=\"file-explorer-filename-png\"><img alt=\"../../_images/file-explorer-filename-png.webp\" id=\"file-explorer-filename-png\" loading=\"lazy\" src=\"../../_images/file-explorer-filename-png.webp\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">File Explorer, File Name Selected</span><a class=\"headerlink\" href=\"#id6\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#upload-logo\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Upload Logo<a class=\"headerlink\" href=\"#upload-logo\" title=\"Link to this heading\">#</a></h2><p><strong>To Upload:</strong></p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/primary-address-zoomed-in.webp\" id=\"profile-screen-primary-address\"><img alt=\"../../_images/primary-address-zoomed-in.webp\" id=\"profile-screen-primary-address\" loading=\"lazy\" src=\"../../_images/primary-address-zoomed-in.webp\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Primary Address</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/info-zoomed-in.webp\" id=\"profile-screen-info\"><img alt=\"../../_images/info-zoomed-in.webp\" id=\"profile-screen-info\" loading=\"lazy\" src=\"../../_images/info-zoomed-in.webp\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Name and Contact Information</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#primary-address\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Primary Address<a class=\"headerlink\" href=\"#primary-address\" title=\"Link to this heading\">#</a></h2><p>The <strong>Primary Address</strong> section is where you can change the primary location of your company.</p>", "a[href=\"#editing-company-information\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Editing Company Information<a class=\"headerlink\" href=\"#editing-company-information\" title=\"Link to this heading\">#</a></h1><p>The <strong>Profile</strong> screen allows you edit the following information about your company:</p>", "a[href=\"#mailing-address\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Mailing Address<a class=\"headerlink\" href=\"#mailing-address\" title=\"Link to this heading\">#</a></h2><p>The <strong>Mailing Address</strong> section is where you can change the mailing address of your company (if different from the primary address).</p>", "a[href=\"#upload-logo-section\"]": "<img alt=\"../../_images/upload-logo.webp\" id=\"upload-logo-section\" loading=\"lazy\" src=\"../../_images/upload-logo.webp\" style=\"width: 400px;\"/>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../_images/mailing-address-zoomed-in.webp\" id=\"profile-screen-mailing-address\"><img alt=\"../../_images/mailing-address-zoomed-in.webp\" id=\"profile-screen-mailing-address\" loading=\"lazy\" src=\"../../_images/mailing-address-zoomed-in.webp\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Mailing Address</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#name-and-contact-information\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Name and Contact Information<a class=\"headerlink\" href=\"#name-and-contact-information\" title=\"Link to this heading\">#</a></h2><p>The <strong>Info</strong> section of the <strong>Profile</strong> screen allows you to edit various details about your company.</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/main-screen.webp\" id=\"profile-screen-information-section\"><img alt=\"../../_images/main-screen.webp\" id=\"profile-screen-information-section\" loading=\"lazy\" src=\"../../_images/main-screen.webp\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Profile Screen, Information Section</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#file-explorer-open\"]": "<img src='/en/stable-edit/_static/solo_app/Universal/file-explorer-open.jpeg' alt='File Explorer Open' style='width:200px;'>", "a[href=\"#upload-logo-button\"]": "<img src='/en/stable-edit/_static/solo_app/Profile/upload-logo-section/upload-logo-button.jpeg' alt='Upload Logo Button' style='width:200px;'>"}
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
