import HomeRoutes from "./HomeRoutes";
import { Layout, Breadcrumb } from "antd";
import logoRunyme from "../../assets/img/logo.png";
import SideBar from "./components/SideBar/SideBar";

const { Header, Content, Footer, Sider } = Layout;

function Home() {
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <div className="p-5">
            <img src={logoRunyme} alt="logo runyme" className=""/>
          </div>
          <SideBar />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" />
          <Content style={{ margin: '0 16px' }}>
            {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
            {/*  <Breadcrumb.Item>User</Breadcrumb.Item>*/}
            {/*  <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
            {/*</Breadcrumb>*/}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <HomeRoutes />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', background: "#e9eaea" }}>Runy.me ©2021 Created by Daniel Rossini</Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default Home;
