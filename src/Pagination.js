import React from 'react'

export default function Pagination({ goToNextPage, goToPrevPage}) {

    return (
        <div>
            {goToPrevPage && <button onClick={goToPrevPage}>Pagina Anterior</button>}
            {goToNextPage && <button onClick={goToNextPage}>Proxima Pagina</button>}
        </div>
    )
}
