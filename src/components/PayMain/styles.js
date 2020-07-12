import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 15px;
  background-color: #000;
`;

export const Section = styled.View`

`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 16px;
    padding: 0 0 10px 0;
    color: #fff;
`;

export const Items = styled.View.attrs({
        borderBottomColor: '#888',
        borderBottomWidth: 0.5,
        marginBottom: 30,
        paddingBottom: 20
    })`
    margin-bottom: 20px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const Img = styled.Image`

`;

export const ItemContent = styled.View`
    padding: 10px;
`;

export const ItemTitle = styled.Text`
    font-weight: bold;
    color: #fff;
`;

export const ItemDescription = styled.Text`
    color: #777;
`;
