import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Form, Input } from 'antd'

import { useIntl } from './../../../hooks/useIntl'

const { Item, useForm } = Form

export const Login = ({ description }) => {
    const { formatMessage } = useIntl()
    const [form] = useForm()

    const onFinish = values => {
        console.log('Success:', values)
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
    }

    return (
        <Form
            name='basic'
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 6 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
            form={form}
        >
            <h1>{formatMessage({ id: 'button.login' })}</h1>

            <Item
                label='Username'
                name='username'
                rules={[{ required: true, message: 'Please input your username!' }]}
                wrapperCol={{ offset: 0, span: 8 }}
            >
                <Input />
            </Item>

            <Item
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
                wrapperCol={{ offset: 0, span: 8 }}
            >
                <Input.Password />
            </Item>

            <Item
                name='remember'
                valuePropName='checked'
                wrapperCol={{ offset: 11, span: 5 }}
            >
                <Link to='/'>{formatMessage({ id: 'text.forgotPassword' })}</Link>
            </Item>

            <Item wrapperCol={{ offset: 12, span: 12 }}>
                <Button type='primary' htmlType='submit'>
                    {formatMessage({ id: 'button.login' })}
                </Button>
            </Item>
        </Form>
    )
}

Login.propTypes = {
    description: propTypes.string,
}

Login.defaultProps = {
    description: 'Login',
}

export default Login
