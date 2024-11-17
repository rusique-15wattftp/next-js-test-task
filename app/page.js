'use client'

import { Suspense, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import MakeSelector from './components/MakeSelector'
import FormField from './components/FormField'

const HomePage = () => {
    const [selectedMake, setSelectedMake] = useState('')
    const [selectedYear, setSelectedYear] = useState('')
    const router = useRouter()

    const years = Array.from({ length: new Date().getFullYear() - 2015 + 1 }, (_, i) => 2015 + i)

    const handleNext = () => {
        if (selectedMake && selectedYear) {
            router.push(`/result/${selectedMake}/${selectedYear}`)
        }
    }

    return (
        <div className='p-6 min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center'>
            <div className='bg-white shadow-lg rounded-lg p-8 max-w-lg w-full'>
                <h1 className='text-3xl font-extrabold text-gray-800 mb-6 text-center'>Filter Cars by Make and Year</h1>

                <Suspense fallback={<div>Loading makes...</div>}>
                    <MakeSelector
                        selectedMake={selectedMake}
                        setSelectedMake={setSelectedMake}
                    />
                </Suspense>

                <FormField
                    label='Select Model Year'
                    value={selectedYear}
                    onChange={setSelectedYear}
                    options={years}
                />
                <button
                    onClick={handleNext}
                    disabled={!selectedMake || !selectedYear}
                    className={`p-3 w-full text-lg font-semibold rounded-lg transition-all ${
                        selectedMake && selectedYear
                            ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default HomePage
