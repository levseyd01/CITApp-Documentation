selector_to_html = {"a[href=\"#manage-sponsor-organizations\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Manage Sponsor Organizations<a class=\"headerlink\" href=\"#manage-sponsor-organizations\" title=\"Link to this heading\">#</a></h1><p>From the <strong>Sponsor Organizations</strong> page, you can manage sponsor organizations in the system.</p><p>To do so, follow these steps:</p>"}
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
