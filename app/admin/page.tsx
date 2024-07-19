import StatCard from '@/components/StatCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Admin = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className='cursor-pointer'>
          <Image
            src="/assets/icons/logo-full.svg"
            alt='logo'
            width={162}
            height={32}
            className='h-8 w-fit'
          />
          <p className="text-16-semibold">Admin Dashboard</p>
        </Link>
      </header>

      <main className="">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">Start the day with managing new appointments.</p>
        </section>

        <section className='admin-stat'>
          <StatCard 
            type="appointments"
            count={5}
            label="Schedule appointment"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard 
            type="pending"
            count={10}
            label="Pending appointment"
            icon="/assets/icons/pending.svg"
          />
          <StatCard 
            type="cancelled"
            count={2}
            label="Cancelled appointment"
            icon="/assets/icons/cancelled.svg"
          />
        </section>
      </main>
    </div>
  )
}

export default Admin