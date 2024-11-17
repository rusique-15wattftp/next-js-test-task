import { useState, useEffect } from 'react'
import FormField from './FormField'

const fetchMakes = async () => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL)

        if (!res.ok) {
            throw new Error('Failed to fetch makes')
        }

        const data = await res.json()
        return data.Results
    } catch (error) {
        console.error('Error fetching makes:', error)
    }
}

const MakeSelector = ({ selectedMake, setSelectedMake }) => {
    const [makes, setMakes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const makesData = await fetchMakes()
                setMakes(makesData)
            } catch (error) {
                console.error('Failed to fetch makes:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <FormField
            label='Select Vehicle Make'
            value={selectedMake}
            onChange={setSelectedMake}
            options={makes}
            optionKey='MakeId'
            optionLabel='MakeName'
        />
    )
}

export default MakeSelector
