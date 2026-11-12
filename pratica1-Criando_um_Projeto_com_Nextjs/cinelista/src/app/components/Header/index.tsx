
import Link from "next/link";

const Header = () => {

    return (
        <header>
            <h1>Cinelista</h1>
            <nav>
                <Link href="/">Inicio</Link>
                <Link href="/">Em alta</Link>
                <Link href="/">Populares</Link>
                <Link href="/">Top Filmes</Link>
            </nav>
        </header>
    );
};

export default Header;
