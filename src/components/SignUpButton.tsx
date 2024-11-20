export const SignUpButton = () => (
  <button
    className="button"
    onClick={() =>
      window.open("https://arcade-ai.typeform.com/early-access?typeform-source=docs.arcade-ai.com", "_blank")
    }
    style={{
      margin: '0 0 0 0',
      fontSize: '0.8rem',
      whiteSpace: 'nowrap',
    }}
  >
    Sign Up
  </button>
);

export default SignUpButton;
