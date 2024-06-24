import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers | Acme Dashboard',
};

export default async function Customers({
  params,
}: {
  params?: {
    query?: string;
  };
}) {
  const query = params?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <>
      <CustomersTable customers={customers} />
    </>
  );
}
