```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const myVariable = router.query.myVariable; // Access the variable passed as a query parameter
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      {myVariable && <p>My variable: {myVariable}</p>}
    </div>
  );
}
```
```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about?myVariable=myValue'>
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```