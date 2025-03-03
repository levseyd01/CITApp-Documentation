selector_to_html = {"a[href=\"#add-new-user\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add New User<a class=\"headerlink\" href=\"#add-new-user\" title=\"Link to this heading\">#</a></h1><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">Add</span> <span class=\"pre\">New</span> <span class=\"pre\">User</span></code> button opens up a form that allows you to create a new user with four pieces of info:</p>", "a[href=\"#add-new-staff-user-permissions\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Add New Staff: User Permissions<a class=\"headerlink\" href=\"#add-new-staff-user-permissions\" title=\"Link to this heading\">#</a></h4><p>There a few ways to set your permissions for new staff members, here are a few:</p>", "a[href=\"#where-is-add-new-staff-used\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Where is <code class=\"docutils literal notranslate\"><span class=\"pre\">Add</span> <span class=\"pre\">New</span> <span class=\"pre\">Staff</span></code> Used?<a class=\"headerlink\" href=\"#where-is-add-new-staff-used\" title=\"Link to this heading\">#</a></h4><p><strong>Verbatim:</strong></p>", "a[href=\"#add-new-staff\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Add New Staff<a class=\"headerlink\" href=\"#add-new-staff\" title=\"Link to this heading\">#</a></h3><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">Add</span> <span class=\"pre\">New</span> <span class=\"pre\">Staff</span></code> button allows you create a new staff member with specific permissions related to their role in your company.</p>", "a[href=\"../../../dev/config/cit-app-config-ts.html#cit-app-config\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">cit-app-config-ts.md<a class=\"headerlink\" href=\"#cit-app-config-ts-md\" title=\"Link to this heading\">#</a></h1><p>Below is the basic contents as of 02/24/2025.</p>", "a[href=\"#add-new-user-variations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u201cAdd New User\u201d Variations<a class=\"headerlink\" href=\"#add-new-user-variations\" title=\"Link to this heading\">#</a></h2><p>All variations of the <code class=\"docutils literal notranslate\"><span class=\"pre\">Add</span> <span class=\"pre\">New</span> <span class=\"pre\">User</span></code> button:</p>"}
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
