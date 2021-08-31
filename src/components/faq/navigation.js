import React from 'react';
import { Link } from 'gatsby';

export default () => {
    return (
        <ul
            className="nav nav-pills mb-3"
            id="pills-tab"
            role="tablist"
        >
            <li className="nav-item">
                <Link
                    className="nav-link"
                    activeClassName="active"
                    to="/faq"
                >
                    Top Questions
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    activeClassName="active"
                    to="/faq/content"
                >
                    Content
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    activeClassName="active"
                    to="/faq/returns"
                >
                    Returns
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    activeClassName="active"
                    to="/faq/bike"
                >
                    Bike
                </Link>
            </li>
        </ul>
    )
}