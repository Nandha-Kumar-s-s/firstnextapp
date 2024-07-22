export async function GET() {
    return  Response.json([
        { 
            userid:1, name: 'nandha' 
        },
        {
            userid:2, name: 'ganesh'
        }
    ])
}