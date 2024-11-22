selector_to_html = {"a[href=\"sections/Add_Reserved_Shares_Issuance.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add Reserved Shares Issuance<a class=\"headerlink\" href=\"#add-reserved-shares-issuance\" title=\"Link to this heading\">#</a></h1><h2>Information Input<a class=\"headerlink\" href=\"#information-input\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Add_Conversion.html#convert-from-certificates\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Convert From Certificates<a class=\"headerlink\" href=\"#convert-from-certificates\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Add_New_Issuance.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add New Issuance<a class=\"headerlink\" href=\"#add-new-issuance\" title=\"Link to this heading\">#</a></h1><h2>Information Input<a class=\"headerlink\" href=\"#information-input\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Add_Transfer.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add Transfer<a class=\"headerlink\" href=\"#add-transfer\" title=\"Link to this heading\">#</a></h1><h2>Transfer From Certificates<a class=\"headerlink\" href=\"#transfer-from-certificates\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#login-certificate\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Login Certificate<a class=\"headerlink\" href=\"#login-certificate\" title=\"Link to this heading\">#</a></h1><p>This section has all proofread content related to the <strong>Login Certificate</strong> section of SOLO 2.0.</p>", "a[href=\"sections/Add_Conversion.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add Conversion<a class=\"headerlink\" href=\"#add-conversion\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Add_Retirement.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add Retirement<a class=\"headerlink\" href=\"#add-retirement\" title=\"Link to this heading\">#</a></h1>"}
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
