selector_to_html = {"a[href=\"sections/OTC_Upload.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">OTC Upload<a class=\"headerlink\" href=\"#otc-upload\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Task_Definitions.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Task Definitions<a class=\"headerlink\" href=\"#task-definitions\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Email_Template.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Email Template<a class=\"headerlink\" href=\"#email-template\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Correspondence.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Correspondence<a class=\"headerlink\" href=\"#correspondence\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Printers.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Printers<a class=\"headerlink\" href=\"#printers\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Merhcant_Payment.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Merhcant Payment<a class=\"headerlink\" href=\"#merhcant-payment\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Issuer_Onboarding_Documents.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Issuer Onboarding Documents<a class=\"headerlink\" href=\"#issuer-onboarding-documents\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Notifications.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Notifications<a class=\"headerlink\" href=\"#notifications\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Settings<a class=\"headerlink\" href=\"#settings\" title=\"Link to this heading\">#</a></h1><p>This section includes all the tabs located on the <strong>Settings</strong> section of SOLO 2.0.</p>"}
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
