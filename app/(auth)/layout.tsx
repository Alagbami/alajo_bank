/*import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image 
            src="/icons/auth-image.jpg"
            alt="Auth image"
            width={500}
            height={500}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}
*/

import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset flex flex-col items-center justify-center w-1/2 bg-gray-100">
        <div>
          <Image 
            src="/icons/auth-image.jpg"
            alt="Auth image"
            width={700}
            height={700}
            className="rounded-l-xl object-contain"
          />
        </div>
        <div className="auth-content p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to Alajo Bank</h1>
          <p className="text-lg mb-6">
            Securely manage your finances with ease and confidence. Log in to access your account, view your transactions, and enjoy a seamless banking experience.
          </p>
          <p className="text-md">
            Need help? Contact our support team anytime at <span className="text-blue-500">+2348094770313</span>.
          </p>
        </div>
      </div>
    </main>
  );
}
