selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Agent_User.png\"><img alt=\"../../_images/Agent_User.png\" src=\"../../_images/Agent_User.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Agent User</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#agent-user\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Agent User<a class=\"headerlink\" href=\"#agent-user\" title=\"Link to this heading\">#</a></h1>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'right', maxWidth: 500, interactive: true, delay: [200, 100], duration: [200, 100],

            });
        };
    };
    console.log("tippy tips loaded!");
};
