selector_to_html = {"a[href=\"#filter-by-status-account-cit-corporations-options\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Status Options<a class=\"headerlink\" href=\"#status-options\" title=\"Link to this heading\">#</a></h3><p>You can choose from five different <span class=\"item-blue-reference\"><span class=\"visually-hidden\">Option: </span><span>Status</span></span> options:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/cit-corporate-information-status-filter-location.jpg\" id=\"account-cit-corporations-status-dropdown-location\"><img alt=\"../../_images/cit-corporate-information-status-filter-location.jpg\" id=\"account-cit-corporations-status-dropdown-location\" loading=\"lazy\" src=\"../../_images/cit-corporate-information-status-filter-location.jpg\" style=\"width: 75%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Account, CIT Corporations, Homepage, Status Dropdown Location</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#search-by-corporation-name\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Search by Corporation Name<a class=\"headerlink\" href=\"#search-by-corporation-name\" title=\"Link to this heading\">#</a></h3><p>To search for a specific corporation:</p>", "a[href=\"#additional-information\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Additional Information<a class=\"headerlink\" href=\"#additional-information\" title=\"Link to this heading\">#</a></h2><p>You can access additional information through:</p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/account-cit-corporations-status-dropdown-options.jpg\" id=\"account-cit-corporations-status-dropdown-options\"><img alt=\"../../_images/account-cit-corporations-status-dropdown-options.jpg\" id=\"account-cit-corporations-status-dropdown-options\" loading=\"lazy\" src=\"../../_images/account-cit-corporations-status-dropdown-options.jpg\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Account, CIT Corporations, Homepage, Status Dropdown Options</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#search-and-filter\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Search and Filter<a class=\"headerlink\" href=\"#search-and-filter\" title=\"Link to this heading\">#</a></h2><p>You can easily find specific CIT Corporations using:</p>", "a[href=\"#columns-in-the-cit-corporations-table\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Columns in the CIT Corporations Table<a class=\"headerlink\" href=\"#columns-in-the-cit-corporations-table\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>CIT Corporations</span></span> table has several columns that provide key information at a glance:</p>", "a[href=\"#cit-corporations-list\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporations List<a class=\"headerlink\" href=\"#cit-corporations-list\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>CIT Corporations</span></span> section allows you to:</p>", "a[href=\"#filter-by-status\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Filter by Status<a class=\"headerlink\" href=\"#filter-by-status\" title=\"Link to this heading\">#</a></h3><p><strong>To Filter by Status:</strong></p>", "a[href=\"#status-options\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Status Options<a class=\"headerlink\" href=\"#status-options\" title=\"Link to this heading\">#</a></h3><p>You can choose from five different <span class=\"item-blue-reference\"><span class=\"visually-hidden\">Option: </span><span>Status</span></span> options:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/cit-corporations-homepage.webp\" id=\"cit-corporations-homepage\"><img alt=\"../../_images/cit-corporations-homepage.webp\" id=\"cit-corporations-homepage\" loading=\"lazy\" src=\"../../_images/cit-corporations-homepage.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Account, CIT Corporations, Homepage</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
