// Data extracted from the image
const feeData = [
  {
    months: '3 MONTHS',
    tier1: { fee: 100, isMonthlyVideo: true },
    tier2: { fee: 50, isMonthlyVideo: false },
  },
  {
    months: '6 MONTHS',
    tier1: { fee: 150, isMonthlyVideo: true },
    tier2: { fee: 75, isMonthlyVideo: false },
  },
  {
    months: '12 MONTHS',
    tier1: { fee: 250, isMonthlyVideo: true },
    tier2: { fee: 125, isMonthlyVideo: false },
  },
];

// Service descriptions are common across all columns in the image
const commonServices = {
    tier1: [
        'Consultation by Video Call Once in a Month',
        'Consultation by Telephone, WhatsApp, E-mail.',
    ],
    tier2: [
        'Consultation by Telephone, WhatsApp, E-mail.',
    ]
};

// Component for the mobile (card) view
const MobileFeeCard = ({ data, tier }) => {
    const isTier1 = tier === 1;
    const currentTier = isTier1 ? data.tier1 : data.tier2;
    const services = isTier1 ? commonServices.tier1 : commonServices.tier2;

    return (
        <div className="mb-6 rounded-xl overflow-hidden shadow-lg border border-border">
            {/* Header (Duration) */}
            <div className={`text-center py-3 text-white font-heading font-semibold text-lg
                ${isTier1 ? 'bg-primary' : 'bg-highlight'}`}>
                {data.months}
            </div>

            {/* Fee */}
            <div className={`text-center py-4 text-3xl font-heading font-extrabold text-white
                ${isTier1 ? 'bg-highlight' : 'bg-primary'}`}>
                Fee ${currentTier.fee}
            </div>

            {/* Service Details */}
            <div className="p-4 bg-surface">
                {services.map((service, index) => (
                    <div key={index} className="flex items-start mb-2 last:mb-0">
                        <svg className="w-5 h-5 mr-2 mt-1 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <p className="text-text-light text-sm font-body">{service}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main component
const InternationalFee = () => {
    return (
        <div className="min-h-fit p-4 sm:p-8 bg-bgnd">
            <div className="max-w-7xl mx-auto shadow-2xl rounded-xl overflow-hidden">
                {/* Main Header */}
                <header className="bg-primary text-white p-4 sm:p-6 text-center">
                    <div className="p-4 rounded-lg bg-highlight">
                        <h1 className="text-xl sm:text-3xl font-heading font-extrabold tracking-tight">
                            INTERNATIONAL FEE STRUCTURES
                        </h1>
                    </div>
                </header>

                {/* Desktop/Tablet Table View */}
                <div className="hidden md:block bg-surface p-6">
                    <table className="w-full border-collapse rounded-lg overflow-hidden">
                        <thead>
                            {/* Table Header (3 MONTHS, 6 MONTHS, 12 MONTHS) */}
                            <tr className="text-white font-heading font-bold text-lg">
                                <th className="bg-primary p-4 text-left w-1/4">SERVICE TIER</th>
                                {feeData.map(col => (
                                    <th key={col.months} className="bg-primary p-4 text-center">
                                        {col.months}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* --- TIER 1 --- */}

                            {/* Row 1: Fee Tier 1 */}
                            <tr className="text-white font-heading font-extrabold text-2xl border-b-2 border-dashed border-border">
                                <td className="bg-highlight p-4">Tier 1 Fee</td>
                                {feeData.map(col => (
                                    <td key={col.months + '-fee1'} className="bg-highlight p-4 text-center">
                                        Fee ${col.tier1.fee}
                                    </td>
                                ))}
                            </tr>

                            {/* Row 2: Service 1 (Video Call) */}
                            <tr className="font-body text-text border-b border-border">
                                <td className="p-4 bg-surface">Video Consultation</td>
                                {feeData.map(col => (
                                    <td key={col.months + '-vcall'} className="p-4 text-center bg-surface text-text-light">
                                        {commonServices.tier1[0]}
                                    </td>
                                ))}
                            </tr>

                            {/* Row 3: Service 2 (Telephone/Email) */}
                            <tr className="font-body text-text border-b-4 border-border">
                                <td className="p-4 bg-surface">Text/Audio Consultation</td>
                                {feeData.map(col => (
                                    <td key={col.months + '-tcall'} className="p-4 text-center bg-surface text-text-light">
                                        {commonServices.tier1[1]}
                                    </td>
                                ))}
                            </tr>

                            {/* --- TIER 2 --- */}

                            {/* Row 4: Fee Tier 2 */}
                            <tr className="text-white font-heading font-extrabold text-xl border-b-2 border-dashed border-border">
                                <td className="bg-primary p-4">Tier 2 Fee</td>
                                {feeData.map(col => (
                                    <td key={col.months + '-fee2'} className="bg-primary p-4 text-center">
                                        Fee ${col.tier2.fee}
                                    </td>
                                ))}
                            </tr>

                            {/* Row 5: Service 3 (Telephone/Email only) */}
                            <tr className="font-body text-text">
                                <td className="p-4 bg-surface">Text/Audio Consultation</td>
                                {feeData.map(col => (
                                    <td key={col.months + '-tcall2'} className="p-4 text-center bg-surface text-text-light">
                                        {commonServices.tier2[0]}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden p-4 bg-surface">
                    <h2 className="text-center text-xl font-heading font-bold text-text mb-4 border-b pb-2 border-border">
                        Monthly Plans (Tier 1)
                    </h2>
                    <div className="space-y-6 mb-8">
                        {feeData.map((data) => (
                            <MobileFeeCard key={data.months + '-t1'} data={data} tier={1} />
                        ))}
                    </div>

                    <h2 className="text-center text-xl font-heading font-bold text-text mb-4 border-b pb-2 border-border">
                        Value Plans (Tier 2)
                    </h2>
                    <div className="space-y-6">
                        {feeData.map((data) => (
                            <MobileFeeCard key={data.months + '-t2'} data={data} tier={2} />
                        ))}
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default InternationalFee;