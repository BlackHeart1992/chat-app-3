const { useState } = require("react");
const supabase = require("../utils/supabase");

function SignUp() {
  console.log(process.env.MY_SECRET);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleEmailChange() {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleSignUp(event) {
    event.preventDefault();
    supabase.auth
      .signUp({
        email: email,
        password: password,
      })
      .then(function (data) {
        console.log(data);
      });
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input type="submit" value="Log In" />
        <input type="submit" value="Sign Up" onClick={handleSignUp} />
      </form>
    </div>
  );
}

module.exports = SignUp;
