const { useState, useEffect } = require("react");
const SignUp = require("./signup");

function App() {
  const [session, setSession] = useState(null);
  useEffect(function () {
    console.log("The component was rendered");
  }, []);
  return (
    <div>
      <h2>Supabase + React Chat App</h2>
      <SignUp />
    </div>
  );
}

module.exports = App;
