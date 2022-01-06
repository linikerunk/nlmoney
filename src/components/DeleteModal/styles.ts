import styled from "styled-components";

export const Container = styled.form`
    h3 {
        color: var(--red);
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--red);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(90%);
        }
    }

    button.back {
        width: 100%;
        height: 4rem;
        background: var(--blue-light);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(90%);
        }
    }
`