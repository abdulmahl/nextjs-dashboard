import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Suspense } from 'react';
import { LatestInvoicesSkeleton } from '@/app/ui/skeletons';

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
      <Suspense fallback={<LatestInvoicesSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </>
  );
}
