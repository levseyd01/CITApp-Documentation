# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
import os
import sys
import re
import sphinx.writers.html5
from sphinx.util.docutils import SphinxDirective
from docutils import nodes
from docutils.parsers.rst import directives, Directive

from pathlib import Path

project = 'CIT Services User Manual'
copyright = '2024, Transfer Online.'
html_title = 'CIT Services User Manual'
author = ''
release = '1'

language = 'en'
sys.path.append(os.path.abspath('_ext'))
from tilde_plugin import tilde_plugin
# from myst_parser.mdit_to_docutils.base import DocutilsRenderer

import base64
source_suffix = ['.rst', '.md']
# -- General configuration ---------------------------------------------------

latex_elements = {
    'preamble': r'''
\usepackage{graphicx}
\usepackage{xcolor}
\usepackage{fancyhdr}
\usepackage{adjustbox}
\usepackage{titlesec}
\usepackage{titling}

\definecolor{ConfidentialRed}{RGB}{255,0,0}
\graphicspath{{../../source/_static/}}
\setlength{\headheight}{32.1pt}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

\titleformat{\chapter}[display]
{\normalfont\huge\bfseries}{\chaptertitlename\ \thechapter}{20pt}{\Huge}
\titlespacing*{\chapter}{0pt}{50pt}{40pt}

\fancyhf{}
\fancyhead[L]{\includegraphics[height=1cm]{solo_light.png}}
\fancyfoot[C]{\color{ConfidentialRed}\textbf{Transfer Online Confidential}}

\fancypagestyle{plain}{
    \fancyhf{}
    \fancyhead[L]{\includegraphics[height=1cm]{solo_light.png}}
    \fancyfoot[C]{\color{ConfidentialRed}\textbf{Transfer Online Confidential}}
}

\adjustboxset{max size={\textwidth}{\textheight}}

\title{test}
\author{test}
\date{\today}

\pagestyle{fancy}
''',
    'maketitle': r'''
\begin{titlepage}
\centering
\vspace*{\fill}
\includegraphics[width=\textwidth,height=\textheight,keepaspectratio]{solo_cover_page.png}
\vspace*{\fill}
\end{titlepage}
\clearpage
    ''',
}


extensions = [
     'lazyfigure',
     'lazy_figure',
     'sphinx.ext.intersphinx',
     #'sphinx.ext.autosectionlabel',
     'rst2pdf.pdfbuilder',
# 'sphinx_search.extension',
    #'sphinx_prompt',
  #  'sphinx.builders.linkcheck',
    'sphinx_copybutton',
    'sphinx_togglebutton',
    'sphinx_tippy',
   # 'hoverxref.extension',
    'myst_parser',
    'sphinx_design',
   # 'post_process_refs',
    'tabref',
    '_ext.missing_ref_handler'
]

if os.environ.get('READTHEDOCS') == 'True':
    try:
        extensions.remove('readthedocs_ext.readthedocs')
    except ValueError:
        pass


tippy_rtd_urls = [
    "https://www.sphinx-doc.org/en/master/",
    "https://transferonline.com/",
]

myst_enable_extensions = [
    "attrs_inline",
    "colon_fence",
    "tasklist"

]

'''
# Read the binary data
png_binary_data = Path("_static/upload-button.jpeg").read_bytes()
# Encode it in Base64 so you can embed it inline
upload_button_png_encoded = base64.b64encode(png_binary_data).decode('utf-8')

upload_button_b64 = base64.b64encode(png_binary_data).decode("utf-8")
'''

'''
with open("_static/upload-button.jpeg", "rb") as f:
    upload_button_b64 = base64.b64encode(f.read()).decode("utf-8")'''
    

tippy_custom_tips = {
    "#upload-button": (
        "<img src='/_static/solo_app/Universal/buttons/upload-button.webp' "
        "alt='Upload Button' style='width:200px;'>"
    ),
    "#upload-file-explorer-button": (
        "<img src='/_static/solo_app/Universal/buttons/open-file-explorer.jpg' "
        "alt='Open File Explorer' style='width:200px;'>"
    ),
    "#deactivate-button": (
        "<img src='/_static/solo_app/Universal/buttons/deactivate.webp' "
        "alt='Deactivate Button' style='width:200px;'>"
    ),
    "#add-new-staff-plus-button": (
        "<img src='/_static/solo_app/Universal/buttons/new-staff.webp' "
        "alt='Add New Staff Plus Button' style='width:200px;'>"
    ),
    "#file-explorer-open": (
        "<img src='/_static/solo_app/Universal/file-explorer-open.webp' "
        "alt='File Explorer Open' style='width:200px;'>"
    ),
    "#new-beneficiary-button": (
        "<img src='/_static/solo_app/Beneficiaries/new-beneficiary.webp' "
        "alt='New Beneficiary Button' style='width:200px;'>"
    ),
    "#delete-icon": (
        "<img src='/_static/solo_app/Universal/icons/delete-icon.webp' "
        "alt='Delete Icon' style='width:200px;'>"
    ),
    
    "#upload-logo-button": (
        "<img src='/_static/solo_app/Profile/upload-logo-section/upload-logo-button.webp' "
        "alt='Upload Logo Button' style='width:200px;'>"
    ),
    "#view-more-icon": (
        "<img src='/_static/solo_app/Universal/icons/view-more-icon.webp' "
        "alt='View More Icon' style='width:200px;'>"
    ),
    "#manage-button": (
        "<img src='/_static/solo_app/Universal/buttons/manage-button.webp' "
        "alt='Manage Button' style='width:200px;'>"
    ),
     "#save-changes": (
        "<img src='/_static/solo_app/Universal/buttons/save-changes.webp' "
        "alt='Save Changes' style='width:200px;'>"
    ),
    "#edit-permissions-icon": (
        "<img src='/_static/solo_app/Universal/actions/edit-permissions.webp' "
        "alt='Edit Permissions Icon' style='width:200px;'>"
    ),
    "#new-user-button": (
        "<img src='/_static/solo_app/Universal/buttons/new-user.webp' "
        "alt='New User Button' style='width:200px;'>"
    ),
    "#menu-icon": (
        "<img src='/_static/solo_app/Universal/icons/menu-icon.webp' "
        "alt='Menu Icon' style='width:100%;'>"
    ),
    "#navigating-to-user-detail": (
        "<img src='/_static/solo_app/User/User-Detail/navigating-to-user-detail-for-Users.webp' "
        "alt='Navigating to User Detail screenshot' style='width:100%;'>"
    ),
    "#reset-password": (
        "<img src='/_static/solo_app/Universal/buttons/reset-password.webp' "
        "alt='Reset Password' style='width:200px;'>"
    ),
    "#manage-icon": (
        "<img src='/_static/solo_app/Universal/icons/manage-icon.webp' "
        "alt='Manage Icon' style='width:200px;'>"
    ),
}



## These are for read the docs
"""
tippy_custom_tips = {
    "#upload-button": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/upload-button.jpeg' "
        "alt='Upload Button' style='width:200px;'>"
    ),
    "#deactivate-button": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/deactivate-button.webp' "
        "alt='Deactivate Button' style='width:200px;'>"
    ),
    "#file-explorer-open": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/file-explorer-open.webp' "
        "alt='File Explorer Open' style='width:200px;'>"
    ),
    "#save-icon":(
        "<img src='/en/stable-edit/_static/solo_app/Universal/icons/save-icon.webp' "
        "alt='Save Icon' style='width:200px;'>"
    ),
    "#new-beneficiary-button": (
        "<img src='/en/stable-edit/_static/solo_app/Beneficiaries/new-beneficiary.webp' "
        "alt='New Beneficiary Button' style='width:200px;'>"
    ),
    "#delete-icon": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/icons/delete-icon.webp' "
        "alt='Delete Icon' style='width:200px;'>"
    ),
    "#upload-logo-button": (
        "<img src='/en/stable-edit/_static/solo_app/Profile/upload-logo-section/upload-logo-button.webp' "
        "alt='Upload Logo Button' style='width:200px;'>"
    ),
    "#view-more-icon": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/icons/view-more-icon.webp' "
        "alt='View More Icon' style='width:200px;'>"
    ),
    "#manage-button": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/manage-button.webp' "
        "alt='Manage Button' style='width:200px;'>"
    ),
     "#save-changes": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/save-changes.jpg' "
        "alt='Save Changes' style='width:200px;'>"
    ),
    "#edit-permissions-icon": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/actions/edit-permissions.webp' "
        "alt='Edit Permissions Icon' style='width:200px;'>"
    ),
    "#new-user-button": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/new-user.webp' "
        "alt='New User Button' style='width:200px;'>"
    ),
    "#menu-icon": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/icons/menu-icon.webp' "
        "alt='Menu Icon' style='width:100%;'>"
    ),
    "#navigating-to-user-detail": (
        "<img src='/en/stable-edit/_static/solo_app/User/User-Detail/navigating-to-user-detail-for-Users.webp' "
        "alt='Navigating to User Detail screenshot' style='width:100%;'>"
    ),
     "#reset-password": (
        "<img src='/en/stable-edit/en/stable-edit/_static/solo_app/User/User-Detail/reset-password.webp' "
        "alt='Reset Password' style='width:200px;'>"
    ),
}

"""

# Optionally, tweak tippy settings:
#tippy_inline = True  # enable inline tips
#tippy_enable_mathjax = True
# More narrowly target just images + figures:
# For example, handle images, figures, and *any link pointing to a hash*
tippy_tip_selector = "figure, img, a[href^='#'], p, aside, div.admonition, div.literal-block-wrapper, table"

# tippy_tip_selector = "figure, table, img, "

tippy_skip_anchor_classes = (
    "headerlink",
    "sd-stretched-link",
)
#tippy_anchor_parent_selector =".tippy-sectionas"

tippy_anchor_parent_selector = "article.bd-article"

'''
pdf_documents = [

]'''

rst_prolog = """
.. role:: tab
   :class: tab-reference
"""


myst_all_links_external = False

''
'''intersphinx_mapping = {
    'tol': ('https://transferonline.com/', None),
    "sphinx": ("https://www.sphinx-doc.org/en/master", None)
}'''
''
myst_cache_enabled = True
html_theme_options = {
    "repository_url": "",
    "use_source_button": False,
    "use_edit_page_button": False,
    "path_to_docs": "source",
    "show_nav_level": 2,
    "previous_next_buttons_location": "both", 
    "repository_branch": "stable",
    "use_repository_button": False,
    #'language_selector': True,
    "use_sidenotes": True,
    "use_issues_button": False,
    #'logo_only': True,
    "collapse_navbar": False,
    "collapse_navigation": True,
    "use_download_button": False
}

html_css_files = ["tippy.css", "my_custom.css"]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

# Add our custom JS files
html_js_files = [
    "https://unpkg.com/@popperjs/core@2",
    "https://unpkg.com/tippy.js@6",     
    "tippy-init.js",

    'enhance_references.js',
    'tippy_preview.js'
]
#html_js_files = ["js/tippy.js", "js/popper.js"]
'''tippy_js = [
    "js/popper.min.js",
    "js/tippy.js"
]'''

tippy_js = ("https://unpkg.com/@popperjs/core@2", "https://unpkg.com/tippy.js@6")


html_logo = "_static/CIT-Logo-white-background.jpg"
# html_theme = 'sphinx_material'
html_theme = 'sphinx_book_theme'

templates_path = ['_templates']
exclude_patterns = ['_sources',


#'_static'
                    '_build', 'Thumbs.db', '.DS_Store', '**/*.ps1']


sphinx_design_use_inserted_localstorage = False



# -- General configuration ---------------------------------------------------

html_static_path = ['_static']

suppress_warnings = [
    'toc.excluded',  # Suppress warnings about documents not in a toctree
    'myst.header',   # Suppress warnings about header level increases
    "undefined",
    'myst.xref_missing', # Suppress warnings about missing cross-references
    'ref.ref',          # Suppress warnings about undefined references
    'ref.undefined',    # Suppress warnings about undefined labels
    'myst.directive_option', # Suppress warnings about directive options
    'myst.directive_parse', # Suppress warnings about directive parsing
]

'''
# Hoverxref configuration
hoverxref_auto_ref = True
hoverxref_role_types = {
    'hoverxref': 'tooltip',
    'ref': 'tooltip',
    'doc': 'tooltip',
    'class': 'tooltip',
}
hoverxref_domains = ['py', 'ref']
hoverxref_roles = ['hoverxref', 'ref', 'doc']
hoverxref_tooltip_maxwidth = 450
hoverxref_tooltip_class = 'rst-content'
hoverxref_tooltip_theme = ['tooltipster-shadow', 'tooltipster-shadow-custom']

# Read the Docs specific configuration
hoverxref_api_host = 'https://transferonline-citapp-documentation.readthedocs.io'
hoverxref_project = 'transferonline-citapp-documentation'
hoverxref_version = 'cit-superadmin'
hoverxref_api_version = 'cit-superadmin'
hoverxref_auto_ref = True
hoverxref_ignore_refs = ['genindex', 'modindex', 'search']
'''

class SearchDirective(SphinxDirective):
    """A custom directive that creates a search admonition with a search icon."""
    
    has_content = True
    required_arguments = 0
    optional_arguments = 0
    final_argument_whitespace = True
    option_spec = {
        'class': directives.class_option,
        'name': directives.unchanged,
    }

    def run(self):
        admonition_node = nodes.admonition()
        admonition_node['classes'] = ['search']
        
        title_text = "Search"
        textnodes, messages = self.state.inline_text(title_text, self.lineno)
        
        title = nodes.title(title_text, '', *textnodes)
        admonition_node += title
        
        content = nodes.paragraph()
        self.state.nested_parse(self.content, self.content_offset, content)
        admonition_node += content
        
        return [admonition_node]

def parse_tilde1(inline, match, state):
    """Handle ~some text~"""
    content = match.group(1)
    node = nodes.inline(content, content, classes=["page-reference"])
    return node

def parse_tilde2(inline, match, state):
    """Handle ~~some text~~"""
    content = match.group(1)
    node = nodes.inline(content, content, classes=["section-reference"])
    return node

def parse_tilde3(inline, match, state):
    """Handle ~~~some text~~~"""
    content = match.group(1)
    node = nodes.inline(content, content, classes=["subsection-reference"])
    return node

def parse_tilde4(inline, match, state):
    """Handle ~~~~some text~~~~"""
    content = match.group(1)
    node = nodes.inline(content, content, classes=["tab-reference"])
    return node

def split_explicit_title(text):
    """Split role content into title and target, if given."""
    match = re.search(r'^(.+?)\s*<(.+)>$', text)
    if match:
        return True, match.group(1), match.group(2)
    return False, text, text

# Create a tippy-ref reference that looks like a standard hyperlink but has Tippy tooltips
def tippy_ref_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a standard hyperlink-styled reference with Tippy tooltip support."""
    # Parse the input text for the link
    has_explicit_title, title, target = split_explicit_title(text)
    
    # Create reference node
    from sphinx.util import ws_re
    refnode = nodes.reference('', '')
    
    # Add target ID
    refnode['refid'] = target
    refnode['classes'] = ['standard-link', 'tippyAnchor']
    
    # Add text content
    innernode = nodes.inline(title, title)
    refnode.append(innernode)
    
    # Add data attribute for JavaScript to use
    refnode['data-preview'] = 'true'
    
    return [refnode], []

# Create a page reference with screen reader text.
def page_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a page reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Page: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['page-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create a section reference with screen reader text.
def section_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a section reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Section: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['section-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create a subsection reference with screen reader text.
def subsection_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a subsection reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Subsection: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['subsection-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create a tab reference with screen reader text.
def tab_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a tab reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Tab: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['tab-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create a table reference with screen reader text.
def table_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a table reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Table: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['table-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create a column reference with screen reader text.
def column_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a column reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Column: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['column-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create a standard item reference with screen reader text.
def item_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a standard item reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Item: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['item-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create an action reference with screen reader text.
def action_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create an action reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Action: ')
    screen_reader_node['classes'] = ['visually-hidden']
    # Create the visible text node
    text_node = nodes.inline('', text)
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['action-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create a code reference with screen reader text.
def code_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a code reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Code: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['code-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create an item-blue reference with screen reader text.
def item_blue_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create an item-blue reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Option: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['item-blue-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create an item-cyan reference with screen reader text.
def item_cyan_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create an item-cyan reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Cyan Option: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['item-cyan-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create an item-green reference with screen reader text.
def item_green_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create an item-green reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Green Option: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['item-green-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create an item-orange reference with screen reader text.
def item_orange_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create an item-orange reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Orange Option: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['item-orange-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create an item-deepblue reference with screen reader text.
def item_deepblue_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create an item-deepblue reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Deep Blue Option: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['item-deepblue-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create an item-teal reference with screen reader text.
def item_teal_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create an item-teal reference with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Teal Option: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['item-teal-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create an item-red reference with screen reader text.
def item_red_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create an item-red reference with grey background and red text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Red Option: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['item-red-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create a small icon reference that renders icons in a smaller size.
def smallicon_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a small icon reference that renders icons in a smaller size."""
    # Get the icon key by adding # prefix
    icon_key = f"#{text}"
    
    # Check if the icon exists in the tippy_custom_tips
    if icon_key in tippy_custom_tips:
        # Create a container for the small icon
        container = nodes.inline('', '')
        container['classes'] = ['small-icon-reference']
        
        # Create a raw HTML node with the icon content
        icon_html = tippy_custom_tips[icon_key]  # Get the HTML content
        raw_node = nodes.raw('', icon_html, format='html')
        container += raw_node
        
        return [container], []
    else:
        msg = inliner.reporter.error(f"Unknown icon: {text}", line=lineno)
        prb = inliner.problematic(rawtext, rawtext, msg)
        return [prb], [msg]

# Create a simple red text role
def red_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a simple red text display."""
    # Create the text node
    text_node = nodes.inline('', text)
    
    # Create the screen reader node for accessibility
    sr_node = nodes.inline('', 'Red text: ' + text)
    sr_node['classes'] = ['visually-hidden']
    
    # Create the container node
    container = nodes.inline('', '')
    container['classes'] = ['red-reference']
    container += sr_node
    container += text_node
    
    return [container], []


# Create a category reference with screen reader text.
def category_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a category reference for sidebar navigation items with screen reader text."""
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Navigation Category: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['category-reference']
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create a My Accounts category reference with account_balance icon
def my_accounts_category_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a My Accounts category reference with account_balance icon."""
    icon_node = nodes.inline('', '')
    icon_node['classes'] = ['mat-icon', 'material-icons', 'hide-icon-text']
    icon_node += nodes.Text('account_balance')
    
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'My Accounts Category: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node - ensure space between icon and text
    text_node = nodes.inline('', ' ' + text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['my-accounts-category', 'category-reference']
    container += screen_reader_node  # Add screen reader node first (hidden visually)
    container += icon_node           # Add icon next
    container += text_node           # Add text last
    
    return [container], []

def dashboard_category_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a Dashboard category reference with home icon."""
    # Create icon node (with hide-icon-text)
    icon_node = nodes.inline('', '')
    icon_node['classes'] = ['mat-icon', 'material-icons', 'hide-icon-text']
    icon_node += nodes.Text('home')
    
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Dashboard Category: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children (no hide-icon-text here)
    container = nodes.inline('', '')
    container['classes'] = ['dashboard-category', 'category-reference']
    container += icon_node
    container += screen_reader_node
    container += text_node
    
    return [container], []


def profile_category_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a Profile category reference with folder_shared icon."""
    # Create icon node (with hide-icon-text)
    icon_node = nodes.inline('', '')
    icon_node['classes'] = ['mat-icon', 'material-icons', 'hide-icon-text']
    icon_node += nodes.Text('folder_shared')
    
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Profile Category: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children (no hide-icon-text here)
    container = nodes.inline('', '')
    container['classes'] = ['profile-category', 'category-reference']
    container += icon_node
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create a User category reference with people icon
def user_category_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a User category reference with people icon."""
    # Create icon node
    icon_node = nodes.inline('', '')
    icon_node['classes'] = ['mat-icon', 'material-icons', 'hide-icon-text']
    icon_node += nodes.Text('people')
    
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'User Category: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['user-category', 'category-reference']
    container += icon_node
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create an Account category reference with account_balance icon
def account_category_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create an Account category reference with account_balance icon."""
    # Create icon node
    icon_node = nodes.inline('', '')
    icon_node['classes'] = ['mat-icon', 'material-icons', 'hide-icon-text']
    icon_node += nodes.Text('account_balance')
    
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Account Category: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['account-category', 'category-reference']
    container += icon_node
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create a Document category reference with file_copy icon
def document_category_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a Document category reference with file_copy icon."""
    # Create icon node
    icon_node = nodes.inline('', '')
    icon_node['classes'] = ['mat-icon', 'material-icons', 'hide-icon-text']
    icon_node += nodes.Text('file_copy')
    
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Document Category: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['document-category', 'category-reference']
    container += icon_node
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create an Offering category reference with local_offer icon
def offering_category_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create an Offering category reference with local_offer icon."""
    # Create icon node
    icon_node = nodes.inline('', '')
    icon_node['classes'] = ['mat-icon', 'material-icons', 'hide-icon-text']
    icon_node += nodes.Text('local_offer')
        
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Offering Category: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['offering-category', 'category-reference']
    container += icon_node
    container += screen_reader_node
    container += text_node
    
    return [container], []

# Create a Setting category reference with settings_suggest icon
def setting_category_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    """Create a Setting category reference with settings_suggest icon."""
    # Create icon node
    icon_node = nodes.inline('', '')
    icon_node['classes'] = ['mat-icon', 'material-icons', 'hide-icon-text']
    icon_node += nodes.Text('settings_suggest')
    
    # Create visually hidden span for screen readers
    screen_reader_node = nodes.inline('', 'Setting Category: ')
    screen_reader_node['classes'] = ['visually-hidden']
    
    # Create the visible text node
    text_node = nodes.inline('', text)
    
    # Create the container node with both children
    container = nodes.inline('', '')
    container['classes'] = ['setting-category', 'category-reference']
    container += icon_node
    container += screen_reader_node
    container += text_node
    
    return [container], []

def item_dark_blue_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    from docutils import nodes
    from docutils.parsers.rst.roles import set_classes
    set_classes(options)
    node = nodes.inline(rawtext, text, classes=['item-dark-blue'])
    return [node], []

def setup(app):
    """Add our functionality to Sphinx."""
    
    # Setup CSS
    app.add_css_file('css/custom.css')
      # Add Google Fonts for Material Icons
    app.add_css_file("https://fonts.googleapis.com/icon?family=Material+Icons")

    # Register directives
    app.add_directive('search', SearchDirective)  # Register the search directive

    # Register roles
    app.add_role('tilde1', parse_tilde1)
    app.add_role('tilde2', parse_tilde2)
    app.add_role('tilde3', parse_tilde3)
    app.add_role('tilde4', parse_tilde4)
    app.add_role('page', page_role)
    app.add_role('section', section_role)
    app.add_role('subsection', subsection_role)
    app.add_role('tab', tab_role)
    app.add_role('table', table_role)
    app.add_role('column', column_role)
    app.add_role('item', item_role)
    app.add_role('action', action_role)
    app.add_role('code', code_role)
    app.add_role('item-blue', item_blue_role)
    app.add_role('item-cyan', item_cyan_role)
    app.add_role('item-green', item_green_role)
    app.add_role('item-orange', item_orange_role)
    app.add_role('item-deepblue', item_deepblue_role)
    app.add_role('item-teal', item_teal_role)
    app.add_role('item-red', item_red_role)  # Add the new item-red role
    app.add_role('tippy-ref', tippy_ref_role)  # Add the new tippy-ref role
    app.add_role('smallicon', smallicon_role)  # Add the new smallicon role
    app.add_role('red', red_role)  # Add the new red text role
    app.add_role('category', category_role)  # Add the new category role
    app.add_role('my-accounts-category', my_accounts_category_role)
    app.add_role('dashboard-category', dashboard_category_role)
    app.add_role('profile-category', profile_category_role)
    app.add_role('user-category', user_category_role)
    app.add_role('account-category', account_category_role)
    app.add_role('document-category', document_category_role)
    app.add_role('offering-category', offering_category_role)
    app.add_role('setting-category', setting_category_role)
    app.add_role('item-dark-blue', item_dark_blue_role)
    
    # Tells Sphinx to load your custom CSS
    app.add_css_file("my_custom.css")
    
    return {
        'version': '0.1',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
