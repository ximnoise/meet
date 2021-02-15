import React from "react";

function Login() {
  return (
    <div className="loginView">
      <h1>Welcome to the Meet app</h1>
      <h4>
        Log in to see upcoming events around the world for full-stack developers
      </h4>
      <div className="btn-google">
        <a
          class="btn-login"
          href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=599445530558-r804ljdavn98l072h16mrqdi22lv9q48.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fximnoise.github.io%2Fmeet"
          rel="nofollow noopener"
        >
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google sign-in"
          />
          <b>Sign in with google</b>
        </a>
      </div>
      <a
        className="btn-privacy"
        href="https://ximnoise.github.io/meet/privacy.html"
        rel="nofollow noopener"
      >
        Privacy policy
      </a>
    </div>
  );
}
export default Login;