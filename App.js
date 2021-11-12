import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';

const App = () => {
  const {t, i18n} = useTranslation();

  //Change and save the selected language
  const saveLang = lang => {
    AsyncStorage.setItem('preferred-language', lang);
    i18n.changeLanguage(lang);
  };

  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>{t('text')}</Text>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => saveLang('en')}>
            <Text style={styles.btnText}>EN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => saveLang('es')}>
            <Text style={styles.btnText}>ES</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

//Styles
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: '#fff',
    marginBottom: 50,
  },
  sectionContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    width: 300,
    margin: 10,
  },
  btns: {
    flexDirection: 'column',
  },
  btnText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
});

export default App;
