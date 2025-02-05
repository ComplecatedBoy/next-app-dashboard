import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({params}:{params:{id:string}}) {
    const id=params.id;
    const customers=await fetchCustomers();
    const invoice=await fetchInvoiceById(id);

    if(!invoice){
       notFound();

    }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      {id}
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}