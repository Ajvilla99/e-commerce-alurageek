const formLogin = async () => {
    return await fetch("https://json-ecommerce-alura-geek.vercel.app/users").then( response => response.json())
}

const createUser = (name, email, password) => {
    return fetch("https://json-ecommerce-alura-geek.vercel.app/users", {
        method: "POST",
        headers: {
            "content-type": "Application/JSON"
        },
        body: JSON.stringify({name, email, password, id:uuid.v4()})
    })
}

const category = () => {
    return fetch("https://json-ecommerce-alura-geek.vercel.app/categories").then( response => response.json())
}

const createCategory = (name) => {
    return fetch("https://json-ecommerce-alura-geek.vercel.app/categories", {
        method: "POST",
        headers: {
            "content-type": "Application/JSON"
        },
        body: JSON.stringify({name, id:uuid.v4()})

    })
}

const editCategory = (id) => {
    return fetch(`https://json-ecommerce-alura-geek.vercel.app/categories/${id}`).then( response => response.json())
}

const updateCategory = (name, id) => {
    return fetch(`https://json-ecommerce-alura-geek.vercel.app/categories/${id}`, {
        method: 'PUT',
        headers: {"Content-Type": "Application/JSON"},
        body: JSON.stringify({name, id}),
    })
        .then( response => response.json())
        .catch((error) => error)
}

const deleteCategory = (id) => {
    return fetch(`https://json-ecommerce-alura-geek.vercel.app/categories/${id}`, {
        method: "DELETE"
    })
}

const ordenerCategory = async (category) => {
    try {
        const response = fetch(`https://json-ecommerce-alura-geek.vercel.app/categories/${category}`);
        if (!response || !response?.ok) {
            throw new Error('Error en la petición');
        }
        const data = response.json()
        return data
    } catch (error) {
        throw error
    }
}

const producto = async () => {
    try {
        const response = await fetch("https://json-ecommerce-alura-geek.vercel.app/products");
    if (!response.ok) {
        throw new Error('Error en la petición');
    }
    const data = response.json()
    return data
    } catch (error) {
        throw error
    }
}

const crearProducto = (name, description, url, price, category) => {
    return fetch("https://json-ecommerce-alura-geek.vercel.app/products", {
        method: "POST",
        headers: {
            "content-type": "Application/JSON"
        },
        body: JSON.stringify({name, description, url, price, category, id:uuid.v4()})

    })
}

const editProduct = async (id) => {
    try {
        const response = await fetch(`https://json-ecommerce-alura-geek.vercel.app/products/${id}`);   
        if(!response.ok) {
            throw new Error('Error fetching')
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
    
}

const deleteProduct = (id) => {
    return fetch(`https://json-ecommerce-alura-geek.vercel.app/products/${id}`, {
        method: "DELETE"
    })
}

const updateProduct = async (name, description, url, price, category, id) => {
    try {
        const response = await fetch(`https://json-ecommerce-alura-geek.vercel.app/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, description, url, price, category, id }),
        });

        if (!response.ok) {
            throw new Error('Error updating product');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating product:', console.log(error));
        throw error;
    }
};

const productCategory = async () => {
    try {
        const response = await fetch("https://json-ecommerce-alura-geek.vercel.app/products");
        if (!response.ok) {
            throw new Error('Error fetching products');
        }
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const clientServices = {
    formLogin,
    createUser,
    producto,
    crearProducto,
    editProduct,
    deleteProduct,
    updateProduct,
    category,
    createCategory,
    deleteCategory,
    editCategory,
    updateCategory,
    ordenerCategory,
    productCategory,
}
