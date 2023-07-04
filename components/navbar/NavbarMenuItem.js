import Link from 'next/link'


const NavbarMenuItem = ({ url, name }) => {
    return (
        <Link href={url} legacyBehavior>
            <a className="navbar-item">
                {name}
            </a>
        </Link>
    )
}


export default NavbarMenuItem