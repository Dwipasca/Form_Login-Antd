import React from 'react';
import './App.less';
import {
  Row, Col, Card, Button, Form, Input,
} from 'antd';

function App() {
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };

  return (
    <section className="app-section">

      <Col span={24} className="typo-grey typo-center">
        <h2>Login Form</h2>
      </Col>

      <Row justify="center">
        <Col xl={6} lg={8} md={10} sm={12} xs={24}>
          <Card>
            <Form layout="vertical" size="large">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Email is required' },
                  { type: 'email', message: 'Must be in email format' },
                ]}
                style={{ marginBottom: 15 }}
              >
                <Input name="email" type="email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Password is required' }]}
                style={{ marginBottom: 15 }}
              >
                <Input.Password name="password" />
              </Form.Item>

              <Row gutter={[8, 8]} style={{ marginTop: 15 }}>

                <Col xl={12} lg={12} md={12} sm={12} xs={12} className="typo-right">
                  <Button type="primary" htmlType="submit">
                    Log in
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </section>

  );
}

export default App;
