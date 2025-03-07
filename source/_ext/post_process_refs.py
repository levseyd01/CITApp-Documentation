# in your _ext/post_process_refs.py

from sphinx.transforms import SphinxTransform
from docutils import nodes

class RefClassTransform(SphinxTransform):
    default_priority = 800

    def apply(self):
        for node in self.document.traverse(nodes.reference):
            # Check if the node is a sphinx cross-reference
            if 'refuri' in node.attributes or 'refid' in node.attributes:
                # Add tippyAnchor class for tooltip functionality without changing appearance
                classes = node.get('classes', [])
                if 'tippyAnchor' not in classes:
                    classes.append('tippyAnchor')
                
                # Add data-tippy-content attribute
                # This enables Tippy to work with standard ref links
                if hasattr(node, 'attributes') and not node.get('data-tippy-content'):
                    # Add a placeholder attribute for Tippy to grab during build
                    node['data-tippy-content'] = 'Loading preview...'
                
                node['classes'] = classes

def setup(app):
    app.add_transform(RefClassTransform)
    
    # Make sure this JavaScript gets included in all pages
    app.add_js_file('close_dropdown.js')
    
    return {
        'version': '1.0',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
