# PostHog Setup Report - CSAT Survey Configuration

## Current PostHog Integration ✅

Your Arcade Docs already has a comprehensive PostHog integration with:
- **API Key**: `phc_hIqUQyJpf2TP4COePO5jEpkGeUXipa7KqTEyDeRsTmB`
- **Region**: US (`https://us.i.posthog.com`)
- **Features**: Page tracking, custom events, surveys enabled

## CSAT Survey Configuration

### What's Been Updated
Modified `/app/_components/posthog.tsx` to enable surveys and heatmaps:
- Added `disable_surveys: false` to explicitly enable surveys
- Added `enable_heatmaps: true` to enable click heatmaps
- Surveys will now load automatically on all pages
- Heatmaps will track user clicks and interactions

### Setting Up Your CSAT Survey in PostHog

#### Step 1: Access Your PostHog Project
1. Go to https://us.posthog.com
2. Sign in with your account
3. Select project ID: **117781** (based on your existing dashboard links)

#### Step 2: Create the CSAT Survey
1. Navigate to **Surveys** in the left sidebar
2. Click **"New survey"**
3. Select **"Start from scratch"** or use the **CSAT template**

#### Step 3: Configure Survey Settings

**Basic Settings:**
- **Name**: Documentation CSAT Survey
- **Description**: Gather satisfaction feedback on documentation quality

**Question Configuration:**
```
Question 1: "How satisfied are you with our documentation?"
Type: Rating (1-5 stars or 1-10 scale)
Required: Yes

Question 2 (optional): "What can we improve?"
Type: Open text
Required: No
```

**Targeting Rules:**
- **Pages to show on**: URL contains `docs.arcade.dev` OR URL contains `localhost:3000`
- **User targeting**: All users
- **Frequency**: 
  - Show once per user every 7 days, OR
  - Show once per session
- **Display delay**: 30-60 seconds after page load

**Appearance:**
- **Position**: Bottom right corner
- **Theme**: Match your site theme
- **Size**: Small/Medium
- **Close button**: Yes

#### Step 4: Advanced Settings
- **Completion behavior**: Thank you message
- **API identifier**: `docs_csat_survey`
- **Tags**: `documentation`, `csat`, `feedback`

#### Step 5: Launch
1. Review all settings
2. Click **"Save as draft"** to test first
3. Preview on your local dev environment
4. When ready, click **"Launch survey"**

### Testing the Survey Locally

1. Start your dev server:
```bash
npm run dev
```

2. Enable debug mode to see PostHog events:
```bash
NEXT_PUBLIC_POSTHOG_DEBUG=true npm run dev
```

3. Visit any documentation page
4. Wait 30-60 seconds (based on your delay setting)
5. The survey should appear in the bottom right

### Monitoring Survey Responses

#### In PostHog Dashboard:
1. Go to **Surveys** → Your CSAT Survey
2. View responses in real-time
3. Export data as CSV for analysis

#### Key Metrics to Track:
- Response rate
- Average satisfaction score
- Text feedback themes
- Page-specific satisfaction scores

### Creating a CSAT Dashboard

1. Go to **Dashboards** → **New Dashboard**
2. Add these insights:
   - Survey response rate (line chart)
   - Average satisfaction score over time
   - Satisfaction by page/section
   - Word cloud of text feedback
   - Response volume

### Webhook Integration (Optional)

To get real-time notifications of survey responses:
1. Go to **Project Settings** → **Webhooks**
2. Add webhook endpoint for survey responses
3. Filter for `survey_response` events
4. Send to Slack/email for immediate feedback

## Heatmaps Configuration

### What Are Heatmaps?
Heatmaps visualize where users click, scroll, and interact with your documentation pages. This helps identify:
- Most clicked elements
- Ignored sections
- Confusing UI elements
- Scroll depth patterns

### Viewing Heatmaps in PostHog
1. Go to **Heatmaps** in the PostHog dashboard
2. Select a page URL to view its heatmap
3. Toggle between:
   - **Click maps** - Shows where users click
   - **Scroll maps** - Shows how far users scroll
   - **Rage click maps** - Shows frustration points

### Heatmap Best Practices
- Review heatmaps weekly to identify UX issues
- Combine with CSAT scores to understand satisfaction drivers
- Look for "rage clicks" indicating confusion
- Monitor scroll depth to optimize content placement

## Existing Event Tracking

Your site already tracks these events that can correlate with CSAT and heatmaps:
- `get_started_clicked` - User engagement with getting started
- `sample_app_clicked` - Interest in examples
- `code_copied` - Technical documentation usage
- `tool_card_clicked` - Tool exploration
- Page views on all documentation pages

## Best Practices

1. **Don't over-survey**: Limit to once per week per user
2. **Time it right**: Show after user has time to explore (30-60s)
3. **Keep it short**: 1-2 questions maximum
4. **Act on feedback**: Close the loop with improvements
5. **A/B test**: Try different questions or timing

## Troubleshooting

### Survey Not Appearing?
- Check browser console for PostHog initialization
- Verify targeting rules match your current URL
- Check frequency caps haven't been hit
- Ensure survey is "Launched" not "Draft"

### Debug Mode:
```javascript
// In browser console:
posthog.isFeatureEnabled('surveys')
posthog.getActiveMatchingSurveys()
```

## Dashboard Links

Your existing PostHog dashboards:
- [Analytics Basics](https://us.posthog.com/project/117781/dashboard/961057)
- [Get Started Funnel](https://us.posthog.com/project/117781/insights/aU6IpG8q)
- [Tool Engagement](https://us.posthog.com/project/117781/insights/x7P2bVZX)
- [Code Engagement](https://us.posthog.com/project/117781/insights/p7V245Sd)

## Next Steps

1. ✅ PostHog integration verified and surveys enabled
2. ⏳ Create CSAT survey in PostHog dashboard
3. ⏳ Test survey on local environment
4. ⏳ Launch survey to production
5. ⏳ Monitor responses and iterate

---
*Report generated: December 31, 2024*
*PostHog Project ID: 117781*
*Region: US*