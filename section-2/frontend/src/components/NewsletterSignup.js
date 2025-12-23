import { data, useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
  const fetcher = useFetcher(); // does not trigger route transitions like useNavigate
  const { data, state } = fetcher; // state; // 'idle', 'submitting', 'loading'

  useEffect(() => {
    if (state === 'idle' && data?.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    // fetcher.Form is similar to <Form> but does not initialize route transitions
    <fetcher.Form 
      method="post" 
      action="/newsletter" 
      className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
