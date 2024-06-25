import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Suspense } from 'react';
import { LatestInvoicesSkeleton } from '@/app/ui/skeletons';
import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { CreateCustomer } from '@/app/ui/customers/buttons';

export const metadata: Metadata = {
  title: 'Customers | Acme Dashboard',
};

export default async function Customers({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <>
      <div>
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
          Customers
        </h1>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search customers..." />
            <CreateCustomer />
          </div>
          <CustomersTable customers={customers} />
        </Suspense>
      </div>
    </>
  );
}
