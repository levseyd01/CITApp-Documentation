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
            
        # Create a standard reference node with appropriate reference attributes
        refnode = nodes.reference('', '')
        
        # Handle both cross-document and internal references
        newnode = nodes.reference()
        innernode = nodes.inline(title, title)
        newnode['refdocname'] = self.env.docname
        
        # Set up cross-document reference (similar to how Sphinx handles :ref:)
        newnode['refuri'] = self.env.app.builder.get_relative_uri(
            self.env.docname, self.env.docname) + '#' + target
        newnode['classes'] = ['tippy-reference']
        newnode += innernode
        
        return [newnode], []

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