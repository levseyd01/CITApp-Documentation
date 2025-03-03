selector_to_html = {"a[href=\"common/checkColumnHeaders.html#source-code\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Source Code<a class=\"headerlink\" href=\"#source-code\" title=\"Link to this heading\">#</a></h2>", "a[href=\"common/checkPageSpecificFields.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">checkPageSpecificFields<a class=\"headerlink\" href=\"#checkpagespecificfields\" title=\"Link to this heading\">#</a></h1><p><strong>Function:</strong> <code class=\"docutils literal notranslate\"><span class=\"pre\">checkPageSpecificFields(page,</span> <span class=\"pre\">pageFieldHeading,</span> <span class=\"pre\">otherFieldLocator)</span></code></p><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">checkPageSpecificFields</span></code> function is meant to be more flexible in that you can pass in page specific fields to the function and have it check to see if they exist on the page.</p>", "a[href=\"common/checkPageSpecificFields.html#options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Options<a class=\"headerlink\" href=\"#options\" title=\"Link to this heading\">#</a></h2><p class=\"rubric\">Options</p>", "a[href=\"common/checkPageSpecificFields.html#example-selecting-fields-found-on-staf-list-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Example: Selecting Fields Found on Staf List Page<a class=\"headerlink\" href=\"#example-selecting-fields-found-on-staf-list-page\" title=\"Link to this heading\">#</a></h2><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">Staff</span> <span class=\"pre\">List</span></code> page has fields hidden throughout the page. There is a common pattern in the fields. It seems like the pages have common field names where the name of the page is placed directly in front of the button or other type of selector.</p><p>Here is an example of how <strong>Playwright</strong> sees the fields associated with the larger area of the page:</p>", "a[href=\"common/checkAddNewStaffPopUpFields.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">checkAddNewStaffPopupFields<a class=\"headerlink\" href=\"#checkaddnewstaffpopupfields\" title=\"Link to this heading\">#</a></h1><p>This function is meant to check the fields that appear in the \u201cAdd New Staff\u201d window that pops up when adding a new staff member through User -&gt; Staff.</p><p>Here is what the window looks like:</p>", "a[href=\"common/checkColumnHeaders.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">checkColumnHeaders<a class=\"headerlink\" href=\"#checkcolumnheaders\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#common-checks\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Common Checks<a class=\"headerlink\" href=\"#common-checks\" title=\"Link to this heading\">#</a></h1><p>This section was created to store common checks that may be useful due to the app\u2019s structure.</p>", "a[href=\"common/checkColumnHeaders.html#example-selecting-columns-for-the-staff-list-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Example: Selecting Columns for the Staff List Page<a class=\"headerlink\" href=\"#example-selecting-columns-for-the-staff-list-page\" title=\"Link to this heading\">#</a></h2><p>If you wanted to click Staff, you would do the following::</p>", "a[href=\"common/checkColumnHeaders.html#options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Options<a class=\"headerlink\" href=\"#options\" title=\"Link to this heading\">#</a></h2><p class=\"rubric\">Options</p>", "a[href=\"common/checkColumnHeaders.html#table-headers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Table Headers<a class=\"headerlink\" href=\"#table-headers\" title=\"Link to this heading\">#</a></h1><p><strong>Function:</strong> <code class=\"docutils literal notranslate\"><span class=\"pre\">checkColumnHeaders(page,</span> <span class=\"pre\">columnHeaderNamesToCheck)</span></code></p><p>Many CITApp pages have tables with headers, especially on their homepage with the same layout:</p>"}
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
