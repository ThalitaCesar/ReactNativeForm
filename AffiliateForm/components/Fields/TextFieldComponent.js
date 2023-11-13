import React from "react";
import {Controller, useForm, useFormContext} from "react-hook-form";
import {StyleSheet, Text, TextInput, View} from "react-native";

const TextFieldComponent = ({name, label, onChange, error, max}) => {
  const { control, watch } = useForm();

    return (
        <Controller
            name={name}
            control={control}
            render={(props) => (
            <View>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={watch(name) || undefined}
                    onChange={onChange}
                    maxLength={max}
                    onBlur={(e) => {
                    props
                        .field
                        .onChange(e.target.value);
                }}/> 
                {error ? (
                <Text style={styles.errorText}>{error.message}</Text>
            ): null}
            </View>
        )}/>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#BABABA",
        borderRadius: 5,
        padding: 4,
        paddingHorizontal: 12,
        marginBottom: 8,
        minWidth: '45%'
    },
    label: {
        color: "#313131",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 5
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 5
    }
});

export default TextFieldComponent;
