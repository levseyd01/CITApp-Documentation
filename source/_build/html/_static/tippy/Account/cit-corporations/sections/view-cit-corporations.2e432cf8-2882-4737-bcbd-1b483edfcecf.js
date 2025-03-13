selector_to_html = {"a[href=\"#how-to-access-corporation-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How to Access Corporation Details<a class=\"headerlink\" href=\"#how-to-access-corporation-details\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../_images/cit-corporations-homepage-view-more-location.webp\" id=\"cit-corporations-homepage-view-more-location\"><img alt=\"../../../_images/cit-corporations-homepage-view-more-location.webp\" id=\"cit-corporations-homepage-view-more-location\" loading=\"lazy\" src=\"../../../_images/cit-corporations-homepage-view-more-location.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT Corporation, Homepage, View More Icon Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#editing-corporation-information\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Editing Corporation Information<a class=\"headerlink\" href=\"#editing-corporation-information\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#corporation-information-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Corporation Information Tab<a class=\"headerlink\" href=\"#corporation-information-tab\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>CIT Corporation Information</span></span> tab allows you to view and edit the following information:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../../_images/cit-corporations-view-corp-section.webp\" id=\"cit-corporations-view-corp-section\"><img alt=\"../../../_images/cit-corporations-view-corp-section.webp\" id=\"cit-corporations-view-corp-section\" loading=\"lazy\" src=\"../../../_images/cit-corporations-view-corp-section.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT Corporation, View Corporation Icon Location</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#view-cit-corporation-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View CIT Corporation Details<a class=\"headerlink\" href=\"#view-cit-corporation-details\" title=\"Link to this heading\">#</a></h1><p>When you need to view more details about a specific CIT Corporation, you can use the <span class=\"action-reference\"><span class=\"visually-hidden\">Action: </span><span>View Account</span></span> button to access all information.</p>"}
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
