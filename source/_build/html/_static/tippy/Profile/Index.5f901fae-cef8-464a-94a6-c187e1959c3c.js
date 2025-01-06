selector_to_html = {"a[href=\"sections/general-information.html#name-and-contact-information\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Name and Contact Information<a class=\"headerlink\" href=\"#name-and-contact-information\" title=\"Link to this heading\">#</a></h2><p>The <strong>Info</strong> section of the <strong>Profile</strong> screen allows you to edit the following information about your company:</p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../_images/PrimarySidebar-Open.png\"><img alt=\"../_images/PrimarySidebar-Open.png\" src=\"../_images/PrimarySidebar-Open.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sidebar Expanded</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#profile-homepage\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Profile Homepage<a class=\"headerlink\" href=\"#profile-homepage\" title=\"Link to this heading\">#</a></h1><p>There are two sections on the hompage of the <strong>Profile</strong> screen:</p>", "a[href=\"sections/general-information.html#mailing-address\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Mailing Address<a class=\"headerlink\" href=\"#mailing-address\" title=\"Link to this heading\">#</a></h2><p>Similar to the Primary address, you can edit the following information:</p>", "a[href=\"sections/general-information.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Editing Company Information<a class=\"headerlink\" href=\"#editing-company-information\" title=\"Link to this heading\">#</a></h1><p>The <strong>Profile</strong> screen allows you edit the following information about your company:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../_images/PrimarySidebar-toggle.png\"><img alt=\"../_images/PrimarySidebar-toggle.png\" src=\"../_images/PrimarySidebar-toggle.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Toggle Primary Sidebar button.</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"sections/general-information.html#primary-address\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Primary Address<a class=\"headerlink\" href=\"#primary-address\" title=\"Link to this heading\">#</a></h2><p>You can edit any of the information in this section by simply clicking into the field.</p><p>The following fields are required and cannot be left blank:</p>", "a[href=\"sections/general-information.html#uploading-a-logo\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Uploading A Logo<a class=\"headerlink\" href=\"#uploading-a-logo\" title=\"Link to this heading\">#</a></h2><p><strong>To Upload:</strong></p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../_images/PrimarySidebar-Collapsed.png\"><img alt=\"../_images/PrimarySidebar-Collapsed.png\" src=\"../_images/PrimarySidebar-Collapsed.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Collapsed Primary Sidebar</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#profile\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Profile<a class=\"headerlink\" href=\"#profile\" title=\"Link to this heading\">#</a></h1><p>You can find the <strong>Profile</strong> section along the left-hand side of the page:</p>"}
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
