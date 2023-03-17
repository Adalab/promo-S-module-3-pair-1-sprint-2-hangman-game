import { NavLink } from "react-router-dom";
import "../styles/footer.scss";




function Footer () {
    return ( 
      
<footer class="footer">
  <nav>
    <ul>
      <li class="footer__menu-item">
       
      <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "footer__menu-link" : isActive ? "active" : ""
  }
>
 A jugar
</NavLink>;
      </li>
      <li class="footer__menu-item">
        
        <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "footer__menu-link" : isActive ? "active" : ""
  }
>
  ¿Cómo se juega?
</NavLink>;
      </li>
      <li class="footer__menu-item">
        
       <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "footer__menu-link" : isActive ? "active" : ""
  }
>
  Más opciones
</NavLink>; 
      </li>
    </ul>
  </nav>
  <small class="footer__copy">© Adalab</small>
</footer> 
    
    );
 }

 export default Footer;