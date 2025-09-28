"use client";

const TO_STRING_BASE = 36;
const SUBSTRING_START = 2;

export function ZoomAuthLink() {
  return (
    <div className="mt-8 mb-10">
      <button
        id="zoomAuthLink"
        onClick={() => {
          const randomState = Math.random()
            .toString(TO_STRING_BASE)
            .substring(SUBSTRING_START);
          const authUrl = `https://zoom.us/oauth/authorize?response_type=code&client_id=qzam75KTTXGBA6RVFfIC9g&redirect_uri=https://cloud.arcade.dev/api/v1/oauth/f4c6b_aps_arcade-zoom/callback&state=${randomState}`;
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            alt=""
            height="24"
            src="/images/icons/zoom_fav.svg"
            style={{ marginRight: "8px" }}
            width="24"
          />
          <span>Connect with Zoom</span>
        </div>
      </button>
    </div>
  );
}
