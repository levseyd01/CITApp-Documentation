
(editing-company-information-section)=
# Editing Company Information




The **Profile** screen allows you edit the following information about your company:


- [Name and Contact Information](name-and-contact-information)
- [Primary Address](primary-address)
- [Mailing Address](mailing-address)
- [Upload Logo](upload-logo)


```{lazyfigure}  ../../_static/solo_app/Profile/information-section/main-screen.webp
:width: 50%
:align: center
:name: profile-screen-information-section

Profile Screen, Information Section
```


# Code Snippets

:::{admonition} updateUserProfile
:class: note, dropdown


- Use``updateUserProfile`` when the screen resemebles the ``Company Information`` section of the CIT App (from the POV of the Entity User). 


```{code-block} typescript
export async function updateUserProfile(page: Page) {
        // Navigate to Profile
            await page.getByRole('link', { name: 'Dashboard' }).click();
            /// await page.getByText('13', { exact: true }).click();
            // await page.getByRole('navigation').click();
            await page.getByRole('link', { name: 'Profile' }).click();
            // Fill in "Name"
            // Double-click to highlight existing text, then fill
            await page.getByLabel('Name', { exact: true }).dblclick();
            await page.getByLabel('Name', { exact: true }).fill('John s');
            await page.getByLabel('Name', { exact: true }).press('Enter');
            // "Website" – The script only clicks, so remove if it’s not needed
            await page.getByLabel('Website').click();
            // "Billing Email"
            await page.getByLabel('Billing Email').dblclick();
            await page.getByLabel('Billing Email').fill('fakeEmail@email.com');
            // "Company Email"
            await page.getByLabel('Company Email').dblclick();
            await page.getByLabel('Company Email').fill('info2@email.com');
            // "Phone Number"
            await page.getByLabel('Phone Number').dblclick();
            await page.getByLabel('Phone Number').fill('(555)  555-5555');
            // Address field #mat-input-6
            await page.locator('#mat-input-6').dblclick();
            await page.locator('#mat-input-6').fill('123 Main St. ');
            // Clear #mat-input-10
            await page.locator('#mat-input-10').fill('');
            // If #mat-input-11 needs clearing/filling, do so; otherwise skip
            // (Original code just dblclicked it without filling)
            // await page.locator('#mat-input-11').dblclick();

            // City: #mat-input-8
            await page.locator('#mat-input-8').dblclick();
            await page.locator('#mat-input-8').fill('97330');
            // If you want to mimic partial fill, then Insert, then fill again:
            await page.locator('#mat-input-9').dblclick();
            await page.locator('#mat-input-9').fill('97334');
            await page.locator('#mat-input-9').press('Insert');
            await page.locator('#mat-input-9').fill('97330');

            // State selection #1
            await page
                .locator('div')
                .filter({ hasText: /^State/ })
                .nth(1)
                .click();
            await page.getByRole('option', { name: 'Arizona' }).click();

            // State selection #2 (Arizona -> Alaska)
            // Open the select
            await page.locator('#mat-select-value-5').click();
            // Wait for overlay
            await page.waitForSelector('div.cdk-overlay-container mat-option');
            // Press arrow keys until "Alaska" is highlighted
            await page.keyboard.press('ArrowDown'); // repeat as needed
            // Press Enter to select
            await page.keyboard.press('Enter');

            // Save changes
            await page.getByRole('button', { name: 'Save Changes' }).click();
           
    }
```
:::

# Related Functions




##  Name and Contact Information



The **Info** section of the **Profile** screen allows you to edit various details about your company.


```{lazyfigure} ../../_static/solo_app/Profile/information-section/info-zoomed-in.webp
:width: 400px
:align: center
:name: profile-screen-info

Profile Screen, Name and Contact Information
```

The following fields can be edited:

- **Name** 

:::{admonition} Note
The ``Name`` field is required and cannot be left blank.
:::


- **Website**
- **Billing Email**
- **Company Email**
- **Phone Number**



## Primary Address

The **Primary Address** section is where you can change the primary location of your company.

```{lazyfigure} ../../_static/solo_app/Profile/information-section/primary-address-zoomed-in.webp
:width: 400px
:align: center
:name: profile-screen-primary-address

Profile Screen, Primary Address 

```


The following fields are required and cannot be left blank:

- **Street Name**
- **City**
- **State**
- **Zip Code**





## Mailing Address


The **Mailing Address** section is where you can change the mailing address of your company (if different from the primary address).

:::{admonition} Note
:class: Note

Leave the``Street Name`` field empty if the Mailing address is the same as the Primary address.
:::


```{lazyfigure}  ../../_static/solo_app/Profile/information-section/mailing-address-zoomed-in.webp
:width: 400px
:align: center
:name: profile-screen-mailing-address

Profile Screen, Mailing Address 
```



Similar to the Primary address, you can edit the following information:

- **Street Name**
- **Suite/Apt Number**
- **City**
- **State**
- **Zip Code**



:::{admonition} Note

- No field is required for the Mailing address.
:::


## Upload Logo


```{lazyfigure} ../../_static/solo_app/Profile/upload-logo-section/upload-logo.webp
:width: 400px
:align: center
:name: upload-logo-section

Profile Screen, Upload Logo Section
```



**To Upload:**

1. Find the [Upload Logo](#upload-logo-section) Section.
2. CLick the [Upload Logo](#upload-logo-button) Button. *(The File Explorer will open.)*

3. Navigate to the location of the file you want to upload.

:::{admonition} Note

- The maximum file size for a logo is 10 MB.
:::


4. Select the file you want to upload.



```{lazyfigure} ../../_static/solo_app/Universal/file-explorer-filename-png.webp
:width: 400px
:align: center
:name: file-explorer-filename-png

File Explorer, File Name Selected
```

5. Click the [Open](#file-explorer-open){: .tippyAnchor} Button to upload the file.

(information-pane-info-main)=

```{include} ../../Universal/information-pane.md
```