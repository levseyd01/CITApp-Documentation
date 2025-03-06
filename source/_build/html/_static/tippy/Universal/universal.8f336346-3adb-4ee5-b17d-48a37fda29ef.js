selector_to_html = {"a[href=\"InformationPane/information-pane.html#information-pane-main-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Information Pane<a class=\"headerlink\" href=\"#information-pane\" title=\"Link to this heading\">#</a></h1><p>The <strong>Information Pane</strong> (Right Column) provides both an <strong>Activity Log</strong> and a <strong>Created &amp; Modified</strong> Section.</p>", "a[href=\"#navigating-the-app\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the App<a class=\"headerlink\" href=\"#navigating-the-app\" title=\"Link to this heading\">#</a></h1><p>This section is meant to house all of the information needed to navigate through portions of the App that come up most frequently.</p>", "a[href=\"../Document/ViewMoreDetails/view-status-details-documents.html#onboarding-offering-document-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View More Details: Documents<a class=\"headerlink\" href=\"#view-more-details-documents\" title=\"Link to this heading\">#</a></h1><p>The <strong>View More Details</strong> page for both the <strong>Onboarding Documents</strong> and <strong>Offering Documents</strong> pages provide detailed information about documents related to each process.</p><p>The <a class=\"reference internal\" href=\"#view-more-details\"><span class=\"xref myst tippyAnchor\">View More Details</span></a> action for either page will you to the following page:</p>", "a[href=\"../Users/Users/managing-user-accounts.html#user-details-main-page\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">User Details Page<a class=\"headerlink\" href=\"#user-details-page\" title=\"Link to this heading\">#</a></h3><p>The <strong>User Details</strong> page allows you to view and edit a specific User\u2019s details.</p>", "a[href=\"#extras\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Extras</a><a class=\"headerlink\" href=\"#extras\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">Documents</a><a class=\"headerlink\" href=\"#documents\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#user-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">User Details</a><a class=\"headerlink\" href=\"#user-details\" title=\"Link to this heading\">#</a></h2>"}
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
