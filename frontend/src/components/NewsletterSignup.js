import { useFetcher } from "react-router-dom";
import "./NewsletterSignup.css";
import { useEffect, useState } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
      setEmail("");
    }
  }, [data, state]);

  function handelInputChange(e) {
    setEmail(e.target.value);
  }

  return (
    <fetcher.Form method="post" className="newsletter" action="/newsletter">
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        value={email}
        onChange={handelInputChange}
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
