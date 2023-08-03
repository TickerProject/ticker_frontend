import React from "react";
import '../App.css';
interface NavInfo {
    path: string;
    name: string;
    displayName: string;
}

const AppRoutes: NavInfo[] = [
    {path: "/", displayName: "Main", name: "main"},
    {path: "/login", displayName: "Login", name: "login"}
];

function NaviLink(navInfo: NavInfo) {
    console.log("CONSOLE " + navInfo.displayName);
    return (
        <li>
            <a className="link-dark" style={{ textDecoration: 'none' }} href={ navInfo.path }>{ navInfo.displayName }</a>
        </li>
    );
}

function Navigator() {
    return (
        <div className="container mt-3 h4">
            <nav>
                <ul style={{ listStyleType: 'none' }}>
                    {AppRoutes.map((item: NavInfo) => (
                        <NaviLink key={item.path} path={item.path} name={item.name} displayName={item.displayName}/>
                    ))}

                </ul>
            </nav>
        </div>
    );
}

export default Navigator;

