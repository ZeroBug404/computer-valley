import { GithubOutlined } from "@ant-design/icons";
import RootLayout from "@/components/Layouts/RootLayout";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { signIn } from "next-auth/react";

const login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="login-container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            background: "#080808",
            color: "white",
            padding: "0.5rem 2rem",
            display: "flex",
            justifyContent: "center",
            border: "none",
            borderRadius: "5rem",
            alignItems: "center",
            gap: "10px",
          }}
          onClick={() =>
            signIn("github", { callbackUrl: "http://localhost:3000/" })
          }
        >
          <GithubOutlined style={{ fontSize: "2rem" }} />
          Sign in with GitHub
        </button>
      </div>
      <style jsx>{`
        .login-container {
          width: 40%;
          margin: 5rem auto;
        }

        .github-login {
          text-align: center;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 768px) {
          /* Adjust the styles for smaller screens (mobile devices) */
          .login-container {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default login;

login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
