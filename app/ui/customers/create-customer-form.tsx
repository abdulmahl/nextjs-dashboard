'use client';

import Link from 'next/link';
import { Button } from '../button';
import {
  AtSymbolIcon,
  UserCircleIcon,
  DocumentDuplicateIcon,
  BanknotesIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { createCustomer } from '@/app/lib/actions';

export default function CustomerForm() {
  // const [errorMessage, dispatch] = useFormState(createCustomer, undefined);

  return (
    <form action={''}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <label htmlFor="name">Name</label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              step="0.01"
              placeholder="Enter your name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="text"
              step="0.01"
              placeholder="Enter your email"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <label htmlFor="totalInvoices">Total Invoices</label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="totalInvoices"
              name="totalInvoices"
              type="number"
              step="0.01"
              placeholder="Enter number of invoices"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <DocumentDuplicateIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <label htmlFor="totalPending">Total Pending</label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="totalPending"
              name="totalPending"
              type="text"
              step="0.01"
              placeholder="0"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <label htmlFor="totalPaid">Total Paid</label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="totalPaid"
              name="totalPaid"
              type="number"
              step="0.01"
              placeholder="$0.00"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <BanknotesIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Customer</Button>
      </div>
    </form>
  );
}
