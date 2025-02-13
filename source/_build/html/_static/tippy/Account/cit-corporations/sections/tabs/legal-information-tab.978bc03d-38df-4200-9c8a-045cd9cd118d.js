selector_to_html = {"a[href=\"#navigating-the-legal-information-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the Legal Information Tab<a class=\"headerlink\" href=\"#navigating-the-legal-information-tab\" title=\"Link to this heading\">#</a></h2><p>The <strong>Legal Information</strong> tab  allows you to view the following information:</p>", "a[href=\"#legal-information-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Legal Information Tab<a class=\"headerlink\" href=\"#legal-information-tab\" title=\"Link to this heading\">#</a></h1><p>The <strong>Legal Information</strong> tab contains information about the <strong>CIT Corporation</strong>.</p>", "a[href=\"#cit-corporation-legal-information-tab\"]": "<figure class=\"align-center\" id=\"cit-corporation-legal-information-tab\">\n<a class=\"reference internal image-reference\" href=\"Account/cit-corporations/_static/solo_app/CIT_Corporation/legal-information-tab/legal-information-tab.png\"><img alt=\"Account/cit-corporations/_static/solo_app/CIT_Corporation/legal-information-tab/legal-information-tab.png\" src=\"Account/cit-corporations/_static/solo_app/CIT_Corporation/legal-information-tab/legal-information-tab.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT Corporation, Legal Information Tab</span><a class=\"headerlink\" href=\"#cit-corporation-legal-information-tab\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#sponsorship-entity-list-tab-status-filter\"]": "<figure class=\"align-center\" id=\"sponsorship-entity-list-tab-status-filter\">\n<a class=\"reference internal image-reference\" href=\"Account/cit-corporations/_static/solo_app/Universal/view-sponsorship-organization/entity-list-tab/sponsorship-entity-list-tab-status-filter.png\"><img alt=\"Account/cit-corporations/_static/solo_app/Universal/view-sponsorship-organization/entity-list-tab/sponsorship-entity-list-tab-status-filter.png\" src=\"Account/cit-corporations/_static/solo_app/Universal/view-sponsorship-organization/entity-list-tab/sponsorship-entity-list-tab-status-filter.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Entity List Tab, Status Filter Dropdown</span><a class=\"headerlink\" href=\"#sponsorship-entity-list-tab-status-filter\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
