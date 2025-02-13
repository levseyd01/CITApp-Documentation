# in your _ext/post_process_refs.py

from sphinx.transforms import SphinxTransform
from docutils import nodes

class RefClassTransform(SphinxTransform):
    default_priority = 800

    def apply(self):
        for node in self.document.traverse(nodes.reference):
            # Check if the node is a sphinx cross-reference
            # e.g., "internal" references or ones with a certain attribute
            if 'refuri' in node.attributes or 'refid' in node.attributes:
                # or some more specific condition
                classes = node.get('classes', [])
                if 'tippyAnchor' not in classes:
                    classes.append('tippyAnchor')
                node['classes'] = classes

def setup(app):
    app.add_transform(RefClassTransform)
    return {
        'version': '1.0',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
