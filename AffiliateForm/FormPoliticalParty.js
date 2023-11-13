import {ScrollView, Text} from "react-native";
import {Container, FlexContainer, Label} from "./styles";
import TitleHeader from "./components/TitleHeader";
import ButtonBack from "./components/ButtonBack";
import {useForm, FormProvider} from 'react-hook-form';
import SelectFieldComponent from "./components/Fields/SelectFieldComponent";
import DateFieldComponent from "./components/Fields/DateFieldComponent";
import fieldsValidationSchema from "./fieldsValidationSchema";

const FormPoliticalParty = () => {

    const {methods, errors, handleSubmit} = useForm({validationSchema: fieldsValidationSchema})

    return (
        <FormProvider {...methods}>
            <ScrollView>
                <Container>
                    <TitleHeader title="Político Partidário"/>
                    <SelectFieldComponent
                        name="preCandidate"
                        label="Pré-Candidato"
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
                        name="themesThatIdentify"
                        label="Temas que se identifica"
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
                        name="positionInTheParty"
                        isRequired={false}
                        label="Cargo no Partido"
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
                        name="scopeOfPosition"
                        isRequired={false}
                        label="Abrangência do Cargo"
                        options={[
                        {
                            label: "Feminino",
                            value: "feminino"
                        }, {
                            label: "Masculino",
                            value: "masculino"
                        }
                    ]}/>

                    <Label>Data de Filiação</Label>
                    <FlexContainer>
                        <Text>De:</Text>
                        <DateFieldComponent
                            name="fromAffiliation"
                            onChange={(value) => console.log(value)}/>
                    </FlexContainer>
                    <FlexContainer>
                        <Text>Até:</Text>
                        <DateFieldComponent
                            name="untilAffiliation"
                            onChange={(value) => console.log(value)}/>
                    </FlexContainer>

                    <Label>Data de Desfiliação</Label>
                    <FlexContainer>
                        <Text>De:</Text>
                        <DateFieldComponent
                            name="fromDisaffiliation"
                            onChange={(value) => console.log(value)}/>
                    </FlexContainer>
                    <FlexContainer>
                        <Text>Até:</Text>
                        <DateFieldComponent
                            name="untilDisaffiliation"
                            onChange={(value) => console.log(value)}/>
                    </FlexContainer>

                    <ButtonBack onLongPress={handleSubmit}/>
                </Container>
            </ScrollView>
        </FormProvider>
    );
};

export default FormPoliticalParty;
