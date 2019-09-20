import React, { useState, useEffect } from 'react';

import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Picker,
} from 'native-base';

import { TextInputMask } from 'react-native-masked-text';
import renderIf from '../../functions/renderIf';
import constantsAPI from '../../constantsApi';
import api from '../../services/api';

// StyledComponents
import ButtonLinearGradient from '../../components/ButtonLinearGradient';
import Title from '../../components/Title';
import RequiredField from '../../components/RequiredField';
import IconTouchable from '../../components/IconTouchable';

import styles from './styles';
import generalStyles from '../../generalStyles';

export default function EditAccount({ navigation }) {

  let [show, setShow] = useState(true);
  let [token, setToken] = useState('');
  let [cnpj, setCnpj] = useState('');
  let [razaoSocial, setRazaoSocial] = useState('');
  let [inscricaoEstadual, setInscricaoEstadual] = useState('');
  let [fantasyName, setFantasyName] = useState('');
  let [ownerName, setOwnerName] = useState('');
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [cpf, setCpf] = useState('');
  let [birthday, setBirthday] = useState();
  let [accountType, setAccountType] = useState('');
  let [street, setStreet] = useState('');
  let [number, setNumber] = useState('');
  let [complement, setComplement] = useState('');
  let [district, setDistrict] = useState('');
  let [city, setCity] = useState('');
  let [stateAddress, setStateAddress] = useState('');
  let [zipCode, setZipCode] = useState('');
  let [area, setArea] = useState('');
  let [numberPhone, setNumberPhone] = useState('');


  handleSave = async () => {
    // ======== integracao idWall
    // const headersIdWall = { headers: { 'content-type': 'multipart/form-data', Authorization:  constantsAPI.ID_WALL_TOKEN } };
    // const formdataIdWall = new FormData();
    // formdataIdWall.append('matriz', constantsAPI.ID_WALL_API_MATRIZ);
    // formdataIdWall.append('parametros[cpf_data_de_nascimento]', birthday);
    // formdataIdWall.append('parametros[cpf_nome]', name);
    // formdataIdWall.append('parametros[cpf_numero]', cpf.replace(/\D/g, ''));


    const headers = { headers: { Authorization: `Bearer ${token}`, 'content-type': 'application/json', Accept: 'application/json' } };
    const formdata = new FormData();
    formdata.append('account[name]', name);
    formdata.append('account[email]', email);
    formdata.append('account[cpf]', cpf.replace(/\D/g, ''));
    formdata.append('account[birthday]', birthday);
    formdata.append('account[account_type]', accountType);
    formdata.append('account[razao_social]', razaoSocial);
    formdata.append('account[cnpj]', cnpj);
    formdata.append('account[inscricao_estadual]', inscricaoEstadual);
    formdata.append('account[owner_name]', ownerName);
    formdata.append('account[fantasy_name]', fantasyName);
    formdata.append('address[street]', street);
    formdata.append('address[number]', number);
    formdata.append('address[complement]', complement);
    formdata.append('address[district]', district);
    formdata.append('address[city]', city);
    formdata.append('address[state]', stateAddress);
    formdata.append('address[zip_code]', zipCode.replace(/\D/g, ''));

    try {
      setShow(true);
      // ======== integracao idWall
      // const idWallResult = await api.post('/relatorios', formdataIdWall, headersIdWall);
      // pegar o resultado de idWall no formato de status 200 e result com o codigo
      // com isto iremos obter os relatorios com outra consulta na api da idWall
      // const idWallReports = await api.get('/relatorios/numero_do_relatorio/validacoes', headersIdWall);
      // verificar a posicao 'status' e percorrer a posicao 'validacoes'


      await api.put(constantsAPI.ACCOUNT_REGISTER, formdata, headers).then((response) => {
        Alert.alert(
          'Tudo ok...',
          'Atualização realizada com sucesso',
        );
        navigation.navigate('Home');
      }).catch((error) => {
        console.tron.log(error);
        Alert.alert(
          'Atenção',
          'Erro ao atualizar seus dados verifique todos os campos.',
        );
      });

      setShow(false);
    } catch (error) {
      console.tron.log(error);
      Alert.alert(
        'Atenção',
        'Estamos realizando manutenções, em breve o sistema estará operacional!',
      );
      setShow(false);
    }
  }



  useEffect(() => {
    AsyncStorage.getItem("token").then(sessionToken => {
      setToken(sessionToken)
      let url = constantsAPI.BASE_URL + constantsAPI.ACCOUNT_DATA;

      fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionToken}`,
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => {
          if (response.error) {
            console.tron.log("response erro AO BUSCAR DADOS PARA EDITAR:");
            console.tron.log(response.error);
            setShow(false);
          } else {
            console.tron.log(response);
            setCnpj(response.cnpj);
            setRazaoSocial(response.razao_social);
            setInscricaoEstadual(response.inscricao_estadual);
            setFantasyName(response.fantasy_name);
            setOwnerName(response.owner_name);
            setName(response.name);
            setEmail(response.email);
            setCpf(response.cpf);
            setBirthday(response.birthday);
            setAccountType(response.account_type);
            setStreet(response.address.street);
            setNumber(response.address.number);
            setComplement(response.address.complement);
            setDistrict(response.address.district);
            setZipCode(response.address.zip_code);
            setCity(response.address.city);
            setStateAddress(response.address.state);
            setShow(false);
          }
        })
        .catch(() => {
          setShow(false);
        })
        .done();
    });
  }, []);


  return (
    <View style={generalStyles.container}>
      <ScrollView>
        <Text style={generalStyles.textBlueTitle}>
          Atualize seus dados facilmente.{'\n'}Basta preencher os campos abaixo.
        </Text>
        {show && (
          <ActivityIndicator
            size="large"
            color={'#007AFF'}
            animating={show}
            style={{
              flex: 1,
              justifyContent: 'center',
              marginBottom: 5,
              marginTop: 5,
            }}
          />
        )}
        <View style={styles.container}>
          <View style={styles.groupedView}>
            <TouchableOpacity onPress={() => setAccountType('personal')} style={styles.buttonAccounts}>
              <IconTouchable text="Pessoa Física" icon="user" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setAccountType('business')} style={styles.buttonAccounts}>
              <IconTouchable text="Pessoa Jurídica" icon="building" />
            </TouchableOpacity>
          </View>

          {renderIf(accountType === 'business')(
            <>
              <Title text="Dados Pessoa Jurídica" />

              <RequiredField message="Campo Obrigatório" />
              <TextInput
                autoCapitalize="none"
                placeholder="Razão Social"
                style={[generalStyles.input, generalStyles.requiredInput]}
                value={razaoSocial}
                onChangeText={value => setRazaoSocial(value)}
              />

              <RequiredField message="Campo Obrigatório" />
              <TextInput
                autoCapitalize="none"
                placeholder="Nome Fantasia"
                style={[generalStyles.input, generalStyles.requiredInput]}
                value={fantasyName}
                onChangeText={value => setFantasyName(value)}
              />

              <RequiredField message="Campo Obrigatório" />
              <TextInput
                autoCapitalize="none"
                placeholder="Inscrição Estadual"
                style={[generalStyles.input, generalStyles.requiredInput]}
                value={inscricaoEstadual}
                onChangeText={value => setInscricaoEstadual(value)}
              />

              <RequiredField message="Campo Obrigatório" />
              <TextInput
                autoCapitalize="none"
                placeholder="Responsável"
                style={[generalStyles.input, generalStyles.requiredInput]}
                value={ownerName}
                onChangeText={value => setOwnerName(value)}
              />

              <RequiredField message="Campo Obrigatório" />
              <TextInputMask
                type={'cnpj'}
                keyboardType={'numeric'}
                placeholder="CNPJ"
                style={[generalStyles.input, generalStyles.requiredInput]}
                value={cnpj}
                onChangeText={value => setCnpj(value)}
              />
            </>,
          )}

          <Title text="Dados Pessoa Física" />

          <RequiredField message="Campo Obrigatório" />
          <TextInput
            autoCapitalize="none"
            placeholder="Nome"
            style={[generalStyles.input, generalStyles.requiredInput]}
            value={name}
            onChangeText={value => setName(value)}
          />

          <RequiredField message="Campo Obrigatório" />
          <TextInput
            type={'email'}
            autoCompleteType="email"
            autoCapitalize="none"
            placeholder="E-mail"
            style={[generalStyles.input, generalStyles.requiredInput]}
            value={email}
            onChangeText={value => setEmail(value)}
          />

          <RequiredField message="Campo Obrigatório" />
          <TextInputMask
            type={'cpf'}
            keyboardType={'numeric'}
            placeholder="CPF"
            style={[generalStyles.input, generalStyles.requiredInput]}
            value={cpf}
            onChangeText={value => setCpf(value)}
          />

          <RequiredField message="Campo Obrigatório (Data de Nascimento)" />
          <DatePicker
            style={styles.inputDate}
            date={birthday}
            mode="date"
            format="YYYY-MM-DD"
            minDate="1990-01-01"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateIcon: styles.datePickerIcon,
              dateInput: styles.datePickerInput
            }}
            onDateChange={(value) => {setBirthday(value)}}
          />

          <View style={generalStyles.viewRowInput}>
            <TextInput
              autoCapitalize="none"
              placeholder="Rua"
              style={generalStyles.input}
              onChangeText={value => setStreet(value)}
              value={street}
            />

            <TextInput
              autoCapitalize="none"
              placeholder="Número"
              keyboardType={'numeric'}
              style={generalStyles.inputSmallThree}
              onChangeText={value => setNumber(value)}
              value={number}
            />
          </View>
          <TextInput
            autoCapitalize="none"
            placeholder="Complemento"
            style={generalStyles.input}
            onChangeText={complement => setComplement({ complement })}
            value={complement}
          />

          <TextInput
            autoCapitalize="none"
            placeholder="Bairro"
            style={generalStyles.input}
            onChangeText={value => setDistrict(value)}
            value={district}
          />
          <View style={generalStyles.viewRowInput}>
            <TouchableOpacity style={generalStyles.inputSmallOne}>
              <Picker
                placeholder="UF"

                onValueChange={(itemValue, itemIndex) =>
                  setStateAddress(itemValue)
                }
                selectedValue={stateAddress}
              >
                <Picker.Item label="AC" value="AC" />
                <Picker.Item label="AL" value="AL" />
                <Picker.Item label="AP" value="AP" />
                <Picker.Item label="AM" value="AM" />
                <Picker.Item label="BA" value="BA" />
                <Picker.Item label="CE" value="CE" />
                <Picker.Item label="DF" value="DF" />
                <Picker.Item label="ES" value="ES" />
                <Picker.Item label="GO" value="GO" />
                <Picker.Item label="MA" value="MA" />
                <Picker.Item label="MT" value="MT" />
                <Picker.Item label="MS" value="MS" />
                <Picker.Item label="MG" value="MG" />
                <Picker.Item label="PA" value="PA" />
                <Picker.Item label="PB" value="PB" />
                <Picker.Item label="PR" value="PR" />
                <Picker.Item label="PE" value="PE" />
                <Picker.Item label="PI" value="PI" />
                <Picker.Item label="RJ" value="RJ" />
                <Picker.Item label="RN" value="RN" />
                <Picker.Item label="RS" value="RS" />
                <Picker.Item label="RO" value="RO" />
                <Picker.Item label="RR" value="RR" />
              </Picker>
            </TouchableOpacity>

            <TextInput
              autoCapitalize="none"
              placeholder="Cidade"
              style={generalStyles.inputSmallTwo}
              onChangeText={value => setCity(value)}
              value={city}
            />
          </View>
          <TextInputMask
            type={'zip-code'}
            keyboardType={'numeric'}
            placeholder="Cep"
            style={generalStyles.input}
            onChangeText={value => setZipCode(value)}
            value={zipCode}
          />

          <ButtonLinearGradient onPress={handleSave} text='Atualizar seus dados' />
        </View>
      </ScrollView>

    </View>
  );
};
