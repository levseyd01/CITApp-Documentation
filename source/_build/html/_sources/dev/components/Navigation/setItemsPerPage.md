
(set-items-per-page)=

# setItemsPerPage

This function allows you to toggle the dropdowns at the bottom of the pages.

![Items Per Page Dropdown](../../../_static/dev/Components/Navigation/items-per-page-dropdown.jpg)


```ts

export async function setItemsPerPage(
  page: Page, 
  itemCount: string
): Promise<void> {
   console.log('Setting items per page to 100');
   await page.locator('div').filter({ hasText: /^10$/ }).nth(2).click();
   await page.getByRole('option', { name: itemCount }).click();
   await page.waitForTimeout(5000);

}
```
