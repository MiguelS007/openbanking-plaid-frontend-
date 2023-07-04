import Image from 'next/image'
import Link from 'next/link'

const NavbarLogo = () => {
    return (
        <Link href='/' legacyBehavior>
            <a className="navbar-item" href="https://bulma.io">
                <Image src="/logo.png" width="60" height="60" />
            </a>
        </Link>
    )
}

export default NavbarLogo