import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    background-color: #000;
`;

export const MapContainer = styled.View`
    height: 200px;
`;

export const MapMarkerContainer = styled.TouchableOpacity`
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    align-items: center;
`;

export const MapMarkerTitle = styled.Text`
    color: #fff;
    font-size: 13px;
    background: #10c86e;
    padding: 3px;
    border-radius: 5px;
    margin: 2px;
`;

export const Img = styled.Image`
    width: 40px;
    height: 40px;
`;

export const PointsContainer = styled.View`
    padding: 15px;
`;

export const Items = styled.View.attrs({
    borderBottomColor: '#888',
    borderBottomWidth: 0.5,
    marginBottom: 30,
    paddingBottom: 20
})`
margin-bottom: 20px;
`;

export const Item = styled.TouchableOpacity`
    padding: 5px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
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