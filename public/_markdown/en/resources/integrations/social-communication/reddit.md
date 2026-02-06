---
title: "Reddit"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Social & Communication](/en/resources/integrations/social-communication/discord.md)
Reddit

# Reddit

Arcade Optimized

**Description:** Enable agents to interact with Reddit.

**Author:** Arcade

**Auth:** User authorization via the [Reddit auth provider](/references/auth-providers/reddit.md)

[![PyPI Version](https://img.shields.io/pypi/v/arcade_reddit)](https://pypi.org/project/arcade_reddit/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_reddit)](https://pypi.org/project/arcade_reddit/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_reddit)](https://pypi.org/project/arcade_reddit/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_reddit)](https://pypi.org/project/arcade_reddit/)

The Arcade Reddit MCP Server provides a pre-built set of tools for interacting with Reddit. These tools make it easy to build agents and AI apps that can:

-   Submit text posts
-   Comment on posts
-   Reply to comments
-   Get posts (title and other metadata) in a subreddit
-   Get content (body) of posts
-   Get top-level comments of a post
-   Determine if a subreddit exists or is private
-   Get rules of a subreddit
-   Get the authenticated user’s username
-   Get posts by the authenticated user

## Available Tools

These tools are currently available in the Arcade Reddit MCP Sever.

Tool Name

Description

Reddit.SubmitTextPost

Submit a text-based post to Reddit.

Reddit.CommentOnPost

Comment on a Reddit post.

Reddit.ReplyToComment

Reply to a Reddit comment.

Reddit.GetPostsInSubreddit

Gets posts titles, links, and other metadata in the specified subreddit

Reddit.GetContentOfPost

Get content (body) of a Reddit post.

Reddit.GetContentOfMultiplePosts

Get content (body) of multiple Reddit posts.

Reddit.GetTopLevelComments

Get the first page of top-level comments of a Reddit post.

Reddit.CheckSubredditAccess

Check whether a user has access to a subreddit, including whether it exists

Reddit.GetSubredditRules

Get the rules of a subreddit

Reddit.GetMyUsername

Get the authenticated user's username

Reddit.GetMyPosts

Get posts created by the authenticated user

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md) with the [Reddit auth provider](/references/auth-providers/reddit.md#using-reddit-auth-in-custom-tools).

## Reddit.SubmitTextPost



Submit a text-based post to a subreddit

**Parameters**

-   **`subreddit`** _(string, required)_ The name of the subreddit to which the post will be submitted.
-   **`title`** _(string, required)_ The title of the submission.
-   **`body`** _(string, optional)_ The body of the post in markdown format. Should never be the same as the title.
-   **`nsfw`** _(boolean, optional)_ Indicates if the submission is NSFW. Default is `False`.
-   **`spoiler`** _(boolean, optional)_ Indicates if the post is marked as a spoiler. Default is `False`.
-   **`send_replies`** _(boolean, optional)_ If true, sends replies to the user’s inbox. Default is `True`.

* * *

## Reddit.CommentOnPost



Comment on a Reddit post.

**Parameters**

-   **`post_identifier`** _(string, required)_ The identifier of the Reddit post. The identifier may be a Reddit URL, a permalink, a fullname, or a post id.
-   **`text`** _(string, required)_ The body of the comment in markdown format.

* * *

## Reddit.ReplyToComment



Reply to a Reddit comment

**Parameters**

-   **`comment_identifier`** _(string, required)_ The identifier of the Reddit comment to reply to. The identifier may be a comment ID, a Reddit URL to the comment, a permalink to the comment, or the fullname of the comment.
-   **`text`** _(string, required)_ The body of the reply in markdown format.

* * *

## Reddit.GetPostsInSubreddit



Gets posts titles, links, and other metadata in the specified subreddit.

The time\_range is required if the listing type is ‘top’ or ‘controversial’.

**Parameters**

-   **`subreddit`** _(string, required)_ The name of the subreddit to fetch posts from.
-   **`listing`** _(enum ([SubredditListingType](/resources/integrations/social-communication/reddit.md#subredditlistingtype)
    ), optional)_ The type of listing to fetch. For simple listings such as ‘hot’, ‘new’, or ‘rising’, the time\_range parameter is ignored. For time-based listings such as ‘top’ or ‘controversial’, the ‘time\_range’ parameter is required. Default is ‘hot’.
-   **`limit`** _(integer, optional)_ The maximum number of posts to fetch. Default is 10, max is 100.
-   **`cursor`** _(str, optional)_ The pagination token from a previous call.
-   **`time_range`** _(enum ([RedditTimeFilter](/resources/integrations/social-communication/reddit.md#reddittimefilter)
    ), optional)_ The time range for filtering posts. Must be provided if the listing type is ‘top’ or ‘controversial’. Otherwise, it is ignored. Defaults to ‘today’.

* * *

## Reddit.GetContentOfPost



Get the content (body) of a Reddit post by its identifier.

**Parameters**

-   **`post_identifier`** _(string, required)_ The identifier of the Reddit post. The identifier may be a Reddit URL, a permalink, a fullname, or a post id.

* * *

## Reddit.GetContentOfMultiplePosts



Get the content (body) of multiple Reddit posts by their identifiers in a single request

**Parameters**

-   **`post_identifiers`** _(list of strings, required)_ A list of identifiers of the Reddit posts. The identifiers may be Reddit URLs, permalinks, fullnames, or post ids.

* * *

## Reddit.GetTopLevelComments



Get the first page of top-level comments of a Reddit post.

**Parameters**

-   **`post_identifier`** _(string, required)_ The identifier of the Reddit post. The identifier may be a Reddit URL, a permalink, a fullname, or a post id.

* * *

## Reddit.CheckSubredditAccess



Checks whether the specified subreddit exists and also if it is accessible to the authenticated user.

**Parameters**

-   **`subreddit`** _(string, required)_ The name of the subreddit to check.

* * *

## Reddit.GetSubredditRules



Gets the rules of the specified subreddit

**Parameters**

-   **`subreddit`** _(string, required)_ The name of the subreddit for which to fetch rules.

* * *

## Reddit.GetMyUsername



Gets the username of the authenticated user.

* * *

## Reddit.GetMyPosts



Get posts that were created by the authenticated user sorted by newest first

**Parameters**

-   **`limit`** _(integer, optional)_ The maximum number of posts to fetch. Default is 10, max is 100.
-   **`include_body`** _(boolean, optional)_ Whether to include the body of the posts in the response. Default is `True`.
-   **`cursor`** _(str, optional)_ The pagination token from a previous call.

## Auth

The Arcade Reddit MCP Sever uses the [Reddit auth provider](/references/auth-providers/reddit.md) to connect to users’ Reddit accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Reddit auth provider](/references/auth-providers/reddit.md#configuring-reddit-auth) with your own Reddit app credentials.

## Reference

### SubredditListingType

The type of listing to fetch.

-   **`HOT`** _(string: “hot”)_: The hottest posts in the subreddit.
-   **`NEW`** _(string: “new”)_: The newest posts in the subreddit.
-   **`RISING`** _(string: “rising”)_: The posts that are trending up in the subreddit.
-   **`TOP`** _(string: “top”)_: The top posts in the subreddit (time-based).
-   **`CONTROVERSIAL`** _(string: “controversial”)_: The posts that are currently controversial in the subreddit (time-based).

### RedditTimeFilter

The time range for filtering posts.

-   **`NOW`** _(string: “NOW”)_
-   **`TODAY`** _(string: “TODAY”)_
-   **`THIS_WEEK`** _(string: “THIS\_WEEK”)_
-   **`THIS_MONTH`** _(string: “THIS\_MONTH”)_
-   **`THIS_YEAR`** _(string: “THIS\_YEAR”)_
-   **`ALL_TIME`** _(string: “ALL\_TIME”)_

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_reddit ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[Reference](/en/resources/integrations/social-communication/microsoft-teams/reference.md)
[Slack](/en/resources/integrations/social-communication/slack.md)
