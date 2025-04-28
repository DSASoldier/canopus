import Title from '../component/Title'
import { View,StyleSheet,Text } from 'react-native'
import OperatorLogin from '../component/ReadyForOpeartions/OperatorLogin'
export default function ReadyForOperations(){

    return <View style={styles.container}>
    <View style={styles.root}>
            <Title title1="CNC Mill 1" title2="Ready for operaion"/>
            <OperatorLogin />

            <View style={styles.bottomText}>

                <Text style={{fontWeight:200}}>if you need assistance,please contactyour supervisor</Text>
                <Text style={{fontWeight:200}} >Tablet ID:TABLET-001</Text>

            </View>
         </View>

    </View>
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    bottomText:{
        alignItems:'center',
        justifyContent:'center',
        gap:6
    },
    container:{
      flex:1,
      padding:30
    }
})