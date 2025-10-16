import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('../appsData.json'),

                Component: Home
            },
            {
                path: '/apps',
                loader: () => fetch('../appsData.json'),
                Component: Apps
            },
            {
                path: '/installation',
                loader: () => fetch('../appsData.json'),
                Component: Installation
            },
            {
                path: '/apps/:id',
                loader: () => fetch('../appsData.json'),
                Component: AppDetails
            }

        ]
    },
]);