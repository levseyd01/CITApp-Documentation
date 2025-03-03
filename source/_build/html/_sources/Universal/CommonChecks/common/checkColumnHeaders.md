
# checkColumnHeaders




# Table Headers


**Function:** `checkColumnHeaders(page, columnHeaderNamesToCheck)`


Many CITApp pages have tables with headers, especially on their homepage with the same layout:


```{image} ../../../_static/solo_app/Universal/CommonChecks/Common/check-column-headers.jpg
:alt: Column Headers Example: Staff List (Users -> Staff )
:width: 500
:align: center
:caption: Column Headers Example: Staff List (Users -> Staff )
```



## Options

```{eval-rst}

.. rubric:: Options

.. rst:directive:option:: nameArray: str
   :type: str

   Pass an Array of names through as a list of strings. 
   
```  

## Example: Selecting Columns for the Staff List Page

If you wanted to click Staff, you would do the following::

```typescript
columnHeaderNamesToCheck = columnNames.Staff.HomePage,
await checkColumnHeaders(page, columnHeaderNamesToCheck);
```

Where ``columnNames.Staff.HomePage`` is a the list of column names that are on the Staff List homepage. 



```typescript

// @Config/cit-app-config.ts
export const columnNames = {
    Staff: {
      HomePage: [
        'Contact Name',
        'Contact Email',
        'Number of Visits',
        'Last Logged In',
        'Status',
        'Action'
      ]
    },
    // Other categories/pages can be added here:
    // e.g., Sales: { Dashboard: [...] }
  };

```

## Source Code


```typescript
export async function checkColumnHeaders(
  page: Page,
  nameArray: string[]
): Promise<void> {
  for (const columnName of nameArray) {
    await expect(page.getByRole('columnheader', { name: columnName })).toBeVisible();
    await page.getByRole('columnheader', { name: columnName }).click();
  }
}
```

