---
title: "AshbyApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
AshbyApi

# AshbyApi

Arcade Starter

**Description:** Tools that enable LLMs to interact directly with the Ashby API

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_ashby_api)](https://pypi.org/project/arcade_ashby_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_ashby_api)](https://pypi.org/project/arcade_ashby_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_ashby_api)](https://pypi.org/project/arcade_ashby_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_ashby_api)](https://pypi.org/project/arcade_ashby_api/)

AshbyApi is a [Starter MCP Server](/guides/create-tools/improve/types-of-tools.md#starter-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Starter tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Starter tools.

The AshbyApi MCP Server offers a comprehensive suite of tools for managing recruitment processes within the Ashby platform. Users can perform a variety of actions, including:

-   Create, update, and manage job applications and candidates.
-   Retrieve detailed information about candidates, applications, jobs, and departments.
-   Manage interview schedules, feedback, and assessments.
-   Handle job postings, openings, and associated locations.
-   Utilize webhooks for event notifications and manage user permissions.

This server is designed to streamline the hiring process, making it easier to track candidates and manage recruitment workflows effectively.

## Available Tools

Tool Name

Description

AshbyApi.GetApiKeyInfo

Retrieve information about the current API key in use.

AshbyApi.ChangeApplicationSource

Change the source of an application in Ashby.

AshbyApi.ChangeApplicationStage

Change the stage of a candidate's application.

AshbyApi.CreateJobApplication

Create a job application for a candidate.

AshbyApi.FetchApplicationDetails

Fetch application details using application or form instance ID.

AshbyApi.ListApplications

Retrieve all applications in the organization.

AshbyApi.TransferApplicationToJob

Transfer an application to a different job.

AshbyApi.UpdateApplicationStatus

Updates the status or details of an application.

AshbyApi.UpdateApplicationHistory

Update the history of an application.

AshbyApi.GetApplicationHistory

Fetch a paginated list of application history items.

AshbyApi.GetCandidateCriteriaEvaluations

Retrieve AI evaluations for candidate job criteria.

AshbyApi.ListApplicationFeedback

Retrieve interview feedback and scorecards for applications.

AshbyApi.AddHiringTeamMember

Add a user to the hiring team for an application.

AshbyApi.RemoveHiringTeamMember

Remove a user from the hiring team for an application.

AshbyApi.GetHiringTeamRoles

Retrieve all available hiring team roles for applications.

AshbyApi.SubmitApplicationFeedback

Submit application feedback forms with various field types.

AshbyApi.GetApprovalList

Retrieve all approvals in the organization.

AshbyApi.UpdateApprovalDefinition

Create or update an approval definition for an entity.

AshbyApi.ListArchiveReasons

Retrieve a list of archive reasons.

AshbyApi.AddCompletedAssessmentToCandidate

Adds a completed assessment to a candidate's record.

AshbyApi.StartAssessment

Start an assessment using the Ashby API.

AshbyApi.ListAssessments

Retrieve a list of available assessments.

AshbyApi.UpdateAssessmentStatus

Update the status of a candidate assessment in Ashby.

AshbyApi.CancelAssessment

Cancel an ongoing assessment.

AshbyApi.AddCandidateToProject

Add a candidate to a specified project.

AshbyApi.AddCandidateTag

Add a tag to a candidate in the recruitment system.

AshbyApi.AnonymizeCandidateData

Permanently anonymize a candidate's data in the system.

AshbyApi.CreateCandidate

Create a new candidate entry.

AshbyApi.CreateCandidateNote

Add a note to a candidate's profile in Ashby.

AshbyApi.GetCandidateInformation

Retrieve detailed information of a candidate using their ID.

AshbyApi.ListCandidates

Retrieve a list of all candidates in an organization.

AshbyApi.ListCandidateClientInfo

Retrieve client info records for a candidate.

AshbyApi.ListCandidateNotes

Retrieve all notes associated with a candidate.

AshbyApi.ListCandidateProjects

Retrieve all projects linked to a candidate.

AshbyApi.FindCandidates

Search for candidates by email or name.

AshbyApi.UpdateCandidateInfo

Update an existing candidate's information.

AshbyApi.CreateCandidateTag

Create a new candidate tag in the Ashby system.

AshbyApi.ListCandidateTags

Retrieve a list of all candidate tags.

AshbyApi.ListCloseReasons

Get a list of close reasons for jobs or openings.

AshbyApi.ListEnabledCommunicationTemplates

Retrieve all enabled communication templates.

AshbyApi.CreateCustomField

Creates a new custom field in Ashby.

AshbyApi.GetCustomFieldInfo

Retrieve information about a custom field.

AshbyApi.ListCustomFields

Retrieve a list of all custom fields.

AshbyApi.SetCustomFieldValue

Update the value of a custom field for an object.

AshbyApi.CreateDepartment

Create a new department within an organization.

AshbyApi.ArchiveDepartment

Archive a department within an organization.

AshbyApi.RestoreDepartment

Restores a previously deleted department.

AshbyApi.GetDepartmentDetails

Fetches department details using a department ID.

AshbyApi.ListDepartments

Retrieve a list of all departments.

AshbyApi.MoveDepartment

Relocate a department to a new parent structure.

AshbyApi.UpdateDepartment

Update existing department details in the system.

AshbyApi.RetrieveCandidateFileUrl

Retrieve the URL of a candidate's associated file.

AshbyApi.GetFeedbackFormInfo

Fetch detailed information about a specific feedback form by ID.

AshbyApi.ListFeedbackForms

Retrieve a list of all feedback forms.

AshbyApi.HiringTeamAddMember

Adds a user to the hiring team for a job or application.

AshbyApi.RemoveTeamMemberFromHiring

Remove a member from the hiring team at job or application level.

AshbyApi.ListHiringTeamRoles

Retrieve possible hiring team roles within an organization.

AshbyApi.FetchInterviewDetails

Retrieve interview details using interview ID.

AshbyApi.ListInterviews

Retrieve a list of all scheduled interviews.

AshbyApi.ListInterviewEvents

Retrieve a list of interview events for a schedule.

AshbyApi.ListInterviewPlans

Fetch a list of all available interview plans.

AshbyApi.CancelInterviewSchedule

Cancel an interview schedule using its ID.

AshbyApi.CreateInterviewSchedule

Create a scheduled interview in Ashby.

AshbyApi.GetInterviewSchedules

Retrieve all interview schedules for the organization.

AshbyApi.UpdateInterviewSchedule

Update, add, or cancel interview schedule events.

AshbyApi.ListInterviewStages

Retrieve all interview stages for an interview plan in order.

AshbyApi.FetchInterviewStageDetails

Fetches details of a specific interview stage.

AshbyApi.ListInterviewStageGroups

Retrieve all interview group stages in order.

AshbyApi.ListInterviewerPools

Fetches a list of all interviewer pools.

AshbyApi.GetInterviewerPoolInfo

Retrieve information about an interviewer pool.

AshbyApi.CreateInterviewerPool

Creates a new interviewer pool for hiring processes.

AshbyApi.UpdateInterviewerPool

Update an interviewer pool.

AshbyApi.ArchiveInterviewerPool

Archive an interviewer pool when needed.

AshbyApi.RestoreInterviewerPool

Restores an archived interviewer pool.

AshbyApi.AddUserToInterviewerPool

Add a user to an interviewer pool in Ashby.

AshbyApi.RemoveUserFromInterviewerPool

Remove a user from an interviewer pool.

AshbyApi.CreateNewJob

Create a new job listing with specified details.

AshbyApi.GetJobDetails

Retrieve detailed information about a job using its ID.

AshbyApi.ListAllJobs

Retrieve all open, closed, and archived jobs from Ashby.

AshbyApi.SetJobStatus

Update the status of a job by its ID.

AshbyApi.UpdateJobDetails

Update details of an existing job.

AshbyApi.UpdateJobCompensation

Update a job's compensation details.

AshbyApi.SearchJobsByTitle

Search for jobs by title.

AshbyApi.ListEnabledJobBoards

Retrieve all enabled job boards.

AshbyApi.JobInterviewPlanInfo

Retrieve a job's interview plan details.

AshbyApi.GetJobPostingInfo

Retrieve detailed information about a specific job posting.

AshbyApi.ListPublishedJobPostings

Retrieve all published and publicly listed job postings.

AshbyApi.ListJobTemplates

Retrieve all active and inactive job templates.

AshbyApi.UpdateJobPosting

Update an existing job posting on the Ashby platform.

AshbyApi.ArchiveLocation

Archives a location or location hierarchy.

AshbyApi.CreateLocation

Create a location or location hierarchy.

AshbyApi.GetLocationDetails

Retrieve detailed information for a specific location.

AshbyApi.ListAllLocations

Retrieve a list of all available locations.

AshbyApi.MoveLocationInHierarchy

Move a location within the organizational hierarchy.

AshbyApi.RestoreArchivedLocation

Restores an archived location or hierarchy.

AshbyApi.UpdateLocationAddress

Update the address of a location.

AshbyApi.UpdateLocationName

Updates the name of a location.

AshbyApi.UpdateLocationRemoteStatus

Update the remote status of a specific location.

AshbyApi.UpdateWorkplaceType

Update the workplace type for a specific location.

AshbyApi.OfferApprovalAction

Approve an offer or a specific step in the approval process.

AshbyApi.CreateOffer

Create a new offer using specified form fields.

AshbyApi.GetOfferDetails

Retrieve details about a specific offer using its ID.

AshbyApi.GetLatestOffers

Retrieve the latest version of all offers available.

AshbyApi.CreateCandidateOfferVersion

Initiate a new offer version for a candidate.

AshbyApi.UpdateOffer

Update an existing offer and retrigger approval steps.

AshbyApi.StartOfferProcess

Initiate an offer process for a candidate.

AshbyApi.GetOpeningInfo

Retrieve job opening details using a UUID.

AshbyApi.ListJobOpenings

Retrieve a list of current job openings.

AshbyApi.SearchJobOpenings

Search for job openings by identifier.

AshbyApi.CreateJobOpening

Create a new job opening in the system.

AshbyApi.AddJobToOpening

Adds a job to an opening.

AshbyApi.RemoveJobFromOpening

Remove a job from an opening.

AshbyApi.AddLocationToJobOpening

Adds a location to a job opening.

AshbyApi.RemoveLocationFromOpening

Remove a location from a job opening.

AshbyApi.SetOpeningState

Update the state of a job opening.

AshbyApi.SetOpeningArchivedState

Set or unset the archived state of a job opening.

AshbyApi.UpdateJobOpening

Update the details of a job opening.

AshbyApi.GetProjectInformation

Retrieve detailed information about a project.

AshbyApi.ListProjects

Retrieve a list of projects.

AshbyApi.SearchProjectsByTitle

Search for projects by title for quick lookups.

AshbyApi.CreateCandidateReferral

Creates a candidate referral in the system.

AshbyApi.GetReferralFormInfo

Fetches or creates the default referral form details.

AshbyApi.GenerateAndPollReport

Generate a new report or poll status of report generation.

AshbyApi.RetrieveSyncReport

Retrieve report data synchronously with Ashby.

AshbyApi.ListAllSources

Retrieve a list of all sources for hiring processes.

AshbyApi.ListSourceTrackingLinks

Retrieve all source custom tracking links.

AshbyApi.GetSurveyFormDetails

Retrieve details of a survey form definition by id.

AshbyApi.ListSurveyFormDefinitions

Retrieve all survey form definitions.

AshbyApi.CreateSurveyRequest

Create a survey request and get a survey URL.

AshbyApi.ListSurveyRequests

Retrieve a list of all survey requests.

AshbyApi.CreateSurveySubmission

Create a new survey submission.

AshbyApi.ListSurveySubmissions

Retrieve all survey submissions for a specific type.

AshbyApi.GetAshbyUserInfo

Retrieve detailed information of a specific Ashby user.

AshbyApi.GetAshbyUserList

Retrieve a list of all users in Ashby and their access levels.

AshbyApi.AshbyUserSearch

Search for an Ashby user by email address.

AshbyApi.GetInterviewerSettings

Retrieve interviewer settings for a user.

AshbyApi.UpdateInterviewerSettings

Update interviewer settings for a user.

AshbyApi.CreateWebhookSetting

Creates a webhook setting in Ashby.

AshbyApi.RetrieveWebhookInfo

Retrieve detailed information on a specific webhook setting by ID.

AshbyApi.UpdateWebhookSetting

Update a webhook setting for Ashby service.

AshbyApi.DeleteWebhookSetting

Delete a webhook setting.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## AshbyApi.GetApiKeyInfo



Retrieve information about the current API key in use.

**Parameters**

-   **empty\_request\_body** (`json`, optional) Provide an empty JSON object as the request body. This is required to make the call but should contain no data.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ChangeApplicationSource



Change the source of an application in Ashby.

**Parameters**

-   **application\_source\_details** (`json`, optional) JSON object containing `applicationId` and `sourceId` to specify the application and its new source.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ChangeApplicationStage



Change the stage of a candidate’s application.

**Parameters**

-   **application\_stage\_change\_details** (`json`, optional) A JSON object containing applicationId, interviewStageId, and optional archiveReasonId and archiveEmail details, to change the application stage.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateJobApplication



Create a job application for a candidate.

**Parameters**

-   **job\_application\_data** (`json`, optional) JSON object containing candidateId, jobId, interviewPlanId, interviewStageId, sourceId, creditedToUserId, createdAt, and applicationHistory for the job application.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.FetchApplicationDetails



Fetch application details using application or form instance ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListApplications



Retrieve all applications in the organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.TransferApplicationToJob



Transfer an application to a different job.

**Parameters**

-   **application\_transfer\_details** (`json`, optional) A JSON object containing the details for transferring an application, including `applicationId`, `jobId`, `interviewPlanId`, `interviewStageId`, and `startAutomaticActivities`.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateApplicationStatus



Updates the status or details of an application.

**Parameters**

-   **application\_update\_payload** (`json`, optional) JSON object containing applicationId, sourceId, creditedToUserId, createdAt, and sendNotifications to update application details. sendNotifications controls subscriber notifications.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateApplicationHistory



Update the history of an application.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetApplicationHistory



Fetch a paginated list of application history items.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetCandidateCriteriaEvaluations



Retrieve AI evaluations for candidate job criteria.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListApplicationFeedback



Retrieve interview feedback and scorecards for applications.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.AddHiringTeamMember



Add a user to the hiring team for an application.

**Parameters**

-   **hiring\_team\_member\_details** (`json`, optional) A JSON object containing ‘applicationId’, ‘teamMemberId’, and ‘roleId’. These IDs specify the application, team member, and role for adding to the hiring team.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.RemoveHiringTeamMember



Remove a user from the hiring team for an application.

**Parameters**

-   **hiring\_team\_removal\_details** (`json`, optional) JSON object containing applicationId, teamMemberId, and roleId for the user to be removed.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetHiringTeamRoles



Retrieve all available hiring team roles for applications.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.SubmitApplicationFeedback



Submit application feedback forms with various field types.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetApprovalList



Retrieve all approvals in the organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateApprovalDefinition



Create or update an approval definition for an entity.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListArchiveReasons



Retrieve a list of archive reasons.

**Parameters**

-   **include\_archived\_interview\_plans** (`boolean`, optional) Set to true to include archived interview plans in the results.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.AddCompletedAssessmentToCandidate



Adds a completed assessment to a candidate’s record.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.StartAssessment



Start an assessment using the Ashby API.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListAssessments



Retrieve a list of available assessments.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateAssessmentStatus



Update the status of a candidate assessment in Ashby.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CancelAssessment



Cancel an ongoing assessment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.AddCandidateToProject



Add a candidate to a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.AddCandidateTag



Add a tag to a candidate in the recruitment system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.AnonymizeCandidateData



Permanently anonymize a candidate’s data in the system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateCandidate



Create a new candidate entry.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateCandidateNote



Add a note to a candidate’s profile in Ashby.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetCandidateInformation



Retrieve detailed information of a candidate using their ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListCandidates



Retrieve a list of all candidates in an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListCandidateClientInfo



Retrieve client info records for a candidate.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListCandidateNotes



Retrieve all notes associated with a candidate.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListCandidateProjects



Retrieve all projects linked to a candidate.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.FindCandidates



Search for candidates by email or name.

**Parameters**

-   **candidate\_email** (`string`, optional) The email address of the candidate to search for. Use this to refine the search results and find specific candidates.
-   **candidate\_name** (`string`, optional) The name of the candidate to search for in the database.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateCandidateInfo



Update an existing candidate’s information.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateCandidateTag



Create a new candidate tag in the Ashby system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListCandidateTags



Retrieve a list of all candidate tags.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListCloseReasons



Get a list of close reasons for jobs or openings.

**Parameters**

-   **include\_archived\_reasons** (`boolean`, optional) Set to true to include archived close reasons in the response.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListEnabledCommunicationTemplates



Retrieve all enabled communication templates.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateCustomField



Creates a new custom field in Ashby.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetCustomFieldInfo



Retrieve information about a custom field.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListCustomFields



Retrieve a list of all custom fields.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.SetCustomFieldValue



Update the value of a custom field for an object.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateDepartment



Create a new department within an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ArchiveDepartment



Archive a department within an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.RestoreDepartment



Restores a previously deleted department.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetDepartmentDetails



Fetches department details using a department ID.

**Parameters**

-   **department\_id** (`json`, optional) The ID of the department to fetch details for. This is required to retrieve accurate department information.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListDepartments



Retrieve a list of all departments.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.MoveDepartment



Relocate a department to a new parent structure.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateDepartment



Update existing department details in the system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.RetrieveCandidateFileUrl



Retrieve the URL of a candidate’s associated file.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetFeedbackFormInfo



Fetch detailed information about a specific feedback form by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListFeedbackForms



Retrieve a list of all feedback forms.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.HiringTeamAddMember



Adds a user to the hiring team for a job or application.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.RemoveTeamMemberFromHiring



Remove a member from the hiring team at job or application level.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListHiringTeamRoles



Retrieve possible hiring team roles within an organization.

**Parameters**

-   **return\_role\_titles\_only** (`boolean`, optional) Set to true to return only role titles. Set to false to return objects with id and title.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.FetchInterviewDetails



Retrieve interview details using interview ID.

**Parameters**

-   **interview\_id** (`json`, optional) The unique ID of the interview to fetch details for. This ID is required to retrieve the specific interview information.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListInterviews



Retrieve a list of all scheduled interviews.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListInterviewEvents



Retrieve a list of interview events for a schedule.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListInterviewPlans



Fetch a list of all available interview plans.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CancelInterviewSchedule



Cancel an interview schedule using its ID.

**Parameters**

-   **interview\_schedule\_cancel\_details** (`json`, optional) A JSON object containing the ID of the interview schedule to cancel and whether rescheduling is allowed. Required JSON structure with keys ‘id’ and ‘allowReschedule’.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateInterviewSchedule



Create a scheduled interview in Ashby.

**Parameters**

-   **interview\_schedule\_request** (`json`, optional) JSON object containing application ID, interview events, and extra data. Events include start time, end time, and interviewers.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetInterviewSchedules



Retrieve all interview schedules for the organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateInterviewSchedule



Update, add, or cancel interview schedule events.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListInterviewStages



Retrieve all interview stages for an interview plan in order.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.FetchInterviewStageDetails



Fetches details of a specific interview stage.

**Parameters**

-   **interview\_stage\_id** (`json`, optional) The unique identifier of the interview stage to fetch details for. Required for retrieving the specific stage information.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListInterviewStageGroups



Retrieve all interview group stages in order.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListInterviewerPools



Fetches a list of all interviewer pools.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetInterviewerPoolInfo



Retrieve information about an interviewer pool.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateInterviewerPool



Creates a new interviewer pool for hiring processes.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateInterviewerPool



Update an interviewer pool.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ArchiveInterviewerPool



Archive an interviewer pool when needed.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.RestoreInterviewerPool



Restores an archived interviewer pool.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.AddUserToInterviewerPool



Add a user to an interviewer pool in Ashby.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.RemoveUserFromInterviewerPool



Remove a user from an interviewer pool.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateNewJob



Create a new job listing with specified details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetJobDetails



Retrieve detailed information about a job using its ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListAllJobs



Retrieve all open, closed, and archived jobs from Ashby.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.SetJobStatus



Update the status of a job by its ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateJobDetails



Update details of an existing job.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateJobCompensation



Update a job’s compensation details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.SearchJobsByTitle



Search for jobs by title.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListEnabledJobBoards



Retrieve all enabled job boards.

**Parameters**

-   **request\_body\_data** (`json`, optional) The JSON payload for the request. This should contain any necessary parameters for listing enabled job boards.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.JobInterviewPlanInfo



Retrieve a job’s interview plan details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetJobPostingInfo



Retrieve detailed information about a specific job posting.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListPublishedJobPostings



Retrieve all published and publicly listed job postings.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListJobTemplates



Retrieve all active and inactive job templates.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateJobPosting



Update an existing job posting on the Ashby platform.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ArchiveLocation



Archives a location or location hierarchy.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateLocation



Create a location or location hierarchy.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetLocationDetails



Retrieve detailed information for a specific location.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListAllLocations



Retrieve a list of all available locations.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.MoveLocationInHierarchy



Move a location within the organizational hierarchy.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.RestoreArchivedLocation



Restores an archived location or hierarchy.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateLocationAddress



Update the address of a location.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateLocationName



Updates the name of a location.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateLocationRemoteStatus



Update the remote status of a specific location.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateWorkplaceType



Update the workplace type for a specific location.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.OfferApprovalAction



Approve an offer or a specific step in the approval process.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateOffer



Create a new offer using specified form fields.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetOfferDetails



Retrieve details about a specific offer using its ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetLatestOffers



Retrieve the latest version of all offers available.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateCandidateOfferVersion



Initiate a new offer version for a candidate.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateOffer



Update an existing offer and retrigger approval steps.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.StartOfferProcess



Initiate an offer process for a candidate.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetOpeningInfo



Retrieve job opening details using a UUID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListJobOpenings



Retrieve a list of current job openings.

**Parameters**

-   **last\_sync\_token** (`string`, optional) Opaque token representing the last time a full set of results was fetched. Use this to sync data updates.
-   **page\_cursor** (`string`, optional) String indicating which page of job openings results to fetch, used for pagination.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.SearchJobOpenings



Search for job openings by identifier.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateJobOpening



Create a new job opening in the system.

**Parameters**

-   **associated\_job\_ids** (`array[string]`, optional) Array of job IDs related to the opening.
-   **department\_team\_id** (`string`, optional) The unique identifier for the department or team associated with the job opening.
-   **employment\_start\_date** (`string`, optional) The date (in YYYY-MM-DD format) when the hired person is expected to start employment.
-   **employment\_type** (`string`, optional) The employment type for this opening. Options include: FullTime, PartTime, Intern, Contract, Temporary.
-   **identifiers** (`string`, optional) Comma-separated list of jobIds, targetHireDate, targetStartDate, isBackfill, and employmentType to define job details.
-   **is\_backfill** (`boolean`, optional) Indicate whether the job opening is intended to backfill a previous employee’s position.
-   **job\_description** (`string`, optional) A detailed description of the job opening, including responsibilities and qualifications.
-   **location\_ids** (`array[string]`, optional) A list of location IDs associated with the job opening.
-   **opening\_state** (`string`, optional) Specifies the state of the job opening. Options: Draft, Approved, Open, Closed. Defaults to Draft. Additional validation may be needed if not Draft.
-   **target\_hire\_date** (`string`, optional) Specify the date (YYYY-MM-DD) by which the hire is intended to be made for the job opening.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.AddJobToOpening



Adds a job to an opening.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.RemoveJobFromOpening



Remove a job from an opening.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.AddLocationToJobOpening



Adds a location to a job opening.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.RemoveLocationFromOpening



Remove a location from a job opening.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.SetOpeningState



Update the state of a job opening.

**Parameters**

-   **close\_reason\_id** (`string`, optional) The ID for the reason why the opening is closed, required when setting the state to closed.
-   **new\_opening\_state** (`string`, optional) The new state to update the job opening to. Accepted values are ‘Draft’, ‘Approved’, ‘Open’, ‘Closed’.
-   **opening\_id** (`string`, optional) The unique identifier of the job opening to be updated.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.SetOpeningArchivedState



Set or unset the archived state of a job opening.

**Parameters**

-   **opening\_id** (`string`, optional) The ID of the job opening to archive or unarchive.
-   **set\_archived\_state** (`boolean`, optional) Boolean to set the archived state of a job opening. Use true to archive and false to unarchive.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateJobOpening



Update the details of a job opening.

**Parameters**

-   **department\_team\_id** (`string`, optional) The unique ID of the department or team associated with the job opening.
-   **employment\_type** (`string`, optional) Specifies the employment type for the job opening. Can be FullTime, PartTime, Intern, Contract, or Temporary.
-   **fields\_to\_update** (`string`, optional) Specify the fields you want to update, such as jobIds, targetHireDate, targetStartDate, isBackfill, employmentType.
-   **is\_backfill** (`boolean`, optional) Indicate if the opening is intended to backfill an employee. Use true for backfill, false otherwise.
-   **job\_description\_update** (`string`, optional) The new description text for the job opening. Provide a detailed and clear update relevant to the job role.
-   **opening\_identifier** (`string`, optional) The unique ID of the job opening to update.
-   **target\_hire\_date** (`string`, optional) The date in YYYY-MM-DD format by which you intend to hire for the opening.
-   **target\_start\_date** (`string`, optional) The intended start date (in YYYY-MM-DD format) for a newly hired employee.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetProjectInformation



Retrieve detailed information about a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListProjects



Retrieve a list of projects.

**Parameters**

-   **last\_sync\_token** (`string`, optional) An opaque token from the last successful data sync. This is used to fetch updates.
-   **max\_items\_to\_return** (`integer`, optional) The maximum number of projects to return. The default and maximum value is 100.
-   **page\_results\_cursor** (`string`, optional) An opaque cursor indicating which page of results to fetch from the project list.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.SearchProjectsByTitle



Search for projects by title for quick lookups.

**Parameters**

-   **project\_title** (`string`, optional) The title of the project to search for. Use this to narrow down the results to specific projects based on their name.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateCandidateReferral



Creates a candidate referral in the system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetReferralFormInfo



Fetches or creates the default referral form details.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GenerateAndPollReport



Generate a new report or poll status of report generation.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.RetrieveSyncReport



Retrieve report data synchronously with Ashby.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListAllSources



Retrieve a list of all sources for hiring processes.

**Parameters**

-   **include\_archived\_items** (`boolean`, optional) When true, archived items are included in the results.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListSourceTrackingLinks



Retrieve all source custom tracking links.

**Parameters**

-   **include\_disabled\_tracking\_links** (`boolean`, optional) Set to true to include disabled tracking links in the list.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetSurveyFormDetails



Retrieve details of a survey form definition by id.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListSurveyFormDefinitions



Retrieve all survey form definitions.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateSurveyRequest



Create a survey request and get a survey URL.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListSurveyRequests



Retrieve a list of all survey requests.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateSurveySubmission



Create a new survey submission.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.ListSurveySubmissions



Retrieve all survey submissions for a specific type.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetAshbyUserInfo



Retrieve detailed information of a specific Ashby user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetAshbyUserList



Retrieve a list of all users in Ashby and their access levels.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.AshbyUserSearch



Search for an Ashby user by email address.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.GetInterviewerSettings



Retrieve interviewer settings for a user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateInterviewerSettings



Update interviewer settings for a user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.CreateWebhookSetting



Creates a webhook setting in Ashby.

**Parameters**

-   **webhook\_configuration** (`json`, optional) A JSON object containing configuration details for the webhook, including webhookType, requestUrl, and secretToken.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.RetrieveWebhookInfo



Retrieve detailed information on a specific webhook setting by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.UpdateWebhookSetting



Update a webhook setting for Ashby service.

**Parameters**

-   **webhook\_settings\_payload** (`json`, optional) JSON object containing `webhookId`, optionally one of `enabled`, `requestUrl`, or `secretToken` to update specific settings.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## AshbyApi.DeleteWebhookSetting



Delete a webhook setting.

**Parameters**

-   **webhook\_id** (`json`, optional) The unique identifier of the webhook to be deleted.

**Secrets**

This tool requires the following secrets: `ASHBY_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Reference

Below is a reference of enumerations used by some of the tools in the AshbyApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_ashby_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[AsanaApi](/en/resources/integrations/productivity/asana-api.md)
[BoxApi](/en/resources/integrations/productivity/box-api.md)
