import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { UpdateLogin, AddProfileCard, AddNewRecord } from "../../redux/actions";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const img = require("../../../assets/img/mapimage.fw.png");

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      address: "",
      password: "",
      location: {},
      id: this.props.list.length + 1,
      loading: false,
    };
  }

  handleClick = (values) => {
    const newRecord = {
      id: this.state.id,
      name: values.name,
      surname: values.surname,
      adress: values.address,
      password: values.password,
      latitude: this.props.mylatitude,
      longitude: this.props.mylongitude,
    };
    const card = {
      name: values.name,
      surname: values.surname,
      adress: values.address,
    };
    this.props.AddNewRecord(newRecord);
    this.props.AddProfileCard(card);
    this.props.UpdateLogin(true);
  };

  // regex
  render() {
    const ReviewSchema = yup.object({
      name: yup
        .string()
        .required("İsim alanını boş bırakamazsınız")
        .min(2, "En az 2 karakter olmalıdır."),
      surname: yup
        .string()
        .required("Soyadı alanını boş bırakamazsınız")
        .min(2, "En az 2 karakter girmelisiniz"),
      address: yup
        .string()
        .required("Adres alanını boş bırakamazsınız")
        .min(6, "En az 6 karakter olmalıdır."),
      password: yup
        .string()
        .required("Şifre alanını boş bırakamazsınız")
        .min(4, "En az 4 karakter olabilir.")
        .max(8, "En fazla 8 karakter olabilir."),
    });

    return (
      <View
        style={{
          width: width,
          height: height,
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <ScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{ flex: 1 }}
          style={{
            height: "50%",
            width: width,
            paddingVertical: height * 0.05,
          }}
        >
          <Formik
            initialValues={{ name: "", surname: "", address: "", password: "" }}
            onSubmit={(values) => this.handleClick(values)}
            initialTouched={{ field: true }}
            validationSchema={ReviewSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View
                style={{ height: "100%", width: "100%", alignItems: "center" }}
              >
                <View
                  style={{
                    height: "15%",
                    width: width,
                    paddingLeft: "15%",
                    marginBottom: "5%",
                  }}
                >
                  <TextInput
                    placeholder="İsim"
                    placeholderTextColor={"#bfbfbf"}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    style={{ fontSize: width * 0.046, fontFamily: "Medium" }}
                  />
                  <View
                    style={{
                      width: "80%",
                      borderBottomColor: "#bfbfbf",
                      borderBottomWidth: height * 0.001,
                      height: height * 0.009,
                      alignItems: "center",
                    }}
                  />
                  <>
                    {errors.name && touched.name ? (
                      <Text style={{ marginTop: "1.8%", color: "#bd6415" }}>
                        {errors.name}
                      </Text>
                    ) : null}
                  </>
                </View>

                <View
                  style={{
                    height: "15%",
                    width: width,
                    paddingLeft: "15%",
                    marginBottom: "5%",
                  }}
                >
                  <TextInput
                    placeholder="Soyadı"
                    placeholderTextColor={"#bfbfbf"}
                    onChangeText={handleChange("surname")}
                    onBlur={handleBlur("surname")}
                    value={values.surname}
                    style={{ fontSize: width * 0.046, fontFamily: "Medium" }}
                  />
                  <View
                    style={{
                      width: "80%",
                      borderBottomColor: "#bfbfbf",
                      borderBottomWidth: height * 0.001,
                      height: height * 0.009,
                      alignItems: "center",
                    }}
                  />
                  <>
                    {errors.surname && touched.surname ? (
                      <Text style={{ marginTop: "1.8%", color: "#bd6415" }}>
                        {errors.surname}
                      </Text>
                    ) : null}
                  </>
                </View>
                <View
                  style={{
                    height: "15%",
                    width: width,
                    paddingLeft: "15%",
                    marginBottom: "5%",
                  }}
                >
                  <TextInput
                    placeholder="Adres"
                    placeholderTextColor={"#bfbfbf"}
                    onChangeText={handleChange("address")}
                    onBlur={handleBlur("address")}
                    value={values.address}
                    style={{ fontSize: width * 0.046, fontFamily: "Medium" }}
                  />
                  <View
                    style={{
                      width: "80%",
                      borderBottomColor: "#bfbfbf",
                      borderBottomWidth: height * 0.001,
                      height: height * 0.009,
                      alignItems: "center",
                    }}
                  />
                  <>
                    {errors.address && touched.address ? (
                      <Text style={{ marginTop: "1.8%", color: "#bd6415" }}>
                        {errors.address}
                      </Text>
                    ) : null}
                  </>
                </View>
                <View
                  style={{
                    height: "15%",
                    width: width,
                    paddingLeft: "15%",
                    marginBottom: "5%",
                  }}
                >
                  <TextInput
                    keyboardType="numeric"
                    placeholder="Şifre"
                    placeholderTextColor={"#bfbfbf"}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    style={{ fontSize: width * 0.046, fontFamily: "Medium" }}
                    secureTextEntry={true}
                  />
                  <View
                    style={{
                      width: "80%",
                      borderBottomColor: "#bfbfbf",
                      borderBottomWidth: height * 0.001,
                      height: height * 0.009,
                      alignItems: "center",
                    }}
                  />
                  <>
                    {errors.password && touched.password ? (
                      <Text style={{ marginTop: "1.8%", color: "#bd6415" }}>
                        {errors.password}
                      </Text>
                    ) : null}
                  </>
                </View>

                {values.name != "" &&
                values.surname != "" &&
                values.address != "" &&
                values.password != "" ? (
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                      height: "11%",
                      width: "40%",
                      marginTop: height * 0.01,
                      borderRadius: 3,
                      backgroundColor: "#4B92E9",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={styles.text}>Kayıt Ol</Text>
                  </TouchableOpacity>
                ) : (
                  <View
                    style={{
                      height: "11%",
                      width: "40%",
                      marginTop: height * 0.01,
                      borderRadius: 3,
                      backgroundColor: "#4B92E940",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={styles.text}>Kayıt Ol</Text>
                  </View>
                )}
                {this.state.loading == true ? (
                  <View style={{ marginTop: height * 0.02 }}>
                    <ActivityIndicator size="large" color="#bc6c25" />
                  </View>
                ) : null}
              </View>
            )}
          </Formik>
        </ScrollView>

        <View style={{ height: "40%", width: width }}>
          <ImageBackground
            source={img}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: height * 0.03,
    textAlign: "center",
    color: "white",
    fontFamily: "Bold",
  },
});

function mapStateToProps(state) {
  return {
    login: state.login,
    list: state.userList,
    mylatitude: state.myLocation.latitude,
    mylongitude: state.myLocation.longitude,
  };
}
export default connect(mapStateToProps, {
  UpdateLogin,
  AddNewRecord,
  AddProfileCard,
})(Register);
