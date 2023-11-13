import {ScrollView, Text} from "react-native";
import {Container, FlexContainer, Label} from "./styles";
import TitleHeader from "./components/TitleHeader";
import ButtonBack from "./components/ButtonBack";
import {useForm, FormProvider} from 'react-hook-form';
import SelectFieldComponent from "./components/Fields/SelectFieldComponent";
import DateFieldComponent from "./components/Fields/DateFieldComponent";
import fieldsValidationSchema from "./fieldsValidationSchema";

const FormCandidates = () => {

    const {methods, errors, handleSubmit} = useForm({validationSchema: fieldsValidationSchema})

    return (
        <FormProvider {...methods}>
            <ScrollView>
                <Container>
                    <TitleHeader title="Candidatos"/>
                    <SelectFieldComponent
                        name="candidateRepresentative"
                        label="Candidato / Mandatário"
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
                        name="electionYear"
                        label="Ano da Eleição"
                        error={errors
                        ?.electionYear}
                        isRequired={true}
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
                        name="scopeOfThePosition"
                        label="Abrangência do Cargo"
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
                    <Label>Quantidade de votos</Label>
                    <FlexContainer>
                        <Text>Entre:</Text>
                        <DateFieldComponent
                            name="FromNumberDevotees"
                            onChange={(value) => console.log(value)}/>
                    </FlexContainer>
                    <FlexContainer>
                        <Text>Até:</Text>
                        <DateFieldComponent
                            name="UntilNumberDevotees"
                            onChange={(value) => console.log(value)}/>
                    </FlexContainer>

                    <ButtonBack onLongPress={handleSubmit}/>
                </Container>
            </ScrollView>
        </FormProvider>
    );
};

export default FormCandidates;
