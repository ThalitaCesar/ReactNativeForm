import {ScrollView, Text} from "react-native";
import {Container, FlexContainer, Label} from "./styles";
import TitleHeader from "./components/TitleHeader";
import ButtonBack from "./components/ButtonBack";
import {useForm, FormProvider} from 'react-hook-form';
import SelectFieldComponent from "./components/Fields/SelectFieldComponent";
import DateFieldComponent from "./components/Fields/DateFieldComponent";
import fieldsValidationSchema from "./fieldsValidationSchema";

const MembershipData = () => {

    const {methods, errors, handleSubmit} = useForm({validationSchema: fieldsValidationSchema})

    return (
        <FormProvider {...methods}>
            <ScrollView>
                <Container>
                    <TitleHeader title="Dados da Filiação"/>
                    <SelectFieldComponent
                        name="affiliateStatus"
                        label="Situação do Filiado"
                        isRequired={false}
                        options={[
                        {
                            label: "Feminino",
                            value: "feminino"
                        }, {
                            label: "Masculino",
                            value: "masculino"
                        }
                    ]}/>

                    <SelectFieldComponent
                        name="originOfAffiliation"
                        label="Origem da filiação"
                        isRequired={false}
                        options={[
                        {
                            label: "Feminino",
                            value: "feminino"
                        }, {
                            label: "Masculino",
                            value: "masculino"
                        }
                    ]}/>

                    <Label>Data da filiação</Label>
                    <FlexContainer>
                        <Text>De:</Text>
                        <DateFieldComponent
                            name="fromAffiliationData"
                            onChange={(value) => console.log(value)}/>
                    </FlexContainer>
                    <FlexContainer>
                        <Text>Até:</Text>
                        <DateFieldComponent
                            name="untilAffiliationData"
                            onChange={(value) => console.log(value)}/>
                    </FlexContainer>
                    <SelectFieldComponent
                        isRequired={false}
                        name="registrationStatus"
                        label="Situação do cadastro"
                        options={[
                        {
                            label: "Feminino",
                            value: "feminino"
                        }, {
                            label: "Masculino",
                            value: "masculino"
                        }
                    ]}/>

                    <Label>Data de atualização cadastral</Label>
                    <FlexContainer>
                        <Text>De:</Text>
                        <DateFieldComponent name="fromUpdate" onChange={(value) => console.log(value)}/>
                    </FlexContainer>
                    <FlexContainer>
                        <Text>Até:</Text>
                        <DateFieldComponent
                            name="untilUpdate"
                            onChange={(value) => console.log(value)}/>
                    </FlexContainer>

                    <ButtonBack onLongPress={handleSubmit}/>
                </Container>
            </ScrollView>
        </FormProvider>
    );
};

export default MembershipData;
