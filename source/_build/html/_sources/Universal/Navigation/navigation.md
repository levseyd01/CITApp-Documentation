
# Navigation

```{eval-rst}
:ref:`clickDropdownFromSidebar<click-dropdown-from-sidebar-function>`
```


## Dropdown Sidenavigation From the CIT App

The sidenavigation throughout the apps are pretty similar. Below is a function that was created to help navigate the app. 

```{image} ../../_static/solo_app/Universal/navigation/image.png
:alt: Dropdown Sidenavigation From the CIT App
:width: 500
:align: center
```


## Options

```{eval-rst}

.. rubric:: Options

.. rst:directive:option:: tabToExpand: str
   :type: str

   Pass the name of the tab to to ``clickDropdownFromSidebar(page, tabToExpand)``. 
   
```  

# Example: Selecting "Staff"

If you wanted to click Staff, you would do the following::

```typescript
await clickDropdownFromSideBar(page, "Staff");
```

(source-code-click-dropdown-from-side-bar)=
## Source Code: clickDropdownFromSideBar


```typescript
export async function clickDropdownFromSideBar(
  page: Page,
  tabToExpand: string
): Promise<void> {
  console.log(`[clickDropdownFromSidebar] expanding the sidebar for ${tabToExpand}`);
  // clicks and opens the dropdown twice.
  await page.getByText(`${tabToExpand}expand_more`).click();
  await page.getByText(`${tabToExpand}expand_less`).click();
  await page.getByText(`${tabToExpand}expand_more`).click();
  await page.getByText(`${tabToExpand}expand_less`).click();
  await page.getByText(`${tabToExpand}expand_more`).click();
}
```

