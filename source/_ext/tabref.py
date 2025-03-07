from docutils import nodes
from sphinx.util.docutils import SphinxRole

class TabRole(SphinxRole):
    def run(self):
        node = nodes.inline(self.text, self.text)
        node['classes'] = ['tab-reference']
        return [node], []

class TippyRefRole(SphinxRole):
    def run(self):
        """Generate a standard hyperlink with Tippy tooltip."""
        # Split reference into title and target if provided
        if '<' in self.text and self.text.endswith('>'):
            parts = self.text.split('<', 1)
            title = parts[0].strip()
            target = parts[1].rstrip('>')
        else:
            title = self.text
            target = self.text
            
        # Create a standard reference node
        refnode = nodes.reference('', '')
        refnode['refdocname'] = self.env.docname
        refnode['refuri'] = f"#{target}"  # Link to target ID on the page
        refnode['classes'] = ['tippy-reference']
        
        # Set text and data attribute for Tippy
        refnode += nodes.Text(title, title)
        refnode['data-tippy-content'] = f"Loading preview for {title}..."
        
        return [refnode], []

def setup(app):
    app.add_role('tabref', TabRole())
    app.add_role('tippy-ref', TippyRefRole())
    
    # Add CSS to style references
    app.add_css_file('css/custom.css')
    
    return {
        'version': '0.1',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }