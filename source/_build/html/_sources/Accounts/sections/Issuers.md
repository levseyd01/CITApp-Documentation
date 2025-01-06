

## Issuers




### Issuers List





### Issuer Details


Can Access From:

- Accounts -> Issuers (List) -> Details Button)


```{figure} ../../_static/solo_app/Accounts/Issuers/Issuer_List_Details_Button.png
:name: issuers-list-details-button
:width: 100%

Issuers Details Button
```

Leads to:

```{figure} ../../_static/solo_app/Accounts/Issuers/Issuer_Details_General.png
:name: issuer-details-general
:width: 100%

Issuers Details General
```



#### General Tab 



##### Update Company General Info 



```{figure} ../../_static/solo_app/Accounts/Issuers/Accounts_Issuers_Details_General_UpdateCompanyGeneralInfo.png
:name: issuer-details-general
:width: 100%

Issuers Details General - Update Company General Info
```



:::{admonition} Question(s)
:class: caution, dropdown

- [] Should the title at the top be "Edit General Info" instead of "Update Company General Info"?
- [] What does the asterisk (*) mean in "Update Company General Info"?
- [] Are there details the user will need if they enable "Federal Tax Withholding," or "State Tax Withholding"?
- [] What is the purpose of "Is this a test comapny?" - is this for software developement purposes, or is this something the user would need? 
- [] If so, is there information the user might need to know? For example, would the test company impact the database, dashboard creations, etc. 
- [] Should there be brief definitions for terms like Legal Entity Identifier (LEI)?
- [] Should there be hints about where they might find this information?
- [] Should we have the same field requirements for any of the fields in "Update Company General Info"?
- [] Is the full url needed for "Website URL" - should we indicate that the user should include the "https://"?


:::



:::{admonition} Corrections Needed
:class: Error, dropdown

-[] There should be a sentence that briefly defines what the asterisks means. This could be at the top or bottom. 

:::


:


##### Company Status 



```{figure} ../../_static/solo_app/Accounts/Issuers/Accounts_Issuers_Details_General_CompanyStatus.png
:name: issuer-details-general
:width: 100%

Company Status
```



:::{admonition} Question(s)
:class: caution, dropdown


- [] Are the implications for selecting "Unsuspend," "Deactivate," or "Suspend" clear to the user?
- [] If not, should there be a warning message that describes any permanent ones?

:::


:::{admonition} ToolTip Text Generation
:class: note, dropdown

-[] 

:::


##### Update Billing 

Can Access From:

- Issuers Details -> "General" tab -> Update Billing ("Edit" button)

```{figure} ../../_static/solo_app/Accounts/Issuers/Accounts_Issuers_Details_General_UpdateBilling.png
:name: issuer-details-general-update-billing
:width: 100%

Update Billing
```

```{figure} ../../_static/solo_app/Accounts/Issuers/Accounts_Issuers_Details_General_UpdateBilling_Dropdown.png
:name: issuer-details-general-update-billing-dropdown
:width: 100%

Update Billing Dropdown
```


:::{admonition} Question(s)
:class: caution, dropdown

- [] Is "Auto Suspend" the only way to "Update Billing" here?
- [] Should "Auto Suspend" be clearly defined on the page?
- [] Does this aterisks (*) mean something different than the one in "Company Info"?


:::


##### Update Address 


Can Access From:

- Issuers Details -> "General" tab -> Update Address ("Edit" button)

```{figure} ../../_static/solo_app/Accounts/Issuers/Accounts_Issuers_Details_General_UpdateAddress.png
:name: issuer-details-general-update-addresss
:width: 100%

Update Address
```



:::{admonition} Question(s)
:class: caution, dropdown

- [] Does this asterisks (*) mean something different than the one in "Company Info" or "Update Billing"?
- [] Does this, or will this, use the same address verified that is used on signup? 
- [] Should this have character requirements for the fields?
- [] Is this info used to contact them? 
- [] Should we provide a tooltip that tells them when/where this information is used?


:::



#### Free Transactions Tab




```{figure} ../../_static/solo_app/Accounts/Issuers/Accounts_Issuers_Details_FreeTransactions.png
:name: issuer-details-FreeTransactions
:width: 100%

FreeTransactions
```

:::{admonition} Question(s)
:class: caution, dropdown

- [] How are these used?
- [] Should there be a link for a page that allows them to use these?



:::

:::{admonition} ToolTip Text Generation
:class: note, dropdown

-[] 

:::



#### Security Types Tab





```{figure} ../../_static/solo_app/Accounts/Issuers/Accounts_IssuerDetails_SecurityTypes.png
:name: issuer-details-FreeTransactions
:width: 100%

"Security Types" Tab    
```

:::{admonition} Question(s)
:class: caution, dropdown

- [X] "ISIN"? - Not used a lot - wait on feedback. - International Sec
:::

:::{admonition} ToolTip Text Generation
:class: note, dropdown

- [X] Create one for "Certificate Definition ID"? - See what this is for. 
  - We don't know what this is. We need to find out, and may need one. 
- [X] Create one for "CUSIP"? - Everyone in the industry knows this one. 
- [X] Create one for "ISIN"? - Not used a lot - wait on feedback. 

:::


##### Authorized Shares



Can Access From:

- Security Types tab -> "Authorized Shares" section


```{figure} ../../_static/solo_app/Accounts/Issuers/Accounts_IssuerDettails_SecurityTypes_AuthorizedShares_Section.png
:name: issuer-details-FreeTransactions
:width: 100%

"Authorized Shares" section
```

:::{admonition} Question(s)
:class: caution, dropdown

- [] Should there be a space in before and after the colon in "Security:Warrant"?
- [] Is "Is Unlimited" clear to the user, i.e., are all the implications well known and standard?
- [] Would changing anything here have implications for report creation, or other areas of the software? For example, this "Par Value" appears in different areas, such as the "AgentPrintCertificateView," "CompanyAuthorizedHistoryView," etc. Should we let the user know about this?
- [] Checkbox bothers Bryan - Jaime 


:::

:::{admonition} ToolTip Text Generation
:class: note, dropdown

- [X] Should there be one for "Is Unlimited"?  - work on verbiage. 
  - [] Get clarification - unit can be sold, but contains variables, one warrant could equal five common. Seek Clarification
  - [X] What is "Par Value"? - Would this be clear to the user? - Known throughout the industry.

:::



###  Edit Issuer 



Can Access From:

- (Accounts -> Issuers -> "Edit" Button) 

```{figure} ../../_static/solo_app/Accounts/Issuers/Issuer_List_Edit_Button.png
:name: issuer-details-general-update-addresss
:width: 100%

Update Address
```


:::{admonition} ToolTip Text Generation
:class: note

May not be implemented. 

:::
