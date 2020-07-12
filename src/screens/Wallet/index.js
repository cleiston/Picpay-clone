import React, { useState } from 'react';
import { Switch } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

import { 
    Wrapper,
    Container,
    Header, 
    HeaderContainer,
    Title,
    BalanceContainer,
    Info,
    Action,
    Actions,
    ActionLabel,
    Value,
    EyeButton,
    Bold,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicketButton,
    UseTicketLabel
} from './styles';

import CreditCard from '../../images/credit-card.png';

export default function Wallet(){

    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleIsVisible() {
        setIsVisible((prevState) => (!prevState));
    }

    function handleToggleUseBalance() {
        setUseBalance((prevState) => (!prevState));
    }

    return (
        <Wrapper>
            <Container>
                <Header colors={useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']}>
                    <HeaderContainer>
                        <Title>Saldo PicPay</Title>

                        <BalanceContainer>
                            <Value>
                                R$ <Bold>{isVisible ? '0,00' : '----' }</Bold>
                            </Value>

                            <EyeButton onPress={handleToggleIsVisible}>
                                <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
                            </EyeButton>
                        </BalanceContainer>

                        <Info>
                            Seu saldo está rendendo 100% do CDI.
                        </Info>

                        <Actions>
                            <Action>
                                <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                                <ActionLabel>Adicionar</ActionLabel>
                            </Action>

                            <Action>
                                <FontAwesome name="bank" size={20} color="#fff" />
                                <ActionLabel>Retirar</ActionLabel>
                            </Action>
                        </Actions>
                    </HeaderContainer>
                </Header>

                <UseBalance>
                    <UseBalanceTitle>
                        Usar saldo ao pagar
                    </UseBalanceTitle>

                    <Switch 
                        value={useBalance}
                        onValueChange={handleToggleUseBalance}
                    />

                </UseBalance>

                <PaymentMethods>
                    <PaymentMethodsTitle>
                        Formas de pagamento
                    </PaymentMethodsTitle>
                    <Card>
                        <CardBody>
                            <CardDetails>
                                <CardTitle>
                                    Cadastre o seu cartão de crédito
                                </CardTitle>
                                <CardInfo>
                                    Cadastre o seu cartão de crédito para fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                                </CardInfo>
                            </CardDetails>

                            <Img source={CreditCard} resizeMode="contain" />
                        </CardBody>

                        <AddButton>
                            <AntDesign name="pluscircleo" size={30} color="#0db060" />
                            <AddLabel>Adicionar cartão de crédito</AddLabel>
                        </AddButton>
                    </Card>

                    <UseTicketButton>
                        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
                        <UseTicketLabel>
                            Usar código promocional
                        </UseTicketLabel>
                    </UseTicketButton>
                </PaymentMethods>
            </Container>
        </Wrapper>
    );
}