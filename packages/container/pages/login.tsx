import { NextPage } from 'next'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Layout, Logo, Input, Checkbox, Button, SocialLinks } from 'home'
import { useForm, Controller } from 'react-hook-form'
import Alert from 'react-bootstrap/Alert'

const LoginPage: NextPage = () => {
  const { control, getValues, handleSubmit, formState: { errors, isValid, isSubmitting }} = useForm({
    mode: 'onChange',
  })
	const [variant, setVariant] = useState('')
	const [message, setMessage] = useState('')
	const router: any = useRouter()

	const submit = async () => {
		if (isValid) {
			const res: any = await signIn('credentials', {...getValues(), 
				redirect: false, callbackUrl: '/',
			})
			if (res?.error) {
				setVariant('danger')
				setMessage(res?.error)
				return
			}
			setVariant('success')
			setMessage('Welcome')
			setTimeout(() => router.push('/'), 1000)
		}
	}

	return (
		<Layout>
			<div className="w-400px px-3 py-5">
				<form onSubmit={handleSubmit((submit))}>
					<Logo className="d-block mx-auto mb-4" />
					<div className="d-flex align-items-center justify-content-between mb-2">
						<div className="fs-18px fw-500">Sign In</div>
						<Link href="/signup" passHref>
							<div className="fs-18px fw-500 text-primary-4 cursor-pointer">Create an Account</div>
						</Link>
					</div>
					{variant && <Alert variant={variant} className="py-2">{message}</Alert>}
					<Controller control={control} name="username" rules={{required: true}} render={({field}) => (
						<Input icon="lucide:user" name="username" placeholder="Username" onChange={(e: any) => field.onChange(e)}>
							{'required' === errors.username?.type && <small className="text-danger fs-12px form-text">This field is required</small>}
						</Input>
					)} />
					<Controller control={control} name="password" rules={{required: true}} render={({field}) => (
						<Input type="password" icon="lucide:lock" name="password" placeholder="Password" onChange={(e: any) => field.onChange(e)}>
							{'required' === errors.password?.type && <small className="text-danger fs-12px form-text">This field is required</small>}
						</Input>
					)} />
					<div className="d-flex align-items-center justify-content-between mb-5">
						<Checkbox name="remember_me">Remember me</Checkbox>
						<Link href="/forgot-password" passHref>
							<div className="text-gray-2 cursor-pointer text-decoration-underline">Forgot Password?</div>
						</Link>
					</div>
					<Button type="submit" disabled={isSubmitting}>Login</Button>
					<SocialLinks label="Login with Social Links" />
				</form>
			</div>
		</Layout>
	)
}

export default LoginPage
