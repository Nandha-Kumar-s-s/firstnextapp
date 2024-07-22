export default function Docs({ params }) {
    if(params.slug?.length === 1) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1>{`Docs ${params?.slug[0]}`}</h1>
            </main>
        )
    } else if(params.slug?.length === 2) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1>{`Docs ${params?.slug[0]} ${params?.slug[1]}`}</h1>
            </main>
        )
    } 
        
    return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1>viewing Default Docs</h1>
            </main>
        )
    
}

