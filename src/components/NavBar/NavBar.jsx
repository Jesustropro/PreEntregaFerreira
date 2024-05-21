import { Button,} from "antd";
import './navBar.css'
import { ShoppingCartOutlined } from "@ant-design/icons";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div>
      <h1 style={{ fontFamily: "cursive" }}>UruShop</h1>
      <ul>
        <li>
          {" "}
          <Button type="primary" style={{ fontFamily: "cursive" }}>
            Inicio
          </Button>
        </li>
        <li>
          {" "}
          <Button type="primary" style={{ fontFamily: "cursive" }}>
            Categorias
          </Button>
        </li>
        <li>
          {" "}
          <Button type="primary" style={{ fontFamily: "cursive" }}>
            Contacto
          </Button>
        </li>
        <li>
            <CartWidget/>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
