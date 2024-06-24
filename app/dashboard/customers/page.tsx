import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import Search from '@/app/ui/search';

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
      <CustomersTable customers={customers} />
    </>
  );
}
