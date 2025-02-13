selector_to_html = {"a[href=\"#created-modified-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Created &amp; Modified Section<a class=\"headerlink\" href=\"#created-modified-section\" title=\"Link to this heading\">#</a></h2><p>The <strong>Created &amp; Modified</strong> section contains the following:</p>", "a[href=\"#information-pane\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Information Pane<a class=\"headerlink\" href=\"#information-pane\" title=\"Link to this heading\">#</a></h1><p>The <strong>Information Pane</strong> (Right Column) provides both an <strong>Activity Log</strong> and a <strong>Created &amp; Modified</strong> Section.</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../_static/solo_app/Universal/infopane/created-modified-activity-log.jpg\"><img alt=\"../_static/solo_app/Universal/infopane/created-modified-activity-log.jpg\" src=\"../_static/solo_app/Universal/infopane/created-modified-activity-log.jpg\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Information Pane</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#activity-log-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Activity Log Section<a class=\"headerlink\" href=\"#activity-log-section\" title=\"Link to this heading\">#</a></h2><p>The <strong>Activity Logs</strong> section contains a list of changes made to the company\u2019s profile.</p><p>Each <strong>Activity Log entry</strong> contains the following:</p>"}
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
