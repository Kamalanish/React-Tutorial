import {Link} from 'react-router-dom'
import Login from './Login';

function NotFound() {
  return (
    <>
      <h2>Error 404 Page Not Found</h2>
      <Link className="btn btn-danger" to = "/login">Login</Link>
    </>
  );
}

export default NotFound;
