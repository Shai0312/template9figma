import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  // Add a submit handler if you intend to process the form
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/signupimg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">404 Error</h2>
          <p>
            <Link href="/" className="text-yellow-500">Home</Link> › 404
          </p>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <MdOutlineMail className="text-black h-6 w-6" />
                <label className="block font-medium">Email</label>
              </div>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <TbLockPassword className="text-black h-6 w-6 " />
                <label className="block font-medium">Password</label>
              </div>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign In
            </button>

            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
            </p>
          </form>

          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/Google.png" alt="Google" width={400} height={400} className="h-6 mr-2" />
              Sign in with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/apple.png" alt="Apple" width={400} height={400}  className="h-6 mr-2" />
              Sign in with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
