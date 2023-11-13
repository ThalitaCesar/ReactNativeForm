import {ScrollView} from "react-native";
import {Container} from "./styles";
import TitleHeader from "./components/TitleHeader";
import {useForm, FormProvider} from 'react-hook-form';
import SelectFieldComponent from "./components/Fields/SelectFieldComponent";
import fieldsValidationSchema from "./fieldsValidationSchema";
import ButtonBack from "./components/ButtonBack";

const FormCharacteristics = () => {

    const {methods, errors, handleSubmit} = useForm({validationSchema: fieldsValidationSchema})

    return (
        <FormProvider {...methods}>
            <ScrollView>
                <Container>
                    <TitleHeader title="Características"/>
                    <SelectFieldComponent
                        isRequired={false}
                        name="race"
                        label="Cor/Raça"
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
                        isRequired={false}
                        name="career"
                        label="Profissão"
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
                        isRequired={false}
                        name="gender"
                        label="Gênero"
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
                        isRequired={false}
                        name="religion"
                        label="Religião"
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
                        isRequired={false}
                        name="education"
                        label="Escolaridade"
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
                        isRequired={false}
                        name="nationality"
                        label="Nacionalidade"
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
                        isRequired={false}
                        name="deficiency"
                        label="Deficiência"
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
                        isRequired={false}
                        name="acceptedCommunication"
                        label="Aceito Comunicação"
                        options={[
                        {
                            label: "Sim",
                            value: "yes"
                        }, {
                            label: "Não",
                            value: "no"
                        }
                    ]}/>
                    <ButtonBack onLongPress={handleSubmit}/>
                </Container>
            </ScrollView>
        </FormProvider>
    );
};

export default FormCharacteristics;
