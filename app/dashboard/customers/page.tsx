import Table from '@/app/ui/customers/table';
import {
  FormattedCustomersTable,
  CustomersTableType,
} from '@/app/lib/definitions';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const query = searchParams?.query || '';

  const customers: FormattedCustomersTable[] =
    await fetchFilteredCustomers(query);

  return <Table customers={customers} />;
}
