const FormField = ({ label, value, onChange, options, optionKey, optionLabel }) => (
    <div className='mb-6'>
        <label className='block mb-2 text-lg font-medium text-gray-700'>{label}</label>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'>
            <option value=''>Select {label.split(' ')[1]}</option>
            {options.map((option) => (
                <option
                    key={optionKey ? option[optionKey] : option}
                    value={optionKey ? option[optionKey] : option}
                    className='text-gray-800'>
                    {optionKey ? option[optionLabel] : option}
                </option>
            ))}
        </select>
    </div>
)

export default FormField
