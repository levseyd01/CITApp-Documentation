selector_to_html = {"a[href=\"ViewSponsorDetails/view_sponsor_details.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Sponsor Details<a class=\"headerlink\" href=\"#view-sponsor-details\" title=\"Link to this heading\">#</a></h1><p><img alt=\"img_1.png\" src=\"../../../_images/img_1.png\"/></p>", "a[href=\"#sections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sections<a class=\"headerlink\" href=\"#sections\" title=\"Link to this heading\">#</a></h2>", "a[href=\"ManageSponsorOrganization/manage_sponsor_organization.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Manage Sponsor Organizations<a class=\"headerlink\" href=\"#manage-sponsor-organizations\" title=\"Link to this heading\">#</a></h1><p>From the <strong>Sponsor Organizations</strong> page, you can manage sponsor organizations in the system.</p><p>To do so, follow these steps:</p>", "a[href=\"#sponsor-organization-list\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sponsor Organization List<a class=\"headerlink\" href=\"#sponsor-organization-list\" title=\"Link to this heading\">#</a></h2><p>The <strong>Sponsor Organization List</strong> page displays an overview of standard information for each sponsor organization.</p><p><img alt=\"img_1.png\" src=\"../../../_images/img_11.png\"/></p>", "a[href=\"#sponsor-organizations\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Sponsor Organizations<a class=\"headerlink\" href=\"#sponsor-organizations\" title=\"Link to this heading\">#</a></h1><p><strong>Sponsor Organization</strong>  accounts have the following features:</p>"}
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
