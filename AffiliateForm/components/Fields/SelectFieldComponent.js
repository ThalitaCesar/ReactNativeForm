import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { Picker as RNPicker } from "@react-native-picker/picker";
import { StyleSheet, Text, View } from "react-native";

const SelectFieldComponent = ({ name, label, options, error, isRequired }) => {
  const { control, watch } = useForm();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={watch(name) || ""}
      render={(props) => (
        <View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{label}</Text>
            {isRequired && <Text style={styles.requiredIndicator}>*</Text>}
          </View>
          <View style={styles.inputContainer}>
            <RNPicker
              style={styles.input}
              selectedValue={props.field.value}
              onValueChange={(value) => props.field.onChange(value)}
            >
              <RNPicker.Item label="Selecione..." value='' />
              {options.map((option, index) => (
                <RNPicker.Item key={index} label={option.label} value={option.value} />
              ))}
            </RNPicker>
          </View>
          {error ? <Text style={styles.errorText}>{error.message}</Text> : null}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#BABABA",
    borderRadius: 5,
    marginBottom: 8,
    minWidth: '45%',
    justifyContent: 'center',
    padding: 0,
    height: 38,
  },
  input: {
    fontSize: 12,
    fontWeight: "bold",
    padding: 0,
  },
  label: {
    color: "#313131",
    fontSize: 14,
    fontWeight: "bold",
  },
  requiredIndicator: {
    color: "red",
    marginLeft: 4,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default SelectFieldComponent;
