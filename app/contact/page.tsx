export default async function Contact() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    console.log(data)
    return (
        <div>
            <h1>This is contact page</h1>

            {data.products?.map((product) => (
                <p key={product.id}>
                    <strong>{product.title}</strong>
                </p>
            ))}
        </div>
    );
}

