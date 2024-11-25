selector_to_html = {"a[href=\"Account_Type_Breakdown.html#account-type-breakdown\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Types of Accounts Available<a class=\"headerlink\" href=\"#types-of-accounts-available\" title=\"Link to this heading\">#</a></h1><p>As a CIT Super Admin, you have access to managing the following types of accounts:</p>", "a[href=\"#account-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Account Section<a class=\"headerlink\" href=\"#account-section\" title=\"Link to this heading\">#</a></h1><p>The <strong>Account</strong> section allows you to manage accounts in the system based on the type of account that exists.</p><p>Each page includes a table with the following information:</p>", "a[href=\"sections/cit_corporations/CIT_Corporations.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporations<a class=\"headerlink\" href=\"#cit-corporations\" title=\"Link to this heading\">#</a></h1><h2>Add New Account<a class=\"headerlink\" href=\"#add-new-account\" title=\"Link to this heading\">#</a></h2><h3>Primary Address<a class=\"headerlink\" href=\"#primary-address\" title=\"Link to this heading\">#</a></h3>", "a[href=\"sections/Investors/Investors.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Investors<a class=\"headerlink\" href=\"#investors\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/sponsor_organizations/Sponsor_Organizations.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Sponsor Organizations<a class=\"headerlink\" href=\"#sponsor-organizations\" title=\"Link to this heading\">#</a></h1><p><strong>Sponsor Organization</strong>  accounts have the following features:</p>"}
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
