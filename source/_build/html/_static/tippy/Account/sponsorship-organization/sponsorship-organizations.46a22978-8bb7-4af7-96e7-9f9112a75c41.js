selector_to_html = {"a[href=\"#sponsorship-organizations\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Sponsorship Organizations<a class=\"headerlink\" href=\"#sponsorship-organizations\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Sponsorship Organizations Page</span></span> allows you to:</p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../_static/solo_app/Universal/view-sponsorship-organization/Main/sponsorship-organization-homepage-table-columns.webp\" id=\"id1\"><img alt=\"../_static/solo_app/Universal/view-sponsorship-organization/Main/sponsorship-organization-homepage-table-columns.webp\" id=\"id1\" loading=\"lazy\" src=\"../_static/solo_app/Universal/view-sponsorship-organization/Main/sponsorship-organization-homepage-table-columns.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Homepage</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#navigating-the-sponsorship-organization-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the Sponsorship Organization Section<a class=\"headerlink\" href=\"#navigating-the-sponsorship-organization-section\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Sponsorship Organizations Page</span></span> has a table with the following <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Columns</span></span>:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../_static/solo_app/Universal/view-sponsorship-organization/Main/sponsorship-organization-homepage.webp\" id=\"sponsor-organization-homepage\"><img alt=\"../_static/solo_app/Universal/view-sponsorship-organization/Main/sponsorship-organization-homepage.webp\" id=\"sponsor-organization-homepage\" loading=\"lazy\" src=\"../_static/solo_app/Universal/view-sponsorship-organization/Main/sponsorship-organization-homepage.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Homepage</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
