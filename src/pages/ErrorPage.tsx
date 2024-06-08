import React from 'react';
import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import NavBar from "../components/NavBar";
import {Box, Heading} from "@chakra-ui/react";

function ErrorPage() {
    const error = useRouteError();
    return (
        <>
            <NavBar/>
            <Box padding={5}>
                <Heading>Oops...</Heading>
                <p>
                    {isRouteErrorResponse(error)
                        ? 'invalid route'
                        : 'This page does not exist'}
                </p>
            </Box>
        </>
    );
}

export default ErrorPage;