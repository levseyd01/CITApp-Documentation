selector_to_html = {"a[href=\"#options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Options<a class=\"headerlink\" href=\"#options\" title=\"Link to this heading\">#</a></h2><p class=\"rubric\">Options</p>", "a[href=\"#source-code-clickdropdownfromsidebar\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Source Code: clickDropdownFromSideBar<a class=\"headerlink\" href=\"#source-code-clickdropdownfromsidebar\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#clickdropdownfromsidebar-md\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">clickDropdownFromSidebar.md<a class=\"headerlink\" href=\"#clickdropdownfromsidebar-md\" title=\"Link to this heading\">#</a></h1><h2>Options<a class=\"headerlink\" href=\"#options\" title=\"Link to this heading\">#</a></h2><p class=\"rubric\">Options</p>", "a[href=\"#directive-option-tabToExpand\"]": "<dt class=\"sig sig-object rst\" id=\"directive-option-tabToExpand\">\n<span class=\"sig-name descname\"><span class=\"pre\">:tabToExpand:</span></span><em class=\"property\"> <span class=\"pre\">str</span></em><em class=\"property\"> <span class=\"pre\">(str)</span></em></dt><dd><p>Pass the name of the tab to to <code class=\"docutils literal notranslate\"><span class=\"pre\">clickDropdownFromSidebar(page,</span> <span class=\"pre\">tabToExpand)</span></code>.</p></dd>", "a[href=\"#example-selecting-staff\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Example: Selecting \u201cStaff\u201d<a class=\"headerlink\" href=\"#example-selecting-staff\" title=\"Link to this heading\">#</a></h1><p>If you wanted to click Staff, you would do the following::</p>"}
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
