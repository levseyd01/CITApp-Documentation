selector_to_html = {"a[href=\"#options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Options<a class=\"headerlink\" href=\"#options\" title=\"Link to this heading\">#</a></h2><p class=\"rubric\">Options</p>", "a[href=\"#checkcolumnheaders\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">checkColumnHeaders<a class=\"headerlink\" href=\"#checkcolumnheaders\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#directive-option-nameArray\"]": "<dt class=\"sig sig-object rst\" id=\"directive-option-nameArray\">\n<span class=\"sig-name descname\"><span class=\"pre\">:nameArray:</span></span><em class=\"property\"> <span class=\"pre\">str</span></em><em class=\"property\"> <span class=\"pre\">(str)</span></em></dt><dd><p>Pass an Array of names through as a list of strings.</p></dd>", "a[href=\"#table-headers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Table Headers<a class=\"headerlink\" href=\"#table-headers\" title=\"Link to this heading\">#</a></h1><p><strong>Function:</strong> <code class=\"docutils literal notranslate\"><span class=\"pre\">checkColumnHeaders(page,</span> <span class=\"pre\">columnHeaderNamesToCheck)</span></code></p><p>Many CITApp pages have tables with headers, especially on their homepage with the same layout:</p>", "a[href=\"#source-code\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Source Code<a class=\"headerlink\" href=\"#source-code\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#example-selecting-columns-for-the-staff-list-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Example: Selecting Columns for the Staff List Page<a class=\"headerlink\" href=\"#example-selecting-columns-for-the-staff-list-page\" title=\"Link to this heading\">#</a></h2><p>If you wanted to click Staff, you would do the following::</p>"}
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
