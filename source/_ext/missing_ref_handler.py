"""
A Sphinx extension to handle missing reference warnings.
This extension will prevent missing references from causing build errors
and provide fallback behavior for missing references.
"""

from docutils import nodes
from sphinx.errors import NoUri
from sphinx.util import logging

logger = logging.getLogger(__name__)

def missing_reference_handler(app, env, node, contnode):
    """Handle missing references gracefully.
    
    This function is called when Sphinx encounters a reference that it cannot resolve.
    Instead of failing, it returns a placeholder node that maintains the link text.
    """
    # Get the target text
    target = node.get('reftarget', '')
    
    if target:
        # Create a text node with the original content but mark it as unresolved
        new_node = nodes.inline('', '', *contnode.children, classes=['unresolved-ref'])
        
        # If it's a hash reference, we'll try to make it work with the tippy system
        if target.startswith('#'):
            hash_id = target[1:]
            new_node = nodes.reference('', '')
            new_node['refuri'] = target
            new_node.extend(contnode.children)
            new_node['classes'] = ['unresolved-ref']
            
            # Log a more helpful message for debugging
            logger.info(f"Created fallback node for hash reference: {target}")
            return new_node
        
        return new_node
    
    # If we can't handle it, return None to let Sphinx use its default handling
    return None

def setup(app):
    """Set up the extension."""
    # Connect the missing reference handler
    app.connect('missing-reference', missing_reference_handler)
    
    # Identify the extension as parallel-safe
    return {
        'version': '0.1',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
