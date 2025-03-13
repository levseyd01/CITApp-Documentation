# Role Definitions and Examples

This page provides examples of all the available roles that can be used in the documentation. These roles help maintain consistent styling and enhance accessibility throughout the documentation.

## Basic Text Roles

### Page Role

The page role is used to reference pages:

```markdown
{page}`My Accounts Page` page
```

Renders as: {page}`My Accounts Page` page

### Section and Subsection Roles

These roles help reference different levels of content:

```markdown
{section}`Main Section` section
```

Renders as: {section}`Main Section` section

```markdown
{subsection}`Sub Section` subsection
```

Renders as: {subsection}`Sub Section` subsection

### Tab Role

Used to reference tabs in the application:

```markdown
{tab}`Settings Tab` tab
```

Renders as: {tab}`Settings Tab` tab

### Table and Column Roles

Used for referencing tables and columns:

```markdown
{table}`User Table` table
```

Renders as: {table}`User Table` table

```markdown
{column}`Username Column` column
```

Renders as: {column}`Username Column` column

## UI Element Roles

### Item Role

Used for general UI elements:

```markdown
{item}`Button` item {item}`Checkbox` item {item}`Dropdown`
```

Renders as: {item}`Button` item {item}`Checkbox` item {item}`Dropdown`

### Action Role

Used for user actions:

```markdown
{action}`Click` action {action}`Drag` action {action}`Submit`
```

Renders as: {action}`Click` action {action}`Drag` action {action}`Submit`

### Code Role

Used for inline code:

```markdown
{code}`function()` code {code}`variable` code {code}`if statement`
```

Renders as: {code}`function()` code {code}`variable` code {code}`if statement`

## Color-Specific Item Roles

These roles provide colored styling for UI elements:

```markdown
{item-blue}`Blue Item` item-blue
```

Renders as: {item-blue}`Blue Item` item-blue

```markdown
{item-cyan}`Cyan Item` item-cyan
```

Renders as: {item-cyan}`Cyan Item` item-cyan

```markdown
{item-green}`Green Item` item-green
```

Renders as: {item-green}`Green Item` item-green

```markdown
{item-orange}`Orange Item` item-orange
```

Renders as: {item-orange}`Orange Item` item-orange

```markdown
{item-deepblue}`Deep Blue Item` item-deepblue
```

Renders as: {item-deepblue}`Deep Blue Item` item-deepblue

```markdown
{item-teal}`Teal Item` item-teal
```

Renders as: {item-teal}`Teal Item` item-teal

```markdown
{item-red}`Required Field` item-red
```

Renders as: {item-red}`Required Field` item-red

## Special Formatting Roles

### Small Icon Role

Used for displaying icons in a smaller size:

```markdown
{smallicon}`Icon` smallicon
```

Renders as: {smallicon}`Icon` smallicon

### Red Role

Used to emphasize text in red:

```markdown
{red}`Important Note` red
```

Renders as: {red}`Important Note` red

### Tippy Reference Role

Creates a reference with a tooltip:

```markdown
{tippy-ref}`Tooltip Reference <#tooltip-example>` tippy-ref
```

Renders as: {tippy-ref}`Tooltip Reference <#tooltip-example>` tippy-ref

## Category Roles

These roles match the navigation structure in the application and include the corresponding Material Icons.

### Application-Specific Category Roles

```markdown
{my-accounts-category}`My Accounts` my-accounts-category
```

Renders as: {my-accounts-category}`My Accounts` my-accounts-category

```markdown
{dashboard-category}`Dashboard` dashboard-category
```

Renders as: {dashboard-category}`Dashboard` dashboard-category

```markdown
{profile-category}`Profile` profile-category
```

Renders as: {profile-category}`Profile` profile-category

```markdown
{user-category}`User` user-category
```

Renders as: {user-category}`User` user-category

```markdown
{account-category}`Account` account-category
```

Renders as: {account-category}`Account` account-category

```markdown
{document-category}`Document` document-category
```

Renders as: {document-category}`Document` document-category

```markdown
{offering-category}`Offering` offering-category
```

Renders as: {offering-category}`Offering` offering-category

```markdown
{setting-category}`Setting` setting-category
```

Renders as: {setting-category}`Setting` setting-category

## Usage in Documentation

When writing documentation, use these roles to maintain consistency and improve clarity. For example:

```markdown
1. Navigate to the {my-accounts-category}`My Accounts` my-accounts-category section.
2. Click the {item}`Save` item button.
3. Fill in the {column}`Name` column field.
```

This will ensure that UI elements are consistently styled and easily recognizable throughout the documentation.

## MyST-Parser Admonitions Example

MyST-Parser also supports admonitions. Here are some examples:

```python
# Note example
# The actual rendered version will show a styled note box with this text
This is a note admonition.
```

```python
# Warning example
# The actual rendered version will show a styled warning box with this text
This is a warning admonition.
```

```python
# Danger example
# The actual rendered version will show a styled danger box with this text
This is a danger admonition.
```

```python
# Tip example
# The actual rendered version will show a styled tip box with this text
This is a tip admonition.
```

## Tabbed Content Example

MyST-Parser supports tabbed content:

```python
# Tab-set example
# The actual rendered version will show a tabbed interface with three tabs
# Tab 1: Content for tab 1
# Tab 2: Content for tab 2
# Tab 3: Content for tab 3
