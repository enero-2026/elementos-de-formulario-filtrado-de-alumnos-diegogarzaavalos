import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import {List, TouchableRipple, TextInput, Text, Button} from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Alumnos(){

  const [alumnos, setAlumnos] = useState([]);
  const [buscaAlumno, setBuscaAlumno] = useState('');
  const [buscaMatricula, setBuscaMatricula] = useState('');
  const [orden, setOrden] = useState('asc'); // 'asc' o 'desc'
  const [campoOrden, setCampoOrden] = useState('nombre'); // 'nombre' o 'apellido_paterno'

  const alumnosFiltrados = alumnos
    .filter(alumno => {
      const nombreCompleto = `${alumno.nombre || ''} ${alumno.apellido_paterno || ''} ${alumno.apellido_materno || ''}`.toLowerCase();
      const matricula = alumno.matricula || '';
      return nombreCompleto.includes(buscaAlumno.toLowerCase()) && matricula.includes(buscaMatricula);
    })
    .sort((a, b) => {
      let campoA, campoB;
      if (campoOrden === 'nombre') {
        campoA = (a.nombre || '').toLowerCase();
        campoB = (b.nombre || '').toLowerCase();
      } else {
        campoA = (a.apellido_paterno || '').toLowerCase();
        campoB = (b.apellido_paterno || '').toLowerCase();
      }
      if (orden === 'asc') {
        return campoA.localeCompare(campoB);
      } else {
        return campoB.localeCompare(campoA);
      }
    });


  useEffect(()=> {
    setTimeout(()=>{
      setAlumnos([{

        nombre: 'SAMANTHA',

        apellido_paterno: 'CANDELARIA',

        apellido_materno: 'MORA',

        matricula: '2114354'

      },

      {

        nombre: 'JAVIER',

        apellido_paterno: 'CANTU',

        apellido_materno: 'SILVA',

        matricula: '2111889'

      },

      {

        nombre: 'ANGEL EMILIANO',

        apellido_paterno: 'CARMONA',

        apellido_materno: 'LOZANO',

        matricula: '2069119'

      },

      {

        nombre: 'JORGE',

        apellido_paterno: 'CASTILLO',

        apellido_materno: 'ACOSTA',

        matricula: '2132842'

      },

      {

        nombre: 'ALDO ADRIAN',

        apellido_paterno: 'DAVILA',

        apellido_materno: 'GONZALEZ',

        matricula: '1994122'

      },

      {

        nombre: 'FABRIZIO',

        apellido_paterno: 'DURAN',

        apellido_materno: 'BARRIENTOS',

        matricula: '2018230'

      },

      {

        nombre: 'SEBASTIAN',

        apellido_paterno: 'FLORES',

        apellido_materno: 'GONZALEZ',

        matricula: '21045641'

      },

      {

        nombre: 'FABRIZIO',

        apellido_paterno: 'DURAN',

        apellido_materno: 'BARRIENTOS',

        matricula: '20182301'

      },

      {

        nombre: 'SEBASTIAN',

        apellido_paterno: 'FLORES',

        apellido_materno: 'GONZALEZ',

        matricula: '2104564'

      },

      {

        nombre: 'DIEGO',

        apellido_paterno: 'FLORES',

        apellido_materno: 'LOPEZ',

        matricula: '2066033'

      },

      {

        nombre: 'ERICK ADRIAN',

        apellido_paterno: 'FLORES',

        apellido_materno: 'MARTINEZ',

        matricula: '2132976'

      },

      {

        nombre: 'DIEGO',

        apellido_paterno: 'GARZA',

        apellido_materno: 'AVALOS',

        matricula: '2066114'

      },

      {

        nombre: 'CHRISTIAN GABRIEL',

        apellido_paterno: 'GONZALEZ',

        apellido_materno: 'OVALLE',

        matricula: '2031243'

      },

      {

        nombre: 'DIEGO',

        apellido_paterno: 'GRANJA',

        apellido_materno: 'PEÑA',

        matricula: '20647331'

      },

      {

        nombre: 'ALEXIS',

        apellido_paterno: 'IBARRA',

        apellido_materno: 'RODRIGUEZ',

        matricula: '20312431'

      },

      {

        nombre: 'ANGEL SEBASTIAN',

        apellido_paterno: 'MARTINEZ',

        apellido_materno: 'ELIAS',

        matricula: '2064733'

      },

      {

        nombre: 'ESMERALDA GABRIELA',

        apellido_paterno: 'MENDIETA',

        apellido_materno: 'GONZALEZ',

        matricula: '2094647'

      },

      {

        nombre: 'ALEJANDRO',

        apellido_paterno: 'MIRELES',

        apellido_materno: 'VELAZQUEZ',

        matricula: '2005102'

      },

      {

        nombre: 'ANDRES',

        apellido_paterno: 'MONSIVAIS',

        apellido_materno: 'SALAZAR',

        matricula: '2064574'

      },

      {

        nombre: 'MARTHA JULIETA',

        apellido_paterno: 'PARRAZALEZ',

        apellido_materno: 'VALDESPINO',

        matricula: '2024783'

      },

      {

        nombre: 'LUIS ANGEL',

        apellido_paterno: 'PEÑA',

        apellido_materno: 'MUNGARRO',

        matricula: '2066077'

      },

      {

        nombre: 'JULIO CESAR',

        apellido_paterno: 'PUENTE',

        apellido_materno: 'REYNOSO',

        matricula: '2092151'

      },

      {

        nombre: 'BRYAN',

        apellido_paterno: 'RAMIREZ',

        apellido_materno: 'LOPEZ',

        matricula: '2103708'

      },

      {

        nombre: 'LILIANA VALERIA',

        apellido_paterno: 'RAMOS',

        apellido_materno: 'AVILA',

        matricula: '2115192'

      },

      {

        nombre: 'MAURICIO',

        apellido_paterno: 'RICO',

        apellido_materno: 'JAUREGUI',

        matricula: '2037503'

      },

      {

        nombre: 'ADRIAN',

        apellido_paterno: 'RIVERA',

        apellido_materno: 'LUNA',

        matricula: '2131513'

      },

      {

        nombre: 'JOSE EMILIO',

        apellido_paterno: 'RIVERA',

        apellido_materno: 'REYNA',

        matricula: '2013503'

      },

      {

        nombre: 'ROSA ISELA',

        apellido_paterno: 'RODRIGUEZ',

        apellido_materno: 'OLVERA',

        matricula: '2004613'

      },

      {

        nombre: 'ANGEL AZAEL',

        apellido_paterno: 'RODRIGUEZ',

        apellido_materno: 'RODRIGUEZ',

        matricula: '2133022'

      },

      {

        nombre: 'JUAN CARLOS',

        apellido_paterno: 'SANCHEZ',

        apellido_materno: 'GALARZA',

        matricula: '2026061'

      },

      {

        nombre: 'ALFREDO',

        apellido_paterno: 'SOLIS',

        apellido_materno: 'ORTIZ',

        matricula: '2095320'

      },

      {

        nombre: 'HERWIN DANIEL',

        apellido_paterno: 'VELAZQUEZ',

        apellido_materno: 'ABREGO',

        matricula: '2025350'

      },

      {

        nombre: 'ANDRES NEHUEL',

        apellido_paterno: 'VILLAGRA',

        apellido_materno: 'RODRIGUEZ',

        matricula: '2103895'

      },

      {

        nombre: 'RODRIGO',

        apellido_paterno: 'ZACATENCO',

        apellido_materno: 'OLIVE',

        matricula: '1857791'

      },

      {

        nombre: 'TERESA MARGARITA',

        apellido_paterno: 'ZAVALA',

        apellido_materno: 'CANTU',

        matricula: '2025218'

      }
    ])

  }, 2000)


}, []);

if(!alumnos.length){
  return(
    <Text>Cargando alumnos...</Text>
  )
}
if(alumnos.length ===0 ){
  return(
    <Text> No hay alumnos</Text>
  )
}

return(

  //Op 1


  // <TextInput placeholder="hola..."></TextInput> de React native y <TextInput> de Paper no se pueden usar juntos
  <>

  <TextInput
    label="Buscar alumno"
    value={buscaAlumno}
    onChangeText={setBuscaAlumno}
  />

  <TextInput
    label="Buscar por matrícula"
    value={buscaMatricula}
    onChangeText={setBuscaMatricula}
  />

  <Button onPress={() => { setCampoOrden(campoOrden === 'nombre' ? 'apellido_paterno' : 'nombre'); setOrden('asc'); }}>{campoOrden === 'nombre' ? 'Nombre' : 'Apellido Paterno'}</Button>
  <Button onPress={() => setOrden(orden === 'asc' ? 'desc' : 'asc')}>{orden === 'asc' ? 'A-Z' : 'Z-A'}</Button>



  <FlatList
  data={alumnosFiltrados}
  keyExtractor={(item) => item.matricula}
  renderItem={({ item }) => (
    <>

    <List.Item title={`${item.apellido_paterno || ''} ${item.apellido_materno || ''} ${item.nombre || ''}`} description={item.matricula || ''} left={props => <MaterialIcons name="account-circle" size={40}></MaterialIcons>}></List.Item>
    </>
  )} />
  </>

  //Op 2: Map sin FlatList
  // alumnos.map((alumno) => (
    //     <List.Item key={alumno.matricula} title={alumno.nombre} left={props => <MaterialIcons name="account-circle" size={40}></MaterialIcons>}></List.Item>
  // ))
)
}