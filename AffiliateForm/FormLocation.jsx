import {ScrollView} from "react-native";
import {Container} from "./styles";
import TitleHeader from "./components/TitleHeader";
import ButtonBack from "./components/ButtonBack";
import {useForm, FormProvider} from 'react-hook-form';
import SelectFieldComponent from "./components/Fields/SelectFieldComponent";

import fieldsValidationSchema from "./fieldsValidationSchema";

const FormLocation = () => {

    const {methods, errors, handleSubmit} = useForm({validationSchema: fieldsValidationSchema})

    return (
        <FormProvider {...methods}>
            <ScrollView>
                <Container>
                    <TitleHeader title="Localização"/>
                    <SelectFieldComponent
                        isRequired={false}
                        name="uf"
                        label="UF"
                        options={[
                        {
                            label: "Sim",
                            value: "yes"
                        }, {
                            label: "Não",
                            value: "no"
                        }
                    ]}/>
                    <SelectFieldComponent
                        isRequired={false}
                        name="city"
                        label="Município"
                        options={[
                        {
                            label: "Sim",
                            value: "yes"
                        }, {
                            label: "Não",
                            value: "no"
                        }
                    ]}/>
                    <SelectFieldComponent
                        isRequired={false}
                        name="neighborhood"
                        label="Bairro"
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

export default FormLocation;
