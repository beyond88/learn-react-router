import { Outlet } from "react-router-dom";
import { CustomLink } from './CustomLink';

export function Layout() {
    return (
      <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <nav>
          <ul>
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/about">About</CustomLink>
            </li>
            <li>
              <CustomLink to="/dashboard">Dashboard</CustomLink>
            </li>
            <li>
              <CustomLink to="/nothing-here">Nothing Here</CustomLink>
            </li>
          </ul>
        </nav>
  
        <hr />
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    );
  }