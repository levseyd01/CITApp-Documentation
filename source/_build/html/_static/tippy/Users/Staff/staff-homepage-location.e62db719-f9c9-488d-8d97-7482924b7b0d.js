selector_to_html = {"a[href=\"#staff-homepage-location\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff Homepage Location<a class=\"headerlink\" href=\"#staff-homepage-location\" title=\"Link to this heading\">#</a></h1><p><strong>To Find the Staff List Homepage:</strong></p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-primary-sidenav-dropdown-location.jpg\" id=\"user-staff-primary-sidenav-location-figure\"><img alt=\"../../_images/user-primary-sidenav-dropdown-location.jpg\" id=\"user-staff-primary-sidenav-location-figure\" loading=\"lazy\" src=\"../../_images/user-primary-sidenav-dropdown-location.jpg\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, Staff Primary Sidenav Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-staff_primary-sidenav-location.jpg\" id=\"staff-homepage\"><img alt=\"../../_images/user-staff_primary-sidenav-location.jpg\" id=\"staff-homepage\" loading=\"lazy\" src=\"../../_images/user-staff_primary-sidenav-location.jpg\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Staff Homepage</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"../../Universal/Navigation/toggle-primary-sidebar.html#how-to-toggle-primary-sidebar\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Toggle Primary Sidebar<a class=\"headerlink\" href=\"#how-to-toggle-primary-sidebar\" title=\"Link to this heading\">#</a></h1><p>The Primary Sidenavigation menu can be found along the leftside of the page. You\u2019ll know if it\u2019s collapsed if you don\u2019t see any words for the names of the tabs:</p>"}
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
