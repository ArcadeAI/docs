export const SignUpButton = () => (
  <button
    className="button"
    onClick={() =>
      window.open(
        "https://account.arcade.dev/register?return_to=https%3A%2F%2Fapi.arcade.dev%2Fdashboard%2Fwelcome",
        "_blank",
      )
    }
    style={{
      margin: "0 0 0 0",
      fontSize: "0.8rem",
      whiteSpace: "nowrap",
    }}
  >
    Sign Up
  </button>
);

export default SignUpButton;
