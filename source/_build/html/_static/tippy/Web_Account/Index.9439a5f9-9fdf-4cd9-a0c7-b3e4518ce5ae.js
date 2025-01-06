selector_to_html = {"a[href=\"Web_Account_Users/Web_Account_Users.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Web Account Users<a class=\"headerlink\" href=\"#web-account-users\" title=\"Link to this heading\">#</a></h1><h2>View Details<a class=\"headerlink\" href=\"#view-details\" title=\"Link to this heading\">#</a></h2><h3>Web Account Detail Tab<a class=\"headerlink\" href=\"#web-account-detail-tab\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#web-account\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Web Account<a class=\"headerlink\" href=\"#web-account\" title=\"Link to this heading\">#</a></h1><p>This section includes all the tabs located on the Login Certificate page.</p>", "a[href=\"Agent_Users/Agent_Users.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Agent User<a class=\"headerlink\" href=\"#agent-user\" title=\"Link to this heading\">#</a></h1>"}
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
