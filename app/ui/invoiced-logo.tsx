import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';
import { lusitana } from './fonts';

export default function InvoicedLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAsiaAustraliaIcon className="h-25 w-25 rotate-[15deg]" />
      <p className="text-[44px]">Invoiced!</p>
    </div>
  );
}
