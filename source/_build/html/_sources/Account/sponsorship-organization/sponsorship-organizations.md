
(sponsorship-organization-section)=
# Sponsorship Organizations


The **Sponsorship Organizations** section allows you to:

- View Sponsorship Organization details
- Manage Sponsorship Organizations
- Add New Sponsorship Organization


The **Sponsorship Organizations** section is located under the **Account** section, and opens up to the following table:


```{lazyfigure} ../../_static/solo_app/Universal/view-sponsorship-organization/Main/sponsorship-organization-homepage.webp
:width: 100%
:align: center
:name: sponsor-organization-homepage

Sponsorship Organization, Homepage
```

:::{admonition} searchForUser Function can be used here
:class: tip, dropdown

```ts

/**
 * Attempts to perform a search for a user by trying multiple combinations of:
 *   - How to click/activate the search box,
 *   - How to submit the search.
 *
 * @param page The Playwright page object.
 * @param searchTerm The term to search for.
 */
export async function searchForUser(page: Page, searchTerm: string): Promise<void> {
    // Define your click strategies for the search box.
    const clickStrategies: Array<() => Promise<void>> = [
      async () => {
        console.log("Click strategy: using getByPlaceholder()");
  
        await page.waitForTimeout(5000);
        const placeholderClick = page.getByPlaceholder("Search User Name/Email")
        await page.waitForTimeout(5000);
        await placeholderClick.click();
      },
      async () => {
        console.log("Click strategy: using outer rim locator");
        await page.locator(
          ".col-sm-8 > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix"
        ).click();
      },
    ];
  
    await page.waitForTimeout(1000);
  
    // Define your strategies for triggering the search.
    const searchStrategies: Array<() => Promise<void>> = [
      async () => {
        console.log("Search strategy: clicking search icon");
        const searchIcon = page.getByText("search");
        await searchIcon.click();
        // Optionally wait a bit after clicking the icon
        await page.waitForTimeout(3000);
      },
      async () => {
        console.log("Search strategy: pressing Enter");
  
        const searchBoxEnter = page.getByPlaceholder("Search User Name/Email");
        console.log("searchBoxEnter is set. Preparing for click");
        console.log("Clicking searchBoxEnter");
        await searchBoxEnter.click();
        console.log("timeout")
        await page.waitForTimeout(3000);
        console.log("searchBoxEnter clicked. Preparing for Enter press");
        await searchBoxEnter.press("Enter");
        // Optionally wait a bit after pressing Enter
        await page.waitForTimeout(5000);
      },
    ];
  
    let lastError: unknown = null;
  
    // Try each click strategy.
    for (const click of clickStrategies) {
      try {
        await click();
        // Fill the search term (only one way)
  
        console.log("Filling search term:", searchTerm);
        await page.getByPlaceholder("Search User Name/Email").fill(searchTerm);
  
        // Now try each search submission strategy.
        for (const search of searchStrategies) {
          try {
            await search();
            console.log("Search successful with current combination.");
            return; // Exit if the search action succeeds.
          } catch (e) {
            console.warn("Search submission strategy failed:", e);
            lastError = e;
          }
        }
      } catch (e) {
        console.warn("Click strategy failed:", e);
        lastError = e;
      }
    }
    throw new Error(`All search attempts failed. Last error: ${lastError}`);
    await expect(page.getByRole('row').last()).toBeVisible({ timeout: 10000 });
  }

```

:::



### Navigating the Sponsorship Organization Section

The **Sponsorship Organizations** section has a table with the following columns:

- ID
- Sponsorship Organization Name
- Number of CIT Corporations
- Website
- Email
- Phone
- Status
- Action


```{lazyfigure} ../../_static/solo_app/Universal/view-sponsorship-organization/Main/sponsorship-organization-homepage-table-columns.webp
:width: 100%
:align: center
:name: sponsor-organization-homepage

Sponsorship Organization, Homepage
``` 



:::{admonition} checkColumnHeaders function
:class: tip, dropdown

```ts

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
:::


::::{admonition} getAllCellsFromTable function
:class: tip, dropdown

This function grabs all the cells in from the table. 

:::{admonition} getAllCellsFromTable Example
:class: note, dropdown
![getAllCellsFromTable](../../_static/dev/Account/sponsorship-organization/all-table-fields-highlighted.png)

:::

```ts


export async function getAllCellsFromTable(
    page: Page,
    ): Promise<string[]> {  
        const allCells = await page.getByRole('cell').allTextContents();
        console.log(allCells);
        await page.waitForTimeout(5000);
        return allCells;
    }

```
::::

```{include} sponsorship-account-sections/view-sponsorship-account.md
```



```{include} sponsorship-account-sections/subsections/tabs-explained.md
```
