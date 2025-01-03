selector_to_html = {"a[href=\"#transfer\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Transfer<a class=\"headerlink\" href=\"#transfer\" title=\"Link to this heading\">#</a></h1><p>This section contains proofread sections for the Shareholder section of TOL.</p>", "a[href=\"sections/Pending_Transfer.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Pending Transfers<a class=\"headerlink\" href=\"#pending-transfers\" title=\"Link to this heading\">#</a></h1><p>This covers the \u201cPending Transfers\u201d section of SOLO 2.0.</p>", "a[href=\"sections/Completed_Transfer.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Completed Transfers<a class=\"headerlink\" href=\"#completed-transfers\" title=\"Link to this heading\">#</a></h1><p>This covers the \u201cCompleted Transfers\u201d section of SOLO 2.0.</p>", "a[href=\"sections/Canceled_Transfer.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Canceled Transfer<a class=\"headerlink\" href=\"#canceled-transfer\" title=\"Link to this heading\">#</a></h1><p>This covers the Canceled Transfer section for SOLO 2.0.</p>", "a[href=\"sections/Rejected_Transfer.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Rejected Transfers<a class=\"headerlink\" href=\"#rejected-transfers\" title=\"Link to this heading\">#</a></h1><p>This covers the \u201cRejected Transfers\u201d of SOLO 2.0.</p>", "a[href=\"sections/Logged_Transaction_Details.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Logged Transaction Details<a class=\"headerlink\" href=\"#logged-transaction-details\" title=\"Link to this heading\">#</a></h1>"}
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
