selector_to_html = {"a[href=\"#correspondence\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Correspondence<a class=\"headerlink\" href=\"#correspondence\" title=\"Link to this heading\">#</a></h1>"}
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
                placement: 'right', maxWidth: 500, interactive: true, delay: [200, 100], duration: [200, 100],

            });
        };
    };
    console.log("tippy tips loaded!");
};
