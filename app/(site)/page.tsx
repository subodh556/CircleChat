import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
                className="mx-auto "
                src="logo.svg"
                alt="Logo"
                width="48"
                height="48"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
            </h2>
        </div>
        <AuthForm/>
    </div>
  );
}
