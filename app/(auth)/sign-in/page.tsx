import AuthForm from '@/components/AuthForm'

const SignIn = () => {
  return (
    <div className="flex flex-col items-center size-full max-sm:px-6">
      <section className="flex-center w-full">
        <AuthForm type="sign-in" />
      </section>
      <div className="flex flex-col items-center mt-[-7rem] space-y-4 text-center">
        <p className="text-lg font-semibold">For recruiters that want to quickly check my work kindly log in with the credentials below</p>
        <p className="text-sm text-gray-600">Email: <span className="font-medium text-gray-800">visitorguest@gmail.com</span></p>
        <p className="text-sm text-gray-600">Password: <span className="font-medium text-gray-800">12345678</span></p>
      </div>
    </div>
  )
}

export default SignIn