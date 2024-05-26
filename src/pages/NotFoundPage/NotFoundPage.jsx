import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <p>
        Sorry, page Not Found!!! Please go to{' '}
        <Link to="/">
          <b>Home</b> Page
        </Link>
      </p>
    </div>
  );
}
