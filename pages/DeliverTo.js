import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DeliveryScreen = () => {
  const [useProfileDetails, setUseProfileDetails] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const toggleProfileDetails = (value) => {
    setUseProfileDetails(value);

    if (value) {
      // Clear and disable fields if the switch is ON
      setName('');
      setAddress('');
      setCity('');
      setPhone('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with back and help icons */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={26} color="black" />
        <Text style={styles.headerText}>Deliver to</Text>
        <Ionicons name="help-circle-outline" size={22} color="black" />
      </View>

      {/* Progress bar with steps */}
      <View style={styles.progressBar}>
        <View style={styles.progressStepActive} />
        <View style={styles.progressLine} />
        <View style={styles.progressStepInactive} />
        <View style={styles.progressLine} />
        <View style={styles.progressStepInactive} />
      </View>

      {/* Delivery Address Section */}
      <Text style={styles.sectionTitle}>Enter Delivery Address</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, useProfileDetails && styles.disabledInput]}
          placeholder="Name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
          editable={!useProfileDetails}
        />
        <TextInput
          style={[styles.input, useProfileDetails && styles.disabledInput]}
          placeholder="Address"
          placeholderTextColor="#999"
          value={address}
          onChangeText={setAddress}
          editable={!useProfileDetails}
        />
        <TextInput
          style={[styles.input, useProfileDetails && styles.disabledInput]}
          placeholder="City"
          placeholderTextColor="#999"
          value={city}
          onChangeText={setCity}
          editable={!useProfileDetails}
        />
        <TextInput
          style={[styles.input, useProfileDetails && styles.disabledInput]}
          placeholder="Phone"
          placeholderTextColor="#999"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          editable={!useProfileDetails}
        />
      </View>

      {/* OR divider */}
      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.orLine} />
      </View>

      {/* Use Profile Details Option */}
      <View style={styles.profileOption}>
        <Text style={styles.profileText}>Use my profile details</Text>
        <Switch
          value={useProfileDetails}
          onValueChange={toggleProfileDetails}
          trackColor={{ false: "#ccc", true: "#ff7a00" }}
          thumbColor={useProfileDetails ? "#ff7a00" : "#fff"}
        />
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.proceedButton}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  progressStepActive: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#6BCB6F',
  },
  progressStepInactive: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  progressLine: {
    width: 40,
    height: 2,
    backgroundColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: '600',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  disabledInput: {
    backgroundColor: '#e0e0e0',  // Slightly darker to indicate disabled state
    color: '#999',  // Gray text color for disabled input
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#999',
  },
  profileOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  profileText: {
    fontSize: 16,
  },
  proceedButton: {
    backgroundColor: '#ff7a00',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DeliveryScreen;
