selector_to_html = {"a[href=\"#dashboard\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard<a class=\"headerlink\" href=\"#dashboard\" title=\"Link to this heading\">#</a></h1><p>This section should help the user navigate through the <strong>Dashboard</strong> section of the CIT App.</p><p><img alt=\"img.png\" src=\"../_images/img1.png\"/></p>", "a[href=\"sections/Dashboard_Navigation.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard Navigation<a class=\"headerlink\" href=\"#dashboard-navigation\" title=\"Link to this heading\">#</a></h1>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
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
