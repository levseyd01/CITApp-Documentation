selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/CIT_Corporation/cit-corporations-homepage-view-more-location.webp\" id=\"cit-corporations-homepage-view-more-location\"><img alt=\"Account/_static/solo_app/CIT_Corporation/cit-corporations-homepage-view-more-location.webp\" id=\"cit-corporations-homepage-view-more-location\" loading=\"lazy\" src=\"Account/_static/solo_app/CIT_Corporation/cit-corporations-homepage-view-more-location.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT Corporation, Homepage, View More Icon Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"../../../Profile/sections/editing-company-information.html#editing-company-information-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Editing Company Information<a class=\"headerlink\" href=\"#editing-company-information\" title=\"Link to this heading\">#</a></h1><p>The <strong>Profile</strong> screen allows you edit the following information about your company:</p>", "a[href=\"#editing-cit-corporation-information\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Editing CIT Corporation Information<a class=\"headerlink\" href=\"#editing-cit-corporation-information\" title=\"Link to this heading\">#</a></h2><p>The <strong>CIT Corporation Information</strong> tab  allows you to view and edit the following information:</p>", "a[href=\"#view-cit-corporation-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View CIT Corporation Details<a class=\"headerlink\" href=\"#view-cit-corporation-details\" title=\"Link to this heading\">#</a></h1><h2>Editing CIT Corporation Information<a class=\"headerlink\" href=\"#editing-cit-corporation-information\" title=\"Link to this heading\">#</a></h2><p>The <strong>CIT Corporation Information</strong> tab  allows you to view and edit the following information:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/CIT_Corporation/cit-corporations-view-corp-section.webp\" id=\"cit-corporations-view-corp-section\"><img alt=\"Account/_static/solo_app/CIT_Corporation/cit-corporations-view-corp-section.webp\" id=\"cit-corporations-view-corp-section\" loading=\"lazy\" src=\"Account/_static/solo_app/CIT_Corporation/cit-corporations-view-corp-section.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT Corporation, View Corporation Icon Location</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#save-changes\"]": "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/save-changes.jpeg' alt='Save Changes' style='width:200px;'>"}
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
