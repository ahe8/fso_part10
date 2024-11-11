import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import theme from "./theme";
import Text from './Text';

import * as yup from "yup";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  textInput: {
    padding: 5,
    margin: 5,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    color: "white",
    alignSelf: "flex-start",
    margin: 3,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 3,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  errorBorder: {
    borderColor: "#d73a4a",
  },
});

const inputStyles = (hasError) => [
  styles.textInput,
  hasError && styles.errorBorder,
];

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={inputStyles(formik.touched.username && formik.errors.username)}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "#d73a4a" }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={inputStyles(formik.touched.password && formik.errors.password)}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "#d73a4a" }}>{formik.errors.password}</Text>
      )}

      <View style={styles.buttonContainer}>
        <Pressable onPress={formik.handleSubmit}>
          <Text style={styles.buttonStyle}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
