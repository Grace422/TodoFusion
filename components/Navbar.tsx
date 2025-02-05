import Link from "next/link";
const Navbar = () => {
    return ( 
        <div>
            <Link href="/home">Home</Link>
            <Link href="/features">Features</Link>
            <Link href="/integrations">Integrations</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/contacts">Contacts</Link>
        </div>
     );
}
 
export default Navbar;