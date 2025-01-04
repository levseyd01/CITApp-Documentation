selector_to_html = {"a[href=\"#copyright\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Copyright<a class=\"headerlink\" href=\"#copyright\" title=\"Link to this heading\">#</a></h1><p>Our proprietary software grants you immediate access to your shares and shareholder information.</p><p>All art, text, design, branding, logos, graphics, photos, and other content of this website (\u201cSite Content\u201d) are proprietary to Transfer Online, Inc.\u2122 and/or its partners, who have granted us permission. You may view, download, and print the Site Content subject to the following conditions:</p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
