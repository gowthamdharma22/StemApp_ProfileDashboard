import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <header class="head">
            <nav class="nav">
                <a href="#home" class="active"></a>
                <a href="#about"></a>
                <a href="#skills"></a>
                <a href="#projects"></a>
                <a href="#contact">Logout</a>
            </nav>
            <a href="#home"><img src="img/github.png" class="logo"/></a>
    </header>
  );
}

export default BrandExample;