import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";

const NumberFieldComponent = ({ name, label, error, max }) => {
  const { control, watch } = useForm();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <View>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={max}
            value={watch(name) || ""}
            onChangeText={(text) => {
              const numericValue = text.replace(/[^0-9]/g, "");
              field.onChange(numericValue);
            }}
            onBlur={field.onBlur}
          />
          {error ? (
            <Text style={styles.errorText}>{error.message}</Text>
          ) : null}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#BABABA",
    borderRadius: 5,
    padding: 10.5,
    paddingHorizontal: 12,
    marginBottom: 8,
    minWidth: "45%",
    height: 38,
  },
  label: {
    color: "#313131",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default NumberFieldComponent;
