import { Metadata} from "next";


export const generateMetadata = async ({params}) =>{
    return {
        title: {
            absolute: `User ${params.id} - absolute title`
        }
    }
}

export default function UserLayout({ children }) {
    return (
        <main>
            {children}
            <h1>Feature Products</h1>
        </main>
    )
}