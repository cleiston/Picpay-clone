import React from 'react';

import { 
    Container, 
    Section, 
    Title, 
    Items, 
    Item, 
    Img, 
    ItemContent, 
    ItemTitle, 
    ItemDescription 
} from './styles';

import recarga from '../../images/01.png';
import conta from '../../images/06.png';
import cobrar from '../../images/07.png';
import maquininha from '../../images/11.png';

export default function PayMain() {
    return (
        <Container>
            <Section>
                <Title>Serviços</Title>
                <Items>
                    <Item>
                        <Img source={maquininha} />
                        <ItemContent>
                            <ItemTitle>Pagar nas Maquininhas</ItemTitle>
                            <ItemDescription>
                                Pague com o PicPay em máquinas Cielo e Getnet escaneando o QR code.
                            </ItemDescription>
                        </ItemContent>
                    </Item>

                    <Item>
                        <Img source={conta} />
                        <ItemContent>
                            <ItemTitle>Pagar Conta</ItemTitle>
                            <ItemDescription>
                                Pague sua conta de luz, água, boletos bancários etc
                            </ItemDescription>
                        </ItemContent>
                    </Item>

                    <Item>
                        <Img source={cobrar} />
                        <ItemContent>
                            <ItemTitle>Cobrar</ItemTitle>
                            <ItemDescription>
                                Cobre um amigo
                            </ItemDescription>
                        </ItemContent>
                    </Item>

                    <Item>
                        <Img source={recarga} />
                        <ItemContent>
                            <ItemTitle>Recarga de Celular</ItemTitle>
                            <ItemDescription>Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios</ItemDescription>
                        </ItemContent>
                    </Item>
                </Items>
            </Section>
            <Section>
                <Title>
                    Contatos
                </Title>

            </Section>
        </Container>
    );
}