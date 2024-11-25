selector_to_html = {"a[href=\"#quick-links\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Quick Links<a class=\"headerlink\" href=\"#quick-links\" title=\"Link to this heading\">#</a></h2><p>The top of the page features a <strong>Quick Links</strong> section that provides easy access to the most useful and commonly used pages in the system.</p>", "a[href=\"#dashboard\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard<a class=\"headerlink\" href=\"#dashboard\" title=\"Link to this heading\">#</a></h1><p>The <strong>Dashboard</strong> page is the first page you see when you log in to the system. The <strong>Dashboard</strong> page provides a summary of the system and the user\u2019s account.</p><p><img alt=\"Dashboard_Main.png\" src=\"../_images/Dashboard_Main.png\"/></p>"}
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
