selector_to_html = {"a[href=\"#navigating-the-sponsorship-organization-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the Sponsorship Organization Section<a class=\"headerlink\" href=\"#navigating-the-sponsorship-organization-section\" title=\"Link to this heading\">#</a></h2><p>The <strong>Sponsorship Organizations</strong> section has a table with the following columns:</p>", "a[href=\"#sponsorship-organizations\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Sponsorship Organizations<a class=\"headerlink\" href=\"#sponsorship-organizations\" title=\"Link to this heading\">#</a></h1><p>The <strong>Sponsorship Organizations</strong> section allows you to:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/sponsorship-organization-homepage-table-columns.png\"><img alt=\"../../_images/sponsorship-organization-homepage-table-columns.png\" src=\"../../_images/sponsorship-organization-homepage-table-columns.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Homepage</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#sponsor-organization-homepage\"]": "<figure class=\"align-center\" id=\"sponsor-organization-homepage\">\n<a class=\"reference internal image-reference\" href=\"../../_images/sponsorship-organization-homepage.png\"><img alt=\"../../_images/sponsorship-organization-homepage.png\" src=\"../../_images/sponsorship-organization-homepage.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Homepage</span><a class=\"headerlink\" href=\"#sponsor-organization-homepage\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
