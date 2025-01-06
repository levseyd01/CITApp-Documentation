selector_to_html = {"a[href=\"../../Universal/logos.html#view-more-icon\"]": "<img alt=\"../_static/solo_app/Universal/icons/view-more-icon.png\" class=\"align-center\" id=\"view-more-icon\" src=\"../../_static/solo_app/Universal/icons/view-more-icon.png\" style=\"width: 200px;\"/>", "a[href=\"#homepage-for-user-and-staff-accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Homepage for User and Staff Accounts<a class=\"headerlink\" href=\"#homepage-for-user-and-staff-accounts\" title=\"Link to this heading\">#</a></h1><p>Below is the homepage for <strong>Managing Staff</strong> accounts:</p>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"Users/_static/solo_app/Tips/PrimarySidebar/PrimarySidebar-toggle.png\"><img alt=\"Users/_static/solo_app/Tips/PrimarySidebar/PrimarySidebar-toggle.png\" src=\"Users/_static/solo_app/Tips/PrimarySidebar/PrimarySidebar-toggle.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Toggle Primary Sidebar button.</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#action-column\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Action Column<a class=\"headerlink\" href=\"#action-column\" title=\"Link to this heading\">#</a></h2><p>Both <strong>User</strong> and <strong>Staff</strong> sections have the <a class=\"reference internal\" href=\"../../Universal/logos.html#view-more-icon\"><span class=\"std std-ref\">View User Details</span></a> option in the <strong>Action</strong> column.</p>", "a[href=\"#available-information\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Available Information<a class=\"headerlink\" href=\"#available-information\" title=\"Link to this heading\">#</a></h2><p>Each of the <strong>Managing Users</strong> and <strong>Staff</strong> sections opens with a homepage that presents a table including the following columns:</p>", "a[href=\"#status-column\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Status Column<a class=\"headerlink\" href=\"#status-column\" title=\"Link to this heading\">#</a></h2><p>The <strong>Status</strong> column indicates the current status of the account. The following statuses are available:</p>", "a[href=\"../../Universal/logos.html#delete-icon\"]": "<img alt=\"../_static/solo_app/Universal/icons/delete-icon.png\" class=\"align-center\" id=\"delete-icon\" src=\"../../_static/solo_app/Universal/icons/delete-icon.png\" style=\"width: 200px;\"/>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"Users/_static/solo_app/Tips/PrimarySidebar/PrimarySidebar-Collapsed.png\"><img alt=\"Users/_static/solo_app/Tips/PrimarySidebar/PrimarySidebar-Collapsed.png\" src=\"Users/_static/solo_app/Tips/PrimarySidebar/PrimarySidebar-Collapsed.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Collapsed Primary Sidebar</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#common-information\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Common Information<a class=\"headerlink\" href=\"#common-information\" title=\"Link to this heading\">#</a></h1><p>You can find both the <strong>User</strong> and <strong>Staff</strong> section along the left-hand side of the page:</p>", "a[href=\"#id5\"]": "<figure class=\"align-center\" id=\"id5\">\n<a class=\"reference internal image-reference\" href=\"Users/_static/solo_app/Tips/PrimarySidebar/PrimarySidebar-Open.png\"><img alt=\"Users/_static/solo_app/Tips/PrimarySidebar/PrimarySidebar-Open.png\" src=\"Users/_static/solo_app/Tips/PrimarySidebar/PrimarySidebar-Open.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sidebar Expanded</span><a class=\"headerlink\" href=\"#id5\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
