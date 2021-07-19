---
id: maintenance
title: Maintenance
sidebar_label: Maintenance
---

## Maintenance

<!--HRHIS4-SECTION-ID:webapi_maintenance-->

To perform maintenance you can interact with the *maintenance* resource. You should use *POST* or *PUT* as a method for requests. The following methods are available.

Analytics tables clear will drop all analytics tables.

    POST PUT /api/maintenance/analyticsTablesClear

Analytics table analyze will collects statistics about the contents of analytics tables in the database.

    POST PUT /api/maintenance/analyticsTablesAnalyze

Expired invitations clear will remove all user account invitations which
have expired.

    POST PUT /api/maintenance/expiredInvitationsClear

Period pruning will remove periods which are not linked to any data
values.

    POST PUT /api/maintenance/periodPruning

Zero data value removal will delete zero data values linked to data
elements where zero data is defined as not significant:

    POST PUT /api/maintenance/zeroDataValueRemoval

Soft deleted data value removal will permanently delete soft deleted data values.

    POST PUT /api/maintenance/softDeletedDataValueRemoval

Soft deleted program stage instance removal will permanently delete soft deleted events.

    POST PUT /api/maintenance/softDeletedProgramStageInstanceRemoval

Soft deleted program instance removal will permanently delete soft deleted enrollments.

    POST PUT /api/maintenance/softDeletedProgramInstanceRemoval

Soft deleted tracked entity instance removal will permanently delete soft deleted tracked entity instances.

    POST PUT /api/maintenance/softDeletedTrackedEntityInstanceRemoval

Drop SQL views will drop all SQL views in the database. Note that it will not delete the HRHIS4 SQL view entities.

    POST PUT /api/maintenance/sqlViewsDrop

Create SQL views will recreate all SQL views in the database.

    POST PUT /api/maintenance/sqlViewsCreate

Category option combo update will remove obsolete and generate missing category option combos for all category combinations.

    POST PUT /api/maintenance/categoryOptionComboUpdate

It is also possible to update category option combos for a single category combo using the following endpoint.

    POST PUT /api/maintenance/categoryOptionComboUpdate/categoryCombo/<category-combo-uid>

Cache clearing will clear the application Hibernate cache and the analytics partition caches.

    POST PUT /api/maintenance/cacheClear

Org unit paths update will re-generate the organisation unit path property. This can be useful e.g. if you imported org units with SQL.

    POST PUT /api/maintenance/ouPathsUpdate

Data pruning will remove complete data set registrations, data approvals, data value audits and data values, in this case for an organisation unit.

    POST PUT /api/maintenance/dataPruning/organisationUnits/<org-unit-id>

Data pruning for data elements, which will remove data value audits and data values.

    POST PUT /api/maintenance/dataPruning/dataElement/<data-element-uid>

Metadata validation will apply all metadata validation rules and return the result of the operation.

    POST PUT /api/metadataValidation

App reload will refresh the HRHIS4 managed cache of installed apps by reading from the file system.

    POST PUT /api/appReload

Maintenance operations are supported in a batch style with a POST request to the api/maintenance resource where the operations are supplied as query parameters:

    POST PUT /api/maintenance?analyticsTablesClear=true&expiredInvitationsClear=true
      &periodPruning=true&zeroDataValueRemoval=true&sqlViewsDrop=true&sqlViewsCreate=true
      &categoryOptionComboUpdate=true&cacheClear=true&ouPathsUpdate=true
