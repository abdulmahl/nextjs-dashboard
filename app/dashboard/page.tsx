import { lazy } from 'react';
const Card = lazy(() => import('@/app/ui/dashboard/cards'));
const RevenueChart = lazy(() => import('@/app/ui/dashboard/revenue-chart'));
const Latestinvoices = lazy(() => import('@/app/ui/dashboard/latest-invoices'));
import { lusitana } from '../ui/fonts';

export default async function Dashboard() {
  return (
    <main>
      <h1 className={`${lusitana.className}`}></h1>
    </main>
  )

}
