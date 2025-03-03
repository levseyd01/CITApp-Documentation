

# Sponsor Organizations


- Test the fields through the table on the first page after clicking Sponsor Organizations Table

```Typescript
import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 720,
    width: 1280
  }
});

test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/list');
  await page.getByRole('link', { name: 'Sponsor Organizations' }).click();
  await page.getByRole('heading', { name: 'Sponsor Organization List' }).click();
  await page.getByText('Filteradd').click();
  await page.locator('#mat-select-value-11').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByPlaceholder('Search Sponsor Organization').click();
  await page.getByRole('columnheader', { name: 'ID' }).click();
  await page.getByRole('button', { name: 'Number of CIT Corporations' }).click();
  await page.getByRole('button', { name: 'Website' }).click();
  await page.getByRole('button', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Phone' }).click();
  await page.getByRole('columnheader', { name: 'Action' }).click();
  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('button', { name: 'Phone' }).click();
  await page.getByRole('button', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Website' }).click();
  await page.getByRole('button', { name: 'Website' }).click();
  await page.getByRole('button', { name: 'Number of CIT Corporations' }).click();
  await page.getByRole('button', { name: 'Number of CIT Corporations' }).click();
  await page.getByRole('button', { name: 'Sponsor Organization' }).click();
  await page.getByRole('button', { name: 'Sponsor Organization' }).click();
  await page.getByRole('button', { name: 'ID' }).click();
  await page.getByRole('button', { name: 'ID' }).click();
  await page.locator('td:nth-child(7)').first().click();
  await page.locator('mat-card-content').filter({ hasText: 'ID Sponsor Organization' }).click();
  await page.getByText('Sponsor Organization ListFilteraddStatusAll search ID Sponsor Organization').click();
  await page.locator('.mat-mdc-form-field-subscript-wrapper').first().click();
  await page.getByText('Filteradd').click();
  await page.getByText('Items per page:').click();
  await page.getByText('Items per page: 10 1 – 10 of').click();
  await page.locator('div').filter({ hasText: /^10$/ }).nth(2).click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: '– 10 of 13' }).nth(3).click();
  await page.getByLabel('Next page').click();
  await page.getByLabel('Previous page').click();
  await page.getByText('– 10 of 13').click();
});
```



## Test to Make Sure There is only an "Active" Status

 Need to go through the entire first page of results after click the Status bar, to make sure there are no other status's that exist in the Status column. 

**Important Items to Note:**

- There are a **Total of 6** Status from the Status dropdown, they can all be accessed like so (according to codegen):

```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/list');
  await page.locator('.cdk-overlay-backdrop').click();
  await page.getByLabel('Status').locator('svg').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByLabel('Status').locator('path').click();
  await page.getByRole('option', { name: 'Active', exact: true }).click();
  await page.getByLabel('Status').locator('svg').click();
  await page.getByText('Inactive').click();
  await page.getByLabel('Status').locator('svg').click();
  await page.getByRole('option', { name: 'Suspended' }).click();
  await page.getByLabel('Status').locator('svg').click();
  await page.getByText('Terminated').click();
  await page.getByLabel('Status').locator('svg').click();
  await page.getByText('Pending').click();
  await page.getByLabel('Status').locator('svg').click();
});
```


- There are a few that don't have any accounts, and if this is the case, the test passes. 

Each test should select a status, then make sure none of the other statuses exist on the first page. 

In order to do this, the dropdown to show the first hundred results will need to be selected like so:

```Typescript

test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/list');
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByLabel('10').locator('svg').click();
  await page.getByRole('option', { name: '100' }).click();
});
```


However, not all items will have a ten. The ones with no accounts for example will have a 100 for the dropdown and can be accessed in the following way:
```Typescript

test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/list');
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByLabel('10').locator('svg').click();
  await page.getByRole('option', { name: '100' }).click();
  await page.locator('div').filter({ hasText: /^All$/ }).first().click();
  await page.getByRole('option', { name: 'Inactive' }).click();
  await page.getByText('Filteradd').click();
  await page.locator('html').click();
  await page.locator('div').filter({ hasText: /^100$/ }).first().click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.getByLabel('100').locator('svg').click();
});
```


So, the test should factor this in whenever there is no account found after selecting a dropdown. It should just test for each possible label, for the 10, and the 100. 



Where it would then look for any ``Status`` that shouldn't be in the table. 


### Checking that the  ``Active`` Status is the only one that exists under the "Status" column when "Active" Status is selected. 

This is where it might get a little tricky, the current ``Active`` status in the Status column doesn't have a locator that is represented by get-by-role or get_by_text, instead it's positional, and I believe this is what is just the order the status appears in the Status dropdown list, the ``Active`` status looks like this in the UI:
  
  ![[Pasted image 20250129103158.png]]
  
Then in the Codgen, it looks like ``await page.locator('.badge').first().click();``

	And I believe the "first" corresponds to this list: 
	
		Active = 1,
		  Inactive = 2,
		  Suspended = 3,
		  Terminated = 4,
		  Pending = 5

So, checking that only Active exists when the Active Status is selected from the dropdown might look something like (I am not 100%): 



1. Go to the sponsorship organization page -> select Active status -> select 100 per page


```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/list');
  await page.getByRole('link', { name: 'Sponsor Organizations' }).click();
  await page.getByLabel('Status').locator('svg').click();
  await page.getByRole('option', { name: 'Active', exact: true }).click();
  await page.getByLabel('10').locator('path').click();
  await page.getByRole('option', { name: '100' }).click();
});
```


2. Look for Status' that aren't the selected Status from the dropdown, i.e., "Active," or make sure "``await page.locator('.badge').first().click();``" doesn't exist.

		**Note:** I am unsure how to implement this step. it needs to include an expect statement, but not sure if I should have a for loop that iterates through all the options 





## Creating a New Sponsor Organization


This test will just test to make sure the "Create a New Sponsor Organization" is properly working. It also involves going to the Sponsor Organizations tab, but it also involves performing each of these tests for each tab inside of the Sponsor Organizations tab:

1. Checking for the fields on each page. 
2.  Filling out and submitting the page.


### Checking for the fields on each page


There is a workflow that appears when you got to create a new sponsor organization, it has three pages:

1. Sponsor Organization Information
2. Users
3. Finish

#### First Page: Sponsor Organization Information

This page contains most of the information that needs to be filled out. 


1. Checking for the correct fields on each page. 


We will first check all the fields on the page, to make sure they exist:

```Typescript

});

test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/list');
  await page.getByRole('link', { name: 'Sponsor Organizations' }).click();
  await page.locator('button').filter({ hasText: 'add' }).click();
  await page.getByText('1Sponsor Organization Information2Users3 Finish').click();
  await page.getByText('InfoSponsor Organization').click();
  await page.getByRole('heading', { name: 'Info' }).click();
  await page.locator('.mat-mdc-form-field-infix').first().click();
  await page.locator('.mat-mdc-form-field-subscript-wrapper').first().click();
  await page.getByText('Website').click();
  await page.locator('mat-form-field:nth-child(3) > .mat-mdc-form-field-subscript-wrapper').first().click();
  await page.getByText('Billing Email').click();
  await page.locator('mat-form-field:nth-child(4) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByText('Billing Email').click();
  await page.locator('mat-form-field:nth-child(3) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.getByText('Website').click();
  await page.locator('.mat-mdc-form-field-infix').first().click();
  await page.getByText('Sponsor Organization Name').click();
  await page.getByText('Company Email').click();
  await page.getByText('Company Email').click();
  await page.getByText('Phone Number').click();
  await page.locator('mat-form-field:nth-child(6) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByText('Phone Number').click();
  await page.getByText('Primary AddressStreet').click();
  await page.getByRole('heading', { name: 'Primary Address' }).click();
  await page.locator('.ng-untouched > mat-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-input-6').click();
  await page.locator('#mat-mdc-form-field-label-16').getByText('Street Name').click();
  await page.locator('.ng-pristine > mat-form-field > .mat-mdc-form-field-subscript-wrapper').first().click();
  await page.locator('#mat-input-7').click();
  await page.locator('.ng-pristine > mat-form-field:nth-child(2) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-mdc-form-field-label-18').getByText('Suite/Apt Number').click();
  await page.locator('#mat-mdc-form-field-label-20').getByText('City').click();
  await page.locator('#mat-input-8').click();
  await page.locator('.ng-pristine > mat-form-field:nth-child(3) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-mdc-form-field-label-20').getByText('City').click();
  await page.locator('#mat-select-4 svg').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('#mat-select-value-5').getByText('[Select]').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('#mat-mdc-form-field-label-22').getByText('State').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('#mat-mdc-form-field-label-24').getByText('Zip Code').click();
  await page.locator('#mat-input-9').click();
  await page.locator('#mat-mdc-form-field-label-24').getByText('Zip Code').click();
  await page.locator('div:nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.getByRole('heading', { name: 'Mailing Address' }).click();
  await page.getByText('Mailing Address(Street name').click();
  await page.getByText('Mailing Address(Street name').click();
  await page.getByText('(Street name is empty.').click();
  await page.locator('div:nth-child(2) > app-company-address > div > mat-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-input-10').click();
  await page.locator('div:nth-child(2) > app-company-address > div > mat-form-field > .mat-mdc-form-field-subscript-wrapper').first().click();
  await page.locator('#mat-mdc-form-field-label-28').getByText('Suite/Apt Number').click();
  await page.locator('div:nth-child(2) > app-company-address > div > mat-form-field:nth-child(2) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.locator('#mat-mdc-form-field-label-28').getByText('Suite/Apt Number').click();
  await page.locator('div:nth-child(2) > app-company-address > div > mat-form-field > .mat-mdc-form-field-subscript-wrapper').first().click();
  await page.locator('div:nth-child(2) > app-company-address > div > mat-form-field:nth-child(2) > .mat-mdc-form-field-subscript-wrapper').click();
  await page.locator('#mat-input-12').click();
  await page.locator('div:nth-child(2) > app-company-address > div > mat-form-field:nth-child(3) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.locator('#mat-mdc-form-field-label-30').getByText('City').click();
  await page.locator('div:nth-child(2) > app-company-address > div > mat-form-field:nth-child(2) > .mat-mdc-form-field-subscript-wrapper').click();
  await page.locator('div:nth-child(2) > app-company-address > div > mat-form-field:nth-child(3) > .mat-mdc-form-field-subscript-wrapper').click();
  await page.locator('#mat-select-value-7').getByText('[Select]').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('#mat-select-value-7').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('#mat-select-6 div').first().click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('#mat-mdc-form-field-label-32').getByText('State').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('#mat-mdc-form-field-label-34').getByText('Zip Code').click();
  await page.locator('#mat-mdc-form-field-label-34').getByText('Zip Code').click();
  await page.locator('div:nth-child(2) > .ng-untouched > div > .row > div:nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByText('Logo upload Upload Logo').click();
  await page.locator('.logo-placeholder').click();
  await page.locator('.logo-placeholder').click();
  await page.getByRole('button', { name: 'Upload Logo' }).click();
  await page.getByText('Logo upload Upload Logo').click();
  await page.locator('div').filter({ hasText: 'InfoSponsor Organization NameWebsiteBilling EmailCompany EmailPhone NumberLogo' }).nth(2).click();
});
```



2.  Filling out and submitting the page

Now we will fill out the information on the first page, and do so for two cases:

1. Primary Address and Mailing Address are the same, i.e., we'll leave the fields under "Mailing Address" blank.

```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/backend/user/my-accounts');
  await page.getByText('account_balanceAccountexpand_more').click();
  await page.getByRole('link', { name: 'Sponsor Organizations' }).click();
  await page.locator('button').filter({ hasText: 'add' }).click();
  await page.getByText('Sponsor Organization Name').click();
  await page.getByLabel('Sponsor Organization Name').fill('Test Name');
  await page.getByLabel('Website').click();
  await page.getByLabel('Website').fill('www.example.com');
  await page.getByLabel('Website').press('Tab');
  await page.getByLabel('Billing Email').fill('TestName@example.com');
  await page.getByLabel('Billing Email').press('Tab');
  await page.getByLabel('Company Email').fill('Tname@TestExample.com');
  await page.getByLabel('Company Email').press('Tab');
  await page.getByLabel('Phone Number').fill('(555) 555-55555');
  await page.locator('#mat-input-6').click();
  await page.locator('#mat-input-6').press('ScrollLock');
  await page.locator('#mat-input-6').fill('123 NW Madison St');
  await page.locator('#mat-input-6').press('Tab');
  await page.locator('#mat-input-7').click();
  await page.locator('#mat-mdc-form-field-label-18').getByText('Suite/Apt Number').click();
  await page.locator('#mat-input-7').fill('Unit 101');
  await page.locator('#mat-input-7').press('Tab');
  await page.locator('#mat-input-8').fill('Portland');
  await page.locator('#mat-input-8').press('Tab');
  await page.locator('#mat-select-4').press('Tab');
  await page.locator('#mat-input-9').click();
  await page.locator('div:nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-mdc-form-field-label-26').getByText('Street Name').click();
  await page.locator('#mat-mdc-form-field-label-28').getByText('Suite/Apt Number').click();
  await page.locator('#mat-input-9').click();
  await page.locator('.ng-invalid > mat-form-field:nth-child(3) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#mat-input-9').click();
  await page.locator('#mat-input-9').fill('');
  await page.locator('#mat-input-9').click();
  await page.locator('#mat-input-9').fill('97204');
  await page.getByRole('button', { name: 'Upload Logo' }).click();
  await page.getByRole('button', { name: 'Upload Logo' }).setInputFiles('test-image.jpg');
  await page.getByRole('button', { name: 'Next' }).click();
});
```


2. Primary Address and Mailing Address are different.


```Typescript

test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/backend/user/my-accounts');
  await page.getByText('account_balanceAccountexpand_more').click();
  await page.getByRole('link', { name: 'Sponsor Organizations' }).click();
  await page.locator('button').filter({ hasText: 'add' }).click();
  await page.getByText('Sponsor Organization Name').click();
  await page.getByLabel('Sponsor Organization Name').fill('Test Name');
  await page.getByLabel('Website').click();
  await page.getByLabel('Website').fill('www.example.com');
  await page.getByLabel('Website').press('Tab');
  await page.getByLabel('Billing Email').fill('TestName@example.com');
  await page.getByLabel('Billing Email').press('Tab');
  await page.getByLabel('Company Email').fill('Tname@TestExample.com');
  await page.getByLabel('Company Email').press('Tab');
  await page.getByLabel('Phone Number').fill('(555) 555-55555');
  await page.locator('#mat-input-6').click();
  await page.locator('#mat-input-6').press('ScrollLock');
  await page.locator('#mat-input-6').fill('123 NW Madison St');
  await page.locator('#mat-input-6').press('Tab');
  await page.locator('#mat-input-7').click();
  await page.locator('#mat-mdc-form-field-label-18').getByText('Suite/Apt Number').click();
  await page.locator('#mat-input-7').fill('Unit 101');
  await page.locator('#mat-input-7').press('Tab');
  await page.locator('#mat-input-8').fill('Portland');
  await page.locator('#mat-input-8').press('Tab');
  await page.locator('#mat-select-4').press('Tab');
  await page.locator('#mat-input-9').click();
  await page.locator('div:nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-mdc-form-field-label-26').getByText('Street Name').click();
  await page.locator('#mat-mdc-form-field-label-28').getByText('Suite/Apt Number').click();
  await page.locator('#mat-input-9').click();
  await page.locator('.ng-invalid > mat-form-field:nth-child(3) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#mat-input-9').click();
  await page.locator('#mat-input-9').fill('');
  await page.locator('#mat-input-9').click();
  await page.locator('#mat-input-9').fill('97204');
  await page.getByRole('button', { name: 'Upload Logo' }).click();
  await page.getByRole('button', { name: 'Upload Logo' }).setInputFiles('test-image.jpg');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('.ng-pristine > mat-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-input-10').fill('342 SW Madison St.');
  await page.locator('#mat-input-10').press('Tab');
  await page.locator('#mat-input-11').fill('1002');
  await page.locator('#mat-input-11').press('Tab');
  await page.locator('#mat-input-12').fill('Portland');
  await page.locator('#mat-input-12').press('Tab');
  await page.getByLabel('[Select]').locator('svg').click();
  await page.getByRole('option', { name: 'Oregon' }).click();
  await page.locator('#mat-input-13').click();
  await page.locator('#mat-input-13').fill('97204');
  await page.getByRole('button', { name: 'Next' }).click();
});
```




#### Second Page: Users page

This page contains a way to add new users to the Sponsorship Organizations.


1. Checking for the correct fields on each page. 


We will first check all the fields on the page, to make sure they exist:


```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/add');
  await page.getByRole('main').click();
  await page.getByRole('heading', { name: 'Add Sponsor Organization' }).click();
  await page.locator('mat-card-content').click();
  await page.getByText('EditablecreateSponsor Organization Information2Users3 Finish').click();
  await page.locator('div').filter({ hasText: /^add New User$/ }).click();
  await page.getByRole('columnheader', { name: 'Contact Name' }).click();
  await page.getByRole('columnheader', { name: 'Contact Email' }).click();
  await page.getByRole('columnheader', { name: 'Permissions' }).click();
  await page.getByRole('columnheader', { name: 'Action' }).click();
  await page.getByText('No Users').click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'New User' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'New User' }).click();
  await page.getByRole('heading', { name: 'Add Contact' }).click();
  await page.getByText('EmailFirst NameLast').click();
  await page.getByText('Email', { exact: true }).click();
  await page.locator('.mat-mdc-dialog-content > mat-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-mdc-form-field-label-44 span').click();
  await page.locator('.mat-mdc-dialog-content > mat-form-field:nth-child(2) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByText('EmailFirst NameLast').click();
  await page.locator('.mat-mdc-dialog-content > mat-form-field:nth-child(2) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByText('First Name').click();
  await page.locator('div').filter({ hasText: /^First Name$/ }).first().click();
  await page.getByText('Last Name').click();
  await page.getByText('Last Name').click();
  await page.locator('.mat-mdc-dialog-content > mat-form-field:nth-child(3) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByText('EmailFirst NameLast').click();
  await page.getByRole('heading', { name: 'Permissions' }).click();
  await page.getByText('Address', { exact: true }).click();
  await page.getByText('Approve Proof of Address').click();
  await page.getByText('Assessment Test', { exact: true }).click();
  await page.getByText('View Assessment Test Results').click();
  await page.locator('div').filter({ hasText: /^Billing$/ }).click();
  await page.getByText('Cashout', { exact: true }).click();
  await page.getByRole('heading', { name: 'Cashout' }).click();
  await page.getByText('Approve/Deny Cashout Request').click();
  await page.locator('#mat-mdc-checkbox-63 div').filter({ hasText: 'Approve/Deny Cashout Request' }).click();
  await page.getByText('Add/Edit Cashout Questions').click();
  await page.getByRole('heading', { name: 'User' }).click();
  await page.getByLabel('Add Contact').getByText('User', { exact: true }).click();
  await page.getByText('Edit/Add Community Staff').click();
  await page.locator('#mat-mdc-checkbox-85 div').filter({ hasText: 'Edit/Add User' }).click();
  await page.getByText('View Users').click();
  await page.getByText('Transaction').click();
  await page.getByText('Report', { exact: true }).click();
  await page.getByText('Add/Edit Offering').click();
  await page.getByLabel('Add Contact').getByText('Offering', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByText('Email', { exact: true }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});
```



**Note:** This is also clicking the "+ New User" button at the top and checking for each field. It's not actually creating a new user yet, but we will. 


2. Add New Users

We will now add a new user, and fill out these fields accordingly (the fields for this should have been checked in the step that immediately preceded this one).

**Note:** We will also want to make sure the checkbox for each option works (this logic may exist already, from when a user was created under User -> User)

```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/add');
  await page.getByRole('button', { name: 'New User' }).click();
  await page.getByLabel('Email', { exact: true }).fill('TestEmail2@exampleEmail.com');
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByLabel('First Name').fill('Terry');
  await page.getByLabel('First Name').press('Tab');
  await page.getByLabel('Last Name').fill('Cru');
  await page.getByLabel('Last Name').dblclick();
  await page.getByLabel('Last Name').fill('Cruz');
  await page.getByLabel('Address', { exact: true }).check();
  await page.getByLabel('Approve Proof of Address').uncheck();
  await page.getByLabel('Address', { exact: true }).check();
  await page.getByLabel('Assessment Test', { exact: true }).check();
  await page.getByLabel('View Assessment Test Results').uncheck();
  await page.getByLabel('Billing', { exact: true }).check();
  await page.getByLabel('View Invoice').uncheck();
  await page.getByLabel('View Payment').uncheck();
  await page.getByLabel('View Invoice').check();
  await page.getByLabel('Billing', { exact: true }).check();
  await page.getByLabel('View Payment').uncheck();
  await page.getByLabel('Cashout', { exact: true }).check();
  await page.getByLabel('Add/Edit Cashout Questions').uncheck();
  await page.getByLabel('Approve/Deny Cashout Request').uncheck();
  await page.getByLabel('View Cashout').uncheck();
  await page.getByLabel('Edit Cashout Price Per Share').uncheck();
  await page.getByLabel('Community', { exact: true }).check();
  await page.getByLabel('Edit Community Profile').uncheck();
  await page.getByLabel('Community', { exact: true }).check();
  await page.getByLabel('Edit Community Profile').uncheck();
  await page.getByLabel('Add/Edit Entity').check();
  await page.getByLabel('Add/Edit Entity').uncheck();
  await page.getByLabel('Entity', { exact: true }).check();
  await page.getByLabel('Investor/Shareholder').check();
  await page.getByLabel('Receive Stop Investment and').check();
  await page.getByLabel('Receive Reenrollment in').check();
  await page.getByLabel('Receive Offering Signed').check();
  await page.getByLabel('Run Shareholder List Report').check();
  await page.getByLabel('Report', { exact: true }).uncheck();
  await page.getByLabel('Offering', { exact: true }).check();
  await page.getByLabel('Add/Edit Offering').uncheck();
  await page.getByLabel('Transaction').check();
  await page.getByLabel('Add/Edit Directive').uncheck();
  await page.getByLabel('User', { exact: true }).check();
  await page.getByLabel('Edit/Add Community Staff').uncheck();
  await page.getByLabel('View Investor Financial').check();
  await page.getByLabel('View Entity Onboarding').uncheck();
  await page.getByLabel('View Entity Offering Document').uncheck();
  await page.getByLabel('Upload Entity Onboarding').uncheck();
  await page.getByLabel('View Entity Offering Document').check();
  await page.getByLabel('Upload Entity Offering').check();
  await page.getByLabel('Add/Edit Investor Financial').check();
  await page.getByLabel('Document', { exact: true }).check();
  await page.getByLabel('Demographic', { exact: true }).check();
  await page.getByLabel('Add/Edit Demographic Questions').uncheck();
  await page.getByLabel('Add/Edit Renew Demographic').uncheck();
  await page.getByLabel('Demographic', { exact: true }).check();
  await page.getByLabel('Edit Community Profile').check();
  await page.getByLabel('Community', { exact: true }).uncheck();
  await page.locator('#mat-mdc-checkbox-90 > .mdc-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target').click();
  await page.getByLabel('Billing', { exact: true }).check();
  await page.getByLabel('Assessment Test', { exact: true }).check();
  await page.getByLabel('View Assessment Test Results').uncheck();
  await page.getByLabel('Assessment Test', { exact: true }).check();
  await page.getByLabel('Add/Edit Cashout Questions').check();
  await page.getByLabel('Approve/Deny Cashout Request').check();
  await page.getByLabel('View Assessment Test Results').uncheck();
  await page.getByLabel('Assessment Test', { exact: true }).check();
  await page.getByLabel('View Assessment Test Results').uncheck();
  await page.getByLabel('View Assessment Test Results').check();
  await page.getByLabel('View Assessment Test Results').uncheck();
  await page.getByLabel('Edit Cashout Price Per Share').check();
  await page.getByLabel('View Cashout').check();
  await page.getByLabel('Edit Community Profile').check();
  await page.getByLabel('Add/Edit Renew Demographic').uncheck();
  await page.getByLabel('Add/Edit Demographic Questions').uncheck();
  await page.getByLabel('Demographic', { exact: true }).check();
  await page.getByLabel('Add/Edit Renew Demographic').uncheck();
  await page.getByLabel('Add/Edit Demographic Questions').uncheck();
  await page.getByLabel('Add/Edit Renew Demographic').check();
  await page.getByLabel('Add/Edit Demographic Questions').check();
  await page.getByLabel('Demographic', { exact: true }).uncheck();
  await page.getByLabel('Document', { exact: true }).uncheck();
  await page.getByLabel('Add/Edit Investor Financial').check();
  await page.getByLabel('Document', { exact: true }).check();
  await page.getByLabel('Document', { exact: true }).uncheck();
  await page.getByLabel('Add/Edit Investor Financial').check();
  await page.getByLabel('Add/Edit Investor Financial').uncheck();
  await page.getByLabel('Upload Entity Offering').check();
  await page.getByLabel('Upload Entity Onboarding').check();
  await page.getByLabel('Upload Entity Offering').uncheck();
  await page.getByLabel('View Entity Offering Document').check();
  await page.getByLabel('Upload Entity Onboarding').uncheck();
  await page.getByLabel('View Entity Onboarding').check();
  await page.getByLabel('View Entity Offering Document').uncheck();
  await page.getByLabel('View Entity Onboarding').uncheck();
  await page.getByLabel('View Investor Financial').check();
  await page.getByLabel('View Entity Onboarding').check();
  await page.getByLabel('View Investor Financial').uncheck();
  await page.getByLabel('View Entity Onboarding').uncheck();
  await page.getByLabel('Entity', { exact: true }).uncheck();
  await page.getByLabel('Add/Edit Entity').check();
  await page.getByLabel('Entity', { exact: true }).uncheck();
  await page.getByLabel('Investor/Shareholder').uncheck();
  await page.getByLabel('Add/Edit Investor', { exact: true }).check();
  await page.getByLabel('View Investor', { exact: true }).check();
  await page.getByLabel('Investor/Shareholder').uncheck();
  await page.getByLabel('Receive Offering Signed').uncheck();
  await page.getByLabel('Receive Reenrollment in').uncheck();
  await page.getByLabel('Receive Stop Investment and').uncheck();
  await page.getByLabel('Notification').check();
  await page.getByLabel('Add/Edit Offering').check();
  await page.getByLabel('Offering', { exact: true }).uncheck();
  await page.getByLabel('Report', { exact: true }).check();
  await page.getByLabel('Run Shareholder List Report').uncheck();
  await page.getByLabel('Transaction').check();
  await page.getByLabel('Add/Edit Directive').uncheck();
  await page.getByLabel('Edit/Add Community Staff').check();
  await page.getByLabel('User', { exact: true }).uncheck();
  await page.getByLabel('Edit/Add User').check();
  await page.getByLabel('View Users').check();
  await page.getByRole('button', { name: 'Save' }).click();
});
```


Now that the user is added, we need to make sure that the fields for the table exist as so:


```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/add');
  await page.getByRole('columnheader', { name: 'Contact Name' }).click();
  await page.getByRole('columnheader', { name: 'Contact Email' }).click();
  await page.getByRole('columnheader', { name: 'Permissions' }).click();
  await page.getByRole('columnheader', { name: 'Action' }).click();
  await page.getByRole('cell', { name: 'Terry Cruz' }).click();
  await page.getByRole('cell', { name: 'TestEmail2@exampleEmail.com' }).click();
  await page.getByRole('cell', { name: 'Approve Proof of Address,' }).click();
  await page.locator('td').filter({ hasText: 'editdelete' }).click();
  await page.getByRole('heading', { name: 'Remove Contact' }).click();
  await page.getByText('You are about to remove this').click();
  await page.locator('mat-dialog-content').click();
  await page.getByText('CancelOK').click();
});
```


Then we need to make sure the ``Edit`` and ``Delete`` buttons work for the newly created user. 

Where we will also make sure the fields exist in this too (it might be useful to be able to "remember" the options chosen from the initial creation, that way we know which ones to look for when choosing "edit.")

```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/add');
  await page.locator('button').filter({ hasText: 'edit' }).click();
  await page.getByRole('heading', { name: 'Edit Contact' }).click();
  await page.getByText('Email', { exact: true }).click();
  await page.locator('.mat-mdc-dialog-content > mat-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('.mat-mdc-dialog-content > mat-form-field:nth-child(2) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByText('First Name').click();
  await page.locator('.mat-mdc-dialog-content > mat-form-field > .mat-mdc-form-field-subscript-wrapper').first().click();
  await page.locator('.mat-mdc-dialog-content > mat-form-field:nth-child(2) > .mat-mdc-form-field-subscript-wrapper').click();
  await page.getByLabel('Last Name').click();
  await page.locator('.mat-mdc-dialog-content > mat-form-field:nth-child(3) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByText('Last Name').click();
  await page.locator('.mat-mdc-dialog-content > mat-form-field:nth-child(3) > .mat-mdc-form-field-subscript-wrapper').click();
  await page.getByRole('heading', { name: 'Permissions' }).click();
  await page.getByText('EmailFirst NameLast').click();
  await page.getByText('Assessment Test', { exact: true }).click();
  await page.getByText('Approve Proof of Address', { exact: true }).click();
  await page.getByText('Approve Proof of Address', { exact: true }).click();
  await page.getByText('Edit/Add User', { exact: true }).click();
  await page.getByText('Edit/Add User', { exact: true }).click();
  await page.getByText('View Users', { exact: true }).click();
  await page.getByText('View Users', { exact: true }).click();
  await page.getByText('Receive Reenrollment in Offering', { exact: true }).click();
  await page.locator('#mat-mdc-checkbox-164 div').filter({ hasText: 'Receive Offering Signed' }).click();
  await page.getByText('Receive Offering Signed Document', { exact: true }).click();
  await page.getByText('Receive Reenrollment in Offering', { exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});
```

This one saved, but we will also want to go back into the edit, and make sure the ``Cancel`` button works:

```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/add');
  await page.locator('button').filter({ hasText: 'edit' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});
```


We will want to make sure the ``Delete`` Functionality works as well:

1. first click into the delete button and check for the fields, then cancel. 


```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/add');
  await page.locator('button').filter({ hasText: 'delete' }).click();
  await page.getByRole('heading', { name: 'Remove Contact' }).click();
  await page.getByText('You are about to remove this').click();
  await page.locator('mat-dialog-content').click();
  await page.getByText('CancelOK').click();
});
```

then actually delete:


```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/add');
  await page.locator('button').filter({ hasText: 'delete' }).click();
  await page.getByRole('heading', { name: 'Remove Contact' }).click();
  await page.getByText('You are about to remove this').click();
  await page.getByRole('button', { name: 'OK' }).click();
});
```


Then make sure "No Users" shows up in the table after deleting:


```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/add');
  await page.getByText('No Users').click();
});
```


Then re-add the user. It can be the exact same user as before:




```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/add');
  await page.getByRole('button', { name: 'New User' }).click();
  await page.getByLabel('Email', { exact: true }).fill('TestEmail2@exampleEmail.com');
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByLabel('First Name').fill('Terry');
  await page.getByLabel('First Name').press('Tab');
  await page.getByLabel('Last Name').fill('Cru');
  await page.getByLabel('Last Name').dblclick();
  await page.getByLabel('Last Name').fill('Cruz');
  await page.getByLabel('Address', { exact: true }).check();
  await page.getByLabel('Approve Proof of Address').uncheck();
  await page.getByLabel('Address', { exact: true }).check();
  await page.getByLabel('Assessment Test', { exact: true }).check();
  await page.getByLabel('View Assessment Test Results').uncheck();
  await page.getByLabel('Billing', { exact: true }).check();
  await page.getByLabel('View Invoice').uncheck();
  await page.getByLabel('View Payment').uncheck();
  await page.getByLabel('View Invoice').check();
  await page.getByLabel('Billing', { exact: true }).check();
  await page.getByLabel('View Payment').uncheck();
  await page.getByLabel('Cashout', { exact: true }).check();
  await page.getByLabel('Add/Edit Cashout Questions').uncheck();
  await page.getByLabel('Approve/Deny Cashout Request').uncheck();
  await page.getByLabel('View Cashout').uncheck();
  await page.getByLabel('Edit Cashout Price Per Share').uncheck();
  await page.getByLabel('Community', { exact: true }).check();
  await page.getByLabel('Edit Community Profile').uncheck();
  await page.getByLabel('Community', { exact: true }).check();
  await page.getByLabel('Edit Community Profile').uncheck();
  await page.getByLabel('Add/Edit Entity').check();
  await page.getByLabel('Add/Edit Entity').uncheck();
  await page.getByLabel('Entity', { exact: true }).check();
  await page.getByLabel('Investor/Shareholder').check();
  await page.getByLabel('Receive Stop Investment and').check();
  await page.getByLabel('Receive Reenrollment in').check();
  await page.getByLabel('Receive Offering Signed').check();
  await page.getByLabel('Run Shareholder List Report').check();
  await page.getByLabel('Report', { exact: true }).uncheck();
  await page.getByLabel('Offering', { exact: true }).check();
  await page.getByLabel('Add/Edit Offering').uncheck();
  await page.getByLabel('Transaction').check();
  await page.getByLabel('Add/Edit Directive').uncheck();
  await page.getByLabel('User', { exact: true }).check();
  await page.getByLabel('Edit/Add Community Staff').uncheck();
  await page.getByLabel('View Investor Financial').check();
  await page.getByLabel('View Entity Onboarding').uncheck();
  await page.getByLabel('View Entity Offering Document').uncheck();
  await page.getByLabel('Upload Entity Onboarding').uncheck();
  await page.getByLabel('View Entity Offering Document').check();
  await page.getByLabel('Upload Entity Offering').check();
  await page.getByLabel('Add/Edit Investor Financial').check();
  await page.getByLabel('Document', { exact: true }).check();
  await page.getByLabel('Demographic', { exact: true }).check();
  await page.getByLabel('Add/Edit Demographic Questions').uncheck();
  await page.getByLabel('Add/Edit Renew Demographic').uncheck();
  await page.getByLabel('Demographic', { exact: true }).check();
  await page.getByLabel('Edit Community Profile').check();
  await page.getByLabel('Community', { exact: true }).uncheck();
  await page.locator('#mat-mdc-checkbox-90 > .mdc-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target').click();
  await page.getByLabel('Billing', { exact: true }).check();
  await page.getByLabel('Assessment Test', { exact: true }).check();
  await page.getByLabel('View Assessment Test Results').uncheck();
  await page.getByLabel('Assessment Test', { exact: true }).check();
  await page.getByLabel('Add/Edit Cashout Questions').check();
  await page.getByLabel('Approve/Deny Cashout Request').check();
  await page.getByLabel('View Assessment Test Results').uncheck();
  await page.getByLabel('Assessment Test', { exact: true }).check();
  await page.getByLabel('View Assessment Test Results').uncheck();
  await page.getByLabel('View Assessment Test Results').check();
  await page.getByLabel('View Assessment Test Results').uncheck();
  await page.getByLabel('Edit Cashout Price Per Share').check();
  await page.getByLabel('View Cashout').check();
  await page.getByLabel('Edit Community Profile').check();
  await page.getByLabel('Add/Edit Renew Demographic').uncheck();
  await page.getByLabel('Add/Edit Demographic Questions').uncheck();
  await page.getByLabel('Demographic', { exact: true }).check();
  await page.getByLabel('Add/Edit Renew Demographic').uncheck();
  await page.getByLabel('Add/Edit Demographic Questions').uncheck();
  await page.getByLabel('Add/Edit Renew Demographic').check();
  await page.getByLabel('Add/Edit Demographic Questions').check();
  await page.getByLabel('Demographic', { exact: true }).uncheck();
  await page.getByLabel('Document', { exact: true }).uncheck();
  await page.getByLabel('Add/Edit Investor Financial').check();
  await page.getByLabel('Document', { exact: true }).check();
  await page.getByLabel('Document', { exact: true }).uncheck();
  await page.getByLabel('Add/Edit Investor Financial').check();
  await page.getByLabel('Add/Edit Investor Financial').uncheck();
  await page.getByLabel('Upload Entity Offering').check();
  await page.getByLabel('Upload Entity Onboarding').check();
  await page.getByLabel('Upload Entity Offering').uncheck();
  await page.getByLabel('View Entity Offering Document').check();
  await page.getByLabel('Upload Entity Onboarding').uncheck();
  await page.getByLabel('View Entity Onboarding').check();
  await page.getByLabel('View Entity Offering Document').uncheck();
  await page.getByLabel('View Entity Onboarding').uncheck();
  await page.getByLabel('View Investor Financial').check();
  await page.getByLabel('View Entity Onboarding').check();
  await page.getByLabel('View Investor Financial').uncheck();
  await page.getByLabel('View Entity Onboarding').uncheck();
  await page.getByLabel('Entity', { exact: true }).uncheck();
  await page.getByLabel('Add/Edit Entity').check();
  await page.getByLabel('Entity', { exact: true }).uncheck();
  await page.getByLabel('Investor/Shareholder').uncheck();
  await page.getByLabel('Add/Edit Investor', { exact: true }).check();
  await page.getByLabel('View Investor', { exact: true }).check();
  await page.getByLabel('Investor/Shareholder').uncheck();
  await page.getByLabel('Receive Offering Signed').uncheck();
  await page.getByLabel('Receive Reenrollment in').uncheck();
  await page.getByLabel('Receive Stop Investment and').uncheck();
  await page.getByLabel('Notification').check();
  await page.getByLabel('Add/Edit Offering').check();
  await page.getByLabel('Offering', { exact: true }).uncheck();
  await page.getByLabel('Report', { exact: true }).check();
  await page.getByLabel('Run Shareholder List Report').uncheck();
  await page.getByLabel('Transaction').check();
  await page.getByLabel('Add/Edit Directive').uncheck();
  await page.getByLabel('Edit/Add Community Staff').check();
  await page.getByLabel('User', { exact: true }).uncheck();
  await page.getByLabel('Edit/Add User').check();
  await page.getByLabel('View Users').check();
  await page.getByRole('button', { name: 'Save' }).click();
});
```

After adding, just make sure the entry is added, then click finish:


```Typescript

test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/add');
  await page.getByRole('cell', { name: 'Terry Cruz' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();
});
```



#### Third Page: Finish Page

This page has a success message that we need to check for. 

There is also an "Add CIT Corporation to this Sponsor Organization" button. 

1. First, check the fields on the page that should exist, do exist:

```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/add');
  await page.getByText('EditablecreateSponsor Organization InformationCompleteddoneUsers3 Finish').click();
  await page.getByRole('heading', { name: 'Add Sponsor Organization' }).click();
  await page.locator('div').filter({ hasText: 'InfoSponsor Organization NameWebsiteBilling EmailCompany EmailPhone NumberLogo' }).nth(2).click();
  await page.getByRole('heading', { name: 'Sponsor Organization Created' }).click();
  await page.getByText('The Sponsor Organization').click();
  await page.getByText('DoneAdd CIT Corporation to').click();
  await page.locator('mat-card-content').click();
  await page.getByRole('button', { name: 'Add CIT Corporation to this' }).click();
});
```
Where this portion, ``await page.getByRole('button', { name: 'Add CIT Corporation to this' }).click();});`` is an action, but we will just want to use an expect statement to make sure that the button exists. The next step is actually clicking it. 



2. Test the "Add CIT Corporation to this Sponsor Organization" button:

```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/sponsor-organization/add');
  await page.getByText('EditablecreateSponsor Organization InformationCompleteddoneUsers3 Finish').click();
  await page.getByRole('heading', { name: 'Add Sponsor Organization' }).click();
  await page.locator('div').filter({ hasText: 'InfoSponsor Organization NameWebsiteBilling EmailCompany EmailPhone NumberLogo' }).nth(2).click();
  await page.getByRole('heading', { name: 'Sponsor Organization Created' }).click();
  await page.getByText('The Sponsor Organization').click();
  await page.getByText('DoneAdd CIT Corporation to').click();
  await page.locator('mat-card-content').click();
  await page.getByRole('button', { name: 'Add CIT Corporation to this' }).click();
});
```


This will open a workflow with five parts:

1. Choose a Community
2. CIT Corporation Information
3. Legal Information
4. Users
5. Finish


1. Choose a Community and click the Next button

After clicking the button, the page opens to this portion of the workflow. We should create the tests to check for the fields, to make sure they exist:



```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/cit-corporation/add/42');
  await page.getByRole('main').click();
  await page.getByRole('heading', { name: 'Add CIT Corporation to' }).click();
  await page.locator('mat-card-content').click();
  await page.getByText('1Choose a Community2CIT').click();
  await page.getByText('Community', { exact: true }).click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.getByLabel('Test Name').getByText('Test Name').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^CommunityTest Name$/ }).first().click();
  await page.locator('mat-card-content').click();
  await page.getByRole('button', { name: 'Next' }).click();
});
```


**Note:** the test name should be the same as the one added. 

### 2. Fill out the CIT Corporation Information for a new CIT Corporation to add.

We will go through this tab, check each field, fill out the info, and select both the "Require Investor to Upload Proof of Address" and the "Does the Proof of Address document need to be approved before allowing the investor to invest?"

2.1 Check the fields:

```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/cit-corporation/add/42');
  await page.getByText('EditablecreateChoose a Community2CIT Corporation Information3Legal').click();
  await page.getByRole('heading', { name: 'Add CIT Corporation to' }).click();
  await page.locator('mat-card-content').click();
  await page.getByText('InfoCIT Corporation').click();
  await page.getByRole('heading', { name: 'Info' }).click();
  await page.getByText('CIT Corporation Name').click();
  await page.getByLabel('CIT Corporation Name').click();
  await page.getByText('InfoCIT Corporation').click();
  await page.locator('mat-form-field:nth-child(3) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.getByText('Website').click();
  await page.locator('mat-form-field:nth-child(3) > .mat-mdc-form-field-subscript-wrapper').first().click();
  await page.getByText('Billing Email').click();
  await page.getByText('Billing Email').click();
  await page.getByText('Company Email').click();
  await page.locator('mat-form-field:nth-child(5) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.getByText('Company Email').click();
  await page.locator('mat-form-field:nth-child(4) > .mat-mdc-form-field-subscript-wrapper').first().click();
  await page.getByText('Phone Number').click();
  await page.locator('mat-form-field:nth-child(6) > .mat-mdc-form-field-subscript-wrapper').first().click();
  await page.locator('mat-form-field:nth-child(5) > .mat-mdc-form-field-subscript-wrapper').first().click();
  await page.getByText('Primary AddressStreet').click();
  await page.getByText('Primary AddressStreet').click();
  await page.locator('.ng-untouched > mat-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-mdc-form-field-label-122').getByText('Street Name').click();
  await page.locator('.ng-pristine > mat-form-field:nth-child(2) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-mdc-form-field-label-124').getByText('Suite/Apt Number').click();
  await page.locator('#mat-input-56').click();
  await page.locator('#mat-mdc-form-field-label-126 span').click();
  await page.locator('#mat-mdc-form-field-label-126').getByText('City').click();
  await page.locator('#mat-select-value-15').getByText('[Select]').click();
  await page.getByRole('option', { name: 'Oregon' }).click();
  await page.locator('#mat-input-57').click();
  await page.locator('#mat-mdc-form-field-label-130').getByText('Zip Code').click();
  await page.getByLabel('2CIT Corporation Information').getByText('[Select]').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('#mat-mdc-form-field-label-140').getByText('Zip Code').click();
  await page.locator('.ng-pristine > .row > div:nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-mdc-form-field-label-140').getByText('Zip Code').click();
  await page.locator('#mat-mdc-form-field-label-136').getByText('City').click();
  await page.locator('#mat-input-60').click();
  await page.locator('.ng-pristine > mat-form-field:nth-child(3) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('.ng-pristine > mat-form-field:nth-child(2) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-input-59').click();
  await page.locator('#mat-mdc-form-field-label-134').getByText('Suite/Apt Number').click();
  await page.locator('#mat-mdc-form-field-label-132').getByText('Street Name').click();
  await page.locator('.ng-pristine > mat-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-mdc-form-field-label-132').getByText('Street Name').click();
  await page.getByText('(Street name is empty.').click();
  await page.getByRole('heading', { name: 'Mailing Address' }).click();
  await page.locator('.logo-placeholder').click();
  await page.locator('.text-center').click();
  await page.getByText('Logo upload Upload Logo').click();
  await page.getByText('Require Investor to Upload').click();
  await page.getByText('Does the Proof of Address').click();
  await page.getByText('Logo upload Upload Logo').click();
  await page.getByText('Does the Proof of Address').click();
  await page.getByRole('heading', { name: 'Logo' }).click();
  await page.getByRole('button', { name: 'Upload Logo' }).click();
});

```




2.2 Fill out the info and click Next

```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/cit-corporation/add/42');
  await page.getByText('EditablecreateChoose a Community2CIT Corporation Information3Legal').click();
  await page.getByRole('heading', { name: 'Add CIT Corporation to' }).click();
  await page.locator('mat-card-content').click();
  await page.getByText('InfoCIT Corporation').click();
  await page.getByRole('heading', { name: 'Info' }).click();
  await page.getByText('CIT Corporation Name').click();
  await page.getByLabel('CIT Corporation Name').click();
  await page.getByText('InfoCIT Corporation').click();
  await page.locator('mat-form-field:nth-child(3) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.getByText('Website').click();
  await page.locator('mat-form-field:nth-child(3) > .mat-mdc-form-field-subscript-wrapper').first().click();
  await page.getByText('Billing Email').click();
  await page.getByText('Billing Email').click();
  await page.getByText('Company Email').click();
  await page.locator('mat-form-field:nth-child(5) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.getByText('Company Email').click();
  await page.locator('mat-form-field:nth-child(4) > .mat-mdc-form-field-subscript-wrapper').first().click();
  await page.getByText('Phone Number').click();
  await page.locator('mat-form-field:nth-child(6) > .mat-mdc-form-field-subscript-wrapper').first().click();
  await page.locator('mat-form-field:nth-child(5) > .mat-mdc-form-field-subscript-wrapper').first().click();
  await page.getByText('Primary AddressStreet').click();
  await page.getByText('Primary AddressStreet').click();
  await page.locator('.ng-untouched > mat-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-mdc-form-field-label-122').getByText('Street Name').click();
  await page.locator('.ng-pristine > mat-form-field:nth-child(2) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-mdc-form-field-label-124').getByText('Suite/Apt Number').click();
  await page.locator('#mat-input-56').click();
  await page.locator('#mat-mdc-form-field-label-126 span').click();
  await page.locator('#mat-mdc-form-field-label-126').getByText('City').click();
  await page.locator('#mat-select-value-15').getByText('[Select]').click();
  await page.getByRole('option', { name: 'Oregon' }).click();
  await page.locator('#mat-input-57').click();
  await page.locator('#mat-mdc-form-field-label-130').getByText('Zip Code').click();
  await page.getByLabel('2CIT Corporation Information').getByText('[Select]').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('#mat-mdc-form-field-label-140').getByText('Zip Code').click();
  await page.locator('.ng-pristine > .row > div:nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-mdc-form-field-label-140').getByText('Zip Code').click();
  await page.locator('#mat-mdc-form-field-label-136').getByText('City').click();
  await page.locator('#mat-input-60').click();
  await page.locator('.ng-pristine > mat-form-field:nth-child(3) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('.ng-pristine > mat-form-field:nth-child(2) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-input-59').click();
  await page.locator('#mat-mdc-form-field-label-134').getByText('Suite/Apt Number').click();
  await page.locator('#mat-mdc-form-field-label-132').getByText('Street Name').click();
  await page.locator('.ng-pristine > mat-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-mdc-form-field-label-132').getByText('Street Name').click();
  await page.getByText('(Street name is empty.').click();
  await page.getByRole('heading', { name: 'Mailing Address' }).click();
  await page.locator('.logo-placeholder').click();
  await page.locator('.text-center').click();
  await page.getByText('Logo upload Upload Logo').click();
  await page.getByText('Require Investor to Upload').click();
  await page.getByText('Does the Proof of Address').click();
  await page.getByText('Logo upload Upload Logo').click();
  await page.getByText('Does the Proof of Address').click();
  await page.getByRole('heading', { name: 'Logo' }).click();
  await page.getByRole('button', { name: 'Upload Logo' }).click();
  await page.getByText('Does the Proof of Address').click();
  await page.locator('.col-md-6 > mat-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.getByLabel('CIT Corporation Name').fill('FakeCorp');
  await page.getByLabel('CIT Corporation Name').press('Tab');
  await page.getByLabel('Website').fill('www.FakeCorp.com');
  await page.getByLabel('Website').press('Tab');
  await page.getByLabel('Billing Email').fill('FakeCorp@FakeCorp.com');
  await page.getByLabel('Billing Email').press('Tab');
  await page.getByLabel('Company Email').fill('FakeCorp@FakeCorp.com');
  await page.getByLabel('Company Email').press('Tab');
  await page.getByLabel('Phone Number').fill('(555) 555-55555');
  await page.locator('.ng-invalid > mat-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.locator('#mat-input-54').click();
  await page.locator('#mat-input-54').fill('123 Primary st. ');
  await page.locator('#mat-input-54').press('Tab');
  await page.locator('#mat-input-55').fill('101');
  await page.locator('#mat-input-55').press('Tab');
  await page.locator('#mat-input-56').fill('Portland');
  await page.locator('#mat-input-56').press('Tab');
  await page.locator('#mat-mdc-form-field-label-130').getByText('Zip Code').click();
  await page.locator('#mat-input-57').click();
  await page.locator('#mat-input-57').fill('97230');
  await page.locator('#mat-input-57').press('Tab');
  await page.locator('#mat-input-58').fill('123 Mailing St. ');
  await page.locator('#mat-input-58').press('Tab');
  await page.locator('#mat-input-59').fill('102');
  await page.locator('#mat-input-59').press('Tab');
  await page.locator('#mat-input-60').fill('FakeCity');
  await page.locator('#mat-input-60').press('Tab');
  await page.getByRole('combobox', { name: 'State [Select]' }).press('Tab');
  await page.locator('#mat-input-61').fill('97330');
  await page.getByRole('button', { name: 'Next' }).click();
  });
```


### 3. Fill out Legal Information


First the fields for all the legal information is checked:


```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/cit-corporation/add/42');
  await page.getByText('InfoLegal NameEINState Of').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.getByLabel('EIN').click();
  await page.getByText('EIN').click();
  await page.getByText('State Of Incorporation').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.getByRole('option', { name: 'Arkansas' }).click();
  await page.getByText('State Of Operating').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.getByText('JAN 2025JAN').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.getByText('State Filing Number').click();
  await page.getByRole('heading', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Street Name' }).click();
  await page.getByLabel('3Legal Information').getByText('Street Name').click();
  await page.getByLabel('3Legal Information').getByText('Suite/Apt Number').click();
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByLabel('3Legal Information').getByText('City').click();
  await page.getByLabel('3Legal Information').getByText('State', { exact: true }).click();
  await page.getByRole('option', { name: 'Oregon' }).click();
  await page.getByRole('textbox', { name: 'Zip Code' }).click();
  await page.locator('#mat-mdc-form-field-label-116').getByText('Contact Name').click();
  await page.locator('#mat-mdc-form-field-label-116').getByText('Contact Name').click();
  await page.locator('#mat-mdc-form-field-label-116').getByText('Contact Name').click();
  await page.locator('#mat-mdc-form-field-label-118').getByText('Contact Email').click();
  await page.locator('#mat-mdc-form-field-label-120').getByText('Contact Phone').click();
  await page.locator('#mat-mdc-form-field-label-120').getByText('Contact Phone').click();
  await page.locator('mat-form-field:nth-child(9) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.locator('#mat-input-50').click();
  await page.locator('#mat-mdc-form-field-label-114').getByText('Contact Phone').click();
  await page.locator('#mat-mdc-form-field-label-112').getByText('Contact Email').click();
  await page.locator('#mat-mdc-form-field-label-112').getByText('Contact Email').click();
  await page.locator('mat-form-field:nth-child(8) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.locator('#mat-mdc-form-field-label-110').getByText('Contact Name').click();
  await page.locator('#mat-mdc-form-field-label-110').getByText('Contact Name').click();
  await page.locator('div:nth-child(2) > mat-form-field:nth-child(7) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByText('Firm Name').click();
  await page.getByText('Firm Name').click();
  await page.getByLabel('Firm Name').click();
  await page.locator('div:nth-child(2) > mat-form-field:nth-child(6) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.locator('#mat-mdc-form-field-label-106').getByText('Contact Phone').click();
  await page.locator('#mat-mdc-form-field-label-106').getByText('Contact Phone').click();
  await page.locator('#mat-mdc-form-field-label-104').getByText('Contact Email').click();
  await page.locator('#mat-mdc-form-field-label-104').getByText('Contact Email').click();
  await page.locator('#mat-mdc-form-field-label-102').getByText('Contact Name').click();
  await page.locator('#mat-mdc-form-field-label-102').getByText('Contact Name').click();
  await page.getByRole('heading', { name: 'Company Contact' }).click();
  await page.getByText('CommunityTest NameNextInfoCIT').click();
  await page.getByText('EditablecreateChoose a CommunityEditablecreateCIT Corporation Information3Legal').click();
});
```




Then we fill out the fields and click, ``Next`` 

```Typescript
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/cit-corporation/add/43');
  await page.getByLabel('Legal Name').click();
  await page.getByLabel('Legal Name').fill('LegalName123');
  await page.getByLabel('Legal Name').press('Tab');
  await page.getByLabel('EIN').fill('12-31231233');
  await page.getByLabel('EIN').press('Tab');
  await page.getByText('State Of Incorporation').click();
  await page.getByText('Idaho').click();
  await page.getByText('State Of Operating').click();
  await page.getByText('Arkansas').click();
  await page.getByText('Date Formed').click();
  await page.getByLabel('Date Formed').fill('01/01/1980');
  await page.getByLabel('Date Formed').press('Tab');
  await page.getByText('State Filing Number').click();
  await page.getByLabel('State Filing Number').fill('1234123412414');
  await page.getByLabel('3Legal Information').getByText('Street Name').click();
  await page.getByRole('textbox', { name: 'Street Name' }).fill('');
  await page.getByRole('textbox', { name: 'Street Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Street Name' }).fill('Legal Street Address');
  await page.getByRole('textbox', { name: 'Street Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Suite/Apt Number' }).fill('101');
  await page.getByRole('textbox', { name: 'Suite/Apt Number' }).press('Tab');
  await page.getByRole('textbox', { name: 'City' }).fill('Portland ');
  await page.getByRole('textbox', { name: 'City' }).press('Tab');
  await page.getByRole('combobox', { name: 'State [Select]' }).press('Tab');
  await page.getByRole('textbox', { name: 'Zip Code' }).fill('123123');
  await page.locator('#mat-input-26').click();
  await page.locator('#mat-input-26').fill('CompanyContactName');
  await page.locator('#mat-input-26').press('Tab');
  await page.locator('#mat-input-27').fill('CompanyContactEmail@ContactEmail.com');
  await page.locator('#mat-input-27').press('Tab');
  await page.locator('#mat-input-28').fill('(555) 555-55555');
  await page.locator('#mat-input-28').press('Tab');
  await page.getByLabel('Firm Name').fill('FakeAccountingFirm');
  await page.getByLabel('Firm Name').press('Tab');
  await page.locator('#mat-input-30').fill('Fake Contact Name');
  await page.locator('#mat-input-30').press('Tab');
  await page.locator('#mat-input-31').fill('AccountingContactEmail@');
  await page.locator('#mat-input-30').click();
  await page.locator('#mat-input-30').fill('AccountContactName');
  await page.locator('#mat-input-31').click();
  await page.locator('#mat-input-31').fill('AccountingContactEmail@FakeAccountingFirm.com');
  await page.locator('#mat-input-31').press('Tab');
  await page.locator('#mat-mdc-form-field-label-80').getByText('Contact Phone').click();
  await page.locator('#mat-input-32').fill('(555) 555-5555');
  await page.locator('#mat-mdc-form-field-label-82').getByText('Contact Name').click();
  await page.locator('#mat-input-33').fill('LegalContactName');
  await page.locator('#mat-input-33').press('Tab');
  await page.locator('#mat-input-34').fill('LegalContact@ContactEmail.com');
  await page.locator('#mat-input-34').press('Tab');
  await page.locator('#mat-input-35').fill('(555) 555-5555');
  await page.getByRole('button', { name: 'Next' }).click();
});
```




### 4. Users Tab

This tab looks a lot like the Users tab from before.  This might need to be reused. 

But getting there might be a little different, and fields should be checked. 

1.  Check fields throughout the "Users" tab inside of Sponsorship Organizations


  ```Typescript
  test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/cit-corporation/add/43');
  await page.getByText('EditablecreateChoose a CommunityEditablecreateCIT Corporation').click();
  await page.getByRole('columnheader', { name: 'Contact Name' }).click();
  await page.getByRole('columnheader', { name: 'Contact Email' }).click();
  await page.getByRole('columnheader', { name: 'Permissions' }).click();
  await page.getByRole('columnheader', { name: 'Action' }).click();
  await page.getByText('No Users').click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('heading', { name: 'Add CIT Corporation to' }).click();
  await page.getByRole('button', { name: 'New User' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});
```


**Note:** all buttons here should not be clicked in the test, but they should just have an assert statement that checks for their existence. 

2. Add  a new user clicking the "+ New User" button on the page (might be able to use previous iteration of "+ New User")
	 - [ ] Tag the New User checks that you created earlier, and reference the tag here.  
	 - [x] Check to see if it continues to not list the permissions. All of the permissions from the previous iteration should also be here.
		- They appeared after logging out and back in. It was probably an error that had to do with being idle for so long and the system logging me out. 



```Typescript

test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/cit-corporation/add/43');
  await page.getByRole('button', { name: 'New User' }).click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('F');
  await page.getByLabel('Email', { exact: true }).press('CapsLock');
  await page.getByLabel('Email', { exact: true }).fill('F');
  await page.getByLabel('Email', { exact: true }).press('CapsLock');
  await page.getByLabel('Email', { exact: true }).fill('FakeEmail@email.com');
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByLabel('First Name').fill('FakeFIrstName1');
  await page.getByLabel('First Name').press('Tab');
  await page.getByLabel('Last Name').fill('FakeLastName');
  await page.getByRole('heading', { name: 'Permissions' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});
```


2.1 Then check all the fields should exist, edit, and delete (all should exist in the previous iteration for the function that checks user detail information).

2.2 Although "Finish" should be a bit different:

```Typescript
 await page.getByRole('button', { name: 'Finish' }).click();
```

### 5. Finish Table

This should just check that the fields exist and click, ``Done``

```
test('test', async ({ page }) => {
  await page.goto('https://cit.stockofferingsolutions.com/cit/cit-corporation/add/46');
  await page.getByRole('heading', { name: 'Add CIT Corporation to' }).click();
  await page.locator('mat-card-content').click();
  await page.getByText('EditablecreateChoose a CommunityEditablecreateCIT Corporation').click();
  await page.getByRole('heading', { name: 'CIT Corporation Created' }).click();
  await page.getByText('The CIT Corporation account').click();
  await page.getByText('CommunityTest NameNextInfoCIT').click();
  await page.getByLabel('Finish').locator('div').click();
  await page.locator('mat-card-content').click();
  await page.getByRole('button', { name: 'Done' }).click();
});
