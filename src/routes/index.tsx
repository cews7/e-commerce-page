import { createBrowserRouter } from 'react-router-dom'
import React from 'react'


export const router = createBrowserRouter([
    {
        errorElement: <div>Something went wrong!</div>,
        children: [
            {
                path: '/',
                element: <div>This would be the home page</div>
            },
            {
                path: '/products',
                element: <div>This would be the products page</div>
            },
            {
                path: '/products/:id',
                element: <div>This would be the product details page</div>
            }
        ]
    }
])