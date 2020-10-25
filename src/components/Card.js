import styled from 'styled-components';

const Container = styled.div`
    width: 30%;
    display: flex;
    justify-content: flex-start;
    margin: 20px;
    border: 2px solid black;

`;

const Picture = styled.img`
    width: 100%;
`;

const Title = styled.h1`
    color: orange;
    margin-left: 20px;
    text-decoration: underline;
    `;

const ScdContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const DateTitle = styled.h3`
    margin-left: 20px;
`;

const ScdTitle = styled.h2`
    color: white;
    margin: 2%;
`;

const DivDescription = styled.div`
    margin:0px;
    background-color: grey;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Description = styled.p`
    text-align: justify;
    padding: 2%;
    color: white;
`;



const StyledComponents = () => (
    <Container>
        <Picture src="https://images.pexels.com/photos/5634823/pexels-photo-5634823.jpeg?cs=srgb&dl=pexels-gabby-k-5634823.jpg&fm=jpg" />

        <ScdContainer>
            <Title> HALLOWEEN PARTY !</Title>
            <DateTitle>Save the date: 11/31/20</DateTitle>
            <DivDescription>
                <ScdTitle>Description</ScdTitle>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</Description>
            </DivDescription>
        </ScdContainer>

    </Container>
);

export default StyledComponents;