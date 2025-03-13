selector_to_html = {"a[href=\"#tab-role\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Tab Role<a class=\"headerlink\" href=\"#tab-role\" title=\"Link to this heading\">#</a></h3><p>Used to reference tabs in the application:</p>", "a[href=\"#role-definitions-and-examples\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Role Definitions and Examples<a class=\"headerlink\" href=\"#role-definitions-and-examples\" title=\"Link to this heading\">#</a></h1><p>This page provides examples of all the available roles that can be used in the documentation. These roles help maintain consistent styling and enhance accessibility throughout the documentation.</p>", "a[href=\"#ui-element-roles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">UI Element Roles<a class=\"headerlink\" href=\"#ui-element-roles\" title=\"Link to this heading\">#</a></h2><h3>Item Role<a class=\"headerlink\" href=\"#item-role\" title=\"Link to this heading\">#</a></h3><p>Used for general UI elements:</p>", "a[href=\"#table-and-column-roles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Table and Column Roles<a class=\"headerlink\" href=\"#table-and-column-roles\" title=\"Link to this heading\">#</a></h3><p>Used for referencing tables and columns:</p>", "a[href=\"#code-role\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Code Role<a class=\"headerlink\" href=\"#code-role\" title=\"Link to this heading\">#</a></h3><p>Used for inline code:</p>", "a[href=\"#color-specific-item-roles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Color-Specific Item Roles<a class=\"headerlink\" href=\"#color-specific-item-roles\" title=\"Link to this heading\">#</a></h2><p>These roles provide colored styling for UI elements:</p>", "a[href=\"#tabbed-content-example\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tabbed Content Example<a class=\"headerlink\" href=\"#tabbed-content-example\" title=\"Link to this heading\">#</a></h2><p>MyST-Parser supports tabbed content:</p>", "a[href=\"#red-role\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Red Role<a class=\"headerlink\" href=\"#red-role\" title=\"Link to this heading\">#</a></h3><p>Used to emphasize text in red:</p>", "a[href=\"#tippy-reference-role\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Tippy Reference Role<a class=\"headerlink\" href=\"#tippy-reference-role\" title=\"Link to this heading\">#</a></h3><p>Creates a reference with a tooltip:</p>", "a[href=\"#application-specific-category-roles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Application-Specific Category Roles<a class=\"headerlink\" href=\"#application-specific-category-roles\" title=\"Link to this heading\">#</a></h3><p>Renders as: <span class=\"my-accounts-category category-reference\"><span class=\"visually-hidden\">My Accounts Category: </span><span class=\"mat-icon material-icons hide-icon-text\">account_balance</span><span> My Accounts</span></span></p>", "a[href=\"#item-role\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Item Role<a class=\"headerlink\" href=\"#item-role\" title=\"Link to this heading\">#</a></h3><p>Used for general UI elements:</p>", "a[href=\"#usage-in-documentation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Usage in Documentation<a class=\"headerlink\" href=\"#usage-in-documentation\" title=\"Link to this heading\">#</a></h2><p>When writing documentation, use these roles to maintain consistency and improve clarity. For example:</p>", "a[href=\"#special-formatting-roles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Special Formatting Roles<a class=\"headerlink\" href=\"#special-formatting-roles\" title=\"Link to this heading\">#</a></h2><h3>Small Icon Role<a class=\"headerlink\" href=\"#small-icon-role\" title=\"Link to this heading\">#</a></h3><p>Used for displaying icons in a smaller size:</p>", "a[href=\"#myst-parser-admonitions-example\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">MyST-Parser Admonitions Example<a class=\"headerlink\" href=\"#myst-parser-admonitions-example\" title=\"Link to this heading\">#</a></h2><p>MyST-Parser also supports admonitions. Here are some examples:</p>", "a[href=\"#basic-text-roles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Basic Text Roles<a class=\"headerlink\" href=\"#basic-text-roles\" title=\"Link to this heading\">#</a></h2><h3>Page Role<a class=\"headerlink\" href=\"#page-role\" title=\"Link to this heading\">#</a></h3><p>The page role is used to reference pages:</p>", "a[href=\"#small-icon-role\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Small Icon Role<a class=\"headerlink\" href=\"#small-icon-role\" title=\"Link to this heading\">#</a></h3><p>Used for displaying icons in a smaller size:</p>", "a[href=\"#category-roles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Category Roles<a class=\"headerlink\" href=\"#category-roles\" title=\"Link to this heading\">#</a></h2><p>These roles match the navigation structure in the application and include the corresponding Material Icons.</p>", "a[href=\"#page-role\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Page Role<a class=\"headerlink\" href=\"#page-role\" title=\"Link to this heading\">#</a></h3><p>The page role is used to reference pages:</p>", "a[href=\"#section-and-subsection-roles\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Section and Subsection Roles<a class=\"headerlink\" href=\"#section-and-subsection-roles\" title=\"Link to this heading\">#</a></h3><p>These roles help reference different levels of content:</p>", "a[href=\"#action-role\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Action Role<a class=\"headerlink\" href=\"#action-role\" title=\"Link to this heading\">#</a></h3><p>Used for user actions:</p>"}
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
