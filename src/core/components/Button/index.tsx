import React from 'react';
import './styles.css';

type Props = {
    texto: string;
}

const Button = ({texto}: Props) => (
    <button type="submit" className="btn-default">
        {texto}
    </button>
);

export default Button;
