selector_to_html = {"a[href=\"#add-new-user\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add New User<a class=\"headerlink\" href=\"#add-new-user\" title=\"Link to this heading\">#</a></h1><p>This</p>", "a[href=\"#buttons\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Buttons<a class=\"headerlink\" href=\"#buttons\" title=\"Link to this heading\">#</a></h1><p>These are functions related to buttons that help you perform some function with respect to submitting, opening, deleting, etc.</p>"}
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
