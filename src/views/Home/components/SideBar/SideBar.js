import { Menu } from "antd";
import { DesktopOutlined, TeamOutlined } from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";

const { SubMenu } = Menu;

function SideBar() {
  const location = useLocation();

  return (
    <Menu mode="inline" defaultSelectedKeys={location.pathname}>
      <Menu.Item key="/home" icon={<TeamOutlined />}>
        <Link to="/home">
          Clientes
        </Link>
      </Menu.Item>
      <SubMenu key="sub1" icon={<DesktopOutlined />} title="Escala">
        <Menu.Item key="/home/activities">
          <Link to="/home/activities">
            Atividades
          </Link>
        </Menu.Item>
        <Menu.Item key="/home/places">
          <Link to="/home/places">
            Hospitais
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default SideBar;
