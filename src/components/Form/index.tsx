import React from 'react';

export default function Form() {
    return (
        <form>
            <input type="text" placeholder="Insira os nomes dos participantes" />
            <button type="button" disabled={true}>Inserir</button>
        </form>
    )
}
