selector_to_html = {"a[href=\"#detailed-guide-to-user-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Detailed Guide to User Details<a class=\"headerlink\" href=\"#detailed-guide-to-user-details\" title=\"Link to this heading\">#</a></h1><p>The <strong>User Details</strong> screen opens up to the <strong>User Information</strong> tab when you select a viewer.</p>"}
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
                onShow(instance) {MathJax.typesetPromise([instance.popper]).then(() => {});},
            });
        };
    };
    console.log("tippy tips loaded!");
};
