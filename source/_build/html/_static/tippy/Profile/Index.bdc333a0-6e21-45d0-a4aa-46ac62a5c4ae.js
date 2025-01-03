selector_to_html = {"a[href=\"#profile\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Profile<a class=\"headerlink\" href=\"#profile\" title=\"Link to this heading\">#</a></h1><p>This section contains proofread sections for the Shareholder section of TOL.</p><p><img alt=\"alt text\" src=\"Profile/_stati/solo_app/Profile/profile-location.png\"/></p>"}
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
