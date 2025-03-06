selector_to_html = {"a[href=\"#id2\"]": "<figure class=\"align-default\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../_images/dashboard-table-section.png\"><img alt=\"Dashboard Table screenshot\" loading=\"lazy\" src=\"../_images/dashboard-table-section.png\" style=\"width: 120%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">A high-level overview of all documents and their statuses.</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../_static/solo_app/Universal/view-sponsorship-organization/Main/sponsorship-organization-homepage.webp\" id=\"sponsor-organization-homepage\"><img alt=\"../_static/solo_app/Universal/view-sponsorship-organization/Main/sponsorship-organization-homepage.webp\" id=\"sponsor-organization-homepage\" loading=\"lazy\" src=\"../_static/solo_app/Universal/view-sponsorship-organization/Main/sponsorship-organization-homepage.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Homepage</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"../Account/cit-corporations/cit-corporations.html#cit-corporations-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporations<a class=\"headerlink\" href=\"#cit-corporations\" title=\"Link to this heading\">#</a></h1><p>The <strong>CIT Corporations</strong> section allows you to to:</p>", "a[href=\"#dashboard-tile-overview\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard Tile Overview<a class=\"headerlink\" href=\"#dashboard-tile-overview\" title=\"Link to this heading\">#</a></h2><p>Click any of the tiles below to view more details.</p>", "a[href=\"#dashboard-table-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard Table Section<a class=\"headerlink\" href=\"#dashboard-table-section\" title=\"Link to this heading\">#</a></h2><p>The <strong>Dashboard Table</strong> section allows you to view a table which contains the following columns:</p>", "a[href=\"../Document/CITCorpOffering/cit-corp-offering.html#cit-corporation-offering-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporation Offering Documents<a class=\"headerlink\" href=\"#cit-corporation-offering-documents\" title=\"Link to this heading\">#</a></h1><p>The <strong>CIT Corporation Offering</strong> section helps users manage and track all documents related to any Offering.</p>", "a[href=\"#dashboard-tile-overview-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard Tile Overview<a class=\"headerlink\" href=\"#dashboard-tile-overview\" title=\"Link to this heading\">#</a></h2><p>Click any of the tiles below to view more details.</p>", "a[href=\"#dashboard\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard<a class=\"headerlink\" href=\"#dashboard\" title=\"Link to this heading\">#</a></h1><p>The Dashboard section throughout the CIT App is separted into two sections.</p><p>These sections can be defined as:</p>"}
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
