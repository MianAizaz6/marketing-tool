import React from 'react'
import PricingSection from '../components/modules/pricing-plans/pricing-section'
import Header from '../components/ui-components/header'
import PlanComparisonTable from '../components/modules/pricing-plans/comparison-table'
import FAQSection from '../components/modules/pricing-plans/faq-section'

const PricingPlans = () => {
  return (
    <div className='flex flex-col gap-16'>
      <Header />
      <PricingSection />
      <PlanComparisonTable />
      <FAQSection />
    </div>
  )
}

export default PricingPlans
