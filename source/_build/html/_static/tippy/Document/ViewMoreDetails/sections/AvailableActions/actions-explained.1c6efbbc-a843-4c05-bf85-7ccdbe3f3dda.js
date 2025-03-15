selector_to_html = {"a[href=\"Tab/completed-documents.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Completed Tab: Available Actions<a class=\"headerlink\" href=\"#completed-tab-available-actions\" title=\"Link to this heading\">#</a></h1><p>The  cards contain every action besides the <a class=\"reference internal\" href=\"#upload-logo-button\"><span class=\"xref myst\">Approve Uploaded Document</span></a> action:</p>", "a[href=\"#available-actions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Available Actions<a class=\"headerlink\" href=\"#available-actions\" title=\"Link to this heading\">#</a></h1><p>The <strong>Onboarding Document Details</strong> section provides several actions for each type of document, including:</p>", "a[href=\"Tab/upload-pending.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Upload Pending Status: Available Actions<a class=\"headerlink\" href=\"#upload-pending-status-available-actions\" title=\"Link to this heading\">#</a></h1><p>The  cards contain only two actions:</p>", "a[href=\"Tab/pending-approval.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Pending Approval Tab: Available Actions<a class=\"headerlink\" href=\"#pending-approval-tab-available-actions\" title=\"Link to this heading\">#</a></h1><p>The  cards contain <a class=\"reference internal\" href=\"actions-explained.html#all-possible-actions\"><span class=\"std std-ref\">Available Actions</span></a> as can be seen:</p>", "a[href=\"how-to/how-to-approve-on-off-boarding-documents.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Approve Uploaded Document(s)<a class=\"headerlink\" href=\"#how-to-approve-uploaded-document-s\" title=\"Link to this heading\">#</a></h1><p>Follow the instructions below to approve an uploaded document.</p><p><strong>To Approve an Uploaded Document</strong>:</p>"}
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
