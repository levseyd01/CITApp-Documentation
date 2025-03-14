selector_to_html = {"a[href=\"#how-to-approve-uploaded-document-s\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Approve Uploaded Document(s)<a class=\"headerlink\" href=\"#how-to-approve-uploaded-document-s\" title=\"Link to this heading\">#</a></h1><p>Follow the instructions below to approve an uploaded document.</p><p><strong>To Approve an Uploaded Document</strong>:</p>"}
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
