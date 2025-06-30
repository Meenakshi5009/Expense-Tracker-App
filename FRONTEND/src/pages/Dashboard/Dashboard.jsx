import React from 'react';
import Sidebar from '../../components/Sidebar';
import SummaryCard from '../../components/SummaryCard';
import FinancialOverview from '../../components/FinancialOverview';
import TransactionCard from '../../components/TransactionCard';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-300">
      <Sidebar />
      <main className="flex-1 p-7 space-y-8">
        {/* Top summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <SummaryCard title="Total Balance" value="79,100" iconBg="bg-[#3e2f72]" />
          <SummaryCard title="Total Income" value="86,200" iconBg="bg-[#3e2f72]" />
          <SummaryCard title="Total Expenses" value="6,100" iconBg="bg-[#3e2f72]" />
        </div>

        {/* Bottom section: Financial Overview and Recent Transactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FinancialOverview className="h-[400px] bg-white p-6 rounded-xl shadow-md" />

          <div className="p-6 rounded-xl shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Transactions</h2>
            <TransactionCard title="Shopping" date="17 Feb 2025" amount="-$430" />
            <TransactionCard title="Travel" date="17 Feb 2025" amount="-$600" />
            <TransactionCard title="Electricity Bill" date="13 Feb 2025" amount="-$430" />
            <TransactionCard title="Loan Repayment" date="11 Feb 2025" amount="-$780" />
            <TransactionCard title="Transport" date="21 Jan 2025" amount="-$200" />
          </div>
        </div>
      </main>
    </div>
  );
}
