import InvoicedLogo from '../ui/invoiced-logo';
import RegisterForm from '../ui/register-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | Invoiced! Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="text-white md:w-36">
            <InvoicedLogo />
          </div>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
}
