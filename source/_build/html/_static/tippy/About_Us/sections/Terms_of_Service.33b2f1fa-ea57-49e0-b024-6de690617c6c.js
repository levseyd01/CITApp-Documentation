selector_to_html = {"a[href=\"#\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Proofread: Terms of Service<a class=\"headerlink\" href=\"#proofread-terms-of-service\" title=\"Link to this heading\">#</a></h1><p><em>Terms of Service: Creation of Secure Recordkeeping Models Tailored to Your Company\u2019s Needs</em></p><p>By accessing and using this website, you consent to adhere to the following terms and conditions, along with any additional terms and conditions published on any page of this site. It is imperative to read all terms and conditions thoroughly. These terms and conditions are subject to change at any time; hence, periodically review them. Moreover, when utilizing specific services, you may be subject to further guidelines or terms applicable to such services, which may be posted occasionally or that you may have to agree to before using such services.</p>", "a[href=\"#proofread-terms-of-service\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Proofread: Terms of Service<a class=\"headerlink\" href=\"#proofread-terms-of-service\" title=\"Link to this heading\">#</a></h1><p><em>Terms of Service: Creation of Secure Recordkeeping Models Tailored to Your Company\u2019s Needs</em></p><p>By accessing and using this website, you consent to adhere to the following terms and conditions, along with any additional terms and conditions published on any page of this site. It is imperative to read all terms and conditions thoroughly. These terms and conditions are subject to change at any time; hence, periodically review them. Moreover, when utilizing specific services, you may be subject to further guidelines or terms applicable to such services, which may be posted occasionally or that you may have to agree to before using such services.</p>"}
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
