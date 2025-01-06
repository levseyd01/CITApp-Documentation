selector_to_html = {"a[href=\"#\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Professional Partners<a class=\"headerlink\" href=\"#professional-partners\" title=\"Link to this heading\">#</a></h1><h2>Proofread: Professional Partners<a class=\"headerlink\" href=\"#proofread-professional-partners\" title=\"Link to this heading\">#</a></h2><p><em>More than a stock transfer agent</em></p>", "a[href=\"#transfer-online-solo\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Transfer Online Solo<a class=\"headerlink\" href=\"#transfer-online-solo\" title=\"Link to this heading\">#</a></h3><p>Manage your shares yourself; quickly, easily, and at a low cost. This online share management system grants you control of your shares. You can issue and transfer shares whenever necessary, communicate effortlessly with your shareholders, compile detailed share reports swiftly, and directly send out email share certificates\u2014all from the comfort of your desk.</p><p>This share management system has been exclusively designed by Transfer Online\u2122.</p>", "a[href=\"#proofread-professional-partners\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Proofread: Professional Partners<a class=\"headerlink\" href=\"#proofread-professional-partners\" title=\"Link to this heading\">#</a></h2><p><em>More than a stock transfer agent</em></p>", "a[href=\"#professional-partners\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Professional Partners<a class=\"headerlink\" href=\"#professional-partners\" title=\"Link to this heading\">#</a></h1><h2>Proofread: Professional Partners<a class=\"headerlink\" href=\"#proofread-professional-partners\" title=\"Link to this heading\">#</a></h2><p><em>More than a stock transfer agent</em></p>", "a[href=\"#jagalee\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Jagalee<a class=\"headerlink\" href=\"#jagalee\" title=\"Link to this heading\">#</a></h3><p>We are a team of thinkers and developers located in Portland, Oregon, dedicated to delivering excellence. Our commitment at Jagalee is unwavering.</p><p>Initially serving as the technology department of Transfer Online, Jagalee, LLC. has emerged as a leading software development company, consistently at the forefront of crafting electronic trading platforms for the financial industry.</p>"}
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
