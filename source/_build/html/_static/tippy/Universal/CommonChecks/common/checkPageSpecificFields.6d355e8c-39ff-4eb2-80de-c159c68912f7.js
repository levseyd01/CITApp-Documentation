selector_to_html = {"a[href=\"#options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Options<a class=\"headerlink\" href=\"#options\" title=\"Link to this heading\">#</a></h2><p class=\"rubric\">Options</p>", "a[href=\"#example-selecting-fields-found-on-staf-list-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Example: Selecting Fields Found on Staf List Page<a class=\"headerlink\" href=\"#example-selecting-fields-found-on-staf-list-page\" title=\"Link to this heading\">#</a></h2><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">Staff</span> <span class=\"pre\">List</span></code> page has fields hidden throughout the page. There is a common pattern in the fields. It seems like the pages have common field names where the name of the page is placed directly in front of the button or other type of selector.</p><p>Here is an example of how <strong>Playwright</strong> sees the fields associated with the larger area of the page:</p>", "a[href=\"#checkpagespecificfields\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">checkPageSpecificFields<a class=\"headerlink\" href=\"#checkpagespecificfields\" title=\"Link to this heading\">#</a></h1><p><strong>Function:</strong> <code class=\"docutils literal notranslate\"><span class=\"pre\">checkPageSpecificFields(page,</span> <span class=\"pre\">pageFieldHeading,</span> <span class=\"pre\">otherFieldLocator)</span></code></p><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">checkPageSpecificFields</span></code> function is meant to be more flexible in that you can pass in page specific fields to the function and have it check to see if they exist on the page.</p>", "a[href=\"#directive-option-pageFieldHeading\"]": "<dt class=\"sig sig-object rst\" id=\"directive-option-pageFieldHeading\">\n<span class=\"sig-name descname\"><span class=\"pre\">:pageFieldHeading:</span></span><em class=\"property\"> <span class=\"pre\">str</span></em><em class=\"property\"> <span class=\"pre\">(str)</span></em></dt><dd><p>Pass the page field heading through as a string.</p></dd>", "a[href=\"#directive-option-otherFieldLocator\"]": "<dt class=\"sig sig-object rst\" id=\"directive-option-otherFieldLocator\">\n<span class=\"sig-name descname\"><span class=\"pre\">:otherFieldLocator:</span></span><em class=\"property\"> <span class=\"pre\">str</span></em><em class=\"property\"> <span class=\"pre\">(str)</span></em></dt><dd><p>Pass the other field locator through as a string.</p></dd>"}
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
