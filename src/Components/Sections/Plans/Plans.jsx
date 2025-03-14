import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import PlanCard from './Components/PlanCard';
import plansData from '../../../Data/plans.json';
import TypeSelectors from './Components/TypeSelectors';

function Plans() {

    // Initialize plan type state:
    const [planType, setPlanType] = React.useState('MONTHLY');

    return (
        <section className='plans py-10' id='plans'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    title={`Choose the plan that's right for you`}
                    description={`Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!`}
                >
                    <TypeSelectors planType={planType} setPlanType={setPlanType} />
                </SectionHeader>
                {/* Plans Grid */}
                <div className='plans-grid grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        plansData.map((plan, index) => <PlanCard planType={planType} key={index} planData={plan} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Plans;