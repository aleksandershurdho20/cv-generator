import React from 'react'
import { Helmet } from "react-helmet";

export default function Seo({ title, link }) {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href={link} />
            </Helmet>
        </div>

    )
}
