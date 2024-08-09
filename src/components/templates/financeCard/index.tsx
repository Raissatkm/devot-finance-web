import React from "react";
import Text from "../../atoms/text";
import Card from "../../molecules/card";
import Link from "next/link";
import * as S from "../financeCard/styles";



export default function FinanceCard() {
    return (
        <S.FinanceCardContainer>
            <S.FinanceCardHeader>
                <S.Text>Saldo
                </S.Text>
            </S.FinanceCardHeader>

        </S.FinanceCardContainer>
    )
};