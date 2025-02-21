"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface ProductInterface {
    id: number,
    name: string,
    category: string,
    description: string,
    ratings: number
}

const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<ProductInterface | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                const res = await fetch('/products.json')
                console.log('data fetched');
                const data = await res.json();
                console.log('converted data');
                const productByID = data.products.find((product: ProductInterface) => product.id === Number(id));
                console.log('productByID', productByID);
                setProduct(productByID);

            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);


    return product ? (

        <div className="flex flex-col items-center p-6 m-20 border-2 border-gray-800">
            <h1 className="text-2xl font-bold mt-4"> {product.name}</h1>
            <h3 className="text-2xl font-bold mt-4">Ratings: {product.ratings}</h3>
            <p className="text-gray-600 mt-2">Description: {product.description}</p>
            <span className="text-xl font-semibold mt-3">Category: {product.category}</span>

            
        </div>
    ):(
        <p className='mt-20'>Loading</p>
    );
};

export default ProductDetail;
