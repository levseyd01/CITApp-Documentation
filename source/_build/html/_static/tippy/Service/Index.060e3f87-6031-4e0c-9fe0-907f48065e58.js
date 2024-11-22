selector_to_html = {"a[href=\"#service\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Service<a class=\"headerlink\" href=\"#service\" title=\"Link to this heading\">#</a></h1><p>This section has all proofread content related to the <strong>Service</strong> section of  SOLO 2.0.</p>", "a[href=\"sections/Proxy.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Proxy<a class=\"headerlink\" href=\"#proxy\" title=\"Link to this heading\">#</a></h1><h2>Edit Proxy<a class=\"headerlink\" href=\"#edit-proxy\" title=\"Link to this heading\">#</a></h2><h3>Proxy Detail Tab<a class=\"headerlink\" href=\"#proxy-detail-tab\" title=\"Link to this heading\">#</a></h3>", "a[href=\"sections/Add_Proxy.html#fill-out-proxy-information\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Fill out Proxy Information<a class=\"headerlink\" href=\"#fill-out-proxy-information\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Proxy.html#view-detail\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">View Detail<a class=\"headerlink\" href=\"#view-detail\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#sections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sections<a class=\"headerlink\" href=\"#sections\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Add_Proxy.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add Proxy<a class=\"headerlink\" href=\"#add-proxy\" title=\"Link to this heading\">#</a></h1><h2>Fill out Proxy Information<a class=\"headerlink\" href=\"#fill-out-proxy-information\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Add_Proxy.html#complete-summary-message\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Complete Summary Message<a class=\"headerlink\" href=\"#complete-summary-message\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Proxy.html#edit-proxy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Edit Proxy<a class=\"headerlink\" href=\"#edit-proxy\" title=\"Link to this heading\">#</a></h2><h3>Proxy Detail Tab<a class=\"headerlink\" href=\"#proxy-detail-tab\" title=\"Link to this heading\">#</a></h3>"}
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
