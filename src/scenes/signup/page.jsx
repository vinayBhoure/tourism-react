import { useForm } from 'react-hook-form'
import styles from './signup.module.css'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignUpMutation } from '../../api/mutation/auth'
import { queryClient } from '../../api/query-client'
import { useNavigate } from 'react-router-dom'

const validationSchema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(8),
	name: zod.string()
})

export const SignUpPage = () => {
	const signUpMutation = useSignUpMutation()
	const navigate = useNavigate()

	const { register, handleSubmit, formState } = useForm({
		defaultValues: {
			email: '',
			password: '',
			name: ''
		},
		resolver: zodResolver(validationSchema)
	})

	const onSubmit = async (data) => {
		console.log(data)
		try {
			const res = await signUpMutation.mutateAsync(data)
			console.log(res.data)
			localStorage.setItem('token', res.data.token)
			queryClient.invalidateQueries({
				queryKey: ['auth', 'me']
			})
			navigate('/', {
				replace: true
			})
		}
		catch(e) {
			console.log(signUpMutation.error)
			alert(signUpMutation.error.message)
		}
	}

	return (
		<div className="container py-5">
			<div className={styles.signUpForm}>
				<h4 className='fw-bold'>SIGN UP</h4>
				<form onSubmit={handleSubmit(onSubmit)} className='w-100 d-flex flex-column'>
					<div className="mb-3">
						<label for="name" className="form-label fw-bold">Name</label>
						<input type="text" className="form-control w-100" id="name" placeholder="Jon Doe" {...register('name')} />
						<span className="text-danger">{formState.errors.name?.message}</span>
					</div>
					<div className="mb-3">
						<label for="email" className="form-label fw-bold">Email</label>
						<input type="email" className="form-control w-100" id="email" placeholder="name@example.com" {...register('email')} />
						<span className="text-danger">{formState.errors.email?.message}</span>
					</div>
					<div className="mb-3">
						<label for="password" className="form-label fw-bold">Password</label>
						<input type="password" className="form-control" id="password" {...register('password')} />
						<span className="text-danger">{formState.errors.password?.message}</span>
					</div>
					<button type="submit" className='m-auto'>
						{signUpMutation.isPending ? (
							<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
						) : "Submit"}
					</button>
				</form>
			</div>
		</div>
	)
}