import React, {useEffect, useState} from 'react';
import MapView, { Marker } from 'react-native-maps';
import { 
    Container, 
    MapContainer, 
    MapMarkerContainer, 
    MapMarkerTitle, 
    PointsContainer,
    Img,
    Item,
    ItemTitle,
    ItemContent,
    ItemDescription
 } from './styles';
import  * as Location from 'expo-location';

import storeImg from '../../images/07.png';

export default function PayLocals() {
    const [initialPosition, setInitialPosition] = useState([0,0]);
    const [points, setPoints] = useState([]); // nearby points that accept picpay

    useEffect(() => {
        async function loadPosition() {
            const { status } = await Location.requestPermissionsAsync();

            if(status !== 'granted'){
                Alert.alert('Oooops...', 'Precisamos de sua permissão para obter a localização.')
                return;
            }

            const location = await Location.getCurrentPositionAsync();

            const {latitude, longitude} = location.coords;
            setInitialPosition([latitude, longitude]);
            getNearbyPoints(latitude, longitude, 5);

        }
        loadPosition();
    }, []);

    function getNearbyPoints(lat, lng, numPoints) {
        const nearbyPoints = [];
        for(let i=0; i< numPoints; i++){
            nearbyPoints.push({
                id: i,
                latitude: (Math.random()-0.5) * 0.03 + lat,
                longitude: (Math.random()-0.5) * 0.03 + lng,
                name: `Loja ${i+1}`,
            })
        }

        setPoints(nearbyPoints);
    }

    return (
        <Container>
            <MapContainer>
                { initialPosition[0] !== 0 && (
                    <MapView 
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        loadingEnabled={initialPosition[0] === 0}
                        initialRegion={{
                            latitude: initialPosition[0],
                            longitude: initialPosition[1],
                            latitudeDelta: 0.014,
                            longitudeDelta: 0.014
                        }}
                        region={{
                            latitude: initialPosition[0],
                            longitude: initialPosition[1],
                            latitudeDelta: 0.014,
                            longitudeDelta: 0.014
                        }}
                    >
                    {points.map(point => (
                        <Marker 
                            key={String(point.id)}
                            style={{
                                width: 90,
                                height: 80,
                            }}
                            coordinate={{
                                latitude: point.latitude,
                                longitude: point.longitude,
                            }}
                        >
                            <MapMarkerContainer>
                                <Img source={storeImg} />
                                <MapMarkerTitle>{point.name}</MapMarkerTitle>
                            </MapMarkerContainer>
                        </Marker>
                    ))}

                </MapView>
                )}
            </MapContainer>
            <PointsContainer>
                {points.map(point => {
                    return (
                        <Item onPress={() => setInitialPosition([
                            point.latitude,
                            point.longitude
                        ])}
                            key={String(point.id)}
                        >
                            <Img source={storeImg} />              
                            <ItemContent>
                                <ItemTitle>{point.name}</ItemTitle>
                                <ItemDescription>
                                    Pague com o PicPay em máquinas Cielo e Getnet escaneando o QR code.
                                </ItemDescription>
                            </ItemContent>
                        </Item>
                    );
                })}
            </PointsContainer>
        </Container>
    );
}