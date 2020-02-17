import React, {Component} from 'react';

import 'antd/dist/antd.css';

import "material-design-lite/material.min";
import "material-design-lite/material.min.css";
import "../../assets/css/materialIcons.css";
import {Link} from "react-router-dom";

import {Layout, Menu, Breadcrumb, Icon, PageHeader} from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Nav extends Component{


    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="1">
                            <Link to={"/"}>
                                <Icon type="home" />
                                <span>Home</span>
                            </Link>

                        </Menu.Item>

                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                  <Icon type="pie-chart" />
                  <span>Reports</span>
                </span>
                            }
                        >
                            <Menu.Item key="2">
                                <Link to={"/t"}>
                                    <Icon type="team" />
                                    <span>Teams</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to={"/e"}>
                                    <Icon type="trophy" />
                                    <span>Matches</span>
                                </Link>
                            </Menu.Item>

                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <PageHeader  title={"Team 100 Scouting"} subTitle={"San Francisco (2020CASF)"}
                        />
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <div>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>©2020 Team 100</Footer>
                </Layout>
            </Layout>
        );
    }
}
