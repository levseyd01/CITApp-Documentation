# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
import os
import sys

from pathlib import Path
from docutils import nodes

project = 'CIT Services User Manual'
copyright = '2024, Transfer Online.'
html_title = 'CIT Services User Manual'
author = ''
release = '1'

language = 'en'
import sys
import os
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
     'sphinx.ext.autosectionlabel',
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
    'post_process_refs',
    'tabref']

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
'''tippy_custom_tips = {
    "#upload-button": (
        "<img src='/_static/solo_app/Universal/buttons/upload-button.jpeg' "
        "alt='Upload Button' style='width:200px;'>"
    ),
    "#deactivate-button": (
        "<img src='/_static/solo_app/Universal/buttons/deactivate-button.jpeg' "
        "alt='Deactivate Button' style='width:200px;'>"
    ),
    "#file-explorer-open": (
        "<img src='/_static/solo_app/Universal/file-explorer-open.jpeg' "
        "alt='File Explorer Open' style='width:200px;'>"
    ),
    "#new-beneficiary-button": (
        "<img src='/_static/solo_app/Beneficiaries/new-beneficiary.jpeg' "
        "alt='New Beneficiary Button' style='width:200px;'>"
    ),
    "#delete-icon": (
        "<img src='/_static/solo_app/Universal/icons/delete-icon.jpeg' "
        "alt='Delete Icon' style='width:200px;'>"
    ),
    "#upload-logo-button": (
        "<img src='/_static/solo_app/Profile/upload-logo-section/upload-logo-button.jpeg' "
        "alt='Upload Logo Button' style='width:200px;'>"
    ),
    "#view-more-icon": (
        "<img src='/_static/solo_app/Universal/icons/view-more-icon.jpeg' "
        "alt='View More Icon' style='width:200px;'>"
    ),
    "#manage-button": (
        "<img src='/_static/solo_app/Universal/buttons/manage-button.jpeg' "
        "alt='Manage Button' style='width:200px;'>"
    ),
     "#save-changes": (
        "<img src='/_static/solo_app/Universal/buttons/save-changes.jpeg' "
        "alt='Save Changes' style='width:200px;'>"
    ),
    "#edit-permissions-icon": (
        "<img src='/_static/solo_app/Universal/actions/edit-permissions.jpeg' "
        "alt='Edit Permissions Icon' style='width:200px;'>"
    ),
    "#new-user-button": (
        "<img src='/_static/solo_app/Universal/buttons/new-user.jpeg' "
        "alt='New User Button' style='width:200px;'>"
    ),
    "#menu-icon": (
        "<img src='/_static/solo_app/Universal/icons/menu-icon.jpeg' "
        "alt='Menu Icon' style='width:100%;'>"
    ),
    "#navigating-to-user-detail": (
        "<img src='/_static/solo_app/User/User-Detail/navigating-to-user-detail-for-Users.jpeg' "
        "alt='Navigating to User Detail screenshot' style='width:100%;'>"
    ),
     "#reset-password": (
        "<img src='/en/stable-edit/_static/solo_app/User/User-Detail/reset-password.jpeg' "
        "alt='Reset Password' style='width:200px;'>"
    ),
}
'''
tippy_custom_tips = {
    "#upload-button": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/upload-button.jpeg' "
        "alt='Upload Button' style='width:200px;'>"
    ),
    "#deactivate-button": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/deactivate-button.jpeg' "
        "alt='Deactivate Button' style='width:200px;'>"
    ),
    "#file-explorer-open": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/file-explorer-open.jpeg' "
        "alt='File Explorer Open' style='width:200px;'>"
    ),
    "#save-icon":(
        "<img src='/en/stable-edit/_static/solo_app/Universal/icons/save-icon.jpeg' "
        "alt='Save Icon' style='width:200px;'>"
    ),
    "#new-beneficiary-button": (
        "<img src='/en/stable-edit/_static/solo_app/Beneficiaries/new-beneficiary.jpeg' "
        "alt='New Beneficiary Button' style='width:200px;'>"
    ),
    "#delete-icon": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/icons/delete-icon.jpeg' "
        "alt='Delete Icon' style='width:200px;'>"
    ),
    "#upload-logo-button": (
        "<img src='/en/stable-edit/_static/solo_app/Profile/upload-logo-section/upload-logo-button.jpeg' "
        "alt='Upload Logo Button' style='width:200px;'>"
    ),
    "#view-more-icon": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/icons/view-more-icon.jpeg' "
        "alt='View More Icon' style='width:200px;'>"
    ),
    "#manage-button": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/manage-button.jpeg' "
        "alt='Manage Button' style='width:200px;'>"
    ),
     "#save-changes": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/save-changes.jpeg' "
        "alt='Save Changes' style='width:200px;'>"
    ),
    "#edit-permissions-icon": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/actions/edit-permissions.jpeg' "
        "alt='Edit Permissions Icon' style='width:200px;'>"
    ),
    "#new-user-button": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/new-user.jpeg' "
        "alt='New User Button' style='width:200px;'>"
    ),
    "#menu-icon": (
        "<img src='/en/stable-edit/_static/solo_app/Universal/icons/menu-icon.jpeg' "
        "alt='Menu Icon' style='width:100%;'>"
    ),
    "#navigating-to-user-detail": (
        "<img src='/en/stable-edit/_static/solo_app/User/User-Detail/navigating-to-user-detail-for-Users.jpeg' "
        "alt='Navigating to User Detail screenshot' style='width:100%;'>"
    ),
     "#reset-password": (
        "<img src='/en/stable-edit/en/stable-edit/_static/solo_app/User/User-Detail/reset-password.jpeg' "
        "alt='Reset Password' style='width:200px;'>"
    ),
}



# Optionally, tweak tippy settings:
#tippy_inline = True  # enable inline tips
#tippy_enable_mathjax = True

tippy_tip_selector = "figure, table, img, p, aside, div.admonition, div.literal-block-wrapper"

tippy_skip_anchor_classes = (
    "headerlink",
    "sd-stretched-link",
)
#tippy_anchor_parent_selector =".tippy-section"

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
    "repository_branch": "stable",
    "use_repository_button": False,
    #'language_selector': True,
    "use_issues_button": False,
    #'logo_only': True,
    "collapse_navbar": False,
    "collapse_navigation": True,
    "use_download_button": False
}

html_js_files = [
    'close_dropdowns.js',  # must match the filename in _static/
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

html_css_files = ["tippy.css", "my_custom.css"]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output


# html_theme = "sphinx_rtd_theme"
html_static_path = ['_static']


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

suppress_warnings = [
   "undefined"
]




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
    text_node['classes'] = ['action-reference']
    
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


def setup(app):
    """Add our functionality to Sphinx."""
    
    # Setup CSS
    app.add_css_file('css/custom.css')

    # Register roles
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
    
    # We attach these new "inline syntaxes" to the DocutilsRenderer,
    # which is used by MyST-Parser:
    try:
        from myst_parser.mdit_to_docutils.base import DocutilsRenderer
        
        # Order is important - register the patterns from most specific to least specific
        DocutilsRenderer.inline_syntaxes.append(
            ("tilde4", r'~~~~([^~]+)~~~~', parse_tilde4)
        )
        DocutilsRenderer.inline_syntaxes.append(
            ("tilde3", r'~~~([^~]+)~~~', parse_tilde3)
        )
        DocutilsRenderer.inline_syntaxes.append(
            ("tilde2", r'~~([^~]+)~~', parse_tilde2)
        )
        DocutilsRenderer.inline_syntaxes.append(
            ("tilde1", r'~([^~]+)~', parse_tilde1)
        )
        print("Successfully registered tilde patterns!")
    except Exception as e:
        print(f"Warning: Could not register tilde patterns: {e}")
    
    # Tells Sphinx to load your custom CSS
    app.add_css_file("my_custom.css")
    
    return {
        'version': '0.1',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
