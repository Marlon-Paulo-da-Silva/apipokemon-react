import React from 'react'

export default function PokemonList({ pokemon }) {
    return (
        <div>
           {pokemon.map(p => (
                <div style={{border: 'solid 2px', borderRadius: '10px', width: '200px', display:'flex', padding: '10px', margin: '10px auto', justifyContent: 'center' }} key={p}>{p}</div>
            ))}
        </div>
    )
}
