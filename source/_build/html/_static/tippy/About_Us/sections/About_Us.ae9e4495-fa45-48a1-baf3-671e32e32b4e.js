selector_to_html = {"a[href=\"#about-us\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">About Us<a class=\"headerlink\" href=\"#about-us\" title=\"Link to this heading\">#</a></h1><p>Transfer Online\u2122 combines professional expertise with creative technologies to offer comprehensive solutions as an online stock transfer agent, financial services provider, and consulting firm. Our expertise spans traditional services and the integration of innovative technologies.</p><p>We forge new models for recordkeeping that cater to the evolving needs of growing companies. Capable of tackling any technology challenge, we deliver flexible solutions customized to your unique requirements.</p>", "a[href=\"#our-commitment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Our Commitment<a class=\"headerlink\" href=\"#our-commitment\" title=\"Link to this heading\">#</a></h2><p>At Transfer Online, we are dedicated to providing excellence in customer service for every transaction, every time. This commitment is driven by our core values: accuracy, speed and friendliness, value, and adherence to regulatory compliance, ensuring a partnership you can trust.</p><p>Our success is measured by the true results we achieve for our clients, reflecting their realities and objectives.</p>"}
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
