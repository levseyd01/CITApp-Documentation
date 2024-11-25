selector_to_html = {"a[href=\"#manage-sponsor-organizations\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Manage Sponsor Organizations<a class=\"headerlink\" href=\"#manage-sponsor-organizations\" title=\"Link to this heading\">#</a></h1><p>From the <strong>Sponsor Organizations</strong> page, you can manage sponsor organizations in the system.</p>", "a[href=\"#sponsor-organization-detail-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sponsor Organization Detail Page<a class=\"headerlink\" href=\"#sponsor-organization-detail-page\" title=\"Link to this heading\">#</a></h2><p>Selecting the option to manage the sponsor organization will take you to the <strong>Dashboard</strong> page for the selected sponsor organization.</p><p><img alt=\"Dashboard.png\" src=\"../../../../_images/Dashboard1.png\"/></p>", "a[href=\"#navigating-the-manage-sponsor-organizations-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the Manage Sponsor Organizations Page<a class=\"headerlink\" href=\"#navigating-the-manage-sponsor-organizations-page\" title=\"Link to this heading\">#</a></h2><p>You can find the <strong>Manage Sponsor Organizations</strong> page by following these steps:</p>"}
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
