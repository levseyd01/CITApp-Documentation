selector_to_html = {"a[href=\"#sponsor-organization-users-tab-new-user-location\"]": "<figure class=\"align-center\" id=\"sponsor-organization-users-tab-new-user-location\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-new-user-location.jpg\"><img alt=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-new-user-location.jpg\" src=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-new-user-location.jpg\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Users Tab, New User Location</span><a class=\"headerlink\" href=\"#sponsor-organization-users-tab-new-user-location\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#navigating-the-users-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the Users Tab<a class=\"headerlink\" href=\"#navigating-the-users-tab\" title=\"Link to this heading\">#</a></h2><p>The <strong>Actions</strong> column for the <strong>Users</strong> tab has the following actions available:</p>", "a[href=\"#sponsor-organization-users-tab-add-new-user-popup\"]": "<figure class=\"align-center\" id=\"sponsor-organization-users-tab-add-new-user-popup\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-add-new-user-popup.png\"><img alt=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-add-new-user-popup.png\" src=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-add-new-user-popup.png\" style=\"width: 75%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Users Tab, Add New User Popup</span><a class=\"headerlink\" href=\"#sponsor-organization-users-tab-add-new-user-popup\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#sponsorship-entity-list-tab-status-filter\"]": "<figure class=\"align-center\" id=\"sponsorship-entity-list-tab-status-filter\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/Universal/view-sponsorship-organization/entity-list-tab/sponsorship-entity-list-tab-status-filter.png\"><img alt=\"Account/_static/solo_app/Universal/view-sponsorship-organization/entity-list-tab/sponsorship-entity-list-tab-status-filter.png\" src=\"Account/_static/solo_app/Universal/view-sponsorship-organization/entity-list-tab/sponsorship-entity-list-tab-status-filter.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Entity List Tab, Status Filter Dropdown</span><a class=\"headerlink\" href=\"#sponsorship-entity-list-tab-status-filter\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#sponsor-organization-users-tab-location-of-tab\"]": "<figure class=\"align-center\" id=\"sponsor-organization-users-tab-location-of-tab\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-location-of-tab.png\"><img alt=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-location-of-tab.png\" src=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-location-of-tab.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Users Tab</span><a class=\"headerlink\" href=\"#sponsor-organization-users-tab-location-of-tab\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#navigating-the-entity-list-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the Entity List Tab<a class=\"headerlink\" href=\"#navigating-the-entity-list-tab\" title=\"Link to this heading\">#</a></h2><p>You can filter the Entity List Table by status, or you can search for a specific entity by name.</p><p><strong>To Filter Entities by Status:</strong></p>", "a[href=\"#sponsorship-entity-list-tab\"]": "<figure class=\"align-center\" id=\"sponsorship-entity-list-tab\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/Universal/view-sponsorship-organization/entity-list-tab/sponsorship-entity-list-tab-location-of-tab.png\"><img alt=\"Account/_static/solo_app/Universal/view-sponsorship-organization/entity-list-tab/sponsorship-entity-list-tab-location-of-tab.png\" src=\"Account/_static/solo_app/Universal/view-sponsorship-organization/entity-list-tab/sponsorship-entity-list-tab-location-of-tab.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Entity List Tab</span><a class=\"headerlink\" href=\"#sponsorship-entity-list-tab\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#entity-list-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Entity List Tab<a class=\"headerlink\" href=\"#entity-list-tab\" title=\"Link to this heading\">#</a></h1><p>The <strong>Entity List</strong> tab is a list of all entities associated with the <strong>Sponsor Organization</strong>.</p>", "a[href=\"#users-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Users Tab<a class=\"headerlink\" href=\"#users-tab\" title=\"Link to this heading\">#</a></h1><p>The <strong>Users</strong> tab is a list of all users associated with the <strong>Sponsor Organization</strong>.</p>", "a[href=\"#adding-a-new-user-to-the-sponsorship-organization\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Adding a New User to the Sponsorship Organization<a class=\"headerlink\" href=\"#adding-a-new-user-to-the-sponsorship-organization\" title=\"Link to this heading\">#</a></h3><p><strong>To Add a New User:</strong></p>"}
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
