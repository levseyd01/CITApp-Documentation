selector_to_html = {"a[href=\"#cit-app-cit-services\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT App (CIT Services)<a class=\"headerlink\" href=\"#cit-app-cit-services\" title=\"Link to this heading\">#</a></h1><p>Welcome to the documentation for the <strong>CIT Services</strong> version of the CIT App. See below to get started.</p>", "a[href=\"#navigating-the-app\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the App<a class=\"headerlink\" href=\"#navigating-the-app\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#getting-started\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h2><h3>Navigating the App<a class=\"headerlink\" href=\"#navigating-the-app\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#sections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sections<a class=\"headerlink\" href=\"#sections\" title=\"Link to this heading\">#</a></h2>"}
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
