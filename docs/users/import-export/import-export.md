---
id: import-export
title: Import/Export Module
sidebar_label: Import - Export
---

This module allows users to enter massive data into the system. Two functions can be performed in import/export module.

 1. Data import
 2. Data export

### Data import
To import data in HRHIS, go to the application menu and select Import/Export as indicated below.

![img alt](/images/SelectingImport_Export.png)

Then select "Import" section under Import/Export in HRHIS menu. Import management window will open up to the right of the menu as indicated below

![img alt](/images/Import_ExportPage.png)

Follow the steps number 1 to 4 as indicated in the snipset below so as to successfully import data.

![img alt](/images/ImportProcess.png)

1. Click on Download Import Template to download the template of the form in which data has to be imported. An excel sheet with all data entry fields will be downloaded. Open the downloaded excel sheet and fill required data in respective fields.

Note: Always remember to check the fields available in the excel against the data to be imported to make sure that the fields are in appropriate order.

2. Go back to the HRHIS import management window, and click on the field for selecting data import file.

3. Select record import stratergy to be used. There are three record import strategies as explainde below
  
  i) New and Updates: The system will compare data from the file against existing records in the system. Therefore, new records will be imported where as existing records will be updated.

  ii) New only: The system will compare data from the file against existing records in the system. Only records that do not exist in the system , will be imported.

  iii) Updates only: The system will compare data from the file against existing records in the system. Only existing records in the system will be updated.

 Upon completion of data import a message will display the status of the import. The logger will also display the detailed import status. If the import process is successful, data contained in the imported file will be added to the selected organization unit by downloading the template.

### Data export

To export data from HRHIS, select "Export" section under Import /Export in HRHIS menu. An export management window will open as shown below.

![img alt](/images/ExportManagementWindow.png)

Follow the steps below to complete data export process

1. Click on the input element captioned "select organization unit", a model form will pop-up with the organization unit tree as indicated below.

![img alt](/images/OrgUnitPop.png)

2. From the organization unit tree, select the organization unit level for which data has to be exported.

 NB: Click on the arrows at the left of the organization unit name to expand the tree and select lower hierachy organization units.

 I have selected "Health Training Institutions" for example

 ![img alt](/images/OrgUnitSelect.png)

 3. Click anywhere outside the organization unit pop-up form to dismiss it.

An input element captioned "select records" will be visible below the first input element and a checkbox labelled "Export Record With Lower Administrative Level"

![img alt](/images/NewInputElement.png)

4. Click on the checkbox labelled "Export Record With Lower Administrative Level" If you are interested to export data for the selected organization unit together with data from lower administarative levels otherwise you can ignore this step.

 5. Click on the input element captioned "Select records" , a list of forms for holding records in the system will pop-up as indicated below

![img alt](/images/SelectingForm2.png)

 6. Select a form and click outside the pop-up window to dismiss it.

 NB: The kind of form selected should abide with the organization unit selected.

A new input field captioned "Export Start Date" with date pickers will be visible.

![img alt](/images/StartdateInputField.png)

7. Click on the input field captioned "Export Start Date" and pick a date from the date picker. A new input field captioned "Export End Date" will be visible as indicated below.

![img alt](/images/ExportEndDate.png)

8. Click on the input field captioned "Export End Date" and pick a date from the date picker. Three new input fields will appear at the bottom of the window as indicated below

![img alt](/images/LastExportInputs.png)
