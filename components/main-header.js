import Link from "next/link";

export default function MainHeader() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">Nextnews</Link>
            </div>
            <nav>
                <ul>
                    <li><Link href="/news">News</Link></li>
                </ul>
            </nav>
        </header>
    )
}