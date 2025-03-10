selector_to_html = {"a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/sponsorship-organization-homepage-table-columns.webp\" id=\"account-cit-corporations-homepage-table-columns\"><img alt=\"../../_images/sponsorship-organization-homepage-table-columns.webp\" id=\"account-cit-corporations-homepage-table-columns\" loading=\"lazy\" src=\"../../_images/sponsorship-organization-homepage-table-columns.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Account, CIT Corporation, Homepage, Table Columns</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#columns-in-the-cit-corporations-table\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Columns in the CIT Corporations Table<a class=\"headerlink\" href=\"#columns-in-the-cit-corporations-table\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>CIT Corporations Table</span></span> has several columns that provide key information at a glance:</p>", "a[href=\"#additional-information\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Additional Information<a class=\"headerlink\" href=\"#additional-information\" title=\"Link to this heading\">#</a></h2><p>You can access additional information through:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/sponsorship-organization-homepage.webp\" id=\"account-cit-corporations-homepage\"><img alt=\"../../_images/sponsorship-organization-homepage.webp\" id=\"account-cit-corporations-homepage\" loading=\"lazy\" src=\"../../_images/sponsorship-organization-homepage.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Account, CIT Corporations, Homepage</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#cit-corporations-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporations Page<a class=\"headerlink\" href=\"#cit-corporations-page\" title=\"Link to this heading\">#</a></h1><p id=\"id1\">The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>CIT Corporations</span></span> page allows you to:</p>", "a[href=\"#table-cit-corporations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Table: CIT Corporations<a class=\"headerlink\" href=\"#table-cit-corporations\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>CIT Corporations Table</span></span> provides a comprehensive overview of all CIT Corporations in the system.</p>", "a[href=\"sections/view-cit-corporations.html#view-cit-account-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View CIT Corporation Details<a class=\"headerlink\" href=\"#view-cit-corporation-details\" title=\"Link to this heading\">#</a></h1><h2>Editing CIT Corporation Information<a class=\"headerlink\" href=\"#editing-cit-corporation-information\" title=\"Link to this heading\">#</a></h2><p>The <strong>CIT Corporation Information</strong> tab  allows you to view and edit the following information:</p>"}
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
