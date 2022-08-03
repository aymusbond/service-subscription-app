import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap';
import { ModalComponent } from '../Modals/ModalComponent';

const BGimg = styled.header`
    padding: 7rem 0;
    height: 60vh;
    background-image: url("https://images.unsplash.com/photo-1658784566751-95382f065d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    background-size: cover;
    background-position: center;
`;

const HeaderBox = styled.div`
    background-color: rgb(70, 160, 80);
    padding: 3rem;
    color: white;
    width: 34rem;
`;

const Heading = styled.h1`
    font-size: 5rem;
`;

const SubHeading = styled.h3`
    margin: 1rem 0;
    font-weight: 400;
`;

export const MainPage = () => {
  return (
    <BGimg>
        <Container>
            <HeaderBox>
                <Heading>Subscription App</Heading>
                <SubHeading>Subscribe now!</SubHeading>
                <ModalComponent text = "Sign Up" variant = "primary"/>
                <ModalComponent text = "Login" variant = "danger"/>
            </HeaderBox>
        </Container>
    </BGimg>
  )
};