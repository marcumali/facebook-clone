import { NextPage } from 'next'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Layout, Logo, Input, Checkbox, Button, SocialLinks } from 'home'
import { useForm, Controller } from 'react-hook-form'
import Alert from 'react-bootstrap/Alert'

const ForgotPassword: NextPage = () => {
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
						<div className="fs-18px fw-500">Forgot Password</div>
						<Link href="/login" passHref>
							<div className="fs-18px fw-500 text-primary-4 cursor-pointer">Login</div>
						</Link>
					</div>
					{variant && <Alert variant={variant} className="py-2">{message}</Alert>}
					<Controller control={control} name="email" rules={{required: true}} render={({field}) => (
						<Input icon="lucide:mail" name="email" placeholder="Email" onChange={(e: any) => field.onChange(e)}>
							{'required' === errors.email?.type && <small className="text-danger fs-12px form-text">This field is required</small>}
						</Input>
					)} />
					<Button type="submit" disabled={isSubmitting}>Reset Password</Button>
				</form>
			</div>
		</Layout>
	)
}

export default ForgotPassword
