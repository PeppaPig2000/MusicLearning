import React from 'react'
import {Route, Switch} from "react-router-dom";
import {Layout, Menu, } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    TeamOutlined,
    EditOutlined,
    NotificationOutlined,
    IdcardOutlined,
} from '@ant-design/icons';

import './teacher.less'

import StudentInform from "../studentInform/studentInform";
import Notice from "../notice/notice";
import NoticeDetail from "../notice/noticeDetail/noticeDetail";
import Classes from "../courseData/classes/classes";
import UserInfo from "../userInfo/userInfo";
import StudentDetail from "../studentInform/studentDetail/studentDetail";
import ClassRecord from "../classRecord/classRecord";
import RecordDetail from "../classRecord/recordDetail/recordDetail";
import ClassFeedback from "../classFeedback/classFeedback";
import FeedbackDetail from "../classFeedback/feedbackDetail/feedbackDetail";
import ClassComment from "../classComment/classComment";
import CommentDetail from "../classComment/commentDetail/commentDetail";


const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu


export default class Teacher extends React.Component {

    componentDidMount() {

    }

    state = {};

    render() {
        return (
            <div>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}

                    >
                        <div className="myLogo"/>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <a href={'/#/teacherPage'}>
                                    <TeamOutlined/>
                                    <span>学生信息</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <a href={'/#/teacherPage/classRecord'}>
                                    <DesktopOutlined/>
                                    <span>上课记录</span>
                                </a>
                            </Menu.Item>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                     <PieChartOutlined/>
                                      课堂统计
                                    </span>
                                }
                            >
                                <Menu.Item key="4">
                                    <a href={'/#/teacherPage/courseData'}>上课次数</a>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="7">
                                <a href={'/#/teacherPage/classComment'}>
                                    <EditOutlined/>
                                    <span>评价讨论</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <a href={'/#/teacherPage/notice'}>

                                        <NotificationOutlined/>
                                        <span>消息通知</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <a href={'/#/teacherPage/userInfo'}>
                                    <IdcardOutlined/>
                                    <span>个人信息</span>
                                </a>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout" style={{marginLeft: 200}}>
                        <Header className="site-layout-background" style={{padding: 0}}>
                            <h1 style={{paddingLeft: 25}}>教师后台管理</h1>
                        </Header>
                        <Content style={{margin: '16px 16px'}}>
                            <Switch>
                                <Route path={'/teacherPage/notice'} component={Notice}/>
                                <Route path={'/teacherPage/noticeDetail'} component={NoticeDetail}/>
                                <Route path={'/teacherPage/courseData'} component={Classes}/>
                                <Route path={'/teacherPage/userInfo'} component={UserInfo}/>
                                <Route path={'/teacherPage/studentDetail'} component={StudentDetail}/>
                                <Route path={'/teacherPage/classRecord'} component={ClassRecord}/>
                                <Route path={'/teacherPage/recordDetail'} component={RecordDetail}/>
                                <Route path={'/teacherPage/classFeedback'} component={ClassFeedback}/>
                                <Route path={'/teacherPage/feedbackDetail'} component={FeedbackDetail}/>
                                <Route path={'/teacherPage/classComment'} component={ClassComment}/>
                                <Route path={'/teacherPage/commentDetail'} component={CommentDetail}/>
                                <Route component={StudentInform}/>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Music Learning ©2020 </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}