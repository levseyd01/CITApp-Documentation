selector_to_html = {"a[href=\"#usersectionendtoendflow\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">userSectionEndtoEndFlow<a class=\"headerlink\" href=\"#usersectionendtoendflow\" title=\"Link to this heading\">#</a></h1><p>This function can be used dynamically to test the entire flow of the <code class=\"docutils literal notranslate\"><span class=\"pre\">User</span></code> section (or sections like it) for the CIT App.</p>"}
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
