selector_to_html = {"a[href=\"#how-to-identify-current-account\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Identifying the Current Account<a class=\"headerlink\" href=\"#how-to-identify-current-account\" title=\"Link to this heading\">#</a></h1><p>Identify the current account you are using by looking for the account name next to your profile picture.</p>"}
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
