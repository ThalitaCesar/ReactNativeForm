import {ScrollView, Text} from "react-native";
import {Container, FlexContainer, Label} from "./styles";
import TitleHeader from "./components/TitleHeader";
import ButtonBack from "./components/ButtonBack";
import {useForm, FormProvider} from 'react-hook-form';
import SelectFieldComponent from "./components/Fields/SelectFieldComponent";
import DateFieldComponent from "./components/Fields/DateFieldComponent";
import fieldsValidationSchema from "./fieldsValidationSchema";
import TextFieldComponent from "./components/Fields/TextFieldComponent";
import CPFFieldComponent from "./components/Fields/CPFFieldComponent";
import NumberFieldComponent from "./components/Fields/NumberFielComponent";

const FormPersonalData = () => {

    const {methods, errors, handleSubmit} = useForm({validationSchema: fieldsValidationSchema})

    return (
        <FormProvider {...methods}>
            <ScrollView>
                <Container>
                    <TitleHeader title="Dados Pessoais"/>
                    <TextFieldComponent
                        name="name"
                        label="Nome"
                        max={200}
                        onChange={(value) => console.log(value)}/>
                    <CPFFieldComponent
                        name="cpf"
                        label="CPF"
                        onChange={(value) => console.log(value)}/>
                    <SelectFieldComponent
                        isRequired={false}
                        name="sex"
                        label="Sexo"
                        options={[
                        {
                            label: "Feminino",
                            value: "feminino"
                        }, {
                            label: "Masculino",
                            value: "masculino"
                        }
                    ]}/>
                    <Label>Data de Nascimento</Label>
                    <FlexContainer>
                        <Text>De:</Text>
                        <DateFieldComponent name="from" onChange={(value) => console.log(value)}/>
                    </FlexContainer>
                    <FlexContainer>
                        <Text>Até:</Text>
                        <DateFieldComponent name="until" onChange={(value) => console.log(value)}/>
                    </FlexContainer>
                    <NumberFieldComponent
                        name="titlenumber"
                        max={12}
                        label="Nº do Título Eleitoral"
                        onChange={(value) => console.log(value)}/>
                    <FlexContainer>
                        <NumberFieldComponent
                            name="zone"
                            label="Zona"
                            max={3}
                            onChange={(value) => console.log(value)}/>
                        <NumberFieldComponent
                            name="section"
                            label="Seção"
                            max={5}
                            onChange={(value) => console.log(value)}/>
                    </FlexContainer>
                    <ButtonBack onLongPress={handleSubmit}/>
                </Container>
            </ScrollView>
        </FormProvider>
    );
};

export default FormPersonalData;
