import './globals.css'

export const metadata = {
    title: 'Car Dealer App',
    description: 'Filter and view car models by make and year',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className='bg-gray-100 text-gray-800'>
                <main>{children}</main>
            </body>
        </html>
    )
}
