export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params: {id: user.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return{
        props: {ninja: data}
    }
}

const NinjaDetail = ({ninja}) => {
    
    return (
        <div>
            <h1>Ninja Details</h1>
            <h5>Name: {ninja.name}</h5>
            <h5>Username: {ninja.username}</h5>
            <h5>Email: {ninja.email}</h5>
            <h5>Phone: {ninja.phone}</h5>
            <h5>Website: {ninja.website}</h5>
            <h5>Address: {`${ninja.address.street} ${ninja.address.city}`}</h5>
        </div>
    )
}

export default NinjaDetail
