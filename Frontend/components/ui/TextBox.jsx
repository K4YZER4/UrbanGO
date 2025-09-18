import React from 'react';
import { useState } from 'react';
import {TextInput, Text, StyleSheet,View,TouchableOpacity } from 'react-native';
import{Ionicons} from '@expo/vector-icons';

const TextBox = ({ 
  label, 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry = false, 
  style,
  ...props 
}) => {
  const [mostrarContra, establecerMostrarContra] = useState(false); 
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && ! mostrarContra}
          {...props} // permite pasar otras props como keyboardType, maxLength, etc.
        />
    
        {secureTextEntry && (
        <TouchableOpacity onPress={() => establecerMostrarContra(!mostrarContra)} style={styles.btnOjo}>
            <Ionicons name={mostrarContra ? "eye-off" : "eye"} size={22} color="#333" />
          </TouchableOpacity>
          
        )}
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '80%',
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: '#666668ff',
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#9FCDFF',
  },
  btnOjo: {
    position: 'absolute',
    right: 10,

  },
});  

export default TextBox;