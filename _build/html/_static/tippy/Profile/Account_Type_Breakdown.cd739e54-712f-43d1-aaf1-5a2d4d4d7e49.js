selector_to_html = {"a[href=\"#account-type-breakdown-table\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Account Type Breakdown Table<a class=\"headerlink\" href=\"#account-type-breakdown-table\" title=\"Link to this heading\">#</a></h2><p>Below is a table that outlines the various features that are available to each account type that you can manage as a CIT Super Admin.</p>", "a[href=\"#types-of-accounts-available\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Types of Accounts Available<a class=\"headerlink\" href=\"#types-of-accounts-available\" title=\"Link to this heading\">#</a></h1><p>As a CIT Super Admin, you have access to managing the following types of accounts:</p>"}
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
