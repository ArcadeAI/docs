"use client";

const TO_STRING_BASE = 36;
const SUBSTRING_START = 2;

export function SlackAuthLink() {
  return (
    <div className="mt-8 mb-10">
      <button
        id="slackAuthLink"
        onClick={() => {
          const randomState = Math.random()
            .toString(TO_STRING_BASE)
            .substring(SUBSTRING_START);
          const authUrl = `https://slack.com/oauth/v2/authorize?client_id=6177955493956.7607723124533&redirect_uri=https%3A%2F%2Fcloud.arcade-ai.com%2Fapi%2Fv1%2Foauth%2Fcallback&scope=users:read&scope=users:read,channels:history,groups:history,im:history,mpim:history&user_scope=channels:read,chat:write,groups:read,im:read,im:write,mpim:read,users.profile:read,users:read,users:read.email&state=${randomState}`;
          window.open(authUrl, "_blank", "noopener,noreferrer");
        }}
        style={{
          display: "inline-block",
          border: "none",
          background: "transparent",
          padding: 0,
          cursor: "pointer",
        }}
        type="button"
      >
        <img
          alt="Add to Slack"
          height="40"
          src="https://platform.slack-edge.com/img/add_to_slack.png"
          srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
          width="139"
        />
      </button>
    </div>
  );
}
