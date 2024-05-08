import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';




export const metadata: Metadata = {
  title: 'Customers | Acme Dashboard',
};

export default function Customers() {
  return (
    <p className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
      Customers Page
    </p>
  );
}
