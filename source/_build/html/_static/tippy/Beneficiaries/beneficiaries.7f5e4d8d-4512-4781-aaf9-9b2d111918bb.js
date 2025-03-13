selector_to_html = {"a[href=\"#view-or-edit-a-beneficiary-s-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">View or Edit a Beneficiary\u2019s Details<a class=\"headerlink\" href=\"#view-or-edit-a-beneficiary-s-details\" title=\"Link to this heading\">#</a></h2><p><strong>To Delete a Beneficiary:</strong></p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../_images/add-beneficiary-info.webp\" id=\"add-beneficiary-info-popup\"><img alt=\"../_images/add-beneficiary-info.webp\" id=\"add-beneficiary-info-popup\" loading=\"lazy\" src=\"../_images/add-beneficiary-info.webp\" style=\"width: 80%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Beneficiaries List, Add Beneficiary Info Popup</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#beneficiaries\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Beneficiaries<a class=\"headerlink\" href=\"#beneficiaries\" title=\"Link to this heading\">#</a></h1><p>The <strong>Beneficiaries List</strong> section displays an overview of the company\u2019s beneficiaries.</p><p>The list contains each beneficiary\u2019s:</p>", "a[href=\"#other-actions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Other Actions<a class=\"headerlink\" href=\"#other-actions\" title=\"Link to this heading\">#</a></h2><p>To <strong>Perform Other Actions:</strong></p>", "a[href=\"#adding-a-beneficiary\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Adding a Beneficiary<a class=\"headerlink\" href=\"#adding-a-beneficiary\" title=\"Link to this heading\">#</a></h2><p>To <strong>Add a Beneficiary:</strong></p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../_images/new-beneficiary-location.webp\" id=\"new-beneficiary-button-location\"><img alt=\"../_images/new-beneficiary-location.webp\" id=\"new-beneficiary-button-location\" loading=\"lazy\" src=\"../_images/new-beneficiary-location.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Beneficiaries List, New Beneficiary Button Location</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../_images/beneficiary-overview.webp\"><img alt=\"../_images/beneficiary-overview.webp\" loading=\"lazy\" src=\"../_images/beneficiary-overview.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Beneficiaries List, Overview</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id5\"]": "<figure class=\"align-center\" id=\"id5\">\n<a class=\"reference internal image-reference\" href=\"../_images/view-edit-beneficiary-details.webp\" id=\"view-beneficiary-info-popup\"><img alt=\"../_images/view-edit-beneficiary-details.webp\" id=\"view-beneficiary-info-popup\" loading=\"lazy\" src=\"../_images/view-edit-beneficiary-details.webp\" style=\"width: 80%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Beneficiaries List, View Beneficiary Info Popup</span><a class=\"headerlink\" href=\"#id5\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../_images/action-section-location.webp\" id=\"action-section-location\"><img alt=\"../_images/action-section-location.webp\" id=\"action-section-location\" loading=\"lazy\" src=\"../_images/action-section-location.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Beneficiaries List, Action Location</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#delete-icon\"]": "<img src='/_static/solo_app/Universal/icons/delete-icon.webp' alt='Delete Icon' style='width:200px;'>", "a[href=\"#new-beneficiary-button\"]": "<img src='/_static/solo_app/Beneficiaries/new-beneficiary.webp' alt='New Beneficiary Button' style='width:200px;'>", "a[href=\"#view-more-icon\"]": "<img src='/_static/solo_app/Universal/icons/view-more-icon.webp' alt='View More Icon' style='width:200px;'>"}
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
