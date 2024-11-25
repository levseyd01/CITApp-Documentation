

## CIT Corporations




```{figure} ../../_static/solo_app/Accounts/Shareholders_Brokers/Shareholders_Brokers.png
:name: shareholders-brokers-main-page
:width: 100%

shareholders & Brokers Main Page
```



### Add New Account



```{figure} ../../_static/solo_app/Accounts/Shareholders_Brokers/shareholders_brokers_AddNewAccount.png
:name: shareholders-brokers-main-page
:width: 100%

Add New Account
```





:::{admonition} Question(s)
:class: caution, dropdown

- [] Should ``Parse Names`` parse the names typed in the ``Primary Contact Name`` and ``Secondary Contact Name`` fields?
- [] Should the selections in "Insider Info" be worded differently?
- [] Is there going to be more information needed for "Broker & Depository Info," or is this all that is needed?


:::

:::{admonition} ToolTip Text Generation Related Questions
:class: note, dropdown

- [X] Is the description for "Distribution Print Name" accurate?
  - i.e., "Blank fields will default to use Print Names"? Will the user know what this means?
- [X] Is "DRS Number" clear? - Should have a tooltip. Number in place of physical certificate. 
- [X] Is it clear what we mean by "Owner"? 
  - [] work on verbiage. 
  - [] Figure out what it means. 
  - [] All selections are an "Affiliate" 
  - [] Clients have been asking to be able to identify Employee, Office, Director. 
  - [] Work with john on tooltip.
- [X] Are the implications for "Qualified" and "Non-Qualified" clear?  
  - [] Find out what this means. 
  - [] Weird placement for citizenship. 
  - [] May have to do with stock options. 
  - [] Clarification regarding placement of qualification. (should go near insider info)
- [X] Deceased date is good.
- [X] Should we let the user know where to find "Date Received W-9/W-8BEN"? 
  - [] Should be a checkbox next to each one, with the date to let us know. 
  - [] Citizenship should be moved here, maybe.
  - [] Qualified does not belong in Citizenship.
  - [] What happens if you don't have a SIN./SSN/ etc. 
- [] Primary Tax Id - placed next to primary contact info.
- [X] Should we clearly define "FATCA" here? 
  - [] Find out what this means. 
- [] Should we let the user know what types of communication we will be using their selection under "Communication Info" for? Should this be the case everytime we ask for "Communication Info"?
- [] There are many "Account Types" listed under "Account Type," should we provide a brief definition here for the most obscure ones, or all?
- [] Does "Prior Account Number" have a clear definition? I.e., is this prior w/respect to SOLO or the user's own records?
- [] is "Test" something used for development? If not, should there be a brief description?
- [] Should "Federal Info" be more descriptive? I.e., should there something like, "Federal Tax Information"?


:::



#### Primary Address 


```{figure} ../../_static/solo_app/Accounts/Shareholders_Brokers/deceased_address.png
:name: shareholders-brokers-main-page
:width: 100%

Address
```



:::{admonition} Question(s)
:class: caution, dropdown

- [] Is this the normal location to have a "Deceased Date"?
- [] If so, is there any other information they need to fill out?


:::

:::{admonition} ToolTip Text Generation Related Questions
:class: note, dropdown

- 
:::



### Search

```{figure} ../../_static/solo_app/Accounts/Shareholders_Brokers/Search.png
:name: shareholders-brokers-search
:width: 100%

Search
```



:::{admonition} Question(s)
:class: caution, dropdown

- [] Should the name be highlighted in blue when selected?
- [] Are the last four of the tax-id supposed to show?


:::

:::{admonition} ToolTip Text Generation Related Questions
:class: note, dropdown


:::


### Account Info

```{figure} ../../_static/solo_app/Accounts/Shareholders_Brokers/Account_Info.png
:name: shareholders-brokers-search
:width: 100%

Search
```



:::{admonition} Question(s)
:class: caution, dropdown

- [] Are the implications for "Suspend" and "Unsuspend" clear BEFORE the user selects them?
  - [] Should the message underneath the "Status" change whether it is "Suspended" or "Unsuspended," i.e., "Shareholder currently has access" or "Shareholder currently does not have access"?
- [] Should there be a confirmation pop-up after the request is submitted?
- [] Where do the notes go? Can you only see them on this page? Is that clear?
- [] Is every note supposed to open when you click "Edit"?
- [] Will/Should there be more information than the "DRS Number" under "DRS Information"?


:::

:::{admonition} ToolTip Text Generation Related Questions
:class: note, dropdown


:::



### Addresses

```{figure} ../../_static/solo_app/Accounts/Shareholders_Brokers/Addresses.png
:name: shareholders-addresses
:width: 100%

Addresses Tab
```



:::{admonition} Question(s)
:class: caution, dropdown

- [] What happens when there is a bad address? Does it let the user know what the implications are?
- [] What's the difference between Mailing Address and Shipping Address?


:::

:::{admonition} ToolTip Text Generation Related Questions
:class: note, dropdown

- [] Should there be a tip that briefly describes the differences between Mailing and Shipping?
- [] What is "Check Payment Address"?

:::


### Billing Settings

```{figure} ../../_static/solo_app/Accounts/Shareholders_Brokers/Billing.png
:name: shareholders-addresses
:width: 100%

Billings Tab
```

```{figure} ../../_static/solo_app/Accounts/Shareholders_Brokers/Billing_2.png
:name: shareholders-addresses
:width: 100%

Billings Tab - bottom section
```




:::{admonition} Question(s)
:class: caution, dropdown

- [] Should "Is Mobile Number" just be "Mobile/Home" or "Mobile Number?"
- [] Should there be multiple ways to enter a number? For example, if the Fax Number is long distance?
- [] Should we be allowing special characters in fields like "Card holder name" (Add Credit Card)?
- [] Should the title of each field be in Title Case (i.e., "Credit Card Type" versus "Card holder name")?
- [] Should the "Charge on the day of the Month" have a fill-in type of field? "Charge on the __ day of the month"?



:::

:::{admonition} ToolTip Text Generation Related Questions
:class: note, dropdown

- [] Should there be brief descriptions for any of the options selected for "Billing Type" when adding a billing plan (i.e., Maintenance Fee, DWAC Maintenance Fee, etc.)?
- [] Should there be a more dynamic description next to Credit Limit Suspension?
  - [] Should there be a more specific use of the word "limit" for the current description? Or should it be moved to when the user is actually setting the limit with ``Edit``?
- [] Should the "End of the Month" be more specific? I.e., "End of the Month Business Day" or "End of the Month Calendar Day"?
- [] Should there be a message that tells the user how it will be used as a "primary card," i.e., what sorts of things it will be used for when billing?
- [] How are the notes used for adding credit cards? Should we indicate whether or not we are looking at these notes for any reason?
- [] Are all the "Fees" listed in the "Custom Fees" section clear? should there be clear definitions for these?
- 
:::


### OFAC Results

```{figure} ../../_static/solo_app/Accounts/Shareholders_Brokers/OFAC_Results.png
:name: OFAC Results
:width: 100%

OFAC Results
```





:::{admonition} Question(s)
:class: caution, dropdown

- []


:::

:::{admonition} ToolTip Text Generation Related Questions
:class: note, dropdown

- [] Is the definition for "OFAC Check Results" clear? 
- [] "Is Matched"?

:::



### Tax Withholding

```{figure} ../../_static/solo_app/Accounts/Shareholders_Brokers/Tax_Withholding.png
:name: Tax Withholding
:width: 100%

Tax Withholding
```





:::{admonition} Question(s)
:class: caution, dropdown

- [] 


:::

:::{admonition} ToolTip Text Generation Related Questions
:class: note, dropdown

- [] Should we have a link, or note, that includes what their primary mailing address is?
- [] The description says, "Primary OR Mailing Address," how is this determined?

:::



### Disbursement

```{figure} ../../_static/solo_app/Accounts/Shareholders_Brokers/Disbursement.png
:name: Disbursement
:width: 100%

Disbursement
```





:::{admonition} Question(s)
:class: caution, dropdown

- [] 


:::

:::{admonition} ToolTip Text Generation Related Questions
:class: note, dropdown


- [] Are the implications for putting an account on hold clear?

:::



#### Add Distribution Payment Method

```{figure} ../../_static/solo_app/Accounts/Shareholders_Brokers/Add_Distribution_Payment_Method.png
:name: Add-Distribution-Payment-Method
:width: 100%

Add Distribution Payment Method
```





:::{admonition} Question(s)
:class: caution, dropdown

- [] 


:::

:::{admonition} ToolTip Text Generation Related Questions
:class: note, dropdown

- [] Should "ABA Routing Number" have a brief description (Add Distribution Payment Method)?
- [] "SWIFT/BIC" code (Add Distribution Payment Method)?
- [] What are the implications of selecting an Issuer? Is this clear?
- [] Are any of the fields in "Add Distribution Payment Method" unclear?


:::



### Documents Tab

```{figure} ../../_static/solo_app/Accounts/Shareholders_Brokers/Documents.png
:name: Documents
:width: 100%

Documents
```





:::{admonition} Question(s)
:class: caution, dropdown

- [] 


:::


:::{admonition} ToolTip Text Generation Related Questions
:class: note, dropdown

- [] Should the language for "Access and view" be more specific? I.e., "download," "print," etc.?
- [] Should any of the documents listed under "Internal Documents" have a brief description?
  - [] Are the use cases and how we use them clear?


:::