selector_to_html = {"a[href=\"sections/Correspondences.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Correspondences<a class=\"headerlink\" href=\"#correspondences\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Faxes.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Faxes<a class=\"headerlink\" href=\"#faxes\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#communication\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Communication<a class=\"headerlink\" href=\"#communication\" title=\"Link to this heading\">#</a></h1><p>This section includes all the tabs located on the <strong>Communication</strong> section of SOLO 2.0.</p>"}
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
