import {nav} from '../css/Nav.module.css';
import Link from "next/link";

export function Nav() {
    return <nav className={nav}>
        <ul>
            <li>
            <Link href="/">Home</Link>
            </li>
        <li>
            <Link href="/about">About</Link>
        </li>
        </ul>
    </nav>
}