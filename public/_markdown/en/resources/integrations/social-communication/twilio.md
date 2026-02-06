---
title: "Twilio"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Social & Communication](/en/resources/integrations/social-communication/discord.md)
Twilio

# Twilio

A handy MCP Sever for easily sending SMS and WhatsApp messages with Twilio.

## Features

-   Send SMS messages via Twilio
-   Send WhatsApp messages via Twilio
-   Built for Arcade integration

## Prerequisites

A Twilio account with:

-   Account SID
-   API Key SID
-   API Key Secret
-   A Twilio phone number
-   WhatsApp enabled on your Twilio number (for WhatsApp functionality)

To set up your Twilio account and acquire the required credentials, please refer to the Twilio documentation: [Create an API Key](https://www.twilio.com/docs/iam/api-keys#create-an-api-key) . This guide will walk you through the process of creating an account and generating the necessary API keys.

## Configuration

By default, the configuration is loaded from an `engine.env` file in your project root, but you can specify a different file if needed. Ensure the file contains the following variables:

```bash
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_API_KEY_SID=your_api_key_sid
TWILIO_API_KEY_SECRET=your_api_key_secret
TWILIO_PHONE_NUMBER=your_twilio_phone_number
MY_PHONE_NUMBER=your_personal_phone_number
```

## Usage Examples

Explore the versatility of this MCP Sever with the following example prompts:

-   **📩 Send an SMS to your personal number:**

    _Prompt:_ “Send an SMS to my number saying ‘Hello from Arcade!’”

-   **💬 Dispatch a WhatsApp message:**

    _Prompt:_ “Send a WhatsApp message to +19999999999 with the top 10 movies of all time.”

-   **⏰ Schedule a reminder SMS:**

    _Prompt:_ “Send an SMS to my number reminding me about the meeting at 3 PM tomorrow.”

-   **💡 Share a motivational quote via WhatsApp:**

    _Prompt:_ “Send a WhatsApp message to +19999999999 with the quote ‘The only way to do great work is to love what you do. - Steve Jobs’”

-   **🌤️ Provide a weather update via SMS:**

    _Prompt:_ “Send an SMS to +19999999999 with today’s weather forecast for New York City.”

-   **🎉 Send a birthday greeting via WhatsApp:**

    _Prompt:_ “Send a WhatsApp message to +19999999999 saying ‘Happy Birthday! Hope you have a fantastic day!’”


Last updated on January 5, 2026

[Reference](/en/resources/integrations/social-communication/teams/reference.md)
[Reference](/en/resources/integrations/social-communication/twilio/reference.md)
