selector_to_html = {"a[href=\"#cit-app-documentation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT App Documentation<a class=\"headerlink\" href=\"#cit-app-documentation\" title=\"Link to this heading\">#</a></h1><p>Welcome to the Documentation for the CIT App. This documentation is intended to provide a comprehensive guide to the CIT App and its features.</p>", "a[href=\"Web_Account/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Web Account<a class=\"headerlink\" href=\"#web-account\" title=\"Link to this heading\">#</a></h1><p>This section includes all the tabs located on the Login Certificate page.</p>", "a[href=\"Login_Certificate/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard<a class=\"headerlink\" href=\"#dashboard\" title=\"Link to this heading\">#</a></h1><p>This section should help the user navigate through the <strong>Dashboard</strong> section of the CIT App.</p><p><img alt=\"img.png\" src=\"_images/img1.png\"/></p>", "a[href=\"Cash_Payout/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Cash Payout<a class=\"headerlink\" href=\"#cash-payout\" title=\"Link to this heading\">#</a></h1><p>This section has all proofread content related to the <strong>Cash Payout</strong> section for SOLO 2.0.</p>", "a[href=\"#sections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sections<a class=\"headerlink\" href=\"#sections\" title=\"Link to this heading\">#</a></h2>", "a[href=\"Service/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Service<a class=\"headerlink\" href=\"#service\" title=\"Link to this heading\">#</a></h1><p>This section has all proofread content related to the <strong>Service</strong> section of  SOLO 2.0.</p>", "a[href=\"Settings/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Settings<a class=\"headerlink\" href=\"#settings\" title=\"Link to this heading\">#</a></h1><p>This section includes all the tabs located on the <strong>Settings</strong> section of SOLO 2.0.</p>", "a[href=\"Accounts/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Accounts<a class=\"headerlink\" href=\"#accounts\" title=\"Link to this heading\">#</a></h1><p>This section has all proofread content related to the <strong>Accounts</strong> section of SOLO 2.0.</p>", "a[href=\"Communication/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Communication<a class=\"headerlink\" href=\"#communication\" title=\"Link to this heading\">#</a></h1><p>This section includes all the tabs located on the <strong>Communication</strong> section of SOLO 2.0.</p>", "a[href=\"Reports/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Reports<a class=\"headerlink\" href=\"#reports\" title=\"Link to this heading\">#</a></h1><p>This section contains proofread sections for the <strong>Reports</strong> section of SOLO 2.0.</p>", "a[href=\"SOLO_Billing/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">SOLO Billing<a class=\"headerlink\" href=\"#solo-billing\" title=\"Link to this heading\">#</a></h1><p>This section includes all the tabs located on the <strong>SOLO Billing</strong> page.</p>"}
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
