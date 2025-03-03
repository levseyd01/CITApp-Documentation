
# checkPageSpecificFields

**Function:** `checkPageSpecificFields(page, pageFieldHeading, otherFieldLocator)`


The ``checkPageSpecificFields`` function is meant to be more flexible in that you can pass in page specific fields to the function and have it check to see if they exist on the page.




:::{admonition} Source Code
:class: seealso, dropdown

```typescript
export async function checkPageSpecificFields(
  page: Page,
  pageFieldHeading: string,
  otherFieldLocator: string
): Promise<void> {
  // 1) The heading (e.g. "Staff List")
  await expect(page.getByRole('heading', { name: pageFieldHeading })).toBeVisible();
  await page.getByRole('heading', { name: pageFieldHeading }).click();

  // 2) The main area
  await expect(page.getByRole('main')).toBeVisible();
  await page.getByRole('main').click();

  // 3) The text that includes `${otherFieldLocator}Contact Name`
  //    IMPORTANT: Use backticks for string interpolation
  await expect(page.getByText(`${otherFieldLocator}Contact Name`)).toBeVisible();
  await page.getByText(`${otherFieldLocator}Contact Name`).click();

  // 4) The "div" with text matching `^${otherFieldLocator}$` (a RegExp)
  //    Use new RegExp to dynamically build your regex
  const dynamicRegex = new RegExp(`^${otherFieldLocator}$`);
  await expect(page.locator('div').filter({ hasText: dynamicRegex })).toBeVisible();
  await page.locator('div').filter({ hasText: dynamicRegex }).click();

  // 5) Again "`${otherFieldLocator}Contact Name`"
  await expect(page.getByText(`${otherFieldLocator}Contact Name`)).toBeVisible();
  await page.getByText(`${otherFieldLocator}Contact Name`).click();
}
```

:::



```{image} ../../../_static/solo_app/Universal/CommonChecks/Common/check-page-specific-fields.jpg
:alt: Column Field(s) Example: Staff List (Users -> Staff )
:width: 500
:align: center
:caption: Column Field(s) Example: Staff List (Users -> Staff )
```



## Options


```{eval-rst}

.. rubric:: Options

.. rst:directive:option:: pageFieldHeading: str
   :type: str

   Pass the page field heading through as a string. 
   
.. rst:directive:option:: otherFieldLocator: str
   :type: str

   Pass the other field locator through as a string. 
   
``` 




## Example: Selecting Fields Found on Staf List Page


The ``Staff List`` page has fields hidden throughout the page. There is a common pattern in the fields. It seems like the pages have common field names where the name of the page is placed directly in front of the button or other type of selector. 


Here is an example of how **Playwright** sees the fields associated with the larger area of the page:



```{image} ../../../_static/solo_app/Universal/CommonChecks/Common/page-specific-field-example.jpg
:alt: Page Specific Field(s) Example: Staff List "Contact Name" (Users -> Staff )
:width: 500
:align: center
:caption: Page Specific Field(s) Example: Staff List "Contact Name"  (Users -> Staff )
```


And here is an example of how **Playwright** see the fields associated with the header bar for each specific homepage:




```{image} ../../../_static/solo_app/Universal/CommonChecks/Common/page-specific-fields_top_bar.jpg
:alt: Page Specific Field(s) Example: Staff List  "top navigation bar" (Users -> Staff )
:width: 500
:align: center
:caption: Page Specific Field(s) Example: Staff List "top navigation bar" (Users -> Staff )
```



- The String attached to "Contact Name" for any of the home pages throughout CIT (where the homepage is mostly a table) will be known as the ``pageFieldHeading``.
- The String attached to the top bar  for any of the home pages throughout CIT (where the homepage is mostly a table) will be known as the ``otherFieldLocator``.


**Parameters Chosen**

```typescript
pageSpecificHeading = 'Staff List',
pageSpecificLocator = 'add New Staff',
```
