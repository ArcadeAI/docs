---
title: "Reference"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Social & Communication](/en/resources/integrations/social-communication/discord.md)
[Twilio](/en/resources/integrations/social-communication/twilio.md)
Reference

# Reference

Name

twilio

Package

[arcade\_twilio](https://pypi.org/project/arcade_twilio/0.1.0/)
 

Repository

[Github](https://github.com/sdserranog/arcade-twilio)
 

Install

`pip install arcade_twilio==0.1.0`

Description

A twilio integration to send SMS and WhatsApps.

Author

[sdserranog@gmail.com](mailto:sdserranog@gmail.com)

Tool Name

Description

[SendSms](#sendsms)

Send an SMS/text message to a phone number

[SendWhatsapp](#sendwhatsapp)

Send a WhatsApp message to a phone number

### SendSms

Send an SMS/text message to a phone number

#### Parameters

-   `phone_number`_(string, required)_ The phone number to send the message to. Use ‘my\_phone\_number’ when a phone number is not specified or when the request implies sending to the user themselves
-   `message`_(string, required)_ The text content to be sent via SMS

* * *

### SendWhatsapp

Send a WhatsApp message to a phone number

#### Parameters

-   `phone_number`_(string, required)_ The phone number to send the message to. Use ‘my\_phone\_number’ when a phone number is not specified or when the request implies sending to the user themselves
-   `message`_(string, required)_ The text content to be sent via WhatsApp

Last updated on January 5, 2026

[Twilio](/en/resources/integrations/social-communication/twilio.md)
[X (Twitter)](/en/resources/integrations/social-communication/x.md)
