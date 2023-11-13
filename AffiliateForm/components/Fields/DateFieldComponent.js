import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";

const DateFieldComponent = ({ name, onChange, error }) => {
  const { control } = useFormContext();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
      onChange(date);
    }
    setShowDatePicker(false);
  };

  useEffect(() => {
    // control.setValue(name, selectedDate);
  }, [control, name, selectedDate]);

  const formattedDate = format(selectedDate, "dd/MM/yyyy");

  return (
    <View>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={styles.input}>{formattedDate}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {error ? (
        <Text style={styles.errorText}>{error.message}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#BABABA",
    borderRadius: 5,
    padding: 10.5,
    paddingHorizontal: 12,
    color:'#313131',
    marginBottom: 8,
    minWidth: "87%",
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

export default DateFieldComponent;
