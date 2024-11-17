export default async function ResultPage({ params }) {
    const { makeId, year } = await params

    const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
    const data = await res.json()
    const models = data.Results

    return (
        <div className='p-6 min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center'>
            <div className='bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full'>
                <h1 className='text-3xl font-extrabold text-gray-800 mb-6 text-center'>
                    Models for Make ID {makeId} in {year}
                </h1>
                {models.length > 0 ? (
                    <ul className='space-y-4'>
                        {models.map((model, index) => (
                            <li
                                // I used index instead of model.Model_ID because the model ID is not unique sometimes
                                key={index}
                                className='p-4 bg-blue-100 rounded-lg shadow hover:bg-blue-200 transition-all'>
                                <span className='text-lg font-medium text-blue-800'>{model.Model_Name}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className='text-center text-lg font-semibold text-gray-700'>No models found for the selected make and year.</p>
                )}
            </div>
        </div>
    )
}
