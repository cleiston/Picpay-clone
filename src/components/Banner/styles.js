import styled from 'styled-components/native';

export const Container = styled.View`
    background: #6882bb;
    margin: 25px 16px;
    height: 150px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    padding: 15px;
`;

export const Details = styled.View`
    flex: 1;
`;

export const Img = styled.Image`
    margin: 2px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    align-self: stretch;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-top: 15px;
`;
