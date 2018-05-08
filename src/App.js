import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MetricTabs from './components/MetricTabs'
import EESSList from './components/EESSList'
import XLSX from 'xlsx';
import { Grid,Row,Col,Button } from 'react-bootstrap'
import axios from 'axios'


class App extends Component {
  constructor(...props){
      super(...props)
      this.state = {
          view: 1,
          eess:[
                  {
                      "ideess": 96,
                      "nombre": "C.S.M.I. ANCON",
                      "tipo": "1",
                      "gerente": "Steve",
                      "direccion": "Mi casa",
                      "renaes": "000005814",
                      "diris_iddiris": 1,
                      "color":"#66ff66"
                  },
                  {
                      "ideess": 97,
                      "nombre": "C.S. VILLA ESTELA",
                      "tipo": "1",
                      "gerente": "Steve",
                      "direccion": "Mi casa",
                      "renaes": "000005823",
                      "diris_iddiris": 1,
                      "color":"#66ff66"
                  },
                  {
                      "ideess": 98,
                      "nombre": "P.S. SAN JOSE",
                      "tipo": "1",
                      "gerente": "Steve",
                      "direccion": "Mi casa",
                      "renaes": "000005824",
                      "diris_iddiris": 1,
                      "color":"#66ff66"
                  },
                  {
                      "ideess": 99,
                      "nombre": "P.S. VILLAS DE ANCON",
                      "tipo": "1",
                      "gerente": "Steve",
                      "direccion": "Mi casa",
                      "renaes": "000016525",
                      "diris_iddiris": 1,
                      "color":"#66ff66"
                  },
                  {
                      "ideess": 100,
                      "nombre": "C.S. RAUL PORRAS BARRENECHEA",
                      "tipo": "1",
                      "gerente": "Steve",
                      "direccion": "Mi casa",
                      "renaes": "000005734",
                      "diris_iddiris": 1,
                      "color":"#66ff66"
                  }
          ],
          rawData:[
          [
              {
                  year:2017,
                  months:[
                      {
                          month:1,
                          eess:[
                              {
                                  id:1,
                                  renaes:"000005814",
                                  nombre:"C.S.M.I. ANCON",
                                  total:127,
                                  sis:105,
                                  pct:82
                              },
                              {
                                  id:2,
                                  renaes:"000005814",
                                  nombre:"C.S.M.I. ANCON",
                                  total:127,
                                  sis:105,
                                  pct:82
                              }
                          ]
                      }
                  ]
              },{

              }
          ],[
              {
                  year:2017,
                  months:[
                      {
                          month:1,
                          eess:[
                              {
                                  id:1,
                                  renaes:"000005814",
                                  nombre:"C.S.M.I. ANCON",
                                  meta:127,
                                  pp:105,
                                  pct:82
                              },
                              {
                                  id:2,
                                  renaes:"000005814",
                                  nombre:"C.S.M.I. ANCON",
                                  meta:127,
                                  pp:105,
                                  pct:82
                              }
                          ]
                      }
                  ]
              },{

              }
          ],[
              {
                  year:2017,
                  months:[
                      {
                          month:1,
                          eess:[
                              {
                                  id:1,
                                  renaes:"000005814",
                                  nombre:"C.S.M.I. ANCON",
                                  total:127,
                                  sis:105,
                                  pct:82
                              },
                              {
                                  id:2,
                                  renaes:"000005814",
                                  nombre:"C.S.M.I. ANCON",
                                  total:127,
                                  sis:105,
                                  pct:82
                              }
                          ]
                      }
                  ]
              },{

              }
          ],[
              {
                  year:2017,
                  months:[
                      {
                          month:1,
                          eess:[
                              {
                                  id:1,
                                  renaes:"000005814",
                                  nombre:"C.S.M.I. ANCON",
                                  total:127,
                                  sis:105,
                                  pct:82
                              },
                              {
                                  id:2,
                                  renaes:"000005814",
                                  nombre:"C.S.M.I. ANCON",
                                  total:127,
                                  sis:105,
                                  pct:82
                              }
                          ]
                      }
                  ]
              },{

              }
          ],[
              {
                  year:2017,
                  months:[
                      {
                          month:1,
                          eess:[
                              {
                                  id:1,
                                  renaes:"000005814",
                                  nombre:"C.S.M.I. ANCON",
                                  meta: 127,
                                  mes: 105,
                                  pct: 82

                              },
                              {
                                  id: 2,
                                  renaes: "000005814",
                                  nombre: "C.S.M.I. ANCON",
                                  meta: 127,
                                  mes: 105,
                                  pct: 82
                              }

                          ]
                      }
                  ]
              },{

              }
          ], [
              {
                  year:2017,
                  months:[
                      {
                          month:1,
                          eess:[
                              {
                                  id:1,
                                  renaes:"000005814",
                                  nombre:"C.S.M.I. ANCON",
                                  meta:127,
                                  mes:105,
                                  pct:82
                              },
                              {
                                  id:2,
                                  renaes:"000005814",
                                  nombre:"C.S.M.I. ANCON",
                                  meta:127,
                                  mes:105,
                                  pct:82
                              }
                          ]
                      }
                  ]
              },{

              }
          ],[
              {
                  year:2017,
                  months:[
                      {
                          month:1,
                          eess:[
                               {
                                  id:1,
                                  renaes:"000005814",
                                  nombre:"C.S.M.I. ANCON",
                                  total:127,
                                  sis:105,
                                  pct:82
                              },
                              {
                                  id:2,
                                  renaes:"000005814",
                                  nombre:"C.S.M.I. ANCON",
                                  total:127,
                                  sis:105,
                                  pct:82
                              }
                          ]
                      }
                  ]
              },{

              }
          ]]
      }

      this.parse = this.parse.bind(this);
      this.postMes = this.postMes.bind(this);
      this.changeView = this.changeView.bind(this);
      this.wewewewe = this.wewewewe.bind(this);
  }

  changeView = () => {
      if (this.state.view===2){
          this.setState(prevState => ({
              view:1
          }))
      }else{
          axios.get('http://localhost:8000/eess/api').then(res =>{
              this.setState(prevState => ({
                  eess: res.data,
                  view: 2
              }))
          })


      }

  }

  postMes = (key) => {
      axios.post(`http://localhost:8000/datosmetricas/api/${key-1}`,this.state.rawData[key]).then(res =>
        console.log(res)
      )
  }

  wewewewe = (mimi,key) => {
      console.log(mimi[0].eess.length);
      console.log(key);
      this.setState(prevState => {
          let xdData = {};
          xdData = prevState;
          xdData.rawData[key-1][0].months=mimi
          console.log(xdData)
          return xdData
          }
      );

      console.log(this.state)
  }

  parse = (XLSXObject, key) => {
      var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer
      var months = []
      months.push({
          month:1,
          eess:[]
          },{
              month:2,
              eess:[]
          },{
              month:3,
              eess:[]
          },{
              month:4,
              eess:[]
          },{
              month:5,
              eess:[]
          },{
              month:6,
              eess:[]
          },{
              month:7,
              eess:[]
          },{
              month:8,
              eess:[]
          },{
              month:9,
              eess:[]
          },{
              month:10,
              eess:[]
          },{
              month:11,
              eess:[]
          },{
              month:12,
              eess:[]
          }
          )

      let kek = (months,key) => this.wewewewe(months,key);

      function handleFile(e) {
          var f = XLSXObject;
          var reader = new FileReader();
          reader.onload = function(e) {
              var data = e.target.result;
              if(!rABS) data = new Uint8Array(data);
              var workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});



              var result = {};
              workbook.SheetNames.forEach(function(sheetName) {
                  var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header:1});
                  //console.log(roa)
                  //console.log(sheetName)
                  if(roa.length) result[sheetName] = roa;
              });


                    switch (key){
                        case 1:
                        case 3:
                        case 4:
                        case 7:
                            for (var k=1;k<=12;k++) {
                                var xxd = result["ORIGINAL"].map((val, pos) => {
                                    if (pos > 5 && val[1]) {
                                        return Object.assign({}, {
                                            id: pos - 5,
                                            renaes: val[0],
                                            nombre: val[1],
                                            total: parseInt(val[k*3-1]),
                                            sis: parseInt(val[k*3]),
                                            pct: parseFloat(val[1+k*3])
                                        })
                                    }
                                }).filter(item => item);
                                months[k-1].eess = xxd
                                console.log(xxd)
                                console.log(months[k-1].eess.length)
                            }
                                break;
                            case 5:
                        case 6:
                            for (var k=1;k<=12;k++) {
                                var xxd = result["ORIGINAL"].map((val, pos) => {
                                    if (pos > 5 && val[0]) {
                                        return Object.assign({}, {
                                            id: pos - 5,
                                            renaes: "",
                                            nombre: val[1],
                                            meta: parseInt(val[k*3-1]),
                                            mes: parseInt(val[k*3]),
                                            pct: parseFloat(val[1+k*3])
                                        })
                                    }
                                }).filter(item => item);
                                months[k-1].eess = xxd
                                console.log(xxd)
                                console.log(months[k-1].eess.length)
                            }
                            break;
                        case 2:
                            for (var k=1;k<=12;k++) {
                                var xxd = result["Original"].map((val, pos) => {
                                    if (pos > 5 && val[0]) {
                                        return Object.assign({}, {
                                            id: pos - 5,
                                            nombre: val[1],
                                            meta: parseInt(val[k*3-1]),
                                            pp: parseInt(val[k*3]),
                                            pct: parseFloat(val[1+k*3])
                                        })
                                    }
                                }).filter(item => item);
                                months[k-1].eess = xxd
                                console.log(xxd)
                                console.log(months[k-1].eess.length)
                            }
                            break;
                    }




              console.log(months)
              kek(months,key)
          };
          if(rABS) reader.readAsBinaryString(f); else reader.readAsArrayBuffer(f);

      }

      return handleFile(XLSXObject)
  }

  render(){
      if (this.state.view===1){
    return (
        <div>
        <Grid>
            <Col xs={3} md={2}>
                <Button bsStyle="primary" type="submit" onClick={this.changeView}>CAMBIAR VISTA</Button>
            </Col>
            <Col xs={12} md={8}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">MODULO de Administrador</h1>
                    </header>
                    <MetricTabs data={this.state.rawData} onClick={this.postMes} parse={this.parse}/>
                </div>
            </Col>
            <Col xs={3} md={2}>
            </Col>

        </Grid>
        </div>
    )}else {
          return(
              <Grid>
                  <Col xs={3} md={2}>
                      <Button bsStyle="primary" type="submit" onClick={this.changeView}>CAMBIAR VISTA</Button>
                  </Col>
                  <Col xs={12} md={8}>
                      <div className="App">
                          <header className="App-header">
                              <img src={logo} className="App-logo" alt="logo" />
                              <h1 className="App-title">MODULO de DIRIS</h1>
                          </header>
                          <Row>
                            <EESSList eess={this.state.eess}/>
                          </Row>
                      </div>
                  </Col>
                  <Col xs={3} md={2}>
                  </Col>

              </Grid>

          )
      }
  }
}

export default App;
