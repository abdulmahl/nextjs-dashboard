import { GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline';
import { lusitana } from './fonts';

export default function InvoicedLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeEuropeAfricaIcon className="h-12 w-12" />
      <p className="text-[44px]">Invo!ced</p>
    </div>
  );
}
