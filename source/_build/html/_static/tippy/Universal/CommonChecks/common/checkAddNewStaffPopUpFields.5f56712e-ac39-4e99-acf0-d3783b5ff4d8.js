selector_to_html = {"a[href=\"#checkaddnewstaffpopupfields\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">checkAddNewStaffPopupFields<a class=\"headerlink\" href=\"#checkaddnewstaffpopupfields\" title=\"Link to this heading\">#</a></h1><p>This function is meant to check the fields that appear in the \u201cAdd New Staff\u201d window that pops up when adding a new staff member through User -&gt; Staff.</p><p>Here is what the window looks like:</p>"}
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
