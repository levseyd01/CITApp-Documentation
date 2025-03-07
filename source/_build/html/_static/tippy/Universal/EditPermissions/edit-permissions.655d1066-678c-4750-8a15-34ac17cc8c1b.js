selector_to_html = {"a[href=\"#edit-permissions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Edit Permissions<a class=\"headerlink\" href=\"#edit-permissions\" title=\"Link to this heading\">#</a></h1><p>You can edit permissions for various types of users throughout the app.</p><p><strong>To Edit Permissions:</strong></p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/edit-permissions-generic-save-location.webp\"><img alt=\"../../_images/edit-permissions-generic-save-location.webp\" loading=\"lazy\" src=\"../../_images/edit-permissions-generic-save-location.webp\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">General \u201cSave Changes\u201d location</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/edit-permissions-generic-location.webp\"><img alt=\"../../_images/edit-permissions-generic-location.webp\" loading=\"lazy\" src=\"../../_images/edit-permissions-generic-location.webp\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">General \u201cEdit Permissions\u201d location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/edit-permissions-generic-location.webp\"><img alt=\"../../_images/edit-permissions-generic-location.webp\" loading=\"lazy\" src=\"../../_images/edit-permissions-generic-location.webp\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">General \u201cEdit Permissions\u201d location</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#save-changes\"]": "<img src='/_static/solo_app/Universal/buttons/save-changes.webp' alt='Save Changes' style='width:200px;'>"}
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
